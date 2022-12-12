import { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const GoalInput = (props) => {
  const {handleSubmit} = props;
  const [goalText, setGoalText] = useState('');

  const handleChangeGoalText = (text) => {
    setGoalText(text);
  };

  const onPress = () => {
    handleSubmit(goalText);
    setGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course Goal"
        onChangeText={handleChangeGoalText}
        value={goalText}
      />
      <Button title="Add Goal" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '65%',
    padding: 5,
    marginRight: 8
  },
});

export default GoalInput;