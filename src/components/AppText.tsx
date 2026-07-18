// --- IMPORTS ---
import { Fonts } from '@/constants/theme';
import { Text } from 'react-native';

// --- TYPES ---
type AppTextProps = {
    variant?: 'title' | 'h1' | "h2" | "h3" | 'subtitle' | 'body' | 'button' | 'inputLabel' | 'caption' | 'link';
    children: string | number; // Whatever is placed inside the tags
};

// --- THE COMPONENT ---
// Set varient = 'body' to set a default
export default function AppText({ variant = 'body', children }: AppTextProps) {

    let textStyle = {}; // Empty style object

    switch (variant) {
        case 'title':
            textStyle = { fontSize: 32, fontWeight: 'bold', color: '#5C4033', marginBottom: 15 };
            break;
        case 'subtitle':
            textStyle = { fontSize: 18, fontWeight: '600', color: '#D4A373', marginBottom: 5 };
            break;
        case 'h1':
            textStyle = { fontSize: 24, fontWeight: 'bold', color: '#A06B42', marginBottom: 10 };
            break;
        case 'h2':
            textStyle = { fontSize: 20, fontWeight: 'bold', color: '#5E30238C', marginBottom: 10 };
            break;
        case 'h3':
            textStyle = { fontSize: 16, fontWeight: 'bold', color: '#895737', marginBottom: 5 };
            break;
        case 'button':
            textStyle = { fontSize: 18, fontWeight: 'bold', color: '#F3E9DC' };
            break;
        case 'inputLabel':
            textStyle = { fontSize: 14, fontWeight: 'bold', color: '#5E3023', marginBottom: 6 };
            break;
        case 'caption':
            textStyle = { fontSize: 14, fontWeight: 'bold', color: '#C4A48A' };
            break;
        case 'link':
            textStyle = { fontSize: 14, fontWeight: 'bold', color: '#D4A373', textDecorationLine: 'underline' };
            break;
        case 'body':
        default:
            textStyle = { fontSize: 14, color: '#5C4033' };
            break;
    }

    // Pass chosen textStyle into standard <Text> tag
    return (
        <Text style={textStyle}>
            {children}
        </Text>
    );
}