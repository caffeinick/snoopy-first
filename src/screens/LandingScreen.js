import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

import { Button } from '../components';

const LandingScreen = ({ navigation: { navigate } }) => {
  const {
    containerStyle,
    marginContainerStyle,
    titleStyle,
    bodyStyle,
  } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar hidden />

      <View style={marginContainerStyle}>
        <Text style={titleStyle}>Welcome!</Text>
      </View>

      <View style={bodyStyle}>
        <Button
          onPress={() => {
            navigate('Home');
          }}
          title="Login"
        />
        <Button
          onPress={() => {
            navigate('FindPassword');
          }}
          title="Forgot Password"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#F0B800',
  },
  marginContainerStyle: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  bodyStyle: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

LandingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LandingScreen;
