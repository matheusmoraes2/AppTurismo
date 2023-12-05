import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontFamily, Border, Color, FontSize } from "../../../GlobalStyles";
import { useFonts, Lato_700Bold, Lato_400Regular, Lato_300Light } from "@expo-google-fonts/lato";
import axios from "axios";
import config from "../../../config.json"

async function Criar(nome, local, descricao, navigation) {
    const response = await axios.post(`${config.url}/viagem`).catch((err) => {
        Alert.alert(
            'Erro',
            'Ocorreu um erro ao logar, tente novamente',
            [{ text: 'OK' }]
        )
        return
    })
    if (response?.status != 200) {
        Alert.alert(
            'Erro',
            'Ocorreu um erro ao logar, tente novamente',
            [{ text: 'OK' }]
        )
    } else {
        navigation.navigate('BuscarViagem')
    }


}
export default function CriarViagem({ navigation }) {

    const [nome, onChangeNome] = React.useState('Nome da viagem');
    const [local, onChangeLocal] = React.useState('Local');
    const [descricao, onChangeDescricao] = React.useState('');

    let [fontsLoaded] = useFonts({
        Lato_700Bold,
        Lato_400Regular,
        Lato_300Light
    })

    return (
        <View style={styles.androidLarge1}>
            <Text style={styles.criarViagem}>Criar viagem</Text>
            <Text style={[styles.participantes, styles.profileLayout]}>
                Participantes
            </Text>
            <Text style={[styles.adicionar, styles.adicionarTypo]}>adicionar</Text>
            <Text style={[styles.adicionar1, styles.adicionarTypo]}>adicionar</Text>
            <Text style={[styles.guia, styles.profileLayout]}>Guia</Text>
            <Text style={[styles.descrioDaViagem, styles.profileLayout]}>
                Descrição da viagem
            </Text>
            <View style={[styles.rectangleParent, styles.groupLayout]}>
                <TextInput style={[styles.groupChild, styles.groupShadowBox]} onChangeText={onChangeNome} value={nome} clearTextOnFocus='true' />
            </View>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <TextInput style={[styles.groupItem, styles.groupShadowBox]} onChangeText={onChangeLocal} value={local} clearTextOnFocus='true' />
            </View>
            <View style={[styles.androidLarge1Inner, styles.innerLayout]}>
                <TextInput style={[styles.groupInner, styles.innerLayout]} onChangeText={onChangeDescricao} value={descricao} textAlignVertical={'top'} textAlign='left' />
            </View>
            <Image
                style={[styles.addNewIcon, styles.addIconLayout]}
                resizeMode="cover"
                source={require("../../assets/menu.svg")}
            />
            <Image
                style={[styles.addNewIcon1, styles.addIconLayout]}
                resizeMode="cover"
                source={require("../../assets/menu.svg")}
            />
            <Text style={styles.criar}>Criar</Text>
            <Pressable
                style={[styles.rectangleContainer, styles.rectangleLayout]}
                onPress={() => Criar(nome, local, descricao, navigation)}
            >
                <LinearGradient
                    style={[styles.rectangleLineargradient, styles.rectangleLayout]}
                    locations={[0, 1]}
                    colors={["#ffe855", "#ff0e00"]}
                    useAngle={true}
                    angle={135}
                />
                <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../../assets/vector1.svg")}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    profileLayout: {
        height: 24,
        position: "absolute",
    },
    adicionarTypo: {
        fontFamily: FontFamily.latoRegular,
        textAlign: "left",
        position: "absolute",
    },
    groupLayout: {
        height: 50,
        width: 300,
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
        backgroundColor: Color.colorWhite,
        fontFamily: FontFamily.latoBold,
        paddingHorizontal: 15,
        color: Color.colorSilver_100
    },
    profilePosition: {
        left: 0,
        top: 0,
    },
    innerLayout: {
        height: 156,
        width: 300,
        position: "absolute",
    },
    addIconLayout: {
        height: 80,
        width: 80,
        borderRadius: Border.br_81xl,
        right: 262,
        position: "absolute",
    },
    rectangleLayout: {
        width: 56,
        height: 34,
        position: "absolute",
    },
    criarViagem: {
        top: 27,
        left: 77,
        fontSize: 30,
        textAlign: "center",
        width: 206,
        height: 41,
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        position: "absolute",
    },
    participantes: {
        top: 261,
        width: 100,
        height: 24,
        textAlign: "left",
        fontSize: FontSize.size_base,
        left: 30,
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
    },
    adicionar: {
        top: 309,
        left: 90,
        fontFamily: FontFamily.latoRegular,
        height: 24,
        width: 100,
        fontSize: FontSize.size_base,
        color: Color.colorGray,
    },
    adicionar1: {
        top: 420,
        left: 90,
        fontFamily: FontFamily.latoRegular,
        height: 24,
        width: 100,
        fontSize: FontSize.size_base,
        color: Color.colorGray,
    },
    guia: {
        top: 369,
        width: 100,
        height: 24,
        textAlign: "left",
        fontSize: FontSize.size_base,
        left: 30,
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
    },
    descrioDaViagem: {
        top: 487,
        width: 151,
        textAlign: "left",
        fontSize: FontSize.size_base,
        height: 24,
        left: 30,
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
    },
    groupChild: {
        height: 50,
        width: 300,
        position: "absolute",
    },
    profile: {
        width: 24,
        height: 24,
        position: "absolute",
        overflow: "hidden",
    },
    nomeDaViagem: {
        top: 3,
        left: 27,
        fontSize: FontSize.size_mini,
        color: Color.colorSilver,
        width: 115,
        height: 18,
    },
    profileParent: {
        top: 13,
        left: 14,
        width: 143,
    },
    rectangleParent: {
        top: 96,
        left: 30,
    },
    groupItem: {
        height: 50,
        width: 300,
        position: "absolute",
    },
    rectangleGroup: {
        top: 175,
        left: 30,
    },
    groupInner: {
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
        backgroundColor: Color.colorWhite,
        fontFamily: FontFamily.latoBold,
        paddingHorizontal: 11,
        color: Color.colorBlack
    },
    androidLarge1Inner: {
        top: 522,
        left: 30,
    },
    addNewIcon: {
        bottom: 435,
        top: 285,
        left: 15
    },
    addNewIcon1: {
        bottom: 324,
        left: 15,
        top: 395
    },
    criar: {
        left: 208,
        fontSize: 25,
        width: 66,
        height: 34,
        top: 719,
        textAlign: "left",
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        position: "absolute",
    },
    rectangleLineargradient: {
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
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    rectangleContainer: {
        left: 274,
        top: 719,
        width: 56,
    },
    androidLarge1: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});
