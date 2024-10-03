import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import HomeScreen from "../screen/homescreen";
import DetailsScreen from "../screen/detailscreen";
import { Text, View } from "react-native";

const Router = (props) => {
    const Stack = createNativeStackNavigator();
    useEffect(() => { }, []);

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: "Custom Home Title", // Custom title for the header
                    headerStyle: {
                        backgroundColor: '#f4511e',   // Header background color
                    },
                    headerTintColor: '#fff',           // Color of the back button and title
                    headerTitleStyle: {
                        fontWeight: 'bold',            // Style for the title text
                    },
                }}
            />

            <Stack.Screen
                name="Details"
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
}

export default Router;
