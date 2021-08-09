import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../../style/style";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ConfirmarCorrida({navigation}) {
  return (
    <View>
      
      <View style={styles.hojebtn1}>
        <TouchableOpacity style={styles.hojeTouch1} onPress={() => navigation.navigate("Perfil")}>
            <Icon name="angle-left" style={styles.ico1} size={20}/>
        </TouchableOpacity>            
      </View>

      <View>
        <Image
          style={styles.confirmarCorridaImg3}
          source={require("../../images/mapa.png")}
        />
      </View>

      <View>
        <Text
          style={styles.confirmarCorrida1}
        >{`Rua Antônio Oliveira Menezes, SN, Centro, Itapipoca \n Ceará, Brazil`}</Text>
      </View>

      <View>
        <Text style={styles.confirmarCorrida}>5 minutos</Text>
      </View>

      <View style={styles.confirmaCorridaTouch}>
        <TouchableOpacity style={styles.corridaTouch}  onPress={() => navigation.navigate("Iniciar Corrida")}>
          <View>
            <Text style={styles.corridaText1}>Aceitar</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.corridaTouch1}>
          <View>
            <Text style={styles.corridaText2}>Rejeitar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
