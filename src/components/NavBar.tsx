// --- IMPORTS ---
import React from 'react';
import { View, TouchableOpacity, Image, ImageSourcePropType, Text } from 'react-native';

// --- TYPES ---
export type TabName = 'Home' | 'Scanner' | 'Community' | 'Profile';

type NavBarProps = {
    activeTab: TabName;
    onTabPress: (tab: TabName) => void;
};

// --- THE COMPONENT ---
export default function NavBar({ activeTab, onTabPress }: NavBarProps) {
    return (
        // floating "Pill" background
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#F8F4E6', // Light beige background
            borderRadius: 30, // Highly rounded corners
            paddingVertical: 12,
            paddingHorizontal: 10,
            marginHorizontal: 20, // Pushes it in from the screen edges
            // Adds a slight shadow to make it pop off the screen
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5, // For Android shadow
        }}>

            <NavItem 
                label="Home" 
                isActive={activeTab === 'Home'}
                activeIcon={require('../../assets/icons/Nav/Selected/HomeIcon_Selected_Placeholder.png')}
                inactiveIcon={require('../../assets/icons/Nav/Unselected/HomeIcon_Unselected_Placeholder.png')}
                onPress={() => onTabPress('Home')}
            />

            <NavItem 
                label="Scanner" 
                isActive={activeTab === 'Scanner'}
                activeIcon={require('../../assets/icons/Nav/Selected/ScannerIcon_Selected_Placeholder.png')}
                inactiveIcon={require('../../assets/icons/Nav/Unselected/ScannerIcon_Unselected_Placeholder.png')}
                onPress={() => onTabPress('Scanner')}
            />

            <NavItem 
                label="Community" 
                isActive={activeTab === 'Community'}
                activeIcon={require('../../assets/icons/Nav/Selected/CommunityIcon_Selected_Placeholder.png')}
                inactiveIcon={require('../../assets/icons/Nav/Unselected/CommunityIcon_Unselected_Placeholder.png')}
                onPress={() => onTabPress('Community')}
            />

            <NavItem 
                label="Profile" 
                isActive={activeTab === 'Profile'}
                activeIcon={require('../../assets/icons/Nav/Selected/ProfileIcon_Selected_Placeholder.png')}
                inactiveIcon={require('../../assets/icons/Nav/Unselected/ProfileIcon_Unselected_Placeholder.png')}
                onPress={() => onTabPress('Profile')}
            />

        </View>
    );
}

// --- HELPER COMPONENT ---
// Renders the individual buttons inside the Nav Bar
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
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }}
        >
            <Image 
                source={isActive ? activeIcon : inactiveIcon} 
                style={{ width: 45, height: 45, resizeMode: 'contain', marginBottom: 4 }} 
            />
            <Text style={{
                fontSize: 12,
                color: isActive ? '#4E733B' : '#A06B42', // Green if active, Caramel if not
                fontWeight: isActive ? 'bold' : 'normal',
                textDecorationLine: isActive ? 'underline' : 'none',
            }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};