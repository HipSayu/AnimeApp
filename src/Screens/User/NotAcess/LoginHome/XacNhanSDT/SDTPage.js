import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

import React from 'react';
import GlobalStyles from '~/Styles/GlobalStyles';
export default function SDTPage() {
    const windowWidth = Dimensions.get('window').width;

    const windowHeight = Dimensions.get('window').height;

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: GlobalStyles.white.color, flex: 1 }}>
            <TouchableOpacity
                style={{ marginTop: 30 }}
                onPress={() => {
                    navigation.push('UserHomePage');
                }}
            >
                <ImageBackground style={{ width: 20, height: 20 }} source={require('~/Assets/Icon/IconReturn.png')} />
            </TouchableOpacity>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
                <Text style={GlobalStyles.h3}>Số điện thoại</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'center' }}>
                    <Text style={GlobalStyles.h4}>VN +84</Text>
                    <View>
                        <TextInput
                            keyboardType={'numeric'}
                            autoFocus={true}
                            numeric
                            placeholder="Nhập số điện thoại"
                            style={{ borderBottomWidth: 1, width: windowWidth / 1.5, marginLeft: 10, paddingLeft: 10 }}
                        ></TextInput>
                        <Text style={[{ marginLeft: 15, color: GlobalStyles.red.color }, GlobalStyles.h5]}>
                            Validate
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ResgisterSDTPage');
                    }}
                    style={{
                        backgroundColor: GlobalStyles.blue.color,
                        borderRadius: 5,
                        padding: 10,
                        alignItems: 'center',
                    }}
                >
                    <Text style={[GlobalStyles.h4, GlobalStyles.white]}>Tiếp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
