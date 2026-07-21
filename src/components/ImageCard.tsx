// --- IMPORTS ---
import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';

// --- TYPES ---
type ImageCardProps = {
    imageSource: ImageSourcePropType;
};

// --- THE COMPONENT ---
export default function ImageCard({ imageSource }: ImageCardProps) {
    
    const { theme } = useTheme();

    return (
        <View style={{
            width: 260,
            height: 140,
            backgroundColor: theme.input,
            borderWidth: 1.5,
            borderRadius: 12,
            borderColor: theme.border,
            overflow: 'hidden', // Keeps the image strictly inside the rounded corners
            marginRight: 15,    // Pushes the next card away so they don't touch
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image
                source={imageSource}
                style={{
                    width: 60,
                    height: 60,
                    tintColor: theme.border
                }}
                resizeMode='contain' 
            />
        </View>
    );
}