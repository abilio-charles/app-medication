import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function AddMedicationScreen({ navigation }) {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');

  const handleSave = () => {
    if (!name || !dosage) {
      Alert.alert('Validation Error', 'Please fill in both fields.');
      return;
    }
    
    // Save the medication here (e.g., to SQLite database)
    // You might call a function to save the data

    // For demonstration, just log the data
    console.log('Saving medication:', { name, dosage });

    // Navigate back or show a success message
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Medication</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Name" 
        value={name}
        onChangeText={setName}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Dosage" 
        value={dosage}
        onChangeText={setDosage}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#9E68CA',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
