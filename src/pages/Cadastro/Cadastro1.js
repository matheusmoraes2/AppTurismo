import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text'


async function cadastrar(nome, email, date) {
    AsyncStorage.setItem('cadastro1', {
        nome: nome,
        email: email,
        date: date
    })
}
export default function Cadastro1({ navigation }) {
    const [nome, onChangeNome] = React.useState('Nome');
    const [email, onChangeEmail] = React.useState('E-mail');
    const [date, onChangeDate] = React.useState('Data de nascimento');

    return (
        <View style={styles.signup1}>
            <Text style={styles.criarConta}>Criar conta</Text>
            <View style={[styles.rectangleParent, styles.groupLayout]}>
                <TextInput onChangeText={onChangeNome} value={nome} style={styles.groupShadowBox} clearTextOnFocus='true' />
                <View style={[styles.profileParent, styles.profileLayout]}>
                    <Image
                        style={[styles.profileIcon, styles.profileLayout]}
                        resizeMode="cover"
                        source={require("../../assets/profile.svg")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <TextInput onChangeText={onChangeEmail} value={email} style={styles.groupShadowBox} clearTextOnFocus='true' />
                <Image
                    style={styles.emailIcon}
                    resizeMode="cover"
                    source={require("../../assets/email.svg")}
                />
            </View>
            <Text style={styles.ouCrieUma}>
                Ou crie uma conta usando as redes sociais
            </Text>
            <Text style={styles.prximo}>Próximo</Text>
            <Pressable
                style={[styles.rectangleContainer, styles.groupInnerLayout]}
                onPress={() => { cadastrar(nome, email, date), navigation.navigate('Cadastro2') }}
            >
                <LinearGradient
                    style={[styles.groupInner, styles.groupInnerLayout]}
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
                style={[styles.signup1Child, styles.groupInnerPosition]}
                resizeMode="cover"
                source={require("../../assets/vector-2.svg")}
            />
            <Image
                style={styles.signup1Item}
                resizeMode="cover"
                source={require("../../assets/ellipse-1.svg")}
            />
            <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../../assets/frame-2.svg")}
            />
            <View style={[styles.groupView, styles.groupLayout]}>
                <TextInputMask onChangeText={onChangeDate} style={styles.groupShadowBox} value={date} placeholder={date} type={'datetime'} options={{ format: 'DD/MM/YYYY' }} />
                <Image
                    style={styles.emailIcon}
                    resizeMode="cover"
                    source={require("../../assets/email.svg")}
                />
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
    groupLayout: {
        height: 50,
        width: 300,
        position: "absolute",
    },
    profileLayout: {
        height: 24,
        position: "absolute",
    },
    eMailPosition: {
        height: 17,
        top: 14,
        textAlign: "left",
        color: Color.colorSilver,
        fontFamily: FontFamily.latoRegular,
        fontSize: FontSize.size_mini,
        left: 45,
        position: "absolute",
    },
    groupInnerLayout: {
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
    groupInnerPosition: {
        left: 0,
        top: 0,
    },
    criarConta: {
        top: 166,
        left: 92,
        fontSize: 30,
        width: 206,
        height: 41,
        textAlign: "center",
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
        left: 0,
        top: 0,
        height: 50,
        width: 300,
        position: "absolute",
        backgroundColor: Color.colorWhite,
        fontFamily: FontFamily.latoBold,
        paddingHorizontal: 41,
        color: Color.colorSilver_100
    },
    profileIcon: {
        width: 24,
        left: 0,
        top: 0,
        overflow: "hidden",
    },
    nome: {
        top: 3,
        left: 27,
        height: 18,
        width: 115,
        textAlign: "left",
        color: Color.colorSilver,
        fontFamily: FontFamily.latoRegular,
        fontSize: FontSize.size_mini,
        position: "absolute",
    },
    profileParent: {
        top: 13,
        left: 14,
        width: 143,
    },
    rectangleParent: {
        top: 249,
        left: 45,
        width: 300,
    },
    eMail: {
        width: 115,
    },
    emailIcon: {
        top: 19,
        left: 18,
        width: 14,
        height: 11,
        position: "absolute",
        overflow: "hidden",
    },
    rectangleGroup: {
        top: 341,
        left: 45,
        width: 300,
    },
    ouCrieUma: {
        top: 700,
        left: 68,
        width: 277,
        fontFamily: FontFamily.latoRegular,
        fontSize: FontSize.size_mini,
        height: 24,
        textAlign: "center",
        color: Color.colorGray,
        position: "absolute",
    },
    prximo: {
        left: 192,
        fontSize: 25,
        width: 97,
        height: 34,
        top: 627,
        textAlign: "left",
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        position: "absolute",
    },
    groupInner: {
        borderRadius: 17,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
    },
    vectorIcon: {
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
    signup1Child: {
        width: 391,
        height: 119,
        position: "absolute",
    },
    signup1Item: {
        top: 556,
        left: 69,
        width: 2,
        height: 2,
        position: "absolute",
    },
    signup1Inner: {
        top: 542,
        left: 65,
        borderRadius: 1,
        width: 10,
        height: 12,
        position: "absolute",
    },
    frameIcon: {
        top: 736,
        left: 115,
        width: 155,
        height: 43,
        position: "absolute",
    },
    dataDeNascimento: {
        width: 139,
    },
    groupView: {
        top: 433,
        left: 41,
    },
    clipPathGroup: {
        height: "21.09%",
        width: "45.64%",
        top: "78.91%",
        right: "54.36%",
        bottom: "0%",
        left: "0%",
    },
    signup1: {
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});
