// --- IMPORTS ---
// TouchableOpacity for clickable buttons
import { Text, TouchableOpacity } from 'react-native';

// --- TYPES ---
// Component needs to display text (title) & an action to perform when pressed (onPress)
type PrimaryButtonProps = {
    title: string;
    onPress: () => void; // NOTE: Empty function for now
};

// --- THE COMPONENT ---
export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={{
            backgroundColor: '#5A7D4C', // Matcha Green
            width: '85%',                 // Match width of text inputs
            paddingVertical: 15,
            borderRadius: 8,
            alignItems: 'center',         // Center text horizontally
            marginTop: 10,
        }}
        >
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}