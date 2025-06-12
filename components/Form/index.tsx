import * as S from "./styles";

import React, { useState } from "react";
import { Alert, Button, Text, TextInput } from "react-native";

export const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegistrar = () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
    Alert.alert("Sucesso", `Registrado:\nNome: ${nome}\nEmail: ${email}`);
    // Aqui você poderia enviar os dados para uma API ou salvar localmente
  };

  return (
    <S.FormBody>
      <Text>Nome:</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />

      <Text>Email:</Text>
      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />

      <Text>Senha:</Text>
      <TextInput
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ borderWidth: 1, padding: 8, marginBottom: 20 }}
      />

      <Button title="Registrar" onPress={handleRegistrar} />
    </S.FormBody>
  );
};
