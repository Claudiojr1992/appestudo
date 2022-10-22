import React, { Component } from "react";
import {Alert, View, Image, TextInput, Button, ScrollView} from 'react-native'
import Logo from '../../../assets/logo.png'

class Home extends Component {
  
  constructor(props){
    super(props);
    // No state é onde as informações são salvas
    this.state = {
      nome: '',
      idade: 0,
      altura: 0,
      signo: '',
      sexo:''
    }
  }

  acaoBotao() {
    let  { nome, idade, altura, signo, sexo } = this.state
    if (nome == '' || idade == 0 || altura == 0 || signo == '' || sexo == '') {
      Alert.alert('Aviso', 'Preencha todos os campos')
    }
    else {
      this.props.navigation.navigate('Dados', {nome, idade, altura, signo, sexo})
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent:'center', alignItems:'center', padding: '5%'}}>

        {/* Imagem*/}        
        <View style={{flex: 5}}>
          <Image source={Logo}  // Layout da imagem
          style={{
            flex: 1,
            width: 300,
            height: 50,
            resizeMode: 'contain'
          }} />

        </View>

        {/* Formulário*/}        
        <View style={{flex: 5,  width: '100%'}}>
          {/*nome*/}
          <TextInput
            placeholder="Nome" // pesca
            style={{width: '100%'}}
            value={this.state.nome} // aponta qual vai ser o valor do campo
            onChangeText={ (txt) => { this.setState({nome: txt})} } // muda o valor do value
            underlineColorAndroid={"red"} // Linha
          />

          {/*idade*/}
          <TextInput
            placeholder="Idade" // pesca
            keyboardType="numeric"
            style={{width: '100%'}}
            value={this.state.idade} // aponta qual vai ser o valor do campo
            onChangeText={ (txt) => { this.setState({idade: txt})} } // muda o valor do value
            underlineColorAndroid={"red"} // Linha
          />

          {/*altura*/}
          <TextInput
            placeholder="Altura" // pesca
            keyboardType="numeric"
            style={{width: '100%'}}
            value={this.state.altura} // aponta qual vai ser o valor do campo
            onChangeText={ (txt) => { this.setState({altura: txt})} } // muda o valor do value
            underlineColorAndroid={"red"} // Linha
          />

          {/*signo*/}
          <TextInput
            placeholder="Signo" // pesca
            style={{width: '100%'}}
            value={this.state.signo} // aponta qual vai ser o valor do campo
            onChangeText={ (txt) => { this.setState({signo: txt})} } // muda o valor do value
            underlineColorAndroid={"red"} // Linha
          />

          {/*sexo*/}
          <TextInput
            placeholder="Sexo" // pesca
            style={{width: '100%'}}
            value={this.state.sexo} // aponta qual vai ser o valor do campo
            onChangeText={ (txt) => { this.setState({sexo: txt})} } // muda o valor do value
            underlineColorAndroid={"red"} // Linha
          />
          
          <Button
            onPress={() => {this.acaoBotao()}} //Dispara a ação quando pressionado
            title="Botao" // Titulo do botao
            color={"red"} // Cor do botao
          />
        </View>
        
      </View>
    )
  }
}
export default Home;
