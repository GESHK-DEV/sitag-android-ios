import { Pressable, Text, View, StyleSheet } from "react-native";

export default function SumaryCard() {
  return (
    <View style={styles.card} className="mx-6">
      <View style={styles.backgroundCircle} />
      <Text style={[styles.title, { fontFamily: "CharlieDisplay-Bold" }]}>
        Aquí tus Ganancias!
      </Text>
      <Text style={[styles.amount, { fontFamily: "CharlieDisplay-Black" }]}>
        $510.50
      </Text>
      <View style={styles.bottomContainer}>
        <View style={styles.percentageContainer}>
          <Text
            style={[
              styles.percentageText,
              { fontFamily: "CharlieDisplay-Semibold" },
            ]}
          >
            +7%
          </Text>
        </View>
        <Text
          style={[styles.comparisonText, { fontFamily: "CharlieDisplay-Bold" }]}
        >
          que el mes pasado
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#D8FDB3",
    borderRadius: 24,
    padding: 20,

    position: "relative",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  backgroundCircle: {
    position: "absolute",
    right: -50,
    top: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#C5F099",
    opacity: 0.7,
  },
  title: {
    fontSize: 24,

    color: "#2d4436",
    marginBottom: 8,
  },
  amount: {
    fontSize: 32,

    color: "#2d4436",
    marginBottom: 16,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  percentageContainer: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  percentageText: {
    color: "#2d4436",

    fontSize: 20,
  },
  comparisonText: {
    color: "#2d4436",
    fontSize: 20,
  },
});
