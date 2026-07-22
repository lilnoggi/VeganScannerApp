// --- IMPORTS ---
import { useState } from 'react'; // Use to track character count
// Get the specific UI tools needed from React Native engine
import { TextInput, View, TouchableOpacity, Image } from 'react-native';
import AppText from './AppText';
import { useTheme } from '@/theme/ThemeContext';

// --- VARIABLE TYPES ---
// Define what type of data this prefab expects/requires
type FormInputProps = {
    label: string;
    placeholder: string;
    isMultiline? : boolean;
    maxLength?: number; 
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
};

// --- THE COMPONENT ---
// Pass the { label, placeholder } variables into the component
// so the UI knows what text to display when it renders.
export default function FormInput({ 
    label, 
    placeholder, 
    isMultiline, 
    maxLength,
    value,
    onChangeText,
    secureTextEntry 
}: FormInputProps) {
    
    // --- STATE ---
    // Track the current number of characters typed. Starts at 0
    const [textLength, setTextLength] = useState(0);

    // State to track if password is currently hidden
    const [isPasswordHidden, setIsPasswordHidden] = useState(secureTextEntry);

    const { theme } = useTheme();
    
    return (

        // --- VIEW ---
        // <View> is like an invisible container box.
        // Use JavaScript object to style it ( "{{}}")
        <View style={{ width: '85%', marginBottom: 20 }}>
            
            {/* --- LABEL --- */}
            {/* left-aligned label */}
            <AppText variant="inputLabel">
                {label}
            </AppText>

            {/* --- WRAPPER VIEW --- */}
            {/* This container will pin the counter to the bottom right of the input box */}
            <View style={{ position: 'relative', justifyContent: 'center' }}>

                {/* --- TEXT INPUT --- */}
                {/* Pass 'placeholder' variable into its properties */}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={theme.border}
                    multiline={isMultiline}
                    maxLength={maxLength}
                    value={value}
                    secureTextEntry={secureTextEntry ? isPasswordHidden : false}
                    // Everytime the text changes, update the state with the new string's length
                    onChangeText={(text) => {
                        setTextLength(text.length);
                        if (onChangeText) onChangeText(text);
                    }}
                    style={{
                        backgroundColor: theme.input, // Cream fill
                        borderColor: theme.border,     // Caramel border
                        borderWidth: 1.5,
                        borderRadius: 8,
                        paddingHorizontal: 15,        // Padding-left & padding-right
                        paddingVertical: 12,          // padding-top & padding-bottom
                        paddingRight: secureTextEntry && maxLength ? 75 : secureTextEntry ? 45 : maxLength ? 45 : 15,
                        // If there is a max length, add extra padding at the bottom so text doesn't overlap the counter
                        paddingBottom: maxLength && isMultiline ? 25 : 12,
                        fontSize: 16,
                        color: theme.primaryText,           // Dark Coffee text colour for typing
                        // If multiline is true, make it 100px tall and start typing at the top. Otherwise, keep it normal
                        height: isMultiline ? 100: 'auto',
                        textAlignVertical: isMultiline ? 'top' : 'center'
                      }}
                />

                {/* --- PASSWORD VISIBILITY TOGGLE ICON --- */}
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                        style={{
                            position: 'absolute',
                            right: 12,
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 4,
                        }}
                    >
                        <Image
                            source={
                                isPasswordHidden
                                    ? require('../../assets/icons/HiddenIcon_Placeholder.png')
                                    : require('../../assets/icons/ViewIcon_Placeholder.png')
                            }
                            style={{
                                width: 22,
                                height: 22,
                                tintColor: theme.border,
                            }}
                        />
                    </TouchableOpacity>
                )}

            {/* --- CHARACTER COUNTER --- */}
            {/* Only render this text if a maxLength was provided to the component */}
            {maxLength && (
                <View style={{
                    position: 'absolute',
                    bottom: 8,
                    right: secureTextEntry ? 42 : 12,
                }}>
                    <AppText variant='caption'>
                        {`${textLength}/${maxLength}`}
                    </AppText>
                </View>
              )}
            </View>
            
        </View>
    );
}