import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{props.filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  btnVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  titulo: {
    textAlign: 'center',
    padding: 10,
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  descricao: {
    color: '#fff',
    marginHorizontal: 10
  }
})