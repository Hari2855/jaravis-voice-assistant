import React, { useEffect, useState, useRef } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Alert, TextInput, ImageBackground } from 'react-native'
import styles from "./style";
import Features from "../components/features";
import { dummyMessages } from "../constrants";
import Voice from '@react-native-community/voice';
import { apiCall } from "../api/openAI";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Tts from "react-native-tts";

export default function App() {
    const [result, setResult] = useState('');
    const [recording, setRecording] = useState(false);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [speaking, setSpeaking] = useState(false);
    const [userInput, setUserInput] = useState('');


    const scrollViewRef = useRef();


    const speechStartHandler = e => {
        console.log('speech start handler');
    }

    const speechEndtHandler = e => {
        setRecording(false)
        console.log('speech end handler');
    }

    const speechResultstHandler = async (e) => {
        // console.log('voice event: ', e);
        const text = e.value[0];
        setResult(text);

        // Fetch response when speech recognition is complete
        await fetchResponse();
    };


    const speechErrortHandler = e => {
        console.log('speech error handler: ', e);
    }

    const startRecording = async () => {
        setRecording(true)
        try {
            await Voice.start('en-GB');
        } catch (error) {
            console.log('error', error);
        }
    }

    const stopRecording = async () => {
        try {
            await Voice.stop();
            setRecording(false);
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleUserInput = (text) => {
        setUserInput(text);
    }

    const handleSubmit = () => {
        // Fetch response when user submits a question
        if (userInput.trim().length > 0) {
            setResult(userInput.trim());
            fetchResponse(userInput.trim());
            setUserInput('')
        }
    }



    const fetchResponse = async () => {
        if (result.trim().length > 0) {
            setLoading(true);
            let newMessages = [...messages];
            newMessages.push({ role: 'user', content: result.trim() });
            setMessages([...newMessages]);

            // scroll to the bottom of the view
            updateScrollView();

            // fetching response from chatGPT with our prompt and old messages
            apiCall(result.trim(), newMessages).then(res => {
                console.log('got api data');
                setLoading(false);
                if (res.success) {
                    setMessages([...res.data]);
                    setResult('');
                    updateScrollView();

                    // now play the response to user
                    startTextToSpeach(res.data[res.data.length - 1]);

                } else {
                    Alert.alert('Error', res.msg);
                }

            })
        }
    }


    const startTextToSpeach = message => {
        setSpeaking(true);

        // Assuming message is an object with a 'content' property
        const content = message.content;

        if (content.includes('https') || !content.trim()) {
            // If the content includes 'https' or is empty, do not use TTS
            setSpeaking(false);
        } else {
            Tts.speak(content, {
                androidParams: {
                    KEY_PARAM_PAN: -1,
                    KEY_PARAM_VOLUME: 1.0,
                    KEY_PARAM_STREAM: 'STREAM_MUSIC',
                },
                voice: 'en-gb-x-rjs#male_3-local',
            });
        }
    }


    const updateScrollView = () => {
        setTimeout(() => {
            scrollViewRef?.current?.scrollToEnd({ animated: true })
        }, 200);
    }



    const clear = () => {
        setMessages([])
    }

    const stopSpeaking = () => {
        Tts.stop();
        setSpeaking(false)
    }


    useEffect(() => {
        // voice handler events
        Voice.onSpeechStart = speechStartHandler;
        Voice.onSpeechEnd = speechEndtHandler;
        Voice.onSpeechResults = speechResultstHandler;
        Voice.onSpeechError = speechErrortHandler;

        // tts events
        Tts.addEventListener('tts-start', (event) => console.log("start", event));
        Tts.addEventListener('tts-progress', (event) => console.log("progress", event));
        Tts.addEventListener('tts-finish', (event) => console.log("finish", event));
        Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));

        // Fetch response when the component mounts if there's an initial speech result
        if (result.trim().length > 0) {
            fetchResponse();
        }

        return () => {
            // destroy the voice instance
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, [result]);


    return (
        <ScrollView style={styles.contiainer}>
            <View style={styles.cont2}>
                <Image source={require('../../assests/images/bottt.png')} style={styles.img2} />
            </View>

            {
                messages.length > 0 ? (
                    <View style={{ flex: 1, marginTop: '2%' }}>
                        <Text style={styles.txt7}>Assistant</Text>
                        <View style={styles.contiainer3}>
                            <ImageBackground source={require('../../assests/images/8799475.jpg')} style={styles.back}>
                            <ScrollView bounces={false} nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={{ padding: 5 }} ref={scrollViewRef}>
                                {
                                    messages.map((message, index) => {
                                        if (message.role == 'assistant') {
                                            if (message.content.includes('https')) {
                                                // its an ai image
                                                return (
                                                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                        <View style={styles.imgcont}>
                                                            <Image source={{ uri: message.content }} style={styles.img4} />
                                                        </View>
                                                    </View>
                                                )
                                            } else {
                                                // txt response
                                                return (
                                                    <View key={index} style={[styles.msgcont, { borderTopRightRadius: 10, borderTopLeftRadius: 0, backgroundColor: '#cbf9e4'}]}>
                                                        <Text>{message.content}</Text>
                                                    </View>
                                                )
                                            }
                                        } else {
                                            // user input
                                            return (
                                                <View key={index} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                                    <View style={styles.msgcont}>
                                                        <Text>{message.content}</Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    })
                                }
                            </ScrollView>
                            </ImageBackground>
                        </View>
                    </View>
                ) : (
                    <Features />
                )
            }
            {/* recording, clear and stop buttons */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {
                    loading ? (
                        <Image source={require('../../assests/images/loader.gif')} style={{
                            width: hp(15),
                            height: hp(15),
                        }} />

                    ) :
                        recording ?
                            (<TouchableOpacity onPress={stopRecording} style={styles.cover}>
                                {/* recording stop button */}
                                <Image source={require('../../assests/images/voiceLoading.gif')} style={styles.img5} />
                            </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={startRecording}>
                                    {/* recording start button */}
                                    <Image source={require('../../assests/images/recordingIcon.png')} style={[styles.img5, {marginTop: hp(10)}]} />
                                </TouchableOpacity>
                            )
                                
                }

            {
                messages.length > 0 && (
                    <TouchableOpacity style={styles.clrbtn} onPress={clear}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Clear</Text>
                    </TouchableOpacity>
                )
            }
            {
                speaking && (
                    <TouchableOpacity style={[styles.clrbtn, { left: 50, backgroundColor: '#bf4f52' }]} onPress={stopSpeaking}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Stop</Text>
                    </TouchableOpacity>
                )
            }
        </View>

       <View style={styles.inputc}>
        <TextInput
                style={styles.input} // Define your own styles
                placeholder="Message Zira...."
                placeholderTextColor={'#8c908a'}
                onChangeText={handleUserInput}
                value={userInput}
            />
            {/* Button to trigger response */}
            <TouchableOpacity onPress={handleSubmit} style={styles.btnc}>
                <Image source={require('../../assests/images/uparrow.png')} style={styles.se}/>
            </TouchableOpacity>

        </View>
        </ScrollView >
    )
}