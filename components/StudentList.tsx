// components/StudentList.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StudentItem from './StudentItem';
import { useStudentContext } from '../context/StudentContext';

const StudentList: React.FC = () => {
  const { students } = useStudentContext(); // acceder al contexto de estudiantes

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentItem student={item} />} // renderizar cada estudiante
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default StudentList;