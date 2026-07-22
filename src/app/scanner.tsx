// --- IMPORTS ---
import { useRef } from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { useCameraPermissions, CameraView } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import { useTheme } from '@/theme/ThemeContext';

// --- COMPONENTS ---
import AppText from '@/components/AppText';
import PrimaryButton from '@/components/PrimaryButton';
import NavBar from '@/components/NavBar'; 

// ----------------------------------------------------------------

export default function ScannerScreen() {
    const { theme } = useTheme();

    // Check phone hardware permissions
    const [permission, requestPermission] = useCameraPermissions();
    
    // State to stop the scanner from firing 100 times a second
    const isScanningRef = useRef(false);

    // Track if user is currently on this screen
    const isFocused = useIsFocused();

    // Checking state
    if (!permission) {
        return <View style={{ flex: 1, backgroundColor: theme.background }} />;
    }

    // Denied/Pending State (not granted access)
    if (!permission.granted) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.background,
                padding: 20
            }}>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <AppText variant='h1'>Camera Access Required</AppText>
                    <AppText variant='body'>
                        We need access to your camera to scan E-Codes and barcodes.
                    </AppText>
                </View>

                <PrimaryButton
                    title="Grant Permission"
                    onPress={requestPermission}
                />
            </View>
        );
    }

    // --- THE SCANNING LOGIC ---
    const handleBarcodeScanned = ({ type, data }: { type: string, data: string }) => {
        
        // If locked, immediately reject
        if (isScanningRef.current) return;
        
        // Instantly lock it so no other frames can pass
        isScanningRef.current = true;

        console.log(`Scanned type: ${type}, data: ${data}`);
        
        // Alert the user what they scanned!
        router.replace({ pathname: '/results' as any, params: { code: data }});

        // Unlock after 2 seconds
        setTimeout(() => {
            isScanningRef.current = false;
        }, 2000);
        
    };

    // Granted State - Live Camera Feed
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>

            {/* Only render/active the camera if the screen is focused */}
            {isFocused && (
                <CameraView
                    style={{ 
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }}
                    facing="back"
                    // If it hasn't scanned yet, listen for a barcode. If it has, pause listening.
                    onBarcodeScanned={handleBarcodeScanned}
                />
            )}

                {/* --- UI OVERLAY --- */}
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    
                    {/* Instructions */}
                    <View style={{ position: 'absolute', top: 100, alignItems: 'center' }}>
                        <Text style={{ 
                            color: '#FFF', 
                            fontSize: 24, 
                            fontFamily: 'Nunito-Regular',
                            fontWeight: 'bold', 
                            textShadowColor: 'rgba(0,0,0,0.7)', 
                            textShadowOffset: { width: 1, height: 1 }, 
                            textShadowRadius: 5 
                        }}>
                            Scan a Product
                        </Text>
                        <Text style={{ 
                            color: '#FFF', 
                            fontSize: 16, 
                            fontFamily: 'Nunito-Regular',
                            marginTop: 10,
                            textShadowColor: 'rgba(0,0,0,0.7)', 
                            textShadowOffset: { width: 1, height: 1 }, 
                            textShadowRadius: 5 
                        }}>
                            Align barcode within the frame
                        </Text>
                    </View>

                    {/* Targeting Box */}
                    <View style={{
                        width: 250,
                        height: 250,
                        borderWidth: 4,
                        borderColor: theme.primaryButton,
                        borderRadius: 20,
                        backgroundColor: 'transparent'
                    }} />

                    {/* Navigation Bar at the bottom */}
                    <View style={{ position: 'absolute', bottom: 40, width: '100%' }}>
                        <NavBar 
                            activeTab="Scanner" 
                            onTabPress={(tab) => console.log("Navigating to", tab)}
                        />
                    </View>

                </View>
        </View>
    );
}