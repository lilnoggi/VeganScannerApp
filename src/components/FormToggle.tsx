// --- IMPORTS ---
import { Switch, Text, View } from 'react-native';
import AppText from './AppText';
import { useTheme } from '@/theme/ThemeContext';

// --- TYPES ---
type FormToggleProps = {
    label: string;
    isOn: boolean;
    onToggle: (value: boolean) => void;
};

// --- THE COMPONENT ---
export default function FormToggle({ label, isOn, onToggle }: FormToggleProps) {
    
    const { theme } = useTheme();
    
    return (
        <View style={{
            flexDirection: 'row', // Places the text and the switch side-by-side
            justifyContent: 'space-between', // Pushes text to the far left, switch to the far right
            alignItems: 'center', // Centers them vertically
            width: '85%',
            paddingVertical: 12,
            // Add horizontal line to separate list items
            borderBottomWidth: 1,
            borderBottomColor: theme.border
        }}>

            {/* --- THE LABEL --- */}
            <AppText variant='h3'>
                {label}
            </AppText>

            {/* ANIMATED SWITCH */}
            <Switch
            value={isOn}
            onValueChange={onToggle}
            // Pill shaped background
            trackColor={{
                false: theme.border, // Light Caramel when OFF
                true: theme.primaryButton  // Match green when ON
            }}
            // Circle Colour
            thumbColor={isOn? theme.secondary : theme.primaryText} // Shifts between lighter and darker caramel 
            />

        </View>
    )
}