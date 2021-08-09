import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../../style/style";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HistoricoGanhos({navigation}) {
  return (
  
    <View>

      <View style={styles.hojebtn1}>
        <TouchableOpacity style={styles.hojeTouch1} onPress={() => navigation.navigate("Iniciar Corrida")}>
            <Icon name="angle-left" style={styles.ico1} size={20}/>
        </TouchableOpacity>  
                  
      </View>

      <Text style={styles.historicoGanhos1}> Histórico de Ganhos </Text>

      <View>
       <Text style={styles.historicoGanhos2}>Histórico completo de ganhos</Text>
      </View>

      <View>
        <Text style={styles.perfil2}>domingo, 9 de ago.</Text>
      </View>


      <View>
        <Text style={styles.perfil2}>{`MotoX                                                                  13:13\n R$ 13,23`}</Text>
      </View>
      
      <View>
        <Text style={styles.perfil2}>{`MotoX                                                                  12:52   \n R$ 8,41`}</Text>
      </View>

      <View>
        <Text style={styles.perfil2}>{`MotoVip                                                               19:53   \n R$ 15,45`}</Text>
      </View>

      <View>
        <Text style={styles.perfil2}>{`MotoX                                                                  20:05   \n R$ 9,45`}</Text>
      </View>

      <View>
        <Text style={styles.perfil2}>{`MotoVip                                                               19:53   \n R$ 18,36`}</Text>
      </View>

      <View>
        <Text style={styles.perfil2}>{`MotoX                                                                  12:45   \n R$ 16,30`}</Text>
      </View>

      <View>
        <Text style={styles.perfil2}>{`MotoVip                                                                21:02 \n R$ 8,58`}</Text>
      </View>


    </View>


  );
}
