import { Button } from "@react-navigation/elements"
import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { TNavigationScreenProps } from "../../Routes";

const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();
    
    return <View>
        <Text>Home</Text>
        <Button onPress={() => navigation.navigate('detail', { rate: 3 })}>Go to Details</Button>
        <Button onPress={() => navigation.navigate('setUserName')}>Set your name</Button>
    </View>
}

export default Home