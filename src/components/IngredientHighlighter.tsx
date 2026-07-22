// --- IMPORTS ---
import React from "react";
import { Text } from "react-native";
import AppText from "./AppText";

// --- TYPES ---
type HighlighterProps = {
    ingredientsText: string;
    wordsToHighlight: string[];
    highlightColour: string;
};

export default function IngredientHighlighter({ ingredientsText, wordsToHighlight, highlightColour }: HighlighterProps) {
    // If API did not return any ingredients
    if (!ingredientsText) {
        return <AppText variant="body">No ingredient data available.</AppText>
    }

    // Dynamic Regex pattern from array of words
    // 'gi' means Gloabl (find all) and Case-Insensitive
    const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');

    // Split the string into an array of texts
    const textChunks = ingredientsText.split(regex);

    return (
        <AppText variant="body">
            {textChunks.map((chunk, index) => {
                // Check if this specific chunk is a highlighted words
                const isHighlighted = wordsToHighlight.some(
                    (word) => word.toLowerCase() === chunk.toLowerCase()
                );

                // If a match, render it bold and coloured. If not, normal text
                if (isHighlighted) {
                    return (
                        <Text key={index} style={{
                            color: highlightColour,
                            fontWeight: 'bold'
                        }}>
                            {chunk}
                        </Text>
                    );
                }

                return <Text key={index}>{chunk}</Text>;
            })}
        </AppText>
    );
}