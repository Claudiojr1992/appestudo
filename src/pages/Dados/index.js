import React, { Component } from "react";
import {View, Text} from 'react-native'

class Dados extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      altura: 0,
      signo: '',
      sexo:''
    }

    let { nome, idade, altura, signo, sexo } = this.props.route.params
    
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Nome: {this.state.valor}</Text>

        {/*TO DO
          Criar os campos que irão mostrar os dados
          vindos da tela do formulário
        */}

      </View>
    )
  }
}
export default Dados;
