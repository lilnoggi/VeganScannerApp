// --- IMPORTS ---
import React from 'react';
import { View, TouchableOpacity, Image, ImageSourcePropType, Text } from 'react-native';
import { router } from 'expo-router'; 
import { useTheme } from '@/theme/ThemeContext';

// --- TYPES ---
export type TabName = 'Home' | 'Scanner' | 'Community' | 'Profile';

type NavBarProps = {
    activeTab: TabName;
    onTabPress: (tab: TabName) => void;
};

// --- THE COMPONENT ---
export default function NavBar({ activeTab, onTabPress }: NavBarProps) {
    
    const { theme } = useTheme();

    // Helper function to handle both state and routing
    const handleNavigation = (tab: TabName) => {
        onTabPress(tab); // Keep updating the visual state

        // Route to the corresponding screen file
        switch (tab) {
            case 'Home':
                router.replace('/'); 
                break;
            case 'Scanner':
                router.replace('/scanner');
                break;
            case 'Community':
                // router.replace('/community');
                break;
            case 'Profile':
                // router.replace('/profile');
                break;
        }
    };
    
    return (
        // floating "Pill" background
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: theme.input,
            borderRadius: 30, 
            paddingVertical: 12,
            paddingHorizontal: 10,
            marginHorizontal: 20, 
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5, 
        }}>

            <NavItem 
                label="Home" 
                isActive={activeTab === 'Home'}
                activeIcon={require('../../assets/icons/Nav/Selected/HomeIcon_Selected_Placeholder.png')}
                inactiveIcon={require('../../assets/icons/Nav/Unselected/HomeIcon_Unselected_Placeholder.png')}
                onPress={() => handleNavigation('Home')} 
            />

            <NavItem 
                label="Scanner" 
                isActive={activeTab === 'Scanner'}
                activeIcon={require('../../assets/icons/Nav/Selected/ScannerIcon_Selected_Placeholder.png')}
                inactiveIcon={require('../../assets/icons/Nav/Unselected/ScannerIcon_Unselected_Placeholder.png')}
                onPress={() => handleNavigation('Scanner')}
            />

            <NavItem 
                label="Community" 
                isActive={activeTab === 'Community'}
                activeIcon={require('../../assets/icons/Nav/Selected/CommunityIcon_Selected_Placeholder.png')}
                inactiveIcon={require('../../assets/icons/Nav/Unselected/CommunityIcon_Unselected_Placeholder.png')}
                onPress={() => handleNavigation('Community')}
            />

            <NavItem 
                label="Profile" 
                isActive={activeTab === 'Profile'}
                activeIcon={require('../../assets/icons/Nav/Selected/ProfileIcon_Selected_Placeholder.png')}
                inactiveIcon={require('../../assets/icons/Nav/Unselected/ProfileIcon_Unselected_Placeholder.png')}
                onPress={() => handleNavigation('Profile')}
            />

        </View>
    );
}

// --- HELPER COMPONENT ---
const NavItem = ({ 
    label, 
    isActive, 
    activeIcon, 
    inactiveIcon, 
    onPress 
}: { 
    label: TabName; 
    isActive: boolean; 
    activeIcon: ImageSourcePropType; 
    inactiveIcon: ImageSourcePropType; 
    onPress: () => void; 
}) => {

    const { theme } = useTheme();

    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }}
        >
            <Image 
                source={isActive ? activeIcon : inactiveIcon} 
                style={{ 
                    width: 45, 
                    height: 45, 
                    resizeMode: 'contain', 
                    marginBottom: 4, 
                    tintColor: isActive ? theme.primaryButton : theme.secondary
                }} 
            />
            <Text style={{
                fontSize: 12,
                color: isActive ? theme.primaryButton : theme.secondary, 
                fontWeight: isActive ? 'bold' : 'normal',
                textDecorationLine: isActive ? 'underline' : 'none',
            }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};