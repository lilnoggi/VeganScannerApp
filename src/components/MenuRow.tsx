// --- IMPORTS---
import { Text, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';

type MenuRowProps = {
    label:string;
    onPress: () => void;
};

export default function MenuRow({ label, onPress }: MenuRowProps) {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={{
            width: '85%',
            paddingVertical: 15, // Slightly taller padding for easier tapping
            borderBottomWidth: 1,
            borderBottomColor: '#E8D4C4', // Caramel divider line
            justifyContent: 'center',
        }}
        >
            <AppText variant='h3'>
                {label}
            </AppText>
        </TouchableOpacity>
    );
}