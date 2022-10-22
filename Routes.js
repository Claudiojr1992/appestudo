import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


// Telas
import Home from "./src/pages/Home";
import Dados from "./src/pages/Dados";


const Stack = createNativeStackNavigator();


function Routes () {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Home" defaultScreenOptions={{headerShown: true}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Dados" component={Dados} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}



export default Routes;