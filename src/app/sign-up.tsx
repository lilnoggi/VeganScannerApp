// --- IMPORTS ---
import { useState } from "react";
import { ScrollView, View } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from "@/theme/ThemeContext";

// --- COMPONENT IMPORTS ---
import AppText from "@/components/AppText";
import FormInput from "@/components/FormInput";
import PrimaryButton from "@/components/PrimaryButton";
import TextLink from "@/components/TextLink";

export default function SignUpScreen() {
    const { theme } = useTheme();

    // Typed Data States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: theme.background
            }}
            contentContainerStyle={{
                alignItems: 'center',
                paddingTop: 80,
                paddingBottom: 60
            }}
        >

            {/* --- HEADER --- */}
            <View
                style={{
                    width: '85%',
                    alignItems: 'center',
                    marginBottom: 30
                }}
            >
                <AppText variant="title">Create New Account</AppText>
                <TextLink
                    questionText="Already Registered?"
                    actionText="Log In here."
                    onPress={() => router.push('/login')}
                />
            </View>

            {/* --- INPUT FIELDS --- */}
            <FormInput
                label="NAME"
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
            />

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

            <FormInput
                label="DATE OF BIRTH"
                placeholder="DD/MM/YYYY"
                value={dob}
                onChangeText={setDob}
                maxLength={10}
            />

            {/* --- SUBMIT BUTTON --- */}
            <View
                style={{
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 10
                }}
            >
                <PrimaryButton
                    title="Sign up"
                    onPress={() => {
                        console.log("Signing up with:", { name, email, password, dob });
                        router.push('/');
                    }}
                />
            </View>

        </ScrollView>
    );
}