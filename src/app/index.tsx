import { Text, View } from 'react-native';
import ProfileInput from '../components/ProfileInput'

export default function HomeScreen() {
  return (

    // --- MAIN CANVAS ---
    <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center'}}>
      
      {/* INSTANTIATE COMPONENTS */}
      {/* Feed unique data into prefab fields */}
      <ProfileInput label="Username" placeholder="@Username" />
      <ProfileInput label="Name" placeholder="Nickname" />
      <ProfileInput label="Bio" placeholder="Tell us about yourself..." />
      
    </View>
  );
}