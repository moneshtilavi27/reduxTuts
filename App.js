import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Router from "./src/router/router";

const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.container}>
                <Router />
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
