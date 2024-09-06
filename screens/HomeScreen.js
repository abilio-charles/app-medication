import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './style';
import * as SQLite from 'expo-sqlite';
import Item from '../components/Item';

const db = SQLite.openDatabase('medications.db');

export default function HomeScreen({ navigation }) {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    // Criação da tabela se não existir
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS medications (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, dosage TEXT);'
      );
    }, null, updateMedicationList); // Atualiza a lista após a criação da tabela
  }, []);

  const updateMedicationList = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM medications;',
        [],
        (_, { rows: { _array } }) => setMedications(_array)
      );
    });
  };

  const deleteMedication = (id) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM medications WHERE id = ?;',
        [id],
        updateMedicationList // Atualiza a lista após a exclusão
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medications</Text>
      <FlatList 
        data={medications}
        renderItem={({ item }) => (
          <Item medication={item} onDelete={deleteMedication} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
