// --- IMPORTS---
import { Text, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';
import { useTheme } from '@/theme/ThemeContext';

type MenuRowProps = {
    label:string;
    onPress: () => void;
};

export default function MenuRow({ label, onPress }: MenuRowProps) {
    
    const { theme } = useTheme();
    
    return (
        <TouchableOpacity
        onPress={onPress}
        style={{
            width: '85%',
            paddingVertical: 15, // Slightly taller padding for easier tapping
            borderBottomWidth: 1,
            borderBottomColor: theme.border, // Caramel divider line
            justifyContent: 'center',
        }}
        >
            <AppText variant='h3'>
                {label}
            </AppText>
        </TouchableOpacity>
    );
}