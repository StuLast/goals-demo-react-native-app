import { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState ([]);

  const handleChangeGoalText = (text) => {
    setGoalText(text);
  }

  const handleSubmit = () => {
    if(goalText.length < 3)
    {
      return;
    }
    setGoals((currentGoals) => [...currentGoals, goalText]);
    setGoalText('');
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
        <FlatList 
          data={goals}
          keyExtractor={item => item}
          renderItem={({item}) => { 
            return (
              <View style={styles.goalItemContainer}>
                <Text style={styles.goalItem}>{item}</Text>
              </View>
            )
          }}
        />
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
  },
  goalItemContainer: {
    margin: 4,
    borderRadius: 5,
    backgroundColor: '#5e0acc',
    padding: 5
  },
  goalItem: {
    color: 'white'
  }
});
