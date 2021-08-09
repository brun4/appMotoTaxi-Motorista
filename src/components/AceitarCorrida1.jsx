import React from "react";
import { Text, View, ImageBackground} from "react-native";
import { styles } from "../../style/style";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AceitarCorrida() {
  return (

    <ImageBackground style={styles.historicoHojeBack} source={require('../../images/foto2.png')}>
    
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
            <Text style={styles.text3}>Iniciar</Text>
        </View>  

        <View style={styles.ico}>
            <Icon name="crosshairs" size={30}/>
        </View>
      </View>

    </View>
    </ImageBackground>   
  );
}
