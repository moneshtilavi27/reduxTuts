import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const HomeScreen = (props) => {
    const [input, setInput] = useState("");
    const navigation = useNavigation();

    return (
        <View style={styles?.container} >
            <Text style={{ color: "#fff" }}>Home Screen!</Text>
            <TextInput
                style={{ backgroundColor: '#fff' }}
                placeholder="Enter your name"
                value={input}
                onChangeText={(value) => setInput(value)}
            />
            <Button
                title="Go to User Screen"
                color="#006600"
                onPress={() => navigation.navigate("Details", { username: input })}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: "#000"
    }

});

export default HomeScreen;