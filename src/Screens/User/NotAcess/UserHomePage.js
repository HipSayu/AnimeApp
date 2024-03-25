import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import React from 'react';

import ActionList from '../Action/ActionList';

import GlobalStyles from '~/Styles/GlobalStyles';

export default function UserHomePage() {
    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 10 }}>
            {/* Header */}
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ImageBackground
                            style={{ width: 20, height: 20, marginRight: 20, marginTop: 10 }}
                            source={require('~/Assets/Icon/Camera.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ImageBackground
                            style={{ width: 20, height: 20, marginRight: 20, marginTop: 10 }}
                            source={require('~/Assets/Icon/QR.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ImageBackground
                            style={{ width: 20, height: 20, marginRight: 20, marginTop: 10 }}
                            source={require('~/Assets/Icon/Email.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginHome')}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <ImageBackground
                        borderRadius={25}
                        style={{ width: 50, height: 50 }}
                        source={require('~/Assets/Avatar/Avatar.png')}
                    />
                    <Text style={[{ marginLeft: 20 }, GlobalStyles.h4]}>Đăng nhập</Text>
                </TouchableOpacity>
                <ActionList Name="Lịch sử" />
                <ActionList IconLeft={require('~/Assets/Icon/Download.png')} Name="Đã tải xuống" />
                <ActionList IconLeft={require('~/Assets/Icon/Muc.png')} Name="Mục ưa thích" />
                <ActionList IconLeft={require('~/Assets/Icon/store.png')} Name="Cửa hàng" />
                <ActionList IconLeft={require('~/Assets/Icon/settings.png')} Name="Cài đặt" />
                <ActionList IconLeft={require('~/Assets/Icon/help.png')} Name="Trợ giúp" />
                <ActionList IconLeft={require('~/Assets/Icon/message.png')} Name="Phản hồi" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
