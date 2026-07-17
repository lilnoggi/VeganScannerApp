// --- IMPORTS ---
import { Text, TouchableOpacity, View } from 'react-native';

// --- TYPES ---
// Two string for normal text and clickable text
type TextLinkProps = {
    questionText: string;
    actionText: string;
    onPress: () => void;
};

// --- THE COMPONENT ---
export default function TextLink({ questionText, actionText, onPress }: TextLinkProps) {
    return (
        // Force the text to sit side-by-side
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>

        {/* --- STANDARD TEXT --- */}
        <Text style={{ color: '#5C4033', fontSize: 14}}>
            {questionText}{' '}
        </Text>

        {/* --- LINK TEXT --- */}
        <TouchableOpacity onPress={onPress}>
            <Text style={{
                color: '#D4A373',   // Caramel colour
                fontSize: 14,
                fontWeight: 'bold',
                textDecorationLine: 'underline'
            }}>
                {actionText}
            </Text>
        </TouchableOpacity>

        </View>
    );
}