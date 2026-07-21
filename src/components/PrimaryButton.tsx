// --- IMPORTS ---
// TouchableOpacity for clickable buttons
import { Text, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { useTheme } from '@/theme/ThemeContext';

// --- TYPES ---
// Component needs to display text (title) & an action to perform when pressed (onPress)
type PrimaryButtonProps = {
    title: string;
    onPress: () => void; // NOTE: Empty function for now
    isSmall? : boolean;
};

// --- THE COMPONENT ---
export default function PrimaryButton({ title, onPress, isSmall }: PrimaryButtonProps) {
    
    const { theme } = useTheme();
    
    return (
        <TouchableOpacity
        onPress={onPress}
        style={{
            backgroundColor: theme.primaryButton,     
            // If it's small, wrap tightly around the text. Otherwise, stretch to 85% width
            width: isSmall ? 'auto' : '85%',     // Match width of text inputs
            paddingVertical: isSmall ? 8 : 15,   // Less padding for the small variant
            paddingHorizontal: isSmall ? 15 : 0, // Add side padding so the small button isn't squished
            borderRadius: isSmall ? 20 : 8,      // Make the small one more pill-shaped
            alignItems: 'center',                // Center text horizontally
            marginTop: 10,
        }}
        >
            <AppText variant="button">
                {title}
            </AppText>
        </TouchableOpacity>
    );
}