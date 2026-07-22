// --- IMPORTS ---
import { View } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useTheme } from "@/theme/ThemeContext";

// --- COMPONENTS ---
import AppText from "@/components/AppText";
import PrimaryButton from "@/components/PrimaryButton";
import NavBar from "@/components/NavBar";

export default function ResultsScreen() {
    const { theme } = useTheme();

    // Get the barcode data passed from the scanner
    const { code } = useLocalSearchParams();

    const displayCode = Array.isArray(code) ? code[0] : code || "Unknown Code";

    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.background
        }}>
            {/* Main Content Area */}
            <View style={{
                flex: 1,
                alignItems: 'center',
                paddingTop: 100,
                paddingHorizontal: 20
            }}>
                <AppText variant="title">Scan Results</AppText>

                {/* Placeholder for the product image/status */}
                <View style={{
                    width: 150,
                    height: 150,
                    backgroundColor: theme.input,
                    borderRadius: 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 30,
                    borderWidth: 2,
                    borderColor: theme.border
                }}>
                    <AppText variant="h1">Test</AppText>
                </View>

                <AppText variant="h2">E-Code</AppText>
                <AppText variant="body">{displayCode}</AppText>

                <View style={{
                    marginTop: 40,
                    width:'100%',
                    alignItems: 'center'
                }}>
                    <PrimaryButton
                        title="Scan Another Item"
                        onPress={() => router.replace(`/scanner`)}
                    />
                </View>
            </View>

            {/* Bottom Navigation */}
            <View style={{
                paddingBottom: 40
            }}>
                <NavBar
                    activeTab="Scanner"
                    onTabPress={(tab) => console.log("Navigating to", tab)}
                />
            </View>

        </View>
    );
}