import { useState } from 'react';
import {Button, Image, Modal, StyleSheet, Text, TextInput, View} from 'react-native';

const GoalInput = (props) => {
  const {handleSubmit, isVisible, setModalIsVisible} = props;
  const [goalText, setGoalText] = useState('');

  const handleChangeGoalText = (text) => {
    setGoalText(text);
  };

  const onPress = () => {
    handleSubmit(goalText);
    setGoalText('');
    setModalIsVisible();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goal"
          onChangeText={handleChangeGoalText}
          value={goalText}
        />
        <View style={styles.controlsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onPress} color="#b180f0"/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={setModalIsVisible} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#311b6b',
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  textInput: {
    backgroundColor: '#e4d0ff',
    borderColor: '#e4d0ff',
    borderRadius: 6,
    borderWidth: 1,
    color: '#120438',
    padding: 16,
    width: '100%'
  },
  controlsContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    marginHorizontal: 8,
    width: '40%'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default GoalInput;