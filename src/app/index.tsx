import { useState } from 'react';
import { Text, View } from 'react-native';
import FormInput from '@/components/FormInput'
import FormDropdown from '@/components/FormDropdown';
import PrimaryButton from '@/components/PrimaryButton';
import TextLink from '@/components/TextLink';

export default function HomeScreen() {
  // Create a variable to hold the user's dropdown choice
  const [pronounChoice, setPronounChoice] = useState("");
  return (

    // --- MAIN CANVAS ---
    <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center'}}>
      
      {/* INSTANTIATE COMPONENTS */}
      {/* TEXT LINK */}
      <TextLink
      questionText="Already Registered?"
      actionText="Log in here."
      onPress={() => console.log("Link pressed! Going to Login...")}
      />
      <TextLink
      questionText="Haven't Registered?"
      actionText="Sign up here."
      onPress={() => console.log("Link pressed! Going to Signup...")}
      />

      {/* DROPDOWN */}
      <FormDropdown
      label="Pronouns"
      options={["He/Him", "She/Her", "They/Them", "Prefer not to say"]}
      selectedValue={pronounChoice}
      onSelect={(value) => setPronounChoice(value)}
      />

      {/* Text Inputs */}
      <FormInput label="Username" placeholder="@Username" />
      <FormInput label="Name" placeholder="Nickname" />
      <FormInput label="Bio" placeholder="Tell us about yourself..." />
      
      {/* BUTTONS */}
      <PrimaryButton
      title="Sign up"
      onPress={() => console.log("Sign up Button Pressed!")}
      />
      <PrimaryButton
      title="Login"
      onPress={() => console.log("Login Button Pressed!")}
      />

    </View>
  );
}