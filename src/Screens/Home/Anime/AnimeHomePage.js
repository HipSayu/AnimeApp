import { ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

import React from 'react';

import GlobalStyles from '~/Styles/GlobalStyles';

import AnimeVideo from '~/Components/AnimeItems/AnimeVideo';

/*Data fake*/

//Anime
const Anime = [
    { Name: 'Shikimori không chỉ dễ thương thôi đâu', Image: require('~/Assets/Image/Shikimori.png'), Quality: '4K' },
    { Name: 'Rồng hầu gái nhà kobayashi', Image: require('~/Assets/Image/Torhu.jpg'), Quality: '4K' },
    { Name: 'Lycoris Recoil', Image: require('~/Assets/Image/LycorisRecoil.png'), Quality: '2K' },
    { Name: 'Nhà có 5 tô bún', Image: require('~/Assets/Image/NhaCoNamNangDau.jpg'), Quality: '2K' },
];

const DataNav = [
    { Image: require('~/Assets/Icon/IconNav/List.png'), Name: 'Mục lục' },
    { Image: require('~/Assets/Icon/IconNav/Clock.png'), Name: 'Lịch Chiếu' },
    { Image: require('~/Assets/Icon/IconNav/RetroTV.png'), Name: 'Xếp hạng' },
    { Image: require('~/Assets/Icon/IconNav/MembershipCard.png'), Name: 'Premium' },
];
// 1. witdh : 138 height :182 text dưới
// 2. witdh : 358 height :172
// 3. witdh : 146 height :96
// 4. witdh : 173 height :96 /2.2

//User
//1.witdh : 44 height 44: Tên cạch text cạch có icon
//2.width : 20 hegiht 20 : tến cạnh text trên view dưới
// 3. width :50 height 59 : tên dưới
//4 . width : 40 height : 40 tên cạnh có time tên dưới

// Chiều rộng điện thoại
const windowWidth = Dimensions.get('window').width;
// Chiều dài điện thoại
const windowHeight = Dimensions.get('window').height;

export default function AnimeHomePage() {
    return (
        <View style={styles.Page}>
            {/* Header Title */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    borderRadius={5}
                    style={{ width: windowWidth / 1.05, height: 173, marginTop: 10, flexDirection: 'column-reverse' }}
                    source={require('~/Assets/Image/SoloLeveling.jpeg')}
                >
                    <Text style={[GlobalStyles.h4, { marginLeft: 5, marginBottom: 5, color: '#454545' }]}>
                        Chỉ mình tôi thăng cấp
                    </Text>
                </ImageBackground>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                        paddingHorizontal: 10,
                    }}
                >
                    {DataNav.map((item, index) => (
                        <View style={{ alignItems: 'center' }} key={index}>
                            <ImageBackground source={item.Image} style={{ width: 50, height: 50 }} />
                            <Text style={GlobalStyles.h4_Medium}>{item.Name}</Text>
                        </View>
                    ))}
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={GlobalStyles.h4_Medium}>Tiếp tục xem</Text>
                    <ScrollView>
                        <AnimeVideo
                            width={windowWidth / 2.2}
                            height={96}
                            Image={require('~/Assets/Image/DateAlive.png')}
                            Name="Cuộc hẹn sống còn ss4"
                            ContinueText="Đã xem đến tập 2 90%"
                        />
                    </ScrollView>
                </View>
            </ScrollView>
            {/* Anime List */}
        </View>
    );
}

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        backgroundColor: GlobalStyles.white.color,
        alignItems: 'center',
    },
});
