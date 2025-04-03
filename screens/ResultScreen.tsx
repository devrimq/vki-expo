import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RecommendationCard from "../components/RecommendationCard";

export default function ResultScreen({ route }: any) {
	const { bmi } = route.params;

	let status = "";
	if (bmi < 18.5) status = "Zayıf";
	else if (bmi < 24.9) status = "Normal";
	else if (bmi < 29.9) status = "Fazla Kilolu";
	else status = "Obez";

	return (
		<View style={styles.container}>
			<Text style={styles.resultText}>BMI: {bmi}</Text>
			<Text style={styles.statusText}>Kategori: {status}</Text>
			<RecommendationCard bmi={parseFloat(bmi)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center" },
	resultText: { fontSize: 30, fontWeight: "bold" },
	statusText: { fontSize: 24, marginTop: 10 },
});
