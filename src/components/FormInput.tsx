// --- IMPORTS ---
// Get the specific UI tools needed from React Native engine
import { Text, TextInput, View } from 'react-native';

// --- VARIABLE TYPES ---
// Define what type of data this prefab expects/requires
type FormInputProps = {
    label: string;
    placeholder: string;
};

// --- THE COMPONENT ---
// Pass the { label, placeholder } variables into the component
// so the UI knows what text to display when it renders.
export default function FormInput({ label, placeholder }: FormInputProps) {
    return (

        // --- VIEW ---
        // <View> is like an invisible container box.
        // Use JavaScript object to style it ( "{{}}")
        <View style={{ width: '85%', marginBottom: 20 }}>
            
            {/* --- TEXT --- */}
            {/* left-aligned label */}
            <Text style={{ color: '#5C4033', fontWeight: 'bold', marginBottom: 6, fontSize: 14 }}>
                {label}
            </Text>

            {/* --- TEXT INPUT --- */}
            {/* Pass 'placeholder' variable into its properties */}
            <TextInput
            placeholder={placeholder}
            placeholderTextColor="#C4A48A"
            style={{
                backgroundColor: '#F8F4E6', // Cream fill
                borderColor: '#D4A373',     // Caramel border
                borderWidth: 1.5,
                borderRadius: 8,
                paddingHorizontal: 15,        // Padding-left & padding-right
                paddingVertical: 12,          // padding-top & padding-bottom
                fontSize: 16,
                color: '#5C5033'            // Dark Coffee text colour for typing
            }}
            />
        </View>
    );
}