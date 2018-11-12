import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

import { Button } from '../components';

const FindPasswordScreen = ({ navigation }) => {
  const {
    containerStyle,
    marginContainerStyle,
    titleStyle,
    bodyStyle,
  } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <View style={marginContainerStyle}>
        <Text style={titleStyle}>Forgot Password...</Text>
        <Text style={titleStyle}>OMG</Text>
      </View>

      <View style={bodyStyle}>
        <Button
          onPress={() => {
            navigation.pop(1);
          }}
          title="I will not forget never again!"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'gray',
  },
  marginContainerStyle: {
    flex: 0.5,
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
};

FindPasswordScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default FindPasswordScreen;
