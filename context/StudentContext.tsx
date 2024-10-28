// context/StudentContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Student } from '../interfaces/Student';

// Define la interfaz del contexto de estudiantes
interface StudentContextType {
  students: Student[]; // Array de estudiantes
}

// Crea el contexto inicial para los estudiantes
const StudentContext = createContext<StudentContextType | undefined>(undefined);

// Datos iniciales de los estudiantes
const initialStudents: Student[] = [
    { id: '1', name: 'Hector' },
    { id: '2', name: 'Rene' },
    { id: '3', name: 'Carlos' },
    { id: '4', name: 'Reniery' },
    { id: '5', name: 'Rosmery' },
    { id: '6', name: 'Lissa' },
    { id: '7', name: 'Cecilia' },
    { id: '8', name: 'Moshe' },
    { id: '9', name: 'Karla' },
    { id: '10', name: 'Elizabeth' },
];

// Estudiantes adicionales que se agregarán después de 5 segundos
const additionalStudents: Student[] = [
    { id: '11', name: 'Sarah' },
    { id: '12', name: 'Ruth' },
    { id: '13', name: 'Noaj' },
    { id: '14', name: 'Iahuda' },
    { id: '15', name: 'Efrayin' },
];

// Componente Provider para el contexto
export const StudentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado que maneja la lista de estudiantes
  const [students, setStudents] = useState<Student[]>(initialStudents);

  // Efecto que simula la carga de datos adicionales
  useEffect(() => {
    const timer = setTimeout(() => {
      // Agrega estudiantes adicionales al estado
      setStudents((prevStudents) => [...prevStudents, ...additionalStudents]);
    }, 5000); // 5 segundos de espera

    // Limpieza del temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  return (
    // Proporciona el contexto a los componentes hijos
    <StudentContext.Provider value={{ students }}>
      {children}
    </StudentContext.Provider>
  );
};

// Hook para acceder al contexto de estudiantes
export const useStudentContext = () => {
  const context = React.useContext(StudentContext);
  // Verifica si el contexto está definido
  if (!context) {
    throw new Error('useStudentContext debe usarse dentro de StudentProvider');
  }
  return context; // Retorna el contexto
};



export default StudentContext;