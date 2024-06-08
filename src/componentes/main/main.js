import React from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";
import styles from "./style";

export default function Main({navigation}){

    return(

        <View style={styles.container}>

            <Text style={styles.titulo}>Bem vindo!</Text>
            <Text style={styles.subTitulo}>Escolha uma das opções abaixo: </Text>

            {/* BOTÕES QUE DIRECIONAM O USUÁRIO ENTRE TELAS */}

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Par ou Impar')}>
                <Text style={styles.btnText}>PAR OU IMPAR</Text>
                </TouchableOpacity>


            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('MDC')}>
                <Text style={styles.btnText}>MDC</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('MMC')}>
                <Text style={styles.btnText}>MMC</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Fatoração')}>
                <Text style={styles.btnText}>FATORAÇÃO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Primos')}>
                <Text style={styles.btnText}>PRIMOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('DIVISIBILIDADE')}>
                <Text style={styles.btnText}>DIVISIBILIDADE</Text>
            </TouchableOpacity>


        </View>
    );
}
