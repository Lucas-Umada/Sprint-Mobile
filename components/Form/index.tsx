import React, { useState } from "react";
import { Alert, TextInput, View } from "react-native";
import CustomButton from "../CustomButton";
import { styles } from "./styles";

export const Form = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistrar = () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
    Alert.alert("Sucesso", `Registrado:\nNome: ${name}\nEmail: ${email}`);
    // Aqui você poderia enviar os dados para uma API ou salvar localmente
  };

  return (
    <View style={styles.formBody}>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={styles.formInput}
        placeholderTextColor="#A5ACAF"
      />

      <TextInput
        placeholder="Usuario"
        value={user}
        onChangeText={setUser}
        keyboardType="email-address"
        style={styles.formInput}
        placeholderTextColor="#A5ACAF"
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.formInput}
        placeholderTextColor="#A5ACAF"
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.formInput}
        placeholderTextColor="#A5ACAF"
      />

      <TextInput
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.formInput}
        placeholderTextColor="#A5ACAF"
      />

      <CustomButton title="Registrar-se" onClick={handleRegistrar} />
    </View>
  );
};
