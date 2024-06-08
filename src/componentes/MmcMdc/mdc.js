import React,{useState} from "react";
import { Text, TextInput, Button, View } from "react-native";
import styles from "./styleMDC";
import { TouchableOpacity } from "react-native-gesture-handler";

const MDC = () =>{
    const [num1, SetNum1] = useState('');
    const [num2, SetNum2] = useState('');
    const [Result, SetResult] = useState('');

    const calculaMDC = () => {

        if(!num1 || isNaN(num1) || !num2 || isNaN(num2)){
            SetResult('Preencha os campos corretamente')
            return;
        }

        let a = parseInt(num1);
        let b = parseInt(num2);
        
        while(b !== 0) {
            let temp = b
            b = a % b;
            a = temp;
            SetNum1('')
            SetNum2('')

        }

        SetResult(`O MDC de ${num1} e de ${num2} é ${Math.abs(a)}`)

    };

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>MÁXIMO DIVISOR COMUM</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite o primeiro número:"
                keyboardType="numeric"
                value={num1}
                onChangeText={(text) => SetNum1(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite o segundo número:"
                keyboardType="numeric"
                value={num2}
                onChangeText={(text)=> SetNum2(text)}
            />

            {/* <Button
                title="Calcular MDC"
                onPress={calculaMDC}
            /> */}

            <TouchableOpacity style={styles.btn} onPress={calculaMDC}>
                <Text style={styles.btnText}>Calcular MDC</Text>
            </TouchableOpacity>
            
            <View style={styles.containerResultado}>
                <Text style={styles.resultado}>{Result}</Text>
            </View>

        </View>
    );
    

}

export default MDC;