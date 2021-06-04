import React from "react";
import { View } from "react-native";
import { ContainerButton, Item, ActionContainer } from "./styles";
import { Feather } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({ data, selectedItem, deleteItem }) {
  function RightAction() {
    return (
      <ActionContainer onPress={() => deleteItem(data.id)}>
        <Feather name="trash" color="#fff" size={24} />
      </ActionContainer>
    );
  }

  return (
    <View>
      <Swipeable renderRightActions={RightAction}>
        <ContainerButton activeOpacity={0.9} onPress={() => selectedItem(data)}>
          <Feather name="link" size={24} color="#fff" />

          <Item numberOfLines={1}>{data.long_url}</Item>
        </ContainerButton>
      </Swipeable>
    </View>
  );
}
