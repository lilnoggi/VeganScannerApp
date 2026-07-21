// --- IMPORTS ---
import { router } from 'expo-router'; 
import { useState } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native'; 

// --- THEMES ---
import { useTheme } from '@/theme/ThemeContext';

// --- CUSTOM COMPONENTS ---
import AppText from '@/components/AppText';
import NavBar, { TabName } from '@/components/NavBar';
import Divider from '@/components/Divider';
import SearchBar from '@/components/SearchBar';
import ImageCarousel from '@/components/ImageCarousel';

export default function HomeScreen() {
    
    // --- STATE ---
    const [activeNavTab, setActiveNavTab] = useState<TabName>("Home");
    const { theme, themeName, setTheme } = useTheme();

    // ------------------------------------------------------------------

    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>

            {/* --- MAIN SCROLLABLE CONTENT */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ 
                    alignItems: 'center',
                    paddingTop: 60, 
                    paddingBottom: 120 
                }}
            >
                { /* --- HEADER --- */}
                <View style={{
                    width: '85%'
                }}>
                    <AppText variant='title'>Home</AppText>
                    <Divider variant='title'></Divider>
                </View>

                {/* --- SEARCH BAR --- */}
                <SearchBar
                    label='Search E-Code'
                    placeholder='ECode'
                    onSearch={(text) => console.log("Searching for:", text)}
                />

                <View style={{
                    width: '85%'
                }}>
                    <Divider/>
                </View>

                {/* --- RECTNLY SCANNED CAROUSEL --- */}
                <ImageCarousel
                    title='Recently Scanned'
                    images={[
                        require('../../assets/icons/Image_Placeholder.png'),
                         require('../../assets/icons/Image_Placeholder.png'),
                        require('../../assets/icons/Image_Placeholder.png'),
                        require('../../assets/icons/Image_Placeholder.png'),
                        require('../../assets/icons/Image_Placeholder.png')
                    ]}
                />

                <View style={{
                    width: '85%'
                }}>
                    <Divider/>
                </View>

                {/* --- TRENDING CAROUSEL --- */}
                <ImageCarousel
                    title='Trending'
                    images={[
                        require('../../assets/icons/Image_Placeholder.png'),
                         require('../../assets/icons/Image_Placeholder.png'),
                        require('../../assets/icons/Image_Placeholder.png'),
                        require('../../assets/icons/Image_Placeholder.png'),
                        require('../../assets/icons/Image_Placeholder.png')
                    ]}
                />

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