import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }: any) {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");

	const calculateBMI = () => {
		const h = parseFloat(height) / 100;
		const w = parseFloat(weight);
		if (!h || !w) return;
		const bmi = w / (h * h);
		navigation.navigate("Result", { bmi: bmi.toFixed(1) });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Boy (cm):</Text>
			<TextInput
				style={styles.input}
				keyboardType='numeric'
				value={height}
				onChangeText={setHeight}
			/>
			<Text style={styles.label}>Kilo (kg):</Text>
			<TextInput
				style={styles.input}
				keyboardType='numeric'
				value={weight}
				onChangeText={setWeight}
			/>
			<Button title='Hesapla' onPress={calculateBMI} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", padding: 20 },
	label: { fontSize: 18, marginBottom: 8 },
	input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
});
