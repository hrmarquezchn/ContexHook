// components/StudentItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Student } from '../interfaces/Student';

interface StudentItemProps {
  student: Student; // objeto estudiante
}

const StudentItem: React.FC<StudentItemProps> = ({ student }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{`${student.id}. ${student.name}`}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    backgroundColor: '#00bfff',
    borderRadius: 50,
    marginBottom: 8,
    width: '100%',
  },
  text: {
    fontSize: 12,
    color: 'white', // color del texto
    textAlign: 'center', // centrar el texto
  },
});

export default StudentItem;