import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable, TextInput, Alert } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import { useFonts, Lato_700Bold, Lato_400Regular } from "@expo-google-fonts/lato";
import { LinearGradient } from 'expo-linear-gradient';
import config from "../../../config.json"
import axios from "axios";

async function logar(email, senha, navigation) {
  const url = config.url
  const payload = {
    Login: email,
    Password: senha
  }

  const response = await axios.post(`${url}/User/Login`, payload).catch((err) => {
    Alert.alert(
      'Erro',
      'Ocorreu um erro ao logar, tente novamente',
      [{ text: 'OK' }]
    )
  })

  if (response?.status != 200) {
    Alert.alert(
      'Erro',
      'Email ou senha incorretos',
      [{ text: 'OK' }]
    )
  } else {
    navigation.navigate('Home')
  }
}
export default function Login({ navigation }) {
  const [text, onChangeText] = React.useState('E-mail');
  const [senha, onChangeNumberSenha] = React.useState('Senha');
  const [showPassword, setShowPassword] = React.useState(false);
  const limpa = (() => {
    if (text == 'E-mail') {
      onChangeText('')
    }
  })
  const limpaSenha = (() => {
    setShowPassword(true)
    if (senha == 'Senha') {
      onChangeNumberSenha('')
    }
  })
  const preenche = ((input) => {
    if (text == '') {
      onChangeText('E-mail')
    }
  })
  const preencheSenha = ((input) => {
    if (senha == '') {
      setShowPassword(false)
      onChangeNumberSenha('Senha')
    }
  })

  let [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular
  })
  return (
    <View style={styles.login}>
      <Text style={styles.ol}>Olá</Text>
      <Text style={styles.entreNaSua}>Entre na sua conta</Text>
      <View style={[styles.loginInner, styles.loginInnerLayout]}>
        <View style={[styles.frameParent, styles.groupItemPosition]}>
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <TextInput style={styles.childShadowBox} onChangeText={onChangeText} value={text} onFocus={limpa} onBlur={preenche} />
          </View>
          <Image
            style={[styles.profileIcon, styles.groupItemPosition]}
            resizeMode="cover"
            source={require("../../assets/profile.svg")}
          />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.senhaPosition]}>
        <TextInput style={styles.childShadowBox} onChangeText={onChangeNumberSenha} value={senha} onFocus={limpaSenha} onBlur={preencheSenha} secureTextEntry={showPassword} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../../assets/vector.svg")}
        />
      </View>
      <Text style={styles.esqueceuSuaSenha}>Esqueceu sua senha?</Text>
      <Pressable style={styles.noTemContaContainer} onPress={() => navigation.navigate('Cadastro1')}>
        <Text style={styles.text}>
          {`Não tem conta? `}
          <Text style={styles.crie}>Crie</Text>
        </Text>
      </Pressable>
      <Text style={styles.entrar}>Entrar</Text>
      <Pressable
        style={[styles.rectangleContainer, styles.groupItemLayout]}
        onPress={async () => await logar(text, senha, navigation)}
      >
        <LinearGradient
          style={[styles.groupItem, styles.groupItemLayout]}
          locations={[0, 1]}
          colors={["#ffe855", "#ff0e00"]}
          useAngle={true}
          angle={135}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../../assets/vector1.svg")}
        />
      </Pressable>
      <Image
        style={[styles.loginChild, styles.groupItemPosition]}
        resizeMode="cover"
        source={require("../../assets/vector-1.svg")}
      />
      <Image
        style={[styles.clipPathGroup, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../../assets/clip-path-group.svg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  botaoErro: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  seila: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  loginInnerLayout: {
    height: 24,
    position: "absolute",
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  rectangleLayout: {
    height: 50,
    width: 300,
  },
  eMailTypo: {
    width: 115,
    color: Color.colorSilver_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
  },
  senhaPosition: {
    left: 45,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItemLayout: {
    width: 56,
    height: 34,
    position: "absolute",
  },
  ol: {
    top: 144,
    fontSize: 64,
    height: 83,
    width: 203,
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    left: 94,
    position: "absolute",
  },
  entreNaSua: {
    top: 246,
    fontSize: 18,
    height: 26,
    fontFamily: FontFamily.latoRegular,
    width: 203,
    textAlign: "center",
    color: Color.colorGray,
    left: 94,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_21xl,
    height: 50,
    width: 300,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    fontFamily: FontFamily.latoBold,
    paddingHorizontal: 41,
    color: Color.colorSilver_100
  },
  eMail: {
    top: 16,
    left: 41,
    height: 18,
    position: "absolute",
  },
  rectangleParent: {
    top: -13,
    left: -14,
    position: "absolute",
  },
  profileIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    height: 24,
    position: "absolute",
    width: 143,
  },
  loginInner: {
    top: 326,
    left: 59,
    width: 143,
    height: 24,
  },
  vectorIcon: {
    height: "35%",
    width: "4.67%",
    top: "28%",
    right: "89.33%",
    bottom: "37%",
    left: "6%",
  },
  senha: {
    top: 14,
    height: 17,
    width: 115,
    color: Color.colorSilver_100,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
  },
  rectangleGroup: {
    top: 404,
    height: 50,
    width: 300,
  },
  esqueceuSuaSenha: {
    top: 488,
    left: 191,
    color: "#bebebe",
    width: 154,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    height: 24,
    fontFamily: FontFamily.latoRegular,
    position: "absolute",
  },
  crie: {
    textDecoration: "underline",
  },
  text: {
    width: 209,
    fontSize: FontSize.size_mini,
    height: 24,
    fontFamily: FontFamily.latoRegular,
    textAlign: "center",
    color: Color.colorGray,
  },
  noTemContaContainer: {
    left: 91,
    top: 756,
    position: "absolute",
  },
  entrar: {
    left: 201,
    fontSize: 25,
    width: 88,
    height: 34,
    top: 627,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupItem: {
    borderRadius: 17,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  vectorIcon1: {
    height: "50.2%",
    width: "31.75%",
    top: "24.9%",
    right: "34.32%",
    bottom: "24.9%",
    left: "33.93%",
  },
  rectangleContainer: {
    left: 289,
    top: 627,
    width: 56,
  },
  loginChild: {
    width: 391,
    height: 119,
    position: "absolute",
  },
  clipPathGroup: {
    height: "21.09%",
    width: "45.64%",
    top: "79.03%",
    right: "54.36%",
    bottom: "-0.12%",
    left: "0%",
  },
  login: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});
