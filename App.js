import { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid'
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App({items}) {
  
  const [goals, setGoals] = useState (items);

  const handleSubmit = (goalText) => {
    if(goalText.length <= 0)
    {
      return;
    }
    const newGoal= {id: uuid.v4(), goal: goalText}
    setGoals((currentGoals) => [...currentGoals, newGoal]);
  };  

  const handleDelete =(goalId) => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  
  return (
    <View style={styles.appContainer}>
      <GoalInput handleSubmit={handleSubmit} />
      <View style={styles.goalsContainer}>
        <FlatList 
          alwaysBounceVertical={false}
          data={goals}
          renderItem={({item}) => <GoalItem goal={item} handleDelete={handleDelete}/>}
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
});
