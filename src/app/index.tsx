import { Text, View } from 'react-native';
import FormInput from '../components/FormInput'
import PrimaryButton from '../components/PrimaryButton';
import TextLink from '@/components/TextLink';

export default function HomeScreen() {
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