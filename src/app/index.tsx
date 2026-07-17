import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import FormInput from '@/components/FormInput'
import FormDropdown from '@/components/FormDropdown';
import FormToggle from '@/components/FormToggle';
import FormRadioButton from '@/components/FormRadioButton';
import PrimaryButton from '@/components/PrimaryButton';
import MenuRow from '@/components/MenuRow';
import TextLink from '@/components/TextLink';
import Divider from '@/components/Divider';
import AppText from '@/components/AppText';

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
      showsVerticalScrollIndicator={false}
        style={{ 
          flex: 1, 
          backgroundColor: '#FFF', 
        }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: 50
        }}
      >

      {/* --- PAGE TITLE --- */}
      <AppText variant="title">Component Library</AppText>
      <Divider variant="title"/>

      {/* TEXT LINK */}
      <AppText variant="h1">Navigation Links</AppText>
      <TextLink
      questionText="Link Text Example"
      actionText="Press Link Here"
      onPress={() => console.log("Link pressed!")}
      />
      <Divider/>

      {/* Text Inputs */}
      <AppText variant="h1">Text Inputs</AppText>
      <AppText variant="h2">Single Line Examples</AppText>
      <FormInput 
      label="Text Input Example" 
      placeholder="Exmaple" 
      />

      <FormInput
      label="Counter Example"
      placeholder="Example"
      maxLength={20}
      />
      <Divider variant='faded'/>

      <AppText variant="h2">Multiline Examples</AppText>
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

      <Divider/>
      
      {/* BUTTONS */}
      <AppText variant="h1">Button Components</AppText>
      <AppText variant="h2">Action Buttons</AppText>
      <PrimaryButton
      title="Primary Buton Example"
      onPress={() => console.log("Primary Button Pressed!")}
      />

      <PrimaryButton
      title="Small Example"
      onPress={() => console.log("Small Button Pressed!")}
      isSmall={true}
      />

      <Divider variant='faded'/>

      {/* DROPDOWN */}
      <AppText variant="h2">Dropdown</AppText>
      <FormDropdown
      label="Dropdown Example"
      options={["Option #1", "Option #2", "Option #3"]}
      selectedValue={dropdownChoice}
      onSelect={(dropdownValue) => setDropdownChoice(dropdownValue)}
      />

      <Divider variant='faded'/>

      {/* TOGGLES */}
      <AppText variant="h2">Toggle Buttons</AppText>
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

      <Divider variant='faded'/>

      {/* RADIO TOGGLE */}
      <AppText variant="h2">Radio Buttons</AppText>
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

      <Divider variant='faded'/>

      <AppText variant="h2">Menu Row Buttons</AppText>
      <MenuRow
      label="Option #1"
      onPress={() => console.log("Option #1 Selected")}
      />
      <MenuRow
      label="Option #2"
      onPress={() => console.log("Option #2 Selected")}
      />
      <MenuRow
      label="Option #3"
      onPress={() => console.log("Option #3 Selected")}
      />

      <Divider/>

    </ScrollView>
  );
}