// --- IMPORTS ---
import { TouchableOpacity, Image, ImageSourcePropType, ViewStyle } from "react-native";
import { useTheme } from "@/theme/ThemeContext";

// --- TYPES ---
type IconButtonProps = {
    iconSource: ImageSourcePropType;
    onPress: () => void;
    size?: number;
    style?: ViewStyle;
    isAlert?: boolean;
};

// --- THE COMPONENT ---
export default function IconButton({
    iconSource,
    onPress,
    size = 28,
    style,
    isAlert = false
}: IconButtonProps) {

    const { theme } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            // Center the image inside invisible touchable area
            style={[{
                padding: 8,
                alignItems: 'center',
                justifyContent: 'center'
            }, style]}
        >
            <Image
                source={iconSource}
                style={{
                    width: size,
                    height: size,
                    resizeMode: 'contain', // Prevent the image from stretching
                    tintColor: isAlert ? theme.alert : theme.secondary
                }}
            />
        </TouchableOpacity>
    );
}