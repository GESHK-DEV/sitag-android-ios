import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useState} from "react";

export default function SearchBar(){
    const [search, onSearch] = useState('');
    return (
        <TextInput
            onChangeText={onSearch}
            value={search}
            placeholder="Buscar Número de Animal"
            keyboardType="numeric"
            className="bg-white p-5 rounded-2xl text-lg "
            style={[{ fontFamily:"CharlieDisplay-Regular" }, styles.shadow]}
        />
    );
}

const styles = StyleSheet.create({
    shadow: {
        marginEnd:15,
        marginStart:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 15,
    },
});