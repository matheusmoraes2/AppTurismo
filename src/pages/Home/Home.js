import * as React from "react";
import { Image, StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../../../GlobalStyles";
import { useFonts, Lato_700Bold, Lato_400Regular } from "@expo-google-fonts/lato";

export default function Home({ navigation }) {
    const [menu, onChangeMenu] = React.useState(false);

    const dataReco = [
        { id: 1, nome: 'Recife', descricao: 'cidade muito legal e bonita' },
        { id: 2, nome: 'Recife', descricao: 'cidade muito legal e bonita' },
        { id: 3, nome: 'Recife', descricao: 'cidade muito legal e bonita' },
        { id: 4, nome: 'Recife', descricao: 'cidade muito legal e bonita' },
        { id: 5, nome: 'Recife', descricao: 'cidade muito legal e bonita' }
    ]
    const dataGuia = [
        { id: 1, nome: 'Gon Freecs', local: 'Recife, PE', },
        { id: 2, nome: 'Gon Freecs', local: 'Recife, PE' },
        { id: 3, nome: 'Gon Freecs', local: 'Recife, PE' },
        { id: 4, nome: 'Gon Freecs', local: 'Recife, PE' }
    ]

    const dataPosts = [
        { id: 1, nome: 'Leorio', tag: 'Leorio', likes: 30, body: 'Viagem para Fernando de noronha' }
    ]

    let [fontsLoaded] = useFonts({
        Lato_700Bold,
        Lato_400Regular
    })

    return (
        <View style={styles.home}>
            <ScrollView vertical={true}>
                <Image
                    style={[styles.homeChild, styles.homeChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/ellipse-6.svg")}
                />
                <Image
                    style={[styles.leorio1Icon, styles.leorio1IconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/gon.png")}
                />
                <Image
                    style={styles.image2Icon}
                    resizeMode="cover"
                    source={require("../../assets/config.svg")}
                />
                <Text style={[styles.recomendaoDeLocais, styles.hTypo]}>
                    Recomendação de locais
                </Text>
                <Text style={[styles.guiasTuristicos, styles.postagensTypo]}>
                    Guias turisticos
                </Text>
                <Text style={[styles.postagens, styles.postagensTypo]}>Postagens</Text>
                <Text style={styles.verMais}>Ver mais</Text>
                <View style={[styles.homeInner, styles.homeInnerLayout]}>
                    <ScrollView
                        style={styles.frameParent}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={true}
                        contentContainerStyle={styles.frameScrollViewContent}
                        rende
                    >
                        {dataReco.map((item) =>
                            <View key={item.id} style={styles.b5b667cbda1c71e008b45af1Group}>
                                <Image
                                    style={styles.b5b667cbda1c71e008b45af1Icon}
                                    resizeMode="cover"
                                    source={require("../../assets/5b5b667cbda1c71e008b45af-1.png")}
                                />
                                <Text style={[styles.nomeDoLugar, styles.leorioTypo]}>
                                    {item.nome}
                                </Text>
                                <Text
                                    style={[styles.resumoDaDescrio, styles.resumoDaDescrioPosition]}
                                >
                                    {item.descricao}
                                </Text>
                                <Image
                                    style={[styles.heartButtonIcon, styles.textPosition]}
                                    resizeMode="cover"
                                    source={require("../../assets/heart-button.svg")}
                                />
                            </View>
                        )}
                    </ScrollView>
                </View>
                <View style={[styles.frameView, styles.homeInnerLayout]}>
                    <ScrollView
                        style={styles.frameGroup}
                        vertical={true}
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.frameScrollView2Content}
                    >
                        {dataGuia.map((item) => (
                            <View key={item.id} style={styles.marginGuia}>
                                <View style={styles.rectangleWrapper}>
                                    <View
                                        style={[styles.instanceChild, styles.instanceChildShadowBox]}
                                    />
                                </View>
                                <Image
                                    style={[
                                        styles.photo50645848012138518961Icon,
                                        styles.nomeGuiaTuristicoPosition,
                                    ]}
                                    resizeMode="cover"
                                    source={require("../../assets/gon.png")}
                                />
                                <Text
                                    style={[
                                        styles.nomeGuiaTuristico,
                                        styles.nomeGuiaTuristicoPosition,
                                    ]}
                                >
                                    {item.nome}
                                </Text>
                                <Text style={[styles.text, styles.textPosition]}>5.0</Text>
                                <Text style={[styles.localOndeFica, styles.localTypo]}>
                                    {item.local}
                                </Text>
                                <Image
                                    style={[styles.mapPinIcon, styles.mapIconLayout]}
                                    resizeMode="cover"
                                    source={require("../../assets/map-pin.svg")}
                                />
                                <View style={styles.icons8Star481Parent}>
                                    <Image
                                        style={styles.icons8Layout}
                                        resizeMode="cover"
                                        source={require("../../assets/iconsStar.svg")}
                                    />
                                    <Image
                                        style={[styles.icons8Star482, styles.icons8Layout]}
                                        resizeMode="cover"
                                        source={require("../../assets/iconsStar.svg")}
                                    />
                                    <Image
                                        style={[styles.icons8Star482, styles.icons8Layout]}
                                        resizeMode="cover"
                                        source={require("../../assets/iconsStar.svg")}
                                    />
                                    <Image
                                        style={[styles.icons8Star482, styles.icons8Layout]}
                                        resizeMode="cover"
                                        source={require("../../assets/iconsStar.svg")}
                                    />
                                    <Image
                                        style={[styles.icons8Star482, styles.icons8Layout]}
                                        resizeMode="cover"
                                        source={require("../../assets/iconsStar.svg")}
                                    />
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={[styles.homeInner1, styles.lineIconLayout]}>
                    <ScrollView
                        style={styles.groupParent}
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.frameScrollView3Content}
                    >
                        {dataPosts.map((item) => (
                            <View key={item.id} style={styles.iconsmoreLayout}>
                                <Image
                                    style={styles.iconsmoreVert24px}
                                    resizeMode="cover"
                                    source={require("../../assets/3pontos.svg")}
                                />
                                <View style={[styles.leorioParent, styles.frameItemLayout]}>
                                    <Text style={[styles.leorio, styles.text4Typo]}>{item.nome}</Text>
                                    <Text style={[styles.leorio1, styles.leorioTypo]}>{item.tag}</Text>
                                    <Text style={[styles.h, styles.leorioTypo]}>2h</Text>
                                    <Image
                                        style={[styles.icons01, styles.iconsLayout]}
                                        resizeMode="cover"
                                        source={require("../../assets/ponto.svg")}
                                    />
                                </View>
                                <View >
                                    <Text style={[styles.viagemParaFernando, styles.text4Typo]} >
                                        {item.body}
                                    </Text>
                                </View>
                                <View style={[
                                    { marginTop: 0 }
                                ]}>
                                    <Image
                                        style={[
                                            styles.b3a287afA9ae485d8c069bd811Icon,
                                            styles.vectorParentPosition
                                        ]}
                                        resizeMode="cover"
                                        source={require("../../assets/foto_post.png")}
                                    />
                                    <Image
                                        style={[styles.heartButtonIcon3, styles.heartIconPosition]}
                                        resizeMode="cover"
                                        source={require("../../assets/heart-button.svg")}
                                    />
                                    <Text style={[styles.text4, styles.text4Typo]}>{item.likes}</Text>
                                </View>
                                <Image
                                    style={[styles.groupChild, styles.homeItemLayout]}
                                    resizeMode="cover"
                                    source={require("../../assets/line_post.svg")}
                                />
                                <View style={[styles.vectorParent, styles.vectorParentPosition]}>
                                    <Image
                                        style={[styles.groupItem, styles.homeChildLayout]}
                                        resizeMode="cover"
                                        source={require("../../assets/ellipse-7.svg")}
                                    />
                                    <Image
                                        style={[styles.leorio1Icon1, styles.leorio1IconLayout]}
                                        resizeMode="cover"
                                        source={require("../../assets/leorio-1.png")}
                                    />
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <Image
                    style={[styles.homeItem, styles.homeItemLayout]}
                    resizeMode="cover"
                    source={require("../../assets/line_post.svg")}
                />
            </ScrollView>
            <View style={[styles.frameContainerPosition]}>
                <Pressable onPress={() => onChangeMenu(!menu)}>
                    <Image
                        style={styles.frameChild}
                        resizeMode="cover"
                        source={require("../../assets/menu.svg")}
                    />
                </Pressable>
            </View>
            {menu == true &&
                <View style={styles.ellipseGroup}>
                    <Pressable onPress={() => { }}>
                        <Image
                            style={styles.frameInner}
                            resizeMode="cover"
                            source={require("../../assets/botao-post.svg")}
                        />
                    </Pressable>
                </View>
            }
            {menu == true &&
                <View style={styles.ellipseGroup1}>
                    <Pressable onPress={() => navigation.navigate('BuscarViagens')}>
                        <Image
                            style={styles.frameInner}
                            resizeMode="cover"
                            source={require("../../assets/botao-viagem.svg")}
                        />
                    </Pressable>
                </View>
            }
            {menu == true &&
                <View style={styles.ellipseGroup2}>
                    <Pressable onPress={() => navigation.navigate('')}>
                        <Image
                            style={styles.frameInner}
                            resizeMode="cover"
                            source={require("../../assets/botao-amigos.svg")}
                        />
                    </Pressable>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    ellipseGroup2: {
        top: 515,
        left: 280,
        position: "absolute",
    },
    frameScrollView3Content: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    frameScrollView1Content: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    frameScrollViewContent: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    frameScrollView2Content: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    homeChildLayout: {
        height: 50,
        width: 50,
    },
    leorio1IconLayout: {
        height: 40,
        width: 40,
        borderRadius: Border.br_31xl,
        position: "absolute",
    },
    hTypo: {
        textAlign: "left",
        fontFamily: FontFamily.latoBold,
    },
    postagensTypo: {
        height: 33,
        width: 172,
        textAlign: "left",
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        fontSize: FontSize.size_5xl,
        position: "absolute",
    },
    homeInnerLayout: {
        height: 350,
        position: "absolute",
    },
    leorioTypo: {
        fontSize: FontSize.size_base,
        fontWeight: "700",
    },
    resumoDaDescrioPosition: {
        zIndex: 2,
        textAlign: "left",
    },
    textPosition: {
        zIndex: 3,
        position: "absolute",
    },
    instanceChildShadowBox: {
        shadowOpacity: 1,
        elevation: 15,
        shadowRadius: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
    },
    nomeGuiaTuristicoPosition: {
        top: 10,
        position: "absolute",
    },
    localTypo: {
        width: 137,
        left: 142,
        color: Color.colorDarkgray,
        fontSize: FontSize.size_sm,
        height: 17,
        textAlign: "left",
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        position: "absolute",
    },
    mapIconLayout: {
        height: 18,
        width: 15,
        position: "absolute",
    },
    icons8Layout: {
        height: 20,
        width: 20,
    },
    lineIconLayout: {
        width: 360,
        position: "absolute",
    },
    frameItemLayout: {
        height: 35,
        position: "absolute",
    },
    text4Typo: {
        color: Color.colorBlack,
        textAlign: "left",
        fontFamily: FontFamily.latoBold,
        position: "absolute",
    },
    iconsLayout: {
        height: 8,
        width: 8,
        left: 69,
        position: "absolute",
    },
    vectorParentPosition: {
        left: 28,
        position: "absolute",
    },
    homeItemLayout: {
        height: 1,
        width: 360,
        left: 0,
        position: "absolute",
    },
    heartIconPosition: {
        left: 37,
        height: 32,
        width: 32,
        position: "absolute",
    },
    iconsmoreLayout: {
        height: 379,
        width: 360
    },
    iconLayout: {
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    frameContainerPosition: {
        top: 770,
        left: 280,
        position: "absolute",
    },
    homeChild: {
        left: 17,
        top: 22,
        position: "absolute",
    },
    leorio1Icon: {
        top: 27,
        left: 22,
    },
    image2Icon: {
        top: 34,
        left: 321,
        width: 25,
        height: 25,
        position: "absolute",
    },
    recomendaoDeLocais: {
        top: 138,
        width: 269,
        height: 38,
        color: Color.colorGray,
        fontWeight: "700",
        textAlign: "left",
        fontSize: FontSize.size_5xl,
        left: 21,
        position: "absolute",
    },
    guiasTuristicos: {
        top: 629,
        left: 17,
    },
    postagens: {
        top: 1095,
        left: 21,
    },
    verMais: {
        top: 641,
        left: 193,
        fontSize: 12,
        textDecoration: "underline",
        width: 47,
        height: 17,
        fontFamily: FontFamily.latoRegular,
        textAlign: "left",
        color: Color.colorGray,
        position: "absolute",
    },
    b5b667cbda1c71e008b45af1Icon: {
        height: 251,
        zIndex: 0,
        width: 199,
        borderRadius: Border.br_3xs,
    },
    nomeDoLugar: {
        width: 122,
        marginTop: 11,
        zIndex: 1,
        height: 24,
        textAlign: "left",
        fontFamily: FontFamily.latoBold,
        color: Color.colorGray,
    },
    resumoDaDescrio: {
        height: 53,
        color: Color.colorDarkgray,
        fontSize: FontSize.size_sm,
        marginTop: 11,
        width: 199,
        fontFamily: FontFamily.latoRegular,
        zIndex: 2,
    },
    heartButtonIcon: {
        top: 210,
        left: 9,
        height: 32,
        width: 32,
        zIndex: 3,
    },
    b5b667cbda1c71e008b45af1Parent: {
        flex: 1,
    },
    b5b667cbda1c71e008b45af1Group: {
        marginLeft: 27,
    },
    frameParent: {
        left: 0,
        top: 0,
        position: "absolute",
        width: "100%",
    },
    homeInner: {
        top: 190,
        width: 339,
        left: 21,
    },
    instanceChild: {
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_mini,
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        elevation: 15,
        shadowRadius: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
        width: "100%",
    },
    rectangleWrapper: {
        width: 317,
        height: 135,
        zIndex: 0,
    },
    photo50645848012138518961Icon: {
        left: 16,
        width: 90,
        height: 110,
        zIndex: 1,
        borderRadius: Border.br_3xs,
    },
    nomeGuiaTuristico: {
        width: 152,
        left: 120,
        zIndex: 2,
        textAlign: "left",
        height: 24,
        fontSize: FontSize.size_base,
        fontWeight: "700",
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        top: 10,
    },
    text: {
        top: 94,
        left: 239,
        width: 21,
        height: 16,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        fontFamily: FontFamily.latoBold,
        color: Color.colorGray,
        fontWeight: "700",
    },
    localOndeFica: {
        top: 38,
        zIndex: 4,
    },
    localOndeFica1: {
        zIndex: 5,
        top: 60,
    },
    mapPinIcon: {
        top: 37,
        zIndex: 6,
        left: 120,
    },
    mapPinIcon1: {
        left: 121,
        zIndex: 7,
        top: 60,
    },
    icons8Star482: {
        marginLeft: 4,
    },
    icons8Star481Parent: {
        top: 92,
        zIndex: 8,
        flexDirection: "row",
        left: 120,
        position: "absolute",
    },
    instanceItem: {
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_mini,
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        elevation: 15,
        shadowRadius: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
        width: "100%",
    },
    instanceGroup: {
        marginTop: 23,
    },
    instanceInner: {
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_mini,
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        elevation: 15,
        shadowRadius: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
        width: "100%",
    },
    instanceChild1: {
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_mini,
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        elevation: 15,
        shadowRadius: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
        width: "100%",
    },
    frameGroup: {
        left: 14,
        top: 0,
        position: "absolute",
        flex: 1,
        height: 400,
        width: 400,
        paddingHorizontal: 10,
    },
    frameView: {
        top: 676,
        left: 3,
        width: 343,
    },
    iconsmoreVert24px: {
        top: 15,
        left: 310,
        width: 24,
        height: 24,
        position: "absolute",
    },
    leorio: {
        fontSize: FontSize.size_base,
        fontWeight: "700",
        left: 0,
        top: 0,
    },
    leorio1: {
        top: 16,
        color: Color.colorDarkgray,
        left: 0,
        textAlign: "left",
        fontFamily: FontFamily.latoBold,
        position: "absolute",
    },
    h: {
        left: 91,
        color: Color.colorDarkgray,
        top: 0,
        textAlign: "left",
        fontFamily: FontFamily.latoBold,
        position: "absolute",
    },
    icons01: {
        top: 8,
    },
    leorioParent: {
        width: 110,
        left: 90,
        top: 11,
    },
    viagemParaFernando: {
        top: 59,
        width: 245,
        height: 48,
        left: 90,
        fontSize: FontSize.size_base,
        fontWeight: "700"
    },
    b3a287afA9ae485d8c069bd811Icon: {
        top: 103,
        width: 306,
        height: 234,
        borderRadius: Border.br_3xs,
    },
    groupChild: {
        top: 0,
    },
    groupItem: {
        left: 0,
        top: 0,
        position: "absolute",
    },
    leorio1Icon1: {
        top: 5,
        left: 5,
    },
    vectorParent: {
        top: 11,
        height: 50,
        width: 50,
    },
    text4: {
        top: 354,
        left: 74,
        fontWeight: "600",
        fontSize: FontSize.size_sm,
    },
    heartButtonIcon3: {
        top: 347,
    },
    heartButtonIcon4: {
        top: 730,
    },
    iconsmoreVert24pxGroup: {
        marginTop: 5,
    },
    icons012: {
        top: 16,
    },
    lineIcon: {
        height: 0,
        left: 0,
        top: 0,
    },
    groupParent: {
        left: 0,
        top: 0,
        position: "absolute",
        flex: 1,
    },
    homeInner1: {
        left: 1,
        height: 703,
        top: 1134,
    },
    homeItem: {
        top: 1134,
    },
    androidNavBarIcon: {
        right: 0,
        bottom: 0,
        height: 48,
        left: 0,
    },
    frameChild: {
        width: 100,
        height: 100,
        zIndex: 0,
    },
    frameItem: {
        left: 18,
        width: 35,
        zIndex: 1,
        top: 22,
    },
    ellipseParent: {
        flexDirection: "row",
    },
    frameInner: {
        width: 100,
        height: 100,
        zIndex: 0,
    },
    icon: {
        height: "28.56%",
        width: "28.57%",
        top: "35.71%",
        right: "35.71%",
        bottom: "35.73%",
        left: "35.71%",
        maxHeight: "100%",
        zIndex: 1,
    },
    ellipseGroup: {
        top: 685,
        left: 280,
        position: "absolute",
    },
    ellipseGroup1: {
        top: 600,
        left: 280,
        position: "absolute",
    },
    icons8Airplane1001: {
        top: 20,
        width: 30,
        height: 30,
        zIndex: 1,
    },
    frameContainer: {
        top: 665,
        flexDirection: "row",
        shadowOpacity: 1,
        elevation: 15,
        shadowRadius: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
    },
    home: {
        backgroundColor: "#fff",
        height: 1885,
        overflow: "hidden",
        width: "100%",
        flex: 1,
    },
    marginGuia: {
        marginVertical: 10,
    },
    postStyleText: {
        flex: 1,
    },
    menuButton: {

    }
});
