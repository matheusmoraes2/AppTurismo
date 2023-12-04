import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import config from "../../../config.json"

function cadastrar(tag, senha, senhaConf, navigation) {
    navigation.navigate('CadastroFim')
    // const cadastro1 = AsyncStorage.getItem('cadastro1')
    // console.log(JSON.stringify(cadastro1))
    // const [dia, mes, ano] = cadastro1.date.split('/')
    // const dataFormatada = new Date(ano, mes - 1, dia);

    // const payload = {
    //     Email: cadastro1.email,
    //     Nome: cadastro1.nome,
    //     DataNascimento: dataFormatada,
    //     Tag: tag,
    //     NomeUsuario: cadastro1.nome,
    //     Senha: senha
    // }
    // console.log(payload)

    // const response = axios.post(`${config.url}/User`, payload)

    // if (response.status != 200) {
    //     Alert.alert(
    //         'Erro',
    //         'Ocorreu um erro ao logar, tente novamente',
    //         [{ text: 'OK' }]
    //     )
    //     console.log('erro ao cadastrar')
    // } else {
    //     navigation.navigate('CadastroFim')
    // }
}
export default function Cadastro2({ navigation }) {
    const [tag, onChangeTag] = React.useState('@Tag');
    const [senha, onChangeSenha] = React.useState('Senha');
    const [senhaConf, onChangeSenhaConf] = React.useState('Confirme a senha');
    const [senhaDiff, onChangeSenhaDiff] = React.useState('');
    const [disable, onChangeSenhaDisable] = React.useState('false');

    return (
        <View style={styles.signup2}>
            <Text style={styles.criarConta}>Criar conta</Text>
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                <TextInput style={styles.groupShadowBox} onChangeText={onChangeTag} value={tag} clearTextOnFocus='true' />
                <View style={[styles.profileParent, styles.profileLayout]}>
                    <Image
                        style={[styles.profileIcon, styles.profileLayout]}
                        resizeMode="cover"
                        source={require("../../assets/profile.svg")}
                    />
                </View>
            </View>
            <Text style={styles.criar}>Criar</Text>
            <Pressable
                style={[styles.rectangleGroup, styles.groupLayout]}
                onPress={() => cadastrar(tag, senha, senhaConf, navigation)}
            >
                <LinearGradient
                    style={[styles.groupItem, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#ff7fed", "#5a07d5"]}
                    useAngle={true}
                    angle={135}
                />
                <Image
                    style={[styles.vectorIcon, styles.vectorIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/vector1.svg")}
                />
            </Pressable>
            <Image
                style={[styles.signup2Child, styles.groupItemPosition]}
                resizeMode="cover"
                source={require("../../assets/vector-2.svg")}
            />
            <Image
                style={styles.signup2Item}
                resizeMode="cover"
                source={require("../../assets/ellipse-1.svg")}
            />
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
                <TextInput style={styles.groupShadowBox} onChangeText={onChangeSenha} value={senha} clearTextOnFocus='true' />
                <Image
                    style={[styles.vectorIcon1, styles.vectorIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/vector.svg")}
                />
            </View>
            <View style={[styles.groupView, styles.rectangleLayout]}>
                <TextInput style={styles.groupShadowBox} onChangeText={onChangeSenhaConf} onBlur={() => onChangeSenhaDiff('true')} value={senhaConf} clearTextOnFocus='true' />
                <Image
                    style={[styles.vectorIcon1, styles.vectorIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/vector.svg")}
                />
                {senha != senhaConf && senhaDiff == 'true' &&
                    <Text style={styles.senhaDiff}>senhas digitadas não correspondem</Text>
                }
            </View>
            <Image
                style={[styles.clipPathGroup, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../../assets/clip-path-group-roxo.svg")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    senhaDiff: {
        top: -17,
        left: 20,
        color: "#FF0000",
        fontFamily: FontFamily.latoBold,
    },
    rectangleLayout: {
        height: 50,
        width: 300,
        left: 45,
        position: "absolute",
    },
    profileLayout: {
        height: 24,
        position: "absolute",
    },
    tagTypo: {
        width: 115,
        textAlign: "left",
        color: Color.colorSilver,
        fontFamily: FontFamily.latoRegular,
        fontSize: FontSize.size_mini,
        position: "absolute",
    },
    groupLayout: {
        width: 56,
        height: 34,
        position: "absolute",
    },
    vectorIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    groupItemPosition: {
        top: 0,
        left: 0,
    },
    verificar1Icon: {
        top: 163,
        left: 0,
        height: 250,
        width: 250,
        position: "absolute",
    },
    verificar1Wrapper: {
        top: -163,
        left: 56,
        height: 250,
        width: 250,
        position: "absolute",
    },
    criarConta: {
        top: 166,
        left: 92,
        fontSize: 30,
        textAlign: "center",
        width: 206,
        height: 41,
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        position: "absolute",
    },
    groupShadowBox: {
        shadowOpacity: 1,
        elevation: 20,
        shadowRadius: 20,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: Border.br_21xl,
        top: 0,
        height: 50,
        width: 300,
        left: 0,
        position: "absolute",
        backgroundColor: Color.colorWhite,
        fontFamily: FontFamily.latoBold,
        paddingHorizontal: 41,
        color: Color.colorSilver_100
    },
    profileIcon: {
        width: 24,
        top: 0,
        left: 0,
        overflow: "hidden",
    },
    tag: {
        top: 3,
        left: 27,
        height: 18,
    },
    profileParent: {
        top: 13,
        left: 14,
        width: 143,
    },
    rectangleParent: {
        top: 249,
    },
    criar: {
        left: 229,
        fontSize: 25,
        width: 60,
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
        top: 0,
        left: 0,
    },
    vectorIcon: {
        height: "50.2%",
        width: "31.75%",
        top: "24.9%",
        right: "34.32%",
        bottom: "24.9%",
        left: "33.93%",
    },
    rectangleGroup: {
        left: 289,
        top: 627,
        width: 56,
    },
    signup2Child: {
        width: 391,
        height: 119,
        position: "absolute",
    },
    signup2Item: {
        top: 556,
        left: 69,
        width: 2,
        height: 2,
        position: "absolute",
    },
    signup2Inner: {
        top: 542,
        left: 65,
        borderRadius: 1,
        width: 10,
        height: 12,
        position: "absolute",
    },
    vectorIcon1: {
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
        left: 45,
        width: 115,
        textAlign: "left",
        color: Color.colorSilver,
        fontFamily: FontFamily.latoRegular,
        fontSize: FontSize.size_mini,
    },
    rectangleContainer: {
        top: 341,
    },
    groupView: {
        top: 433,
    },
    clipPathGroup: {
        height: "21.09%",
        width: "45.64%",
        top: "78.91%",
        right: "54.36%",
        bottom: "0%",
        left: "0%",
    },
    signup2: {
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});
