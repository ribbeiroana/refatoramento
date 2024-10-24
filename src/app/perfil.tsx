import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView, Alert } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Perfil() {
  const [agendamentos, setAgendamentos] = useState([
    { id: 1, servico: 'Cabelo', salao: 'Salão A', valor: 'R$ 100' },
    { id: 2, servico: 'Manicure', salao: 'Salão B', valor: 'R$ 50' },
    { id: 3, servico: 'Penteado', salao: 'Salão C', valor: 'R$ 80' },
  ]);

  const confirmarExclusao = (id) => {
    Alert.alert(
      "Confirmação",
      "Você realmente deseja excluir este agendamento?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: () => excluirAgendamento(id) }
      ]
    );
  };

  const excluirAgendamento = (id) => {
    setAgendamentos(agendamentos.filter(agendamento => agendamento.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.usuario}>Nome Usuário</Text>
        </View>

        {/* Imagem no canto esquerdo, antes do título */}
        <View style={styles.imagemContainer}>
          <Image 
            source={require('@/assets/images/designEstrela.png')} 
            style={styles.estrelaImagem} 
          />
          <Text style={styles.tituloHistorico}>Histórico de Agendamento</Text>
        </View>

        {agendamentos.map((item) => (
          <Pressable key={item.id} style={styles.itensAgendados}>
            <View style={styles.itensContainer}>
              <Text style={styles.textoServico}>Serviço: {item.servico}</Text>
              <Text style={styles.textoSalão}>Salão: {item.salao}</Text>
              <Text style={styles.textoValor}>Valor: {item.valor}</Text>
              <View style={styles.excluirContainer}>
                <Pressable onPress={() => confirmarExclusao(item.id)} style={styles.excluirButton}>
                  <Text style={styles.excluirAgendamento}>EXCLUIR</Text>
                  <FontAwesome6 name="trash-can" size={15} style={styles.excluirIcon} />
                </Pressable>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008584',
    padding: 20,
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    height: 80,
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usuario: {
    fontWeight: '800',
    fontSize: 25,
    color: '#008584',
  },
  imagemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  tituloHistorico: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 10, // Espaçamento entre a imagem e o texto
  },
  estrelaImagem: {
    width: 50, // Ajuste o tamanho conforme necessário
    height: 50, // Ajuste o tamanho conforme necessário
  },
  itensAgendados: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
  itensContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textoServico: {
    color: '#0b0c0c',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textoSalão: {
    color: '#0b0c0c',
    fontSize: 14,
  },
  textoValor: {
    color: '#0b0c0c',
    fontSize: 14,
    marginBottom: 10,
  },
  excluirContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  excluirButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#008584',
  },
  excluirAgendamento: {
    color: '#008584',
    fontWeight: 'bold',
    marginRight: 5,
  },
  excluirIcon: {
    color: '#008584',
  },
});
