import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Navigation from '~/Routes';

import { NavigationContainer } from '@react-navigation/native';
export default function App() {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
}
