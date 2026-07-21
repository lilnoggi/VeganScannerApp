// --- IMPORTS ---
import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

// --- TYPES ---
type ImageCardProps = {
    imageSource: ImageSourcePropType;
};

// --- THE COMPONENT ---
export default function ImageCard({ imageSource }: ImageCardProps) {
    return (
        <View style={{
            width: 260,
            height: 140,
            backgroundColor: '#F8F4E6',
            borderWidth: 1.5,
            borderRadius: 12,
            borderColor: '#C08552',
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
                    tintColor: '#C4A48A'
                }}
                resizeMode='contain' 
            />
        </View>
    );
}