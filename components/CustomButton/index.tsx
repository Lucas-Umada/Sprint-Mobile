import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ICustomButton } from "./types";

const CustomButton = ({ title, onClick }: ICustomButton) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
