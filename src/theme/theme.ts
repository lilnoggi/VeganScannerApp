// Blueprint for what every theme MUST have
export type ThemePalette = {
    background: string;
    primaryText: string;
    secondary: string;
    border: string;
    primaryButton: string;
    alert: string;
    warning: string;
    input: string;
};

// --- PALETTES ---
export const Themes: Record<string, ThemePalette> ={
    default: {
        background: '#FCFBF9',
        primaryText: '#5E3023',
        secondary: '#895737',
        border: '#C08552',
        primaryButton: '#607D3B',
        alert: '#C85A65',
        warning: '#E5B15D',
        input: '#F3E9DC',
    },
    sakura: {
        background: '#FFF5F7',
        primaryText: '#4A3535',
        secondary: '#8E6E6E',
        border: '#F4C2C2',
        primaryButton: '#7CA982',
        alert: '#D96C75',
        warning: '#EBB36B',
        input: '#FDF0F3',
    },
    evergreen: {
        background: '#F4F6F1',
        primaryText: '#1E2F23',
        secondary: '#6B4F3A',
        border: '#A3B899',
        primaryButton: '#3A7D44',
        alert: '#C25953',
        warning: '#D19C4C',
        input: '#EAECE3',
    },
    midnight: {
        background: '#121212',
        primaryText: '#E0E0E0',
        secondary: '#4A4A4A',
        border: '#2C2C2C',
        primaryButton: '#00E676',
        alert: '#FF5252',
        warning: '#FFB300',
        input: '#1E1E1E',
    },
    tropicalReef: {
        background: '#FFF7F0',
        primaryText: '#1A3C40',
        secondary: '#41729F',
        border: '#F2A68D',
        primaryButton: '#48C0A3',
        alert: '#E85D75',
        warning: '#F2B263',
        input: '#FEEDE5',
    },
    abyssal: {
        background: '#0B132B',
        primaryText: '#E0FBFC',
        secondary: '#3A506B',
        border: '#1C7293',
        primaryButton: '#00CECB',
        alert: '#FF5964',
        warning: '#F9C80E',
        input: '#132042',
    },
};

export type ThemeName = keyof typeof Themes;