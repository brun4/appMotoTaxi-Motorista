import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Login";
import Perfil from "./Perfil";
import HistoricoGanhos from "./HistoricoGanhos";
import ConfirmarCorrida from "./ConfirmarCorrida";
// import Capa from "./src/components/Capa";
import Apresentacao from "./Apresentacao";
import HistoricoHoje from "./HistoricoHoje";
import AceitarCorrida1 from './AceitarCorrida1';
import Mapa from "./Mapa";

const Drawer = createDrawerNavigator();

export default function Principal1(){
return(
    <>
        {/* <UserView/> */}
            <Drawer.Navigator initialRouteName="Apresentação">
                <Drawer.Screen name="Apresentação" component={Apresentacao} />
                {/* <Drawer.Screen name="Capa" component={Capa} /> */}
                {/* <Drawer.Screen name="Login" component={Login} /> */}
  
                <Drawer.Screen name="Perfil" component={Perfil} />
                <Drawer.Screen name="Mapa" component={Mapa} />
                <Drawer.Screen name="Confirmar" component={ConfirmarCorrida} />
                <Drawer.Screen name="Iniciar Corrida" component={AceitarCorrida1} />
                <Drawer.Screen name="Historico Mensal" component={HistoricoGanhos} />
                <Drawer.Screen name="Úlimas Corridas" component={HistoricoHoje} />
            </Drawer.Navigator>
    </>
)
}