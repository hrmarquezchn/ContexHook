import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StudentProvider } from './context/StudentContext';
import StudentList from './components/StudentList';

export default function App() {
  return (
    <View style={styles.container}>
      <StudentProvider>
        <StudentList />
      </StudentProvider>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
