import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native-web';
import Botao from './components/Botao';

export default function Lista() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function carregarTarefas() {
      const tarefasSalvas = await AsyncStorage.getItem('tarefas');
      if (tarefasSalvas) {
        setTarefas(JSON.parse(tarefasSalvas));
      }
    }
    carregarTarefas();
  }, []);

  const salvarTarefa = async () => {
    if (tarefa.trim() === '') {
      alert('Digite uma tarefa primeiro!');
      return;
    }
    const novasTarefas = [...tarefas, tarefa];
    setTarefas(novasTarefas);
    await AsyncStorage.setItem('tarefas', JSON.stringify(novasTarefas));
    setTarefa('');
    alert('Tarefa salva com sucesso!');
  };

  const limparTarefas = async () => {
    await AsyncStorage.removeItem('tarefas');
    setTarefas([]);
    alert('Tarefas limpas com sucesso!');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />
      <Botao title="Adicionar Tarefa" onPress={salvarTarefa} />
      <Botao title="Limpar Tarefas" onPress={limparTarefas} />
      <View>
        {tarefas.length > 0 ? (
          tarefas.map((item, idx) => (
            <Text key={idx} style={styles.texto}>{item}</Text>
          ))
        ) : (
          <Text style={styles.texto}>Nenhuma Tarefa no momento</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '45%',
    height: 40,
    marginBottom: 20,
    borderRadius: 5,
  },
});