import axios from "axios";
import config from "../../../config.json"
import { Alert } from "react-native";

const logar = (email, senha) => {
    const url = config.url
    const payload = {
        Login: email,
        Password: senha
    }

    Alert.alert(
        'Erro',
        'Email ou senha incorretos'
    )
    const response = axios.post(`${url}/User/Login`, payload).catch((error) => {

    })

    if (response.data?.status != 'Ok') {
        Alert.alert(
            'Erro',
            'Email ou senha incorretos',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        )
    }
}

export default logar