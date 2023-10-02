import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Row({ person, fontSize }) {
  return (
    <View style={styles.row}>
      <Text style={[styles.name, { fontSize }]}>
        {person.firstname}, {person.lastname}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
