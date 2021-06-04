import React from "react";
import { Feather } from "@expo/vector-icons";
import { ButtonMenu } from "./style";

import { useNavigation } from "@react-navigation/native";
export default function Menu() {
  const navigation = useNavigation();
  return (
    <ButtonMenu onPress={() => navigation.openDrawer()}>
      <Feather name="menu" size={40} color="#fff" />
    </ButtonMenu>
  );
}
