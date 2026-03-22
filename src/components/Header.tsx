import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../theme/Theme";

interface IHeaderProps {
    name?: string | undefined
}

const Header = ({ name }: IHeaderProps) => {
    return <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Olá,</Text>
        <Text style={styles.headerBoldText}>{!name ? 'Seu nome é?' : `${name}!`}</Text>
    </View>
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        padding: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8
    },
    headerText: {
        fontSize: Theme.fonts.sizes.title
    },
    headerBoldText: {
        fontSize: Theme.fonts.sizes.title,
        fontFamily: Theme.fonts.family.bold,
        color: Theme.colors.primary
    }
})