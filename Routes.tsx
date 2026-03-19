import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import SetUserName from "./src/screens/SetUserName";
import { SafeAreaView } from "react-native-safe-area-context";

type TScreenDefinitions = {
    home: undefined,
    setUserName: undefined,
    detail: {
        rate: number
    }
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

const AppRoutes = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="home" 
            screenOptions={{ headerShown: false }}
            screenLayout={({ children }) => <SafeAreaView>{children}</SafeAreaView>}
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Group screenOptions={{ 
                presentation: 'formSheet', 
                sheetAllowedDetents: [0.5, 0.95],
                sheetCornerRadius: 24           
            }}>
                <Stack.Screen name="detail" component={Detail} />
                <Stack.Screen name="setUserName" component={SetUserName} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppRoutes;

export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>