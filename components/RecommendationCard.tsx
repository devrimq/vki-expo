import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
	bmi: number;
};

type Recommendation = {
	status: string;
	advice: string;
	backgroundColor: string;
	borderColor: string;
	emoji: string;
};

const getRecommendation = (bmi: number): Recommendation => {
	if (bmi < 18.5) {
		return {
			status: "Zayıf",
			advice:
				"Beslenmeni artır, kaslarını güçlendir. Sağlıklı kilo alımı seni dengeleyecektir!",
			backgroundColor: "#E0F2FE",
			borderColor: "#38BDF8",
			emoji: "🪶",
		};
	} else if (bmi < 24.9) {
		return {
			status: "Normal",
			advice: "Harikasın! Dengeli beslenme ve düzenli hareketle böyle devam 🚀",
			backgroundColor: "#DCFCE7",
			borderColor: "#22C55E",
			emoji: "✅",
		};
	} else if (bmi < 29.9) {
		return {
			status: "Fazla Kilolu",
			advice: "Biraz dikkat! Küçük alışkanlıklar, büyük farklar yaratır 💪",
			backgroundColor: "#FEF3C7",
			borderColor: "#FBBF24",
			emoji: "🍔",
		};
	} else {
		return {
			status: "Obez",
			advice: "Moral bozma! Birlikte aşılır. Sağlık uzmanıyla adım at 🚶‍♂️",
			backgroundColor: "#FECACA",
			borderColor: "#EF4444",
			emoji: "🚨",
		};
	}
};

export default function RecommendationCard({ bmi }: Props) {
	const { status, advice, backgroundColor, borderColor, emoji } =
		getRecommendation(bmi);

	return (
		<View style={[styles.card, { backgroundColor, borderColor }]}>
			<Text style={styles.title}>
				{emoji} Durum: {status}
			</Text>
			<Text style={styles.text}>{advice}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		padding: 20,
		borderRadius: 12,
		marginTop: 30,
		marginHorizontal: 20,
		borderWidth: 2,
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 3 },
		shadowRadius: 5,
		elevation: 4,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 12,
		textAlign: "center",
	},
	text: {
		fontSize: 17,
		textAlign: "center",
		lineHeight: 24,
	},
});
