import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 10,
    backgroundColor: "#161C3F",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
    height: "10%",
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  score_content: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    padding: 10,
  },
  score_text: {
    color: "gray",
  },
  score: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
