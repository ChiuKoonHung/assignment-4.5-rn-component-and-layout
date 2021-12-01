
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState(null);
  const [age, setAge] = useState(null);
  const [checked, setChecked] = React.useState('first');

  handleText = () => {
    useState(setText);
  }

  handleAge = () => {
    useState(setAge);
  }

  submit = () => {
    alert(' My name is ' + text +'. I am ' + age + ' years old.');
  }

  return (

    <View style={styles.container}>
      <Text>Your Name:</Text>
      <TextInput style={styles.input} value={text} onChangeText={setText}></TextInput>
      <Text>Your Age:</Text>
      <TextInput style={styles.input} value={age} onChangeText={setAge}></TextInput>

      <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
          () => submit(text, age)}>
        <Text style = {styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 }
});
