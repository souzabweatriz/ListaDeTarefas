import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botao({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{title}</Text>
    </TouchableOpacity>
  );
}   

const styles = StyleSheet.create({
  botao: {  
    backgroundColor: 'pink',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
    textoBotao: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});