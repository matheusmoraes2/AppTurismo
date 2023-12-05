const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/pages/Login/index";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Cadastro1 from "./src/pages/Cadastro/Cadastro1";
import Cadastro2 from "./src/pages/Cadastro/Cadastro2";
import CadastroFim from "./src/pages/Cadastro/CadastroFim";
import Home from "./src/pages/Home/Home";
import BuscarViagens from "./src/pages/Viagens/BuscarViagens";
import CriarViagem from "./src/pages/Viagens/CriarViagem";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastro1"
              component={Cadastro1}
            />
            <Stack.Screen
              name="Cadastro2"
              component={Cadastro2}
            />
            <Stack.Screen
              name="CadastroFim"
              component={CadastroFim}
            />
            <Stack.Screen
              name="BuscarViagens"
              component={BuscarViagens}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CriarViagem"
              component={CriarViagem}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
