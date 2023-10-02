import React from 'react';
import Row from './components/Row';
import { DATA } from './Data'; 
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Row person={item} fontSize={20} />} 
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});

export default App;
