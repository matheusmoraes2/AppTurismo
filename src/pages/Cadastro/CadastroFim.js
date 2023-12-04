import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontFamily, Color } from "../../../GlobalStyles";

export default function CadastroFim({ navigation }) {
    return (
        <View style={styles.final}>
            <Text style={[styles.parabns, styles.okTypo]}>Parabéns!</Text>
            <Text style={styles.suaContaEsta}>Sua conta esta pronta para usar</Text>
            <Image
                style={[styles.finalChild, styles.childPosition]}
                resizeMode="cover"
                source={require("../../assets/vector-2.svg")}
            />
            <Image
                style={styles.finalItem}
                resizeMode="cover"
                source={require("../../assets/ellipse-1.svg")}
            />
            <View style={[styles.verificar1Wrapper, styles.verificar1Layout]}>
                <Image
                    style={[styles.verificar1Icon, styles.verificar1Layout]}
                    resizeMode="cover"
                    source={require("../../assets/verificar.svg")}
                />
            </View>
            <Pressable
                style={[styles.rectangleParent, styles.groupChildLayout]}
                onPress={() => navigation.navigate('Login')}
            >
                <LinearGradient
                    style={[styles.groupChild, styles.groupChildLayout]}
                    locations={[0, 1]}
                    colors={["#ff7fed", "#5a07d5"]}
                    useAngle={true}
                    angle={135}
                />
                <Text style={[styles.ok, styles.okTypo]}>Ok</Text>
            </Pressable>
            <Image
                style={styles.clipPathGroup}
                resizeMode="cover"
                source={require("../../assets/clip-path-group-roxo.svg")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    okTypo: {
        textAlign: "center",
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        position: "absolute",
    },
    childPosition: {
        left: 0,
        top: 0,
    },
    verificar1Layout: {
        height: 250,
        width: 250,
        position: "absolute",
    },
    groupChildLayout: {
        height: 50,
        width: 300,
        position: "absolute",
    },
    parabns: {
        top: 422,
        left: 92,
        fontSize: 30,
        color: "#5a07d5",
        width: 206,
        height: 41,
    },
    suaContaEsta: {
        top: 490,
        left: 83,
        fontSize: 16,
        color: "#262626",
        textAlign: "left",
        width: 224,
        height: 34,
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        position: "absolute",
    },
    finalChild: {
        width: 391,
        height: 119,
        position: "absolute",
    },
    finalItem: {
        top: 556,
        left: 69,
        width: 2,
        height: 2,
        position: "absolute",
    },
    finalInner: {
        top: 542,
        left: 65,
        borderRadius: 1,
        width: 10,
        height: 12,
        position: "absolute",
    },
    verificar1Icon: {
        left: 0,
        top: 0,
    },
    verificar1Wrapper: {
        top: 145,
        left: 70,
    },
    groupChild: {
        borderRadius: 40,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
    },
    ok: {
        top: 17,
        left: 80,
        fontSize: 15,
        color: Color.colorWhite,
        width: 139,
        height: 17,
    },
    rectangleParent: {
        top: 607,
        left: 45,
    },
    clipPathGroup: {
        height: "21.09%",
        width: "45.64%",
        top: "78.91%",
        right: "54.36%",
        bottom: "0%",
        left: "0%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    final: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden",
    },
});
