import * as React from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
    TextInput
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../../GlobalStyles";
import { useFonts, Lato_700Bold, Lato_400Regular, Lato_300Light } from "@expo-google-fonts/lato";

export default function BuscarViagens({ navigation }) {

    const [pesquisa, onChangePesquisa] = React.useState('Pesquisar');

    const dataViagens = [
        { id: 1, nome: 'Viagem ano novo', local: 'Rio de janeiro, RJ', nomeLocal: 'Praia', participantes: [{ id: 1, nome: 'killua', img: '' }, { id: 1, nome: 'killua', img: '' }], Guia: '', criador: '' },
        { id: 2, nome: 'Viagem ano novo', local: 'Rio de janeiro, RJ', nomeLocal: 'Praia', participantes: [{ id: 1, nome: 'killua', img: '' }], participantesCount: 3, Guia: '', criador: '' }
    ]

    let [fontsLoaded] = useFonts({
        Lato_700Bold,
        Lato_400Regular,
        Lato_300Light
    })

    return (
        <View style={styles.viagensBusca}>
            <View style={styles.viagensBuscaInner}>
                <ScrollView
                    style={styles.frameParent}
                    vertical={true}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.frameScrollViewContent}
                >
                    {dataViagens.map((item) => (
                        <View key={item.id} style={styles.margin}>
                            <View style={styles.viagensRet}>
                                <View
                                    style={[styles.viagensRetChild, styles.turismo1IconLayout]}
                                />
                            </View>
                            <Text style={[styles.nomeDoLocal, styles.localLayout]}>
                                {item.nomeLocal}
                            </Text>
                            <Text style={[styles.participantes, styles.guiaTypo]}>
                                Participantes:
                            </Text>
                            <Text style={[styles.guia, styles.guiaTypo]}>Guia:</Text>
                            <View style={styles.localDaViagemParent}>
                                <Text style={[styles.localDaViagem, styles.localDaViagemTypo]}>
                                    {item.local}
                                </Text>
                                <Image
                                    style={[styles.mapPinIcon, styles.mapIconPosition]}
                                    resizeMode="cover"
                                    source={require("../../assets/map-pin2.svg")}
                                />
                            </View>
                            <Text style={[styles.nomeDaViagem, styles.nomeDaViagemLayout]}>
                                {item.nome}
                            </Text>
                            <Image
                                style={[styles.turismo1Icon, styles.turismo1IconLayout]}
                                resizeMode="cover"
                                source={require("../../assets/turismo-1.png")}
                            />
                            <View style={styles.groupParent}>
                                {item.participantes.map((item, index) => {
                                    if (index == 0) {
                                        return (
                                            <View style={[styles.ellipseContainer, styles.groupViewPosition]}>
                                                <Image
                                                    style={[styles.groupChild, styles.groupParentLayout]}
                                                    resizeMode="cover"
                                                    source={require("../../assets/ellipse-preto.svg")}
                                                />
                                                <Image
                                                    style={styles.killuaGi1Icon}
                                                    resizeMode="cover"
                                                    source={require("../../assets/killua.png")}
                                                />
                                            </View>)
                                    } else if (index == 1) {
                                        return (
                                            <View style={[styles.ellipseGroup, styles.groupParentLayout]}>
                                                <Image
                                                    style={[styles.groupChild, styles.groupParentLayout]}
                                                    resizeMode="cover"
                                                    source={require("../../assets/ellipse-preto.svg")}
                                                />
                                                <Image
                                                    style={styles.killuaGi1Icon}
                                                    resizeMode="cover"
                                                    source={require("../../assets/killua.png")}
                                                />
                                            </View>
                                        )
                                    } else if (index == 2) {
                                        return (
                                            <View style={[styles.ellipseParent, styles.groupParentLayout]}>
                                                <Image
                                                    style={[styles.groupChild, styles.groupParentLayout]}
                                                    resizeMode="cover"
                                                    source={require("../../assets/ellipse-preto.svg")}
                                                />
                                                <Image
                                                    style={styles.killuaGi1Icon}
                                                    resizeMode="cover"
                                                    source={require("../../assets/killua.png")}
                                                />
                                            </View>
                                        )
                                    } else if (index == 3) {
                                        return (
                                            <View style={[styles.groupView, styles.groupViewPosition]}>
                                                <Image
                                                    style={[styles.groupChild, styles.groupParentLayout]}
                                                    resizeMode="cover"
                                                    source={require("../../assets/ellipse-preto.svg")}
                                                />
                                                <Image
                                                    style={styles.killuaGi1Icon}
                                                    resizeMode="cover"
                                                    source={require("../../assets/killua.png")}
                                                />
                                            </View>
                                        )
                                    }
                                })}
                                {item.participantesCount &&
                                    <Text style={[styles.eMais2Container, styles.localDaViagemTypo]}>
                                        {`E mais `}
                                        <Text style={styles.text}>{item.participantesCount}</Text>.
                                    </Text>
                                }
                                <View style={[styles.groupChild, styles.groupParentLayout]}>
                                    <Image
                                        style={[styles.groupChild, styles.groupParentLayout]}
                                        resizeMode="cover"
                                        source={require("../../assets/ellipse-amarelo.svg")}
                                    />
                                    <Image
                                        style={styles.killuaGi1Icon}
                                        resizeMode="cover"
                                        source={require("../../assets/killua.png")}
                                    />
                                </View>
                            </View>
                            <View style={[styles.ellipseParent2, styles.groupParentLayout]}>
                                <Image
                                    style={[styles.groupChild, styles.groupParentLayout]}
                                    resizeMode="cover"
                                    source={require("../../assets/ellipse-preto.svg")}
                                />
                                <Image
                                    style={styles.killuaGi1Icon}
                                    resizeMode="cover"
                                    source={require("../../assets/gon.png")}
                                />
                            </View>
                        </View>))}
                </ScrollView>
            </View>
            <Pressable style={styles.addNew} onPress={() => navigation.navigate('CriarViagem')}>
                <Image
                    style={[styles.icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/addnew.svg")}
                />
            </Pressable>
            <View style={[styles.rectangleParent, styles.groupChild27Layout]}>
                <TextInput style={[styles.groupChild27, styles.groupChild27Layout]} onChangeText={onChangePesquisa} value={pesquisa} clearTextOnFocus='true' />
                <Image
                    style={[styles.iconssearch24px, styles.profileLayout]}
                    resizeMode="cover"
                    source={require("../../assets/iconssearch.svg")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    margin: {
        marginVertical: 10
    },
    frameScrollViewContent: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    turismo1IconLayout: {
        borderRadius: Border.br_mini,
        position: "absolute",
    },
    localLayout: {
        width: 107,
        height: 14,
    },
    guiaTypo: {
        width: 56,
        color: Color.colorBlack,
        fontSize: FontSize.size_4xs,
        height: 11,
        textAlign: "left",
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        left: 157,
        position: "absolute",
    },
    localDaViagemTypo: {
        fontFamily: FontFamily.latoLight,
        fontWeight: "500",
        textAlign: "left",
        color: Color.colorDarkgray,
        position: "absolute",
    },
    mapIconPosition: {
        width: 9,
        top: 1,
        left: 0,
        position: "absolute",
    },
    nomeDaViagemLayout: {
        height: 24,
        position: "absolute",
    },
    groupParentLayout: {
        height: 30,
        width: 30,
        position: "absolute",
    },
    groupViewPosition: {
        left: 39,
        height: 30,
        width: 30,
        position: "absolute",
    },
    iconLayout: {
        height: "100%",
        width: "100%",
    },
    groupChild27Layout: {
        height: 50,
        width: 300,
        position: "absolute",
    },
    profileLayout: {
        width: 24,
        height: 24,
        position: "absolute",
    },
    viagensRetChild: {
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        backgroundColor: Color.colorWhitesmoke,
        height: "100%",
        width: "100%",
    },
    viagensRet: {
        height: 209,
        zIndex: 0,
        width: 300,
    },
    nomeDoLocal: {
        top: 29,
        fontSize: FontSize.size_2xs,
        zIndex: 1,
        height: 14,
        textAlign: "left",
        color: Color.colorDarkgray,
        width: 107,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        left: 157,
        position: "absolute",
    },
    participantes: {
        top: 66,
        zIndex: 2,
        height: 11,
    },
    guia: {
        top: 152,
        zIndex: 3,
        height: 11,
    },
    localDaViagem: {
        left: 11,
        fontSize: FontSize.size_3xs,
        top: 0,
        height: 14,
        width: 107,
    },
    mapPinIcon: {
        height: 13,
    },
    localDaViagemParent: {
        top: 48,
        width: 118,
        zIndex: 4,
        height: 14,
        left: 157,
        position: "absolute",
    },
    nomeDaViagem: {
        top: 15,
        fontSize: FontSize.size_sm,
        color: Color.colorGray,
        width: 122,
        zIndex: 5,
        textAlign: "left",
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        height: 24,
        left: 157,
    },
    turismo1Icon: {
        top: 9,
        left: 8,
        width: 136,
        height: 192,
        zIndex: 6,
    },
    groupChild: {
        top: 0,
        left: 0,
    },
    killuaGi1Icon: {
        top: 2,
        left: 2,
        borderRadius: Border.br_7xl,
        width: 26,
        height: 26,
        position: "absolute",
    },
    ellipseParent: {
        top: 36,
        left: 0,
    },
    ellipseGroup: {
        left: 78,
        top: 0,
    },
    ellipseContainer: {
        top: 0,
    },
    text: {
        textDecoration: "underline",
    },
    eMais2Container: {
        top: 45,
        left: 79,
        fontSize: FontSize.size_6xs,
        width: 33,
        height: 10,
    },
    groupView: {
        top: 36,
    },
    groupParent: {
        top: 79,
        width: 112,
        height: 66,
        zIndex: 7,
        left: 157,
        position: "absolute",
    },
    ellipseParent2: {
        top: 165,
        zIndex: 8,
        left: 157,
    },
    viagensRetGroup: {
        marginTop: 21,
    },
    mapPinIcon3: {
        height: 11,
    },
    frameParent: {
        top: 20,
        left: 30,
        position: "absolute",
        flex: 1,
        height: 800,
        width: 400,
        paddingVertical: 20
    },
    viagensBuscaInner: {
        top: 77,
        width: 360,
        height: 723,
        left: 0,
        position: "absolute",
    },
    icon: {
        borderRadius: 100,
    },
    addNew: {
        right: 0,
        bottom: 0,
        width: 80,
        height: 80,
        position: "absolute",
        top: 770
    },
    groupChild27: {
        borderRadius: 40,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowRadius: 20,
        elevation: 20,
        shadowOpacity: 1,
        top: 0,
        left: 0,
        backgroundColor: Color.colorWhite,
        height: 50,
        fontFamily: FontFamily.latoBold,
        paddingHorizontal: 11,
        color: Color.colorSilver_100
    },
    profile: {
        top: 0,
        left: 0,
        overflow: "hidden",
    },
    pesquisar: {
        top: 3,
        fontSize: 15,
        fontFamily: FontFamily.latoRegular,
        color: "#c8c8c8",
        width: 115,
        height: 18,
        textAlign: "left",
        left: 0,
        position: "absolute",
    },
    profileParent: {
        left: 14,
        width: 143,
        top: 13,
    },
    iconssearch24px: {
        left: 259,
        top: 13,
    },
    rectangleParent: {
        top: 52,
        left: 30,
    },
    viagensBusca: {
        height: 800,
        overflow: "hidden",
        width: "100%",
        flex: 1,
        backgroundColor: Color.colorWhite,
    },
});
