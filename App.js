import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {

  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredText) => {
    setEnteredTaskText(enteredText);
  };

  const addTaskHandler = () => {
    setTasks((currentTasks) => [...currentTasks, enteredTaskText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}  
          placeholder="What do you need to do?"
          onChangeText={taskInputHandler}
        />
        <Button 
          title="Add task"
          onPress={addTaskHandler}
        />
      </View>
      <View style={styles.tasksContainer}>
        {tasks.map((task) => {
          return(
            <View style={styles.taskElement}>
              <Text key={task}>{task}</Text>
              <Button title="Remove"/>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    paddingBottom: 10,

  },

  textInput: {
    width: '70%',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 4,
  },

  tasksContainer: {
    paddingTop: 10,
    flex: 8
  },

  taskElement: {
    flexDirection: 'raw',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 5,
  }
});
