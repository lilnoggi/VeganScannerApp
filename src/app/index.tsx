import { Text, View } from 'react-native';
import ProfileInput from '../components/ProfileInput'
import PrimaryButton from '../components/PrimaryButton';

export default function HomeScreen() {
  return (

    // --- MAIN CANVAS ---
    <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center'}}>
      
      {/* INSTANTIATE COMPONENTS */}
      {/* Text Inputs */}
      <ProfileInput label="Username" placeholder="@Username" />
      <ProfileInput label="Name" placeholder="Nickname" />
      <ProfileInput label="Bio" placeholder="Tell us about yourself..." />
      
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