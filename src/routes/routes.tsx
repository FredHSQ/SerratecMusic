import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Album } from "../screens/Album";
import { createDrawerNavigator } from "@react-navigation/drawer";

// const TabNavigation = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//     return (
//         <TabNavigation.Navigator screenOptions={{
//             headerShown: false,
//             tabBarStyle: { backgroundColor: '#35347E', borderBottomWidth: 0, }
//         }}>
//             <TabNavigation.Screen
//                 name='HomeTabScreen'
//                 component={Home} />
//             <TabNavigation.Screen
//                 name='CategoriasTabScreen'
//                 component={Categoria} />
//         </TabNavigation.Navigator>
//     )
// }

const DrawerNavigation = createDrawerNavigator();

const NavigationDrawer = () => {
    return (
        <DrawerNavigation.Navigator>
            {/* <DrawerNavigation.Screen
                name="TabNavigationScreen"
                options={{ title: 'Home Principal' }}
                component={BottomTabNavigator} /> */}
            <DrawerNavigation.Screen
                name="AlbumDrawerScreen"
                component={Album} />
        </DrawerNavigation.Navigator>
    )
}


const StackNavigation = createNativeStackNavigator<StackParamList>();

export type StackParamList = {
    Album: undefined;
}

export const Routes = () => {


    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Album'
                    component={NavigationDrawer}
                />
                {/* <StackNavigation.Screen
                    options={{ headerShown: false }}
                    name='Home'
                    component={NavigationDrawer}
                /> */}
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}
