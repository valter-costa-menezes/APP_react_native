import React,{useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./style";


const PAROUIMPAR = () => {
    const [numero, setnum] = useState('');
    const[Resultado, setResultado] = useState('');

    const verificaParOuImpar = () => {
        const num = parseInt(numero);
        setnum('')
        if(isNaN(num)){
            setResultado("Digite um valor válido!");

        }else{
            if(num % 2 == 0){
                setResultado(`O número ${num} é PAR!`);
            }else{
                setResultado(`O número ${num} é IMPAR!`);
            }
        }
    }

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Veficar se é par ou impar</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite o número que deseja verificar:"
                keyboardType="numeric"
                value={numero}
                onChangeText={(text) => setnum(text)}
            />
            
            {/* <Button
                title="Véficar par ou impar"
                onPress={verificaParOuImpar}
            /> */}

            <TouchableOpacity style={styles.btn} onPress={verificaParOuImpar}>
                <Text style={styles.btnText}>verificar</Text>
            </TouchableOpacity>
            
            <View style={styles.containerResultado}>
                <Text style={styles.resultado}>{Resultado}</Text>
            </View>
        </View>
    );
}

export default PAROUIMPAR;