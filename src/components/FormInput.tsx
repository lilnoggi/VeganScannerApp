// --- IMPORTS ---
import { useState } from 'react'; // Use to track character count
// Get the specific UI tools needed from React Native engine
import { Text, TextInput, View } from 'react-native';

// --- VARIABLE TYPES ---
// Define what type of data this prefab expects/requires
type FormInputProps = {
    label: string;
    placeholder: string;
    isMultiline? : boolean;
    maxLength?: number; 
};

// --- THE COMPONENT ---
// Pass the { label, placeholder } variables into the component
// so the UI knows what text to display when it renders.
export default function FormInput({ label, placeholder, isMultiline, maxLength }: FormInputProps) {
    
    // --- STATE ---
    // Track the current number of characters typed. Starts at 0
    const [textLength, setTextLength] = useState(0);
    
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

            {/* --- WRAPPER VIEW --- */}
            {/* This container will pin the counter to the bottom right of the input box */}
            <View style={{ position: 'relative' }}>

                {/* --- TEXT INPUT --- */}
                {/* Pass 'placeholder' variable into its properties */}
                <TextInput
                placeholder={placeholder}
                placeholderTextColor="#C4A48A"
                multiline={isMultiline}
                maxLength={maxLength}
                // Everytime the text changes, update the state with the new string's length
                onChangeText={(text) => setTextLength(text.length)}
                style={{
                    backgroundColor: '#F8F4E6', // Cream fill
                    borderColor: '#D4A373',     // Caramel border
                    borderWidth: 1.5,
                    borderRadius: 8,
                    paddingHorizontal: 15,        // Padding-left & padding-right
                    paddingVertical: 12,          // padding-top & padding-bottom
                    // If there is a max length, add extra padding at the bottom so text doesn't overlap the counter
                    paddingBottom: maxLength && isMultiline ? 25 : 12,
                    fontSize: 16,
                    color: '#5C5033',           // Dark Coffee text colour for typing
                    // If multiline is true, make it 100px tall and start typing at the top. Otherwise, keep it normal
                    height: isMultiline ? 100: 'auto',
                    textAlignVertical: isMultiline ? 'top' : 'center'
                }}
            />

            {/* --- CHARACTER COUNTER --- */}
            {/* Only render this text if a maxLength was provided to the component */}
            {maxLength && (
                <Text style={{
                    position: 'absolute',
                    bottom: 8,
                    right: 12,
                    fontSize: 12,
                    color: '#C4A48A',
                    fontWeight: 'bold'
                }}>
                    {textLength}/{maxLength}
                </Text>
              )}
            </View>
            
        </View>
    );
}