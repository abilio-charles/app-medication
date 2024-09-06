import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Item({ medication, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{medication.name}</Text>
        <Text style={styles.dosageText}>Dosage: {medication.dosage}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(medication.id)}>
        <FontAwesome name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'column',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dosageText: {
    fontSize: 14,
    color: '#555',
  },
});
