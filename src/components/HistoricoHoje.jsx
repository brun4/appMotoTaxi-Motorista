import React from "react";
import { Text, View, ImageBackground, TouchableOpacity} from "react-native";
import { styles } from "../../style/style";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HistoricoHoje({navigation}) {
  return (

    <ImageBackground style={styles.historicoHojeBack} source={require('../../images/foto.png')}>
    
          
    <View style={styles.hojebtn2}>
        <View>
          <TouchableOpacity style={styles.hojeTouch1} onPress={() => navigation.navigate("Historico Mensal")}>
              <Icon name="angle-left" style={styles.ico1} size={20}/>
          </TouchableOpacity> 
        </View> 

        <View>
          <TouchableOpacity style={styles.hojeTouch1} onPress={() => navigation.navigate("Apresentação")}>
              <Ionicons name="home" style={styles.ico2} size={20}/>
          </TouchableOpacity>
        </View>            
    </View>

    <View style={styles.container}>

      <View style={styles.container2}>

        <View style={styles.container3}>
          <Text style={styles.text}>R$ 75,00</Text>
        </View>
     
        <Text style={styles.text1}>Saldo Hoje</Text>

        <Text style={styles.text2}>15 viagens concluídas</Text>
        <Text style={styles.text2}>Ver todas as Viagens</Text>
  
      </View>
     
    </View>

      <View style={styles.hojebtn}>
        <TouchableOpacity style={styles.hojeTouch}>
        <Text style={styles.hojeText}>Sair    X</Text>    
        </TouchableOpacity>            
      </View>
    </ImageBackground>   
  );
}
