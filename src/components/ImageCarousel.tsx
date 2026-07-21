// --- IMPORTS ---
import React from 'react';
import { ScrollView, View, ImageSourcePropType } from 'react-native';
import AppText from './AppText';
import ImageCard from './ImageCard';

// --- TYPES ---
type ImageCarouselProps = {
    title: string;
    images: ImageSourcePropType[];
};

// --- THE COMPONENT ---
export default function ImageCarousel({ title, images }: ImageCarouselProps) {
    return (
        <View style={{
            width: '100%',
            marginBottom: 30
        }}>

            {/* --- CAROUSEL TITLE */}
            {/* Keeps the title aligned with the 85% components */}
            <View style={{
                paddingHorizontal: '7.5%',
                marginBottom: 10
            }}>
                <AppText variant='h2'>{title}</AppText>
            </View>

            {/* --- SCROLLING CARDS --- */}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: '7.5%',
                    paddingRight: '7.5%'
                }}
            >
                {/* Loop through images and generate a card for each one */}
                {images.map((img, index) => (
                    <ImageCard key={index} imageSource={img} />
                ))}
            </ScrollView>

        </View>
    );
}