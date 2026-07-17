// --- IMPORTS ---
// Import 'useState' so the component can remember if it is open or closed
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// --- TYPES ---
type FormDropdownProps = {
    label: string;
    options: string[] 
    selectedValue: string;
    onSelect: (value: string) => void; // A function that send the chosen text back to the main script
};

// --- THE COMPONENT ---
export default function FormDropdown({ label, options, selectedValue, onSelect}: FormDropdownProps) {
    // --- STATE ---
    // isOpen is type
    // setIsOpen is the function
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={{ width: '85%', marginBottom: 20 }}>

        {/* --- THE LABEL --- */}
        <Text style={{ color: '#5C4033', fontWeight: 'bold', marginBottom: 6, fontSize: 14 }}>
            {label}
        </Text>

        {/* --- THE MAIN BUTTON --- */}
        <TouchableOpacity
        // When pressed, flip the bool to the opposite of what it currently is
        onPress={() => setIsOpen(!isOpen)}
        style={{
            backgroundColor: '#F8F4E6',
            borderColor: '#D4A373',
            borderWidth: 1.5,
            // If the menu is open, make the bottom corners flat so the list attatches seamlessly
            borderRadius: isOpen ? 0 : 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingHorizontal: 15,
            paddingVertical: 12,
            flexDirection: 'row', // Aligns the text and the arrow side-by-side
            justifyContent: 'space-between', // Pushes text to the left, arrow to the right
          }}
        >
        <Text style={{ color: selectedValue ? '#5C5033' : '#C4A48A', fontSize: 16 }}>
            {selectedValue || "Select an option..."}
        </Text>

        {/* Arrow that flips when open */}
        <Text style={{ color: '#D4A373', fontWeight: 'bold' }}>
            {isOpen ? '^' : ">"}
        </Text>
    </TouchableOpacity>
    
    {/* --- DROPDOWN LIST --- */}
    {isOpen && (
        <View style={{
            backgroundColor: '#F8F4E6',
            borderColor: '#D4A373',
            borderWidth: 1.5,
            borderTopWidth: 0, // Remove the double border where it touches the button
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}>
            {/* Loop through every option in the array and generate a clickable button for it */}
            {options.map((option, index) => (
                <TouchableOpacity
                key={index}
                onPress={() => {
                    onSelect(option); // Send the choice back to the main script
                    setIsOpen(false); // Close the menu
                  }}
                style={{
                    paddingVertical: 12,
                    paddingHorizontal: 15,
                    // Add a faint line between options, but not on the very last
                    borderBottomWidth: index === options.length - 1 ? 0 : 1,
                    borderBottomColor: '#E8D4C4'
                  }}
                >
                  <Text style={{ color: '#5C5033', fontSize: 16 }}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
        )}

        </View>
    );
}