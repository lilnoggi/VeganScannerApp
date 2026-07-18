// --- IMPORTS ---
import { Text, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';

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
        <AppText variant='body'>
            {`${questionText}${' '}`}
        </AppText>

        {/* --- LINK TEXT --- */}
        <TouchableOpacity onPress={onPress}>
            <AppText variant='link'>
                {actionText}
            </AppText>
        </TouchableOpacity>

        </View>
    );
}