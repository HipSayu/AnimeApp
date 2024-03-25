import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IconCustom from '~/Components/Icon/IconCustom';
import CreateAnime from '~/Screens/AddVideo/CreateAnime';

import HomePage from '~/Screens/Home/HomePage';

import SearchResultPage from '~/Screens/KhamPha/SearchResult/SearchResultPage';
import SearchPage from '~/Screens/KhamPha/SearchPage';
import SearchingPage from '~/Screens/KhamPha/Searching/SearchingPage';

import FollowPage from '~/Screens/TheoDoi/TheoDoiHome/FollowPage';

import UserHomePage from '~/Screens/User/NotAcess/UserHomePage';
import LoginHomePage from '~/Screens/User/NotAcess/LoginHome/LoginHomePage';
import SDTPage from '~/Screens/User/NotAcess/LoginHome/XacNhanSDT/SDTPage';
import LoginSDTPage from '~/Screens/User/NotAcess/LoginHome/Login/LoginSDT/LoginSDTPage';
import ResgisterSDTPage from '~/Screens/User/NotAcess/LoginHome/Resgister/ResgisterSDT/ResgisterSDTPage';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SearchHomePage() {
    return (
        <Stack.Navigator options={{ headerShown: false }}>
            <Stack.Screen name="SearchPage" options={{ headerShown: false }} component={SearchPage} />
            <Stack.Screen name="SearchResultPage" options={{ headerShown: false }} component={SearchResultPage} />
            <Stack.Screen name="SearchingPage" options={{ headerShown: false }} component={SearchingPage} />
        </Stack.Navigator>
    );
}

function UserPage() {
    return (
        <Stack.Navigator options={{ headerShown: false }}>
            <Stack.Screen name="UserHomePage" options={{ headerShown: false }} component={UserHomePage} />
            <Stack.Screen name="LoginHome" options={{ headerShown: false }} component={LoginHome} />
        </Stack.Navigator>
    );
}

function LoginHome() {
    return (
        <Stack.Navigator options={{ headerShown: false }}>
            <Stack.Screen name="LoginHomePage" options={{ headerShown: false }} component={LoginHomePage} />
            <Stack.Screen name="SDTPage" options={{ headerShown: false }} component={SDTPage} />
            <Stack.Screen name="LoginSDTPage" options={{ headerShown: false }} component={LoginSDTPage} />
            <Stack.Screen name="ResgisterSDTPage" options={{ headerShown: false }} component={ResgisterSDTPage} />
        </Stack.Navigator>
    );
}

function Navigation() {
    return (
        <Tab.Navigator
            initialRouteName="HomePage"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let sourceIcon;
                    let namePage;
                    if (route.name === 'HomePage') {
                        sourceIcon = focused ? 'HomeActive' : 'Home';
                        namePage = 'Trang chủ';
                    }
                    if (route.name === 'SearchHomePage') {
                        sourceIcon = focused ? 'SearchActive' : 'Search';
                        namePage = 'Khám phá';
                    }
                    if (route.name === 'CreateAnime') {
                        sourceIcon = focused ? 'AddCreate' : 'AddCreate';
                        namePage = '';
                    }
                    if (route.name === 'FollowPage') {
                        sourceIcon = focused ? 'HeartActive' : 'Heart';
                        namePage = 'Theo dõi';
                    }
                    if (route.name === 'UserPage') {
                        sourceIcon = focused ? 'UserActive' : 'User';
                        namePage = 'Tôi';
                    }

                    return <IconCustom text={namePage} sourceIcon={sourceIcon} />;
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    borderColor: '#ffff',
                    height: 50,
                    alignItems: 'center',
                    paddingTop: 15,
                    justifyContent: 'center',
                    backgroundColor: '#ffff',
                },
            })}
            tabBarActiveTintColor={true}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarActiveTintColor: '#fff',
                }}
            />
            <Tab.Screen
                name="SearchHomePage"
                component={SearchHomePage}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarActiveTintColor: '#fff',
                }}
            />
            <Tab.Screen
                name="CreateAnime"
                component={CreateAnime}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarActiveTintColor: '#fff',
                }}
            />
            <Tab.Screen
                name="FollowPage"
                component={FollowPage}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarActiveTintColor: '#fff',
                }}
            />
            <Tab.Screen
                name="UserPage"
                component={UserPage}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarActiveTintColor: '#fff',
                }}
            />
        </Tab.Navigator>
    );
}
export default Navigation;
