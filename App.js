import { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid'

export default function App({items}) {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState (items);

  const handleChangeGoalText = (text) => {
    setGoalText(text);
  }

  const handleSubmit = () => {
    if(goalText.length <= 0)
    {
      return;
    }
    const newGoal= {id: uuid.v4(), goal: goalText}
    setGoals((currentGoals) => [...currentGoals, newGoal]);
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
            alwaysBounceVertical={false}
            data={goals}
            renderItem={({item}) => { 
              return (
                <View style={styles.goalItemContainer}>
                  <Text style={styles.goalItem}>{item.id}: {item.goal}</Text>
                </View>
              );
            }}
          />
      </View>
    </View>
  )
}

App.defaultProps = {
  items: [
    {id: 'abgud', goal:'a'},
    {id: 'sdids', goal:'a'},
    {id: 'dofisd', goal:'a'},
    {id: 'aoiduf', goal:'a'},
    {id: 'ppdkens', goal:'a'},
    {id: 'ccnkskd', goal:'a'},
    {id: 'p389dsf', goal:'a'},
  ]
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
