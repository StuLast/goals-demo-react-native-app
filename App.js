import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState('');

  const handleChangeGoalText = (text) => {
    setGoalText(text);
  }

  const handleSubmit = () => {
    console.log(goalText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goal"
          onChangeText={handleChangeGoalText}
          value={goalText}
        />
        <Button title="Add Goal" onPress={handleSubmit} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>
          List of Goals
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  },
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
  }
});
