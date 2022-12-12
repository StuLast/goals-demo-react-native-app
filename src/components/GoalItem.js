import {StyleSheet, Text, Pressable, View} from 'react-native'
const GoalItem = ({goal, handleDelete}) => {

  const onPress = () => {
    handleDelete(goal.id);
  }

  return (
    
      <View style={styles.goalItemContainer}>
        <Pressable 
          android_ripple={{color: "#dddddd"}}
          onPress={onPress}
          style={({pressed}) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalItem}>{goal.goal}</Text>
        </Pressable>
      </View>
    
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 4,
    borderRadius: 5,
    backgroundColor: '#5e0acc',
  },
  goalItem: {
    color: 'white',
    padding: 5
  },
  pressedItem: {
    opacity: 0.5
  }
})

export default GoalItem;