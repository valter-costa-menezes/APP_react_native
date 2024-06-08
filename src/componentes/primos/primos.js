import React, {useState} from "react";
import { View, Text,TextInput, Button } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

const PRIMOS = () =>{
    const [num, setNum] = useState('')
    const [result, setResult] = useState('')

    const calculoPrimos = ()=>{
        
        if(num == ''){
            setResult("Por favor digite um número")
            return
        }
        const n = parseInt(num)
        if(isNaN(n)){
            setResult("Por favor digite um número válido")
            return
        }
        if(n < 1){
            setResult(`${n} não é primo nem composto`)
            return
        }
        let isPrimo = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrimo = false;
                break;
            }
        }
        if (isPrimo) {
            setResult(`${n} é primo.`);
        } else {
            setResult(`${n} é composto.`);
        }
        setNum('')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Verificar números primos</Text>
            <TextInput
                 style={styles.input}
                placeholder="Digite um número: "
                keyboardType="numeric"
                value={num}
                onChangeText={text => setNum(text)}
            />
            {/* <Button title="Verificar" onPress={calculoPrimos}/> */}

            <TouchableOpacity style={styles.btn} onPress={calculoPrimos}>
                <Text style={styles.btnText}>Verificar</Text>
            </TouchableOpacity>

            <View  style={styles.containerResultado}>
                <Text  style={styles.resultado}>{result}</Text>
            </View>
        </View>
    )
}

export default PRIMOS;