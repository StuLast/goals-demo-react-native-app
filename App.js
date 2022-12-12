import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App({items}) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState ([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const handleSubmit = (goalText) => {
    if(goalText.length <= 0)
    {
      return;
    }
    const newGoal= {id: uuid.v4(), goal: goalText}
    setGoals((state) => [...state, newGoal]);
    endAddGoalHandler();
  };  

  const handleDelete =(goalId) => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#a065ac" onPress={startAddGoalHandler}/>
      <GoalInput 
        handleSubmit={handleSubmit} 
        isVisible={modalIsVisible} 
        setModalIsVisible={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList 
          alwaysBounceVertical={false}
          data={goals}
          renderItem={({item}) => <GoalItem goal={item} handleDelete={handleDelete}/>}
        />
      </View>
    </View>
    </>
  )
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
