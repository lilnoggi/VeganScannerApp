import { useState } from 'react';
import { Text, View } from 'react-native';
import FormInput from '@/components/FormInput'
import FormDropdown from '@/components/FormDropdown';
import PrimaryButton from '@/components/PrimaryButton';
import TextLink from '@/components/TextLink';

export default function HomeScreen() {
  // Create a variable to hold the user's dropdown choice
  const [dropdownChoice, setDropdownChoice] = useState("");
  return (

    // --- MAIN CANVAS ---
    <View style={{ 
      flex: 1, 
      backgroundColor: '#FFF', 
      justifyContent: 'center', 
      alignItems: 'center'
      }}>
      
      {/* INSTANTIATE COMPONENTS */}
      {/* TEXT LINK */}
      <TextLink
      questionText="Link Text Example"
      actionText="Press Link Here"
      onPress={() => console.log("Link pressed!")}
      />

      {/* DROPDOWN */}
      <FormDropdown
      label="Dropdown Example"
      options={["Option #1", "Option #2", "Option #3"]}
      selectedValue={dropdownChoice}
      onSelect={(value) => setDropdownChoice(value)}
      />

      {/* Text Inputs */}
      <FormInput 
      label="Text Input Example" 
      placeholder="Exmaple" 
      />

      <FormInput
      label="Counter Example"
      placeholder="Example"
      maxLength={20}
      />

      <FormInput
        label="Multiline Example"
        placeholder="Multiline Example..."
        isMultiline={true}
      />

      <FormInput
      label="Multiline Counter Example"
      placeholder="Multiline Example"
      isMultiline={true}
      maxLength={150}
      />
      
      {/* BUTTONS */}
      <PrimaryButton
      title="Primary Buton Example"
      onPress={() => console.log("Primary Button Pressed!")}
      />

      <PrimaryButton
      title="Small Example"
      onPress={() => console.log("Small Button Pressed!")}
      isSmall={true}
      />

    </View>
  );
}