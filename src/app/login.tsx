// --- IMPORTS ---
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '@/theme/ThemeContext';

// --- COMPONENTS ---
import AppText from '@/components/AppText';
import FormInput from '@/components/FormInput';
import PrimaryButton from '@/components/PrimaryButton';
import TextLink from '@/components/TextLink';

export default function LoginScreen() {
    const { theme } = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ 
                flex: 1, 
                backgroundColor: theme.background 
            }}
            contentContainerStyle={{ 
                alignItems: 'center', 
                paddingTop: 100, 
                paddingBottom: 60 
            }}
        >
            {/* --- HEADER --- */}
            <View style={{ 
                width: '85%', 
                alignItems: 'center', 
                marginBottom: 40 
                }}>
                <AppText variant='title'>Sign-In</AppText>
                <TextLink
                    questionText="Haven't Registered?"
                    actionText="Sign up here."
                    onPress={() => router.push('/sign-up')} // Navigates to the Sign Up screen
                />
            </View>

            {/* --- INPUT FIELDS --- */}
            <FormInput
                label="EMAIL"
                placeholder="youremail@example.com"
                value={email}
                onChangeText={setEmail}
            />

            <FormInput
                label="PASSWORD"
                placeholder="*****"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            {/* --- FORGOT PASSWORD LINK --- */}
            <View style={{ 
                width: '85%', 
                alignItems: 'flex-end', 
                marginTop: -10, 
                marginBottom: 20 
                }}>
                <TextLink
                    questionText=""
                    actionText="Forgot Password?"
                    onPress={() => console.log("Forgot Password pressed")}
                />
            </View>

            {/* --- SUBMIT BUTTON --- */}
            <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
                <PrimaryButton
                    title="Login"
                    onPress={() => {
                        console.log("Logging in with:", { email, password });
                        router.push('/'); 
                    }}
                />
            </View>

        </ScrollView>
    );
}