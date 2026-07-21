// --- IMPORTS ---
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import AppText from './AppText';

// --- TYPES ---
type SearchBarProps = {
    label?: string;
    placeholder: string;
    onSearch: (searchText: string) => void;
};

// --- THE COMPONENT ---
export default function SearchBar({ label, placeholder, onSearch}: SearchBarProps) {
    // State to remember what the user types before submit
    const [text, setText] = useState("");

    return (
        <View style={{ width: '85%', marginBottom: 20 }}>

            {/* --- LABEL --- */}
            {label && (
                <AppText variant="h2">{label}</AppText>
            )}

            {/* --- SEARCH ROW --- */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                {/* Input Box */}
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F8F4E6',
                    borderColor: '#D4A373',
                    borderWidth: 1.5,
                    borderRadius: 8,
                    paddingHorizontal: 12,
                    height: 48,
                }}>
                    {/* Magnifying Glass Icon */}
                    <Image
                        source={require('../../assets/icons/SearchIcon_Placeholder.png')}
                        style={{ 
                            width: 18,
                            height: 18,
                            tintColor: '#C4A48A',
                            marginRight: 10
                        }}
                        resizeMode='contain'
                    />

                    {/* Actual Text Input */}
                    <TextInput
                        style={{
                            flex: 1,
                            color: '#5C4033',
                            fontSize: 16
                        }}
                        placeholder={placeholder}
                        placeholderTextColor="#C4A48A"
                        value={text}
                        onChangeText={setText}
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity
                    onPress={() => onSearch(text)}
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 24,
                        borderColor: '#D4A373',
                        borderWidth: 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FCFBF9',
                    }}
                >
                    <Image
                        source={require('../../assets/icons/BackIcon_Placeholder.png')}
                        style={{ 
                            width: 32,
                            height: 32,
                            tintColor: '#C4A48A',
                            transform: [{rotate: '180deg'}]
                        }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>

            </View>
        </View>
    );
}