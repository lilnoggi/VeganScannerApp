// --- IMPORTS ---
import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';

// --- TYPES ---
type DividerProps = {
    // If no variant provided, default to standard
    variant?: 'title' | 'standard' | 'faded';
};

export default function Divider({ variant = 'standard' }: DividerProps) {

    const { theme } = useTheme();
    
    // Default
    let activeColor = theme.border;
    let lineThickness = 1;
    let verticalSpacing = 10;
    let lineOpacity = 1;

    // Modify the styles based on the variant
    if (variant === 'title') {
        activeColor = theme.primaryText; // use the Themes primary colour
        lineThickness = 2;       // Thicker line
        verticalSpacing = 20;    // More room under a screen title
    } else if (variant === 'faded') {
        lineOpacity = 0.5; // lower opacity of default line
        verticalSpacing = 15;
    }

    return (
        <View style={{
            width: '85%',
            height: lineThickness,
            backgroundColor: activeColor,
            opacity: lineOpacity,
            marginVertical: verticalSpacing, // Adds space above and below the line
        }} />
    );
}