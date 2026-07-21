// --- IMPORTS ---
import React, { createContext, useContext, useState } from "react";
import { Themes, ThemeName, ThemePalette } from './theme';

// --- TYPES ---
type ThemeContextType = {
    theme: ThemePalette;
    themeName: ThemeName;
    setTheme: (name: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [themeName, setThemeName] = useState<ThemeName>('default');

    return (
        <ThemeContext.Provider value={{
            theme: Themes[themeName],
            themeName,
            setTheme: setThemeName
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
        if (!context) {
            throw new Error("useTheme must be used within a ThemeProvider");
        }
    return context;
}