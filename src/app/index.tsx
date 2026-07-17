import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import FormInput from '@/components/FormInput'
import FormDropdown from '@/components/FormDropdown';
import FormToggle from '@/components/FormToggle';
import FormRadioButton from '@/components/FormRadioButton';
import PrimaryButton from '@/components/PrimaryButton';
import TextLink from '@/components/TextLink';

export default function HomeScreen() {
  // Create a variable to hold the user's dropdown choice
  const [dropdownChoice, setDropdownChoice] = useState("");

  // Variable to track if toggle is on or off
  const [isToggleOnOne, setIsToggleOnOne] = useState(false);
  const [isToggleOnTwo, setIsToggleOnTwo] = useState(false);

  // Variable to track the selected radio button
  const [selectedRadioChoice, setSelectedRadioChoice] = useState("Default");

  return (

    // --- MAIN CANVAS ---
    <ScrollView 
    style={{ 
      flex: 1, 
      backgroundColor: '#FFF', 
      }}
      contentContainerStyle={{
        alignItems: 'center',
        paddingVertical: 50
      }}
      >
      
      {/* --- INSTANTIATE COMPONENTS --- */}
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
      onSelect={(dropdownValue) => setDropdownChoice(dropdownValue)}
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

      {/* TOGGLES */}
      <FormToggle
      label="Toggle Example"
      isOn={isToggleOnOne}
      onToggle={(toggleValue) => setIsToggleOnOne(toggleValue)}
      />

      <FormToggle
      label="Toggle Example #2"
      isOn={isToggleOnTwo}
      onToggle={(toggleValue) => setIsToggleOnTwo(toggleValue)}
      />

      {/* RADIO TOGGLE */}
      <FormRadioButton
      label="Radio Example #1"
      selectedOption={selectedRadioChoice}
      onSelect={setSelectedRadioChoice}
      />
      <FormRadioButton
      label="Radio Example #2"
      selectedOption={selectedRadioChoice}
      onSelect={setSelectedRadioChoice}
      />
      <FormRadioButton
      label="Radio Example #3"
      selectedOption={selectedRadioChoice}
      onSelect={setSelectedRadioChoice}
      />

    </ScrollView>
  );
}