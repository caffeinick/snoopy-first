import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

const DetailsScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text>Details Screen</Text>
    <Button title="Go Back to Home" onPress={() => navigation.pop()} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

DetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default DetailsScreen;
