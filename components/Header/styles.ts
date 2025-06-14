import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 180,
    backgroundColor: "#3a3a3c",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: 12,
    borderBottomWidth: 3,
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    borderColor: "#c28800",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#A5ACAF",
    marginTop: 12,
    fontFamily: "DidactGothic",
  },
  headerTitle: {
    fontSize: 36,
    color: "#ffd700",
    fontWeight: 600,
    fontFamily: "DidactGothic",
  },
  headerView: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerImage: {
    height: 100,
    width: 100,
  },
});
