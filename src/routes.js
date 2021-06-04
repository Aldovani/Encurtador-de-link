import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./pages/Home";
import MyLinks from "./pages/MyLinks";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "#2ccbb9",
        activeTintColor: "#fff",
        marginTop: 16,
        labelStyle: {
          fontSize: 19,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          title: "Encurtar links",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        component={Home}
      />
      <Drawer.Screen
        name="MyLinks"
        options={{
          title: "Meus links",
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              size={size}
              colo={color}
            />
          ),
        }}
        component={MyLinks}
      />
    </Drawer.Navigator>
  );
}
