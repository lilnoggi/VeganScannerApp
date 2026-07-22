// --- IMPORTS ---
import { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useTheme } from "@/theme/ThemeContext";

// --- COMPONENTS ---
import AppText from "@/components/AppText";
import PrimaryButton from "@/components/PrimaryButton";
import NavBar from "@/components/NavBar";
import IngredientHighlighter from '@/components/IngredientHighlighter';

export default function ResultsScreen() {
    const { theme } = useTheme();

    // Get the barcode data passed from the scanner
    const { code } = useLocalSearchParams();
    const displayCode = Array.isArray(code) ? code[0] : code || "Unknown Code";

    // --- STATE VARIABLES ---
    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    // --- FOOD FACTS API CALL ---
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${displayCode}.json`);
                const json = await response.json();

                if (json.status === 1) {
                    setProductData(json.product);
                } else {
                    setError("Product not found in database.");
                }
            } catch (err) {
                setError("Failed to connect to database.");
            } finally {
                setIsLoading(false);
            }
        };

        if (displayCode !== "Unknown Code") {
            fetchProduct();
        } else {
            setIsLoading(false);
            setError("Invalid barcode scanned.");
        }
    }, [displayCode]);

    // --- DYNAMIC CONFIDENCE SCORING ---
    // Set state defaults
    let veganStatus = 'unknown';
    let statusColour = theme.secondary; 
    let statusIconSource = require('@/assets/icons/Unknown_Placeholder.png');
    let statusText = 'Verification Needed';
    let actionButtonText = 'Flag For Review';

    // Overwrite the defaults if the API has a definitive tag
    if (productData?.ingredients_analysis_tags) {
        const tags = productData.ingredients_analysis_tags;
        
        if (tags.includes('en:vegan')) {
            veganStatus = 'vegan';
            statusColour = '#4ADE80'; 
            statusIconSource = require('@/assets/icons/HighConfidenceIcon_Placeholder.png');
            statusText = 'High Confidence';
            actionButtonText = 'Add to Library';
        } 
        else if (tags.includes('en:non-vegan')) {
            veganStatus = 'non-vegan';
            statusColour = '#EF4444'; 
            statusIconSource = require('@/assets/icons/LowConfidenceIcon_Placeholder.png');
            statusText = 'Low Confidence';
            actionButtonText = 'View Alternatives';
        } 
        else if (tags.includes('en:maybe-vegan')) {
            veganStatus = 'maybe';
            statusColour = '#F59E0B'; 
            statusIconSource = require('@/assets/icons/ModerateConfidenceIcon_Placeholder.png');
            statusText = 'Moderate Confidence';
            actionButtonText = 'View Alternatives';
        }
    }

    // Common non-vegan/allergen keywords to highlight
    const keywordsToFlag = ['Milk', 'Egg', 'Eggs', 'Honey', 'Gelatin', 'Whey', 'Casein', 'E471', 'Natural Flavourings', 'Soya'];

    return (
        <View style={{ 
            flex: 1, 
            backgroundColor: theme.background 
            }}>
            
            {/* --- SCROLLABLE MAIN CONTENT --- */}
            <ScrollView 
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingTop: 80,
                    paddingHorizontal: 20,
                    paddingBottom: 120 // Extra padding so content doesn't hide behind the NavBar
                }}
            >
                <AppText variant="title">Product Details</AppText>

                {/* LOADING STATE */}
                {isLoading && (
                    <View style={{ 
                        alignItems: 'center', 
                        marginVertical: 40 
                        }}>
                        <ActivityIndicator size="large" color={theme.primaryButton} />
                        <AppText variant='body'>Fetching product data...</AppText>
                    </View>
                )}

                {/* ERROR STATE */}
                {error && !isLoading && (
                    <View style={{ alignItems: 'center', marginVertical: 40 }}>
                        <AppText variant='h2'>Oops!</AppText>
                        <AppText variant='body'>{error}</AppText>
                        <AppText variant='caption'>{`Code: ${displayCode}`}</AppText>
                        <View style={{ marginTop: 40, width:'100%' }}>
                            <PrimaryButton title="Scan Another Item" onPress={() => router.replace(`/scanner`)} />
                        </View>
                    </View>
                )}

                {/* SUCCESS STATE */}
                {productData && !isLoading && (
                    <View style={{ width: '100%', marginTop: 20 }}>
                        
                        {/* Title Section */}
                        <AppText variant='h1'>{productData.product_name || "Unknown Product"}</AppText>
                        <AppText variant='h2' style={{ color: theme.secondary, marginBottom: 20 }}>
                            {productData.brands || "Unknown Brand"}
                        </AppText>

                        {/* --- SIDE-BY-SIDE LAYOUT --- */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 160 }}>
                            
                            {/* Left: Product Image */}
                            <View style={{ 
                                flex: 1, 
                                marginRight: 10, 
                                backgroundColor: '#FFF', 
                                borderRadius: 15, 
                                borderWidth: 2, 
                                borderColor: theme.border,
                                overflow: 'hidden'
                            }}>
                                {productData.image_url ? (
                                    <Image
                                        source={{ uri: productData.image_url}}
                                        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                    />
                                ) : (
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.input }}>
                                        <AppText variant='caption'>No Image</AppText>
                                    </View>
                                )}
                            </View>

                            {/* Right: Confidence Score Box */}
                            <View style={{ 
                                flex: 1, 
                                marginLeft: 10, 
                                backgroundColor: theme.background, 
                                borderRadius: 15, 
                                borderWidth: 2, 
                                borderColor: statusColour, 
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10
                            }}>
                                {/* The tintColor dynamically overrides the PNG's base color! */}
                                <Image 
                                    source={statusIconSource} 
                                    style={{ 
                                        width: 50, 
                                        height: 50, 
                                        marginBottom: 10, 
                                        resizeMode: 'contain',
                                        tintColor: statusColour 
                                    }} 
                                />
                                <AppText variant='h2' style={{ color: statusColour, textAlign: 'center' }}>
                                    {statusText}
                                </AppText>
                            </View>
                        </View>

                        {/* --- INGREDIENTS BOX --- */}
                        <View style={{ 
                            marginTop: 20, 
                            padding: 15, 
                            backgroundColor: theme.input, 
                            borderRadius: 15, 
                            borderWidth: 2, 
                            borderColor: theme.border 
                        }}>
                            <AppText variant='h2' style={{ marginBottom: 5 }}>Ingredients:</AppText>
                            <IngredientHighlighter 
                                ingredientsText={productData.ingredients_text || "No ingredients listed."}
                                wordsToHighlight={keywordsToFlag}
                                highlightColour="#EF4444" 
                            />
                            
                            <AppText variant='caption' style={{ marginTop: 15 }}>
                                {`EAN: ${displayCode}`}
                            </AppText>
                        </View>

                        {/* --- ACTION BUTTON --- */}
                        <View style={{ marginTop: 40, width: '100%', alignItems: 'center' }}>
                            <PrimaryButton
                                title={actionButtonText}
                                onPress={() => console.log(`${actionButtonText} clicked!`)}
                            />
                            <TouchableOpacity style={{ marginTop: 15, padding: 10 }}
                            onPress={() => router.replace(`/scanner`)}
                            >
                                <AppText 
                                    variant="h2" 
                                    style={{ color: theme.secondary, textDecorationLine: 'underline' }}
                                >
                                    Scan Another Item
                                </AppText>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            </ScrollView>

            {/* --- PINNED BOTTOM NAVIGATION --- */}
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 40, backgroundColor: theme.background }}>
                <NavBar
                    activeTab="Scanner"
                    onTabPress={(tab) => console.log("Navigating to", tab)}
                />
            </View>

        </View>
    );
}