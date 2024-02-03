import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Jarvis</Text>
        <Text style={styles.subtitleText}>The future is here, powered by AI.</Text>
      </View>

      {/* assistant image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assests/images/welcome.png')}
          style={styles.image}
        />
      </View>

      {/* start button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: wp(10),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333', // Change color as needed
  },
  subtitleText: {
    fontSize: wp(4),
    textAlign: 'center',
    fontWeight: '600',
    color: '#555', // Change color as needed
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: wp(75),
    width: wp(75),
  },
  buttonContainer: {
    backgroundColor: '#4CAF50', // Change color as needed
    marginHorizontal: wp(5),
    padding: wp(3),
    borderRadius: wp(4),
    marginTop: hp(6)
  },
  buttonText: {
    fontSize: wp(6),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WelcomeScreen;
