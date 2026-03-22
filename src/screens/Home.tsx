import { Button } from "@react-navigation/elements"
import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { TNavigationScreenProps } from "../../Routes";
import { Header } from "../components";

const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();
    
    return <View>
        <Header name="Eloi" />
        <Text>Home</Text>
        <Button onPress={() => navigation.navigate('detail', { rate: 3 })}>Go to Details</Button>
        <Button onPress={() => navigation.navigate('setUserName')}>Set your name</Button>
    </View>
}

export default Home