// --- IMPORTS ---
import { useState } from 'react';
import { View, Text } from 'react-native';
import { useCameraPermissions, CameraView } from 'expo-camera';
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
    const [scanned, setScanned] = useState(false);

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
        setScanned(true);
        console.log(`Scanned type: ${type}, data: ${data}`);
        
        // Alert the user what they scanned!
        alert(`Barcode Scanned!\nData: ${data}`);
        
        // Reset the scanner after 2 seconds so they can scan another item
        setTimeout(() => {
            setScanned(false);
        }, 2000);
    };

    // Granted State - Live Camera Feed
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <CameraView
                style={{ flex: 1 }}
                facing="back"
                // If it hasn't scanned yet, listen for a barcode. If it has, pause listening.
                onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
            >
                {/* --- UI OVERLAY --- */}
                <View style={{
                    flex: 1,
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
            </CameraView>
        </View>
    );
}