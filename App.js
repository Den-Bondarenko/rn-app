import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.aapContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aapContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
  }
});
