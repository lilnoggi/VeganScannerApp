import { Text, View } from 'react-native';
import FormInput from '../components/FormInput'
import PrimaryButton from '../components/PrimaryButton';

export default function HomeScreen() {
  return (

    // --- MAIN CANVAS ---
    <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center'}}>
      
      {/* INSTANTIATE COMPONENTS */}
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