import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = React.useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} 
          label="What would you like to focus on?"
          value={subject}
          onChangeText={subject => setSubject(subject)}
        />
        <View style={styles.buttonContainer}>
          <RoundedButton title='+' size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    justifyContent: 'flex-start',
    padding: 25,
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 15
  },
  buttonContainer: {
    justifyContent: 'center'
  }
});
