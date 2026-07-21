// --- IMPORTS ---
import { Text } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';

// --- TYPES ---
type AppTextProps = {
    variant?: 'title' | 'h1' | "h2" | "h3" | 'subtitle' | 'body' | 'button' | 'inputLabel' | 'caption' | 'link';
    children: string | number; // Whatever is placed inside the tags
};

// --- THE COMPONENT ---
// Set varient = 'body' to set a default
export default function AppText({ variant = 'body', children }: AppTextProps) {

    const { theme } = useTheme();
    
    let textStyle: any = {}; // Empty style object // Use 'any' to prevent errors

    switch (variant) {
        case 'title':
            textStyle = { fontSize: 32, fontWeight: 'bold', color: theme.primaryText, marginBottom: 15 };
            break;
        case 'subtitle':
            textStyle = { fontSize: 18, fontWeight: '600', color: theme.border, marginBottom: 5 };
            break;
        case 'h1':
            textStyle = { fontSize: 24, fontWeight: 'bold', color: theme.secondary, marginBottom: 10 };
            break;
        case 'h2':
            textStyle = { fontSize: 20, fontWeight: 'bold', color: theme.primaryText, opacity: 0.55, marginBottom: 10 };
            break;
        case 'h3':
            textStyle = { fontSize: 16, fontWeight: 'bold', color: theme.secondary, marginBottom: 5 };
            break;
        case 'button':
            textStyle = { fontSize: 18, fontWeight: 'bold', color: theme.background };
            break;
        case 'inputLabel':
            textStyle = { fontSize: 14, fontWeight: 'bold', color: theme.primaryText, marginBottom: 6 };
            break;
        case 'caption':
            textStyle = { fontSize: 14, fontWeight: 'bold', color: theme.border };
            break;
        case 'link':
            textStyle = { fontSize: 14, fontWeight: 'bold', color: theme.border, textDecorationLine: 'underline' };
            break;
        case 'body':
        default:
            textStyle = { fontSize: 14, color: theme.primaryText };
            break;
    }

    // Pass chosen textStyle into standard <Text> tag
    return (
        <Text style={textStyle}>
            {children}
        </Text>
    );
}