// --- IMPORTS ---
import { View } from 'react-native';

// --- TYPES ---
type DividerProps = {
    // If no variant provided, default to standard
    variant?: 'title' | 'standard' | 'faded';
};

export default function Divider({ variant = 'standard' }: DividerProps) {
    
    // Base styles for the 'standard caramel line
    let lineColor = '#C08552';
    let lineThickness = 1;
    let verticalSpacing = 10;

    // Modify the styles based on the variant
    if (variant === 'title') {
        lineColor = '#5E3023'; // Dark coffee
        lineThickness = 2;       // Thicker line
        verticalSpacing = 20;    // More room under a screen title
    } else if (variant === 'faded') {
        lineColor = '#C085528E'; // Lighter, faded caramel
        verticalSpacing = 15;
    }

    return (
        <View style={{
            width: '85%',
            height: lineThickness,
            backgroundColor: lineColor,
            marginVertical: verticalSpacing, // Adds space above and below the line
        }} />
    );
}