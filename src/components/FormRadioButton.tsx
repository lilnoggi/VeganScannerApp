// --- IMPORTS ---
import { Text, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';

// --- TYPES ---
type FormRadioButtonProps = {
    label: string;
    selectedOption: string; // Current active choice across whole group
    onSelect: (value: string) => void;
};

// --- THE COMPONENT ---
export default function FormRadioButton({ label, selectedOption, onSelect }: FormRadioButtonProps) {
    
    // Check if THIS specific radio button is the one currently selected
    const isSelected = selectedOption === label;

    return (
        <TouchableOpacity
        onPress={() => onSelect(label)}
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '85%',
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#E8D4C4'
        }}
        >
            {/* --- THE LABEL --- */}
            <AppText variant='h3'> 
                {label}
            </AppText>

            {/* --- OUTER CIRCLE */}
            <View style={{
                height: 24,
                width: 24,
                borderRadius: 12, // Setting radius to half height/width makes a circle
                borderWidth: 1.5,
                borderColor: isSelected ? '#5A7D4C' : '#D4A373', // Green if selected, Caramel if not
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                {/* --- INNER CIRCLE --- */}
                {/* This smaller filled circle only renders if isSelected is true */}
                {isSelected && (
                    <View style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: '#5A7D4C', // Matcha Green fille
                    }} />
                )}

            </View>
        </TouchableOpacity>
    );
}