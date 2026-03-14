import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import SetUserName from "./src/screens/SetUserName";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Detail} />
            <Stack.Screen name="SetUserName" component={SetUserName} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppRoutes;