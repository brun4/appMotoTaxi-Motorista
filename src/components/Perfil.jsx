import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../../style/style";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Perfil({navigation}) {
  return (
  
    <View>
      <View style={styles.hojebtn1}>
        <TouchableOpacity style={styles.hojeTouch1} onPress={() => navigation.navigate("Apresentação")}>
            <Icon name="angle-left" style={styles.ico1} size={20}/>
        </TouchableOpacity>            
      </View>

      <Text style={styles.perfil1} > Meu Perfil </Text>

      <View>
        <Image style={styles.perfilImg} source={require('../../images/user.jpg')}/>
      </View>

      <View>
        <Text style={styles.perfil2}>{`Nome \n Roberto José`}</Text>
      </View>

      
      <View>
        <Text style={styles.perfil2}>{`Sobrenome \n Oliveira`}</Text>
      </View>

      <View>
        <Text style={styles.perfil2}>{`CPF \n 294.XXX.025X-25`}</Text>
      </View>

      <View>
        <Text style={styles.perfil2}>{`Telefone \n 88-99558-5489`}</Text>
      </View>

      <View>
        <Text style={styles.perfil2}>{`Endereço \n Rua José Bonifácio, 789 - Ceará - SP`}</Text>
      </View>

      <View style={styles.perfil2}>
      <Icon name="envelope" size={30}/>
      <Text style={styles.perfil3}>{`    rjoseoliveira@gmail.com`}</Text>
      </View>

      
      <View style={styles.perfilbtn}>
        <TouchableOpacity style={styles.perfilTouch}>
        <Text style={styles.perfilText}>Solicitar alteração</Text></TouchableOpacity>                 
      </View>

    </View>


  );
}
