import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";


const Fatoração = () =>{
    const [num1, SetNum1] = useState('')
    const [result, SetResult] = useState('')

    const calculoFato = () =>{
        let n = parseInt(num1)
        let r = [];
        let cont = []

        for(let i = 2; i <= n; i++){
            while(n % i === 0){
                if(cont[i]){
                    cont[i]++
                }else{
                    cont[i] = 1
                }
                n /= i;
                SetNum1('')
            }
        }

        for (let key in cont) {
            r.push(`${key}^${cont[key]}`);
        }

        SetResult(r);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Fatoração em números primos: </Text>
        <TextInput
            style={styles.input}
            placeholder="Digite um numero:"
            keyboardType="numeric"
            onChangeText={text => SetNum1(text)}
            value={num1}
        />
        {/* <Button
            title="Fatorar"
            onPress={calculoFato}
        /> */}
        <TouchableOpacity style={styles.btn} onPress={calculoFato}>
            <Text style={styles.btnText}>Fatorar</Text>
        </TouchableOpacity>
        <View style={styles.containerResultado}>
            <Text style={styles.resultado}>Fatoração em numeros primos:{result.length > 0 ? "\n\n" + result.join('  *  ') : result}</Text>
        </View>
    </View>
    )

};

export default Fatoração;