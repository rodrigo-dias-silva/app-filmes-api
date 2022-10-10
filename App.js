import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';

import Filmes from './src/Filmes';

import api from './src/services/api';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      // console.log(response.data);

      setFilmes(response.data)
    }

    loadFilmes();

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Filmes data={item} />}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});
