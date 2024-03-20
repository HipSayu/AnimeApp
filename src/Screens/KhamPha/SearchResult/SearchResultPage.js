import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SearchResultPage({ route }) {
    return (
        <View>
            <Text>{route.params.data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
