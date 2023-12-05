import * as React from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";
import { useFonts, Lato_700Bold, Lato_400Regular, Lato_300Light } from "@expo-google-fonts/lato";
import axios from "axios";
import config from "../../../config.json"

export default function Amigos({ navigation }) {

    let [fontsLoaded] = useFonts({
        Lato_700Bold,
        Lato_400Regular,
        Lato_300Light
    })

    return (
        <View style={styles.amigos}>
            <View style={styles.amigosInner}>
                <ScrollView
                    style={styles.groupParent}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.frameScrollViewContent}
                >
                    <View style={[styles.leorioParent, styles.leorioLayout]}>
                        <Text style={[styles.leorio, styles.leorioTypo]}>Leorio</Text>
                        <Text style={[styles.amigos1, styles.amigosLayout]}>
                            <Text style={styles.text}>12</Text> amigos
                        </Text>
                        <Text style={[styles.viagens, styles.viagensTypo]}>4 Viagens</Text>
                        <Image
                            style={[styles.leorio1Icon, styles.groupChildPosition]}
                            resizeMode="cover"
                            source={require("../assets/leorio-1.png")}
                        />
                        <View style={[styles.rectangleParent, styles.amigos10Layout]}>
                            <LinearGradient
                                style={[styles.groupChild, styles.amigos10Layout]}
                                locations={[0, 1]}
                                colors={["#ffe855", "#ff0e00"]}
                                useAngle={true}
                                angle={135}
                            />
                            <Image
                                style={styles.image8Icon}
                                resizeMode="cover"
                                source={require("../assets/image-8.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.leorioGroup, styles.leorioLayout]}>
                        <Text style={[styles.leorio, styles.leorioTypo]}>Leorio</Text>
                        <Text style={[styles.amigos2, styles.amigosLayout]}>
                            <Text style={styles.text}>12</Text> amigos
                        </Text>
                        <Text style={[styles.viagens1, styles.viagensTypo]}>4 Viagens</Text>
                        <View style={[styles.rectangleParent, styles.amigos10Layout]}>
                            <LinearGradient
                                style={[styles.groupChild, styles.amigos10Layout]}
                                locations={[0, 1]}
                                colors={["#ffe855", "#ff0e00"]}
                                useAngle={true}
                                angle={135}
                            />
                            <Image
                                style={styles.image8Icon}
                                resizeMode="cover"
                                source={require("../assets/image-81.png")}
                            />
                        </View>
                        <Image
                            style={[styles.leorio1Icon, styles.groupChildPosition]}
                            resizeMode="cover"
                            source={require("../assets/gothamknights1-ers7-1.png")}
                        />
                    </View>
                    <View style={[styles.leorioGroup, styles.leorioLayout]}>
                        <Text style={[styles.leorio, styles.leorioTypo]}>Leorio</Text>
                        <Text style={[styles.amigos2, styles.amigosLayout]}>
                            <Text style={styles.text}>12</Text> amigos
                        </Text>
                        <Text style={[styles.viagens1, styles.viagensTypo]}>4 Viagens</Text>
                        <Image
                            style={[styles.leorio1Icon, styles.groupChildPosition]}
                            resizeMode="cover"
                            source={require("../assets/leorio-11.png")}
                        />
                        <View style={[styles.rectangleParent, styles.amigos10Layout]}>
                            <LinearGradient
                                style={[styles.groupChild, styles.amigos10Layout]}
                                locations={[0, 1]}
                                colors={["#ffe855", "#ff0e00"]}
                                useAngle={true}
                                angle={135}
                            />
                            <Image
                                style={styles.image8Icon}
                                resizeMode="cover"
                                source={require("../assets/image-82.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.leorioGroup, styles.leorioLayout]}>
                        <Text style={[styles.leorio, styles.leorioTypo]}>Leorio</Text>
                        <Text style={[styles.amigos2, styles.amigosLayout]}>
                            <Text style={styles.text}>12</Text> amigos
                        </Text>
                        <Text style={[styles.viagens1, styles.viagensTypo]}>4 Viagens</Text>
                        <Image
                            style={[styles.leorio1Icon, styles.groupChildPosition]}
                            resizeMode="cover"
                            source={require("../assets/leorio-12.png")}
                        />
                        <View style={[styles.rectangleParent, styles.amigos10Layout]}>
                            <LinearGradient
                                style={[styles.groupChild, styles.amigos10Layout]}
                                locations={[0, 1]}
                                colors={["#ffe855", "#ff0e00"]}
                                useAngle={true}
                                angle={135}
                            />
                            <Image
                                style={styles.image8Icon}
                                resizeMode="cover"
                                source={require("../assets/image-83.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.leorioGroup, styles.leorioLayout]}>
                        <Text style={[styles.leorio, styles.leorioTypo]}>Leorio</Text>
                        <Text style={[styles.amigos2, styles.amigosLayout]}>
                            <Text style={styles.text}>12</Text> amigos
                        </Text>
                        <Text style={[styles.viagens1, styles.viagensTypo]}>4 Viagens</Text>
                        <Image
                            style={[styles.leorio1Icon, styles.groupChildPosition]}
                            resizeMode="cover"
                            source={require("../assets/leorio-13.png")}
                        />
                        <View style={[styles.rectangleParent, styles.amigos10Layout]}>
                            <LinearGradient
                                style={[styles.groupChild, styles.amigos10Layout]}
                                locations={[0, 1]}
                                colors={["#ffe855", "#ff0e00"]}
                                useAngle={true}
                                angle={135}
                            />
                            <Image
                                style={styles.image8Icon}
                                resizeMode="cover"
                                source={require("../assets/image-84.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.leorioGroup, styles.leorioLayout]}>
                        <Text style={[styles.leorio, styles.leorioTypo]}>Leorio</Text>
                        <Text style={[styles.amigos2, styles.amigosLayout]}>
                            <Text style={styles.text}>12</Text> amigos
                        </Text>
                        <Text style={[styles.viagens1, styles.viagensTypo]}>4 Viagens</Text>
                        <Image
                            style={[styles.leorio1Icon, styles.groupChildPosition]}
                            resizeMode="cover"
                            source={require("../assets/leorio-14.png")}
                        />
                        <View style={[styles.rectangleParent, styles.amigos10Layout]}>
                            <LinearGradient
                                style={[styles.groupChild, styles.amigos10Layout]}
                                locations={[0, 1]}
                                colors={["#ffe855", "#ff0e00"]}
                                useAngle={true}
                                angle={135}
                            />
                            <Image
                                style={styles.image8Icon}
                                resizeMode="cover"
                                source={require("../assets/image-85.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.leorioGroup, styles.leorioLayout]}>
                        <Text style={[styles.leorio, styles.leorioTypo]}>Leorio</Text>
                        <Text style={[styles.amigos2, styles.amigosLayout]}>
                            <Text style={styles.text}>12</Text> amigos
                        </Text>
                        <Text style={[styles.viagens1, styles.viagensTypo]}>4 Viagens</Text>
                        <Image
                            style={[styles.leorio1Icon, styles.groupChildPosition]}
                            resizeMode="cover"
                            source={require("../assets/leorio-15.png")}
                        />
                        <View style={[styles.rectangleParent, styles.amigos10Layout]}>
                            <LinearGradient
                                style={[styles.groupChild, styles.amigos10Layout]}
                                locations={[0, 1]}
                                colors={["#ffe855", "#ff0e00"]}
                                useAngle={true}
                                angle={135}
                            />
                            <Image
                                style={styles.image8Icon}
                                resizeMode="cover"
                                source={require("../assets/image-86.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.leorioGroup, styles.leorioLayout]}>
                        <Text style={[styles.leorio, styles.leorioTypo]}>Leorio</Text>
                        <Text style={[styles.amigos2, styles.amigosLayout]}>
                            <Text style={styles.text}>12</Text> amigos
                        </Text>
                        <Text style={[styles.viagens1, styles.viagensTypo]}>4 Viagens</Text>
                        <Image
                            style={[styles.leorio1Icon, styles.groupChildPosition]}
                            resizeMode="cover"
                            source={require("../assets/leorio-16.png")}
                        />
                        <View style={[styles.rectangleParent, styles.amigos10Layout]}>
                            <LinearGradient
                                style={[styles.groupChild, styles.amigos10Layout]}
                                locations={[0, 1]}
                                colors={["#ffe855", "#ff0e00"]}
                                useAngle={true}
                                angle={135}
                            />
                            <Image
                                style={styles.image8Icon}
                                resizeMode="cover"
                                source={require("../assets/image-87.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.leorioGroup, styles.leorioLayout]}>
                        <Text style={[styles.leorio, styles.leorioTypo]}>Leorio</Text>
                        <Text style={[styles.amigos2, styles.amigosLayout]}>
                            <Text style={styles.text}>12</Text> amigos
                        </Text>
                        <Text style={[styles.viagens1, styles.viagensTypo]}>4 Viagens</Text>
                        <Image
                            style={[styles.leorio1Icon, styles.groupChildPosition]}
                            resizeMode="cover"
                            source={require("../assets/leorio-17.png")}
                        />
                        <View style={[styles.rectangleParent, styles.amigos10Layout]}>
                            <LinearGradient
                                style={[styles.groupChild, styles.amigos10Layout]}
                                locations={[0, 1]}
                                colors={["#ffe855", "#ff0e00"]}
                                useAngle={true}
                                angle={135}
                            />
                            <Image
                                style={styles.image8Icon}
                                resizeMode="cover"
                                source={require("../assets/image-88.png")}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={[styles.rectangleParent7, styles.rectangleLayout]}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Text style={[styles.pesquisar, styles.amigosLayout]}>Pesquisar</Text>
                <Text style={[styles.pesquisar, styles.amigosLayout]}>Pesquisar</Text>
                <Image
                    style={styles.iconssearch24px}
                    resizeMode="cover"
                    source={require("../assets/iconssearch-24px.png")}
                />
            </View>
            <Text style={[styles.amigos10, styles.amigos10Layout]}>Amigos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    frameScrollViewContent: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    leorioLayout: {
        width: 323,
        height: 73,
    },
    leorioTypo: {
        textAlign: "left",
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
    },
    amigosLayout: {
        height: 18,
        textAlign: "left",
        position: "absolute",
    },
    viagensTypo: {
        height: 14,
        width: 59,
        fontWeight: "600",
        fontSize: FontSize.size_3xs,
        textAlign: "left",
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        left: 85,
        position: "absolute",
    },
    groupChildPosition: {
        top: 0,
        left: 0,
    },
    amigos10Layout: {
        height: 41,
        position: "absolute",
    },
    rectangleLayout: {
        height: 50,
        width: 300,
        position: "absolute",
    },
    leorio: {
        fontSize: FontSize.size_base,
        width: 238,
        height: 25,
        left: 85,
        textAlign: "left",
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        top: 0,
        position: "absolute",
    },
    text: {
        textDecoration: "underline",
    },
    amigos1: {
        top: 37,
        width: 59,
        color: Color.colorDarkgray,
        fontWeight: "600",
        fontSize: FontSize.size_3xs,
        height: 18,
        fontFamily: FontFamily.latoBold,
        left: 85,
    },
    viagens: {
        top: 53,
    },
    leorio1Icon: {
        borderRadius: Border.br_3xs,
        width: 73,
        height: 73,
        position: "absolute",
    },
    groupChild: {
        borderRadius: Border.br_11xl,
        backgroundColor: "transparent",
        width: 68,
        height: 41,
        top: 0,
        left: 0,
    },
    image8Icon: {
        top: 4,
        left: 19,
        width: 36,
        height: 36,
        position: "absolute",
    },
    rectangleParent: {
        top: 9,
        left: 249,
        width: 68,
        height: 41,
    },
    leorioParent: {
        height: 73,
    },
    amigos2: {
        top: 25,
        width: 59,
        color: Color.colorDarkgray,
        fontWeight: "600",
        fontSize: FontSize.size_3xs,
        height: 18,
        fontFamily: FontFamily.latoBold,
        left: 85,
    },
    viagens1: {
        top: 43,
    },
    leorioGroup: {
        marginTop: 39,
        height: 73,
    },
    groupParent: {
        top: 64,
        left: 30,
        position: "absolute",
        flex: 1,
    },
    amigosInner: {
        top: 163,
        width: 360,
        height: 637,
        left: 0,
        position: "absolute",
    },
    rectangleView: {
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
    },
    pesquisar: {
        top: 16,
        left: 14,
        fontSize: FontSize.size_mini,
        fontFamily: FontFamily.latoRegular,
        color: Color.colorSilver,
        width: 115,
    },
    iconssearch24px: {
        top: 13,
        left: 259,
        width: 24,
        height: 24,
        position: "absolute",
    },
    rectangleParent7: {
        top: 135,
        left: 30,
    },
    amigos10: {
        top: 88,
        fontSize: 30,
        width: 206,
        textAlign: "left",
        color: Color.colorGray,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        left: 30,
    },
    amigos: {
        width: "100%",
        height: 800,
        overflow: "hidden",
        flex: 1,
        backgroundColor: Color.colorWhite,
    },
});
