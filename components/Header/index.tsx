import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { IHeader } from "./types";

export const Header = ({ subtitle }: IHeader) => {
  return (
    <View style={styles.headerView}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>MatchInvest</Text>
        <Image
          style={styles.headerImage}
          source={require("../../assets/images/income-amico.png")}
        />
      </View>

      <Text style={styles.headerSubtitle}>{subtitle}</Text>
    </View>
  );
};
