import { Text, View } from "react-native"
import { useRoute } from "@react-navigation/native"
import { TRouteProps } from "../../Routes";

const Detail = () => {

    const { params } = useRoute<TRouteProps<'detail'>>();

    return <View>
        <Text>{params.rate}</Text>
    </View>
}

export default Detail