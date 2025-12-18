import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

export default function PanicButton({ onPress }) {
  return (
    <View style={styles.wrap}>
      <Pressable onPress={onPress} style={styles.btn} accessibilityRole="button">
        <Text style={styles.title}>PANIC</Text>
        <Text style={styles.sub}>2-Tap RED • TIME = MUSCLE</Text>
      </Pressable>

      <Text style={styles.badge}>
        🧪 hs-Troponin = preferred biomarker for myocardial injury (triage faster)*
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 10 },
  btn: {
    backgroundColor: "#D7263D",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  title: { color: "white", fontSize: 22, fontWeight: "800", letterSpacing: 1 },
  sub: { color: "white", opacity: 0.95, marginTop: 4, fontWeight: "700" },
  badge: { fontSize: 12, opacity: 0.75, textAlign: "center" },
});
