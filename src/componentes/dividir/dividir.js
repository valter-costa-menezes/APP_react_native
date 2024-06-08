import React, {useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./style";


const DIVISIBILIDADE = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

    const calculoDivi = () =>{
        if(!num1 || isNaN(num1) || num1 == '' || !num2 || isNaN(num2) || num2 == ''){
            setResult("Por favor digite valores válidos")
        }else if(num2 === '0'){
            setResult("Não é possivel dividir por zero!")
        }else{
            const resultdivi = parseFloat(num1) / parseFloat(num2)
            setResult(`${num1} dividido por ${num2} é = ${resultdivi.toFixed(2)}`)
        }
        setNum1('')
        setNum2('')

    }

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>DIVISÃO DE NÚMEROS</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite um número"
                keyboardType="numeric"
                value={num1}
                onChangeText={text => setNum1(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite outro número"
                keyboardType="numeric"
                value={num2}
                onChangeText={text => setNum2(text)}

            />
            {/* <Button title="Calcular" onPress={calculoDivi}/> */}

            <TouchableOpacity style={styles.btn} onPress={calculoDivi}>
                <Text style={styles.btnText}>Dividir</Text>
            </TouchableOpacity>

            <View style={styles.containerResultado}>
            <Text style={styles.resultado}>{result}</Text>
            </View>

        </View>
    )

}

export default DIVISIBILIDADE;