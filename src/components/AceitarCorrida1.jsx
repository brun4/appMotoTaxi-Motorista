import React from "react";
import { Text, View, ImageBackground, TouchableOpacity} from "react-native";
import { styles } from "../../style/style";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AceitarCorrida({navigation}) {
  return (

    <ImageBackground style={styles.historicoHojeBack} source={require('../../images/foto2.png')}>
    
    
    <View style={styles.hojebtn1}>
        <TouchableOpacity style={styles.hojeTouch1} onPress={() => navigation.navigate("Confirmar")}>
            <Icon name="angle-left" style={styles.ico1} size={20}/>
        </TouchableOpacity>            
    </View>

    <View style={styles.container}>
      

        <View style={styles.container5}>
          <Text style={styles.text3}>R$ 7,30</Text>
        </View>       
    </View>

    <View style={styles.container7}>

      <View style={styles.container8}>
        <View style={styles.ico}>
            <Icon name="sliders"size={30}/>
        </View>

        <View style={styles.container6}>
          <TouchableOpacity style={styles.container9}>
          <Text style={styles.text3}>Iniciar</Text>    
          </TouchableOpacity>            
        </View>

        <View style={styles.ico}>
            <Icon name="crosshairs" size={30}/>
        </View>
      </View>

    </View>
    </ImageBackground>   
  );
}
