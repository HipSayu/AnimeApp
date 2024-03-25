import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

import React from 'react';

import GlobalStyles from '~/Styles/GlobalStyles';
import InputCustom from '~/Components/Input/InputCustom';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

export default function ResgisterSDTPage() {
    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: GlobalStyles.white.color, flex: 1 }}>
            <TouchableOpacity
                style={{ marginTop: 30 }}
                onPress={() => {
                    navigation.navigate('SDTPage');
                }}
            >
                <ImageBackground style={{ width: 20, height: 20 }} source={require('~/Assets/Icon/IconReturn.png')} />
            </TouchableOpacity>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
                <Text style={GlobalStyles.h3}>Đăng ký bằng Số điện thoại</Text>
                <InputCustom Name="UserName" placeholder="UserName" />
                <InputCustom Name="Mật khẩu" placeholder="Nhập mật khẩu" Ispassword={true} />
                <InputCustom Name="Nhập lại" placeholder="Nhập lại mật khẩu" Ispassword={true} />
            </View>
            <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('LoginSDTPage');
                    }}
                    style={{
                        backgroundColor: GlobalStyles.blue.color,
                        borderRadius: 5,
                        padding: 10,
                        alignItems: 'center',
                    }}
                >
                    <Text style={[GlobalStyles.h4, GlobalStyles.white]}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({});
