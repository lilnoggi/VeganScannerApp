// --- IMPORTS ---
import { router } from 'expo-router'; 
import { useState } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native'; 
import AppText from '@/components/AppText';
import NavBar, { TabName } from '@/components/NavBar';
import Divider from '@/components/Divider';

export default function HomeScreen() {
    
    // --- VARIABLE TRACKING ---
    const [activeNavTab, setActiveNavTab] = useState<TabName>("Home");

    // ------------------------------------------------------------------

    return (
        <View style={{ flex: 1, backgroundColor: '#FCFBF9' }}>

            {/* --- MAIN SCROLLABLE CONTENT */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 60, paddingBottom: 120 }}
            >
                <AppText variant='title'>Home</AppText>
                <Divider variant='title'></Divider>

                {/* DEBUGGING LINK */}
                <TouchableOpacity 
                    style={{ marginBottom: 30 }}
                    onPress={() => {
                        console.log("LINK CLICKED! Attempting to navigate to /library...");
                        router.push('/library');
                    }}
                >
                    <AppText variant="subtitle">→ Go to Component Library</AppText>
                </TouchableOpacity>

            </ScrollView>

            {/* --- NAV BAR --- */}
            <View 
                pointerEvents="box-none" 
                style={{ position: 'absolute', bottom: 30, left: 0, right: 0, alignItems: 'center', zIndex: 10 }}
            >
                <NavBar
                    activeTab={activeNavTab}
                    onTabPress={(tab) => {
                        console.log("Nav Tab clicked:", tab);
                        setActiveNavTab(tab);
                    }}
                />
            </View>

        </View>
    );
}