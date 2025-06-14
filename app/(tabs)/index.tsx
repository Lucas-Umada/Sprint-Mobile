import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.backgroundView}>
      <Header subtitle="Que bom te ver aqui !" />
      <Form />

      <Text style={styles.styledText}>
        Já tem uma conta?{" "}
        <Text
          style={styles.linkText}
          onPress={() => router.push("/(tabs)/explore")}
        >
          Clique aqui
        </Text>{" "}
        para fazer login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    height: "100%",
    fontFamily: "DidactGothic",
  },
  styledText: {
    color: "white",
    paddingBottom: 25,
    fontFamily: "DidactGothic",
  },
  linkText: { color: "orange" },
});
