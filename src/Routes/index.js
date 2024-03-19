// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconCustom from '~/Components/Icon/IconCustom';
import CreateAnime from '~/Screens/AddVideo/CreateAnime';
import HomePage from '~/Screens/Home/DeXuat/HomePage';
import SearchPage from '~/Screens/KhamPha/SearchHome/SearchPage';
import UserPage from '~/Screens/User/Access/UserPage/UserPage';
import FollowPage from '~/Screens/TheoDoi/TheoDoiHome/FollowPage';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
                    if (route.name === 'SearchPage') {
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
                name="SearchPage"
                component={SearchPage}
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
