import React from "react";
import { View, Text, Image } from 'react-native'
import styles from "../screens/style";

export default function Features() {
    return (
        <View style={styles.contiainer2}>
            <Text style={styles.txt4}>Features</Text>
            <View style={styles.cont3}>
                <View style={styles.cont4}>
                    <Image source={require('../../assests/images/chatgptIcon.png')} style={styles.img3} />
                    <Text style={styles.txt5}>ChatGPT</Text>
                </View>
                <Text style={styles.txt6}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>
            </View>

            <View style={[styles.cont3, {backgroundColor: '#e5ceff'}]}>
                <View style={styles.cont4}>
                    <Image source={require('../../assests/images/dalleIcon.png')} style={styles.img3} />
                    <Text style={styles.txt5}>DALL-E</Text>
                </View>
                <Text style={styles.txt6}>DALL-E can generate immagnative and diverse from textual description, expanding the boundries of visual creativety.</Text>
            </View>

            <View style={[styles.cont3, {backgroundColor: '#95e6f1'}]}>
         <View style={styles.cont4}>
             <Image source={require('../../assests/images/smartaiIcon.png')} style={styles.img3}/>
             <Text style={styles.txt5}>Smart AI</Text>
         </View>
         <Text style={styles.txt6}>A powerful voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both worlds.</Text>
     </View>
        </View>
    )
}