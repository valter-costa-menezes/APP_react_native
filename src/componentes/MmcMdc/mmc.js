import React,{useState} from "react";
import { View, TextInput, Button, Text} from "react-native";
import styles from "./stlyleMMC";
import { TouchableOpacity } from "react-native-gesture-handler";

const MMC = ()=>{
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [Result, setResult] = useState('');


    const CalculaMMC = () =>{
        if (!num1 || isNaN(num1) || !num2 || isNaN(num2)) {
            setResult("preencha os campos corretamente!");
            return;
        }

        if (num1 && num2 == 0) {
            setResult("MMC de 0 é ");
            setNum1('')
            setNum2('')
            
            return;

        }

        let a = parseInt(num1);
        let b = parseInt(num2);

        let cont1 = a;
        let cont2 = b;


        while(cont2 !==0) {
            let temp = cont2;
            cont2 = cont1 % cont2;
            cont1 = temp;
            setNum1('')
            setNum2('')
        }


        const mmc = (a * b) / cont1;
        setResult(`O MMC de ${a} e de ${b} é ${mmc}`)
    };


    return(
        <View style={styles.container}> 
            <Text style={styles.titulo}>MINIMO MULTIPLICADOR COMUM</Text>
            <TextInput 
            style={styles.input}
            placeholder="Primeiro número:"
            keyboardType="numeric"
            value={num1}
            onChangeText={(text)=>setNum1(text)}
            />

            <TextInput 
            style={styles.input}
            placeholder="segundo número número:"
            keyboardType="numeric"
            value={num2}
            onChangeText={(text)=>setNum2(text)}
            />
            
            {/* <Button title="Calcular MMC" onPress={CalculaMMC}/> */}

            <TouchableOpacity style={styles.btn} onPress={CalculaMMC}>
                <Text style={styles.btnText}>Calcular MMC</Text>
            </TouchableOpacity>
            <View style={styles.containerResultado}>
            <Text style={styles.resultado}>{Result}</Text>
            </View>



        </View>
    );    
};
    


export default MMC;