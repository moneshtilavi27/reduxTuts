import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/homescreen";
import DetailsScreen from "../screen/detailscreen";
import { Text } from "react-native";
import React from "react";

// Declare Stack Navigator outside the component to avoid re-creation on every render
const Stack = createNativeStackNavigator();

const Router = () => {
    // Common screen options for reusability
    const commonOptions = {
        headerStyle: {
            backgroundColor: '#f4511e',   // Header background color
        },
        headerTintColor: '#fff',           // Color of the back button and title
        headerTitleStyle: {
            fontWeight: 'bold',            // Style for the title text
        },
        headerRight: () => (
            <Text style={{ color: "#fff", marginRight: 10 }}>monu</Text> // Display "monu" on the right side of the header
        )
    };

    return (
        <Stack.Navigator initialRouteName="product">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    ...commonOptions,
                    headerTitle: "Custom Home Title", // Custom title for the header
                }}
            />
            <Stack.Screen
                name="product"
                component={DetailsScreen}
                options={{
                    ...commonOptions,
                    headerTitle: "Product List", // Custom title for the header
                }}
            />
        </Stack.Navigator>
    );
}

export default Router;
