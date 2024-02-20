import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#000000'}/>
      {/* title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}><Text style={{color: 'lightblue'}}>Z</Text>ira</Text>
        <Text style={styles.subtitleText}>Welcome! Let's dive into endless possibilities. What's your command?</Text>
      </View>

      {/* assistant image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assests/images/as.gif')}
          style={styles.image}
        />
      </View>

      {/* start button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Initiate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#000000',
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: wp(10),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff', // Change color as needed
  },
  subtitleText: {
    fontSize: wp(4.5),
    textAlign: 'center',
    fontWeight: '600',
    color: 'lightblue', // Change color as needed
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: wp(90),
    width: wp(100),
  },
  buttonContainer: {
    backgroundColor: 'blue', // Change color as needed
    marginHorizontal: wp(5),
    padding: wp(3),
    borderRadius: wp(4),
    marginTop: hp(6),
    elevation: 5
  },
  buttonText: {
    fontSize: wp(6),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WelcomeScreen;
