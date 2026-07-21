// --- IMPORTS ---
import { router } from 'expo-router'; 
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

// --- THEME IMPORTS ---
import { useTheme } from '@/theme/ThemeContext';
import { ThemeName } from '@/theme/theme';

// --- COMPONENT IMPORTS ---
import FormInput from '@/components/FormInput'
import FormDropdown from '@/components/FormDropdown';
import FormToggle from '@/components/FormToggle';
import FormRadioButton from '@/components/FormRadioButton';
import PrimaryButton from '@/components/PrimaryButton';
import MenuRow from '@/components/MenuRow';
import IconButton from '@/components/IconButton';
import TextLink from '@/components/TextLink';
import Divider from '@/components/Divider';
import AppText from '@/components/AppText';
import NavBar, { TabName } from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import ImageCarousel from '@/components/ImageCarousel';

export default function ComponentsLibrary() {
  // Create a variable to hold the user's dropdown choice
  const [dropdownChoice, setDropdownChoice] = useState("");

  // Variable to track if toggle is on or off
  const [isToggleOnOne, setIsToggleOnOne] = useState(false);
  const [isToggleOnTwo, setIsToggleOnTwo] = useState(false);

  // Variable to track the selected radio button
  const [selectedRadioChoice, setSelectedRadioChoice] = useState("Default");

  // Track NavBar state
  const [activeNavTab, setActiveNavTab] = useState<TabName>("Home");

  // --- THEME MANAGEMENT ---
  const { theme, themeName, setTheme } = useTheme();
  const activeThemeLabel =
    themeName === 'default' ? 'Default Theme' :
    themeName === 'sakura' ? 'Sakura Theme' :
    themeName === 'evergreen' ? 'Evergreen Theme' :
    themeName === 'midnight' ? 'Midnight Theme' :
    themeName === 'midnightPurple' ? 'Midnight Purple Theme' :
    themeName === 'tropicalReef' ? 'Tropical Reef Theme' :
    themeName == 'abyssal' ? 'Abyssal Theme' : '';

  return (

    // --- MAIN CANVAS ---
    <ScrollView 
      showsVerticalScrollIndicator={false}
        style={{ 
          flex: 1, 
          backgroundColor: theme.background, 
        }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: 50
        }}
      >

      {/* --- PAGE TITLE --- */}
      <AppText variant="title">Component Library</AppText>
      <Divider variant="title"/>

      {/* TEXT LINK */}
      <AppText variant="h1">Navigation Links</AppText>
      <TextLink
      questionText="Link Text Example"
      actionText="Press Link Here"
      onPress={() => console.log("Link pressed!")}
      />
      <TextLink
      questionText="Home Page:"
      actionText="Home"
      onPress={() => { router.push('/')}}
      />

      <Divider/>

      {/* --- SEARCH BAR --- */}
      <AppText variant='h1'> Search Bar</AppText>

        <SearchBar
        label="Search E-Code"
        placeholder='ECode'
        onSearch={(text) => console.log("User search for:", text)}
        />

        <Divider/>

      {/* Text Inputs */}
      <AppText variant="h1">Text Inputs</AppText>
      <AppText variant="h2">Single Line Examples</AppText>
      <FormInput 
      label="Text Input Example" 
      placeholder="Exmaple" 
      />

      <FormInput
      label="Counter Example"
      placeholder="Example"
      maxLength={20}
      />
      <Divider variant='faded'/>

      <AppText variant="h2">Multiline Examples</AppText>
      <FormInput
        label="Multiline Example"
        placeholder="Multiline Example..."
        isMultiline={true}
      />

      <FormInput
      label="Multiline Counter Example"
      placeholder="Multiline Example"
      isMultiline={true}
      maxLength={150}
      />

      <Divider/>
      
      {/* BUTTONS */}
      <AppText variant="h1">Button Components</AppText>
      <AppText variant="h2">Action Buttons</AppText>
      <PrimaryButton
      title="Primary Buton Example"
      onPress={() => console.log("Primary Button Pressed!")}
      />

      <PrimaryButton
      title="Small Example"
      onPress={() => console.log("Small Button Pressed!")}
      isSmall={true}
      />

      <Divider variant='faded'/>

      {/* DROPDOWN */}
      <AppText variant="h2">Dropdown</AppText>
      <FormDropdown
      label="Dropdown Example"
      options={["Option #1", "Option #2", "Option #3"]}
      selectedValue={dropdownChoice}
      onSelect={(dropdownValue) => setDropdownChoice(dropdownValue)}
      />

      <Divider variant='faded'/>

      {/* TOGGLES */}
      <AppText variant="h2">Toggle Buttons</AppText>
      <FormToggle
      label="Toggle Example"
      isOn={isToggleOnOne}
      onToggle={(toggleValue) => setIsToggleOnOne(toggleValue)}
      />

      <FormToggle
      label="Toggle Example #2"
      isOn={isToggleOnTwo}
      onToggle={(toggleValue) => setIsToggleOnTwo(toggleValue)}
      />

      <Divider variant='faded'/>

      {/* RADIO TOGGLE */}
      <AppText variant="h2">Radio Buttons</AppText>
      <FormRadioButton
      label="Radio Example #1"
      selectedOption={selectedRadioChoice}
      onSelect={setSelectedRadioChoice}
      />
      <FormRadioButton
      label="Radio Example #2"
      selectedOption={selectedRadioChoice}
      onSelect={setSelectedRadioChoice}
      />
      <FormRadioButton
      label="Radio Example #3"
      selectedOption={selectedRadioChoice}
      onSelect={setSelectedRadioChoice}
      />

      <Divider variant='faded'/>

      <AppText variant="h2">Menu Row Buttons</AppText>
      <MenuRow
      label="Option #1"
      onPress={() => console.log("Option #1 Selected")}
      />
      <MenuRow
      label="Option #2"
      onPress={() => console.log("Option #2 Selected")}
      />
      <MenuRow
      label="Option #3"
      onPress={() => console.log("Option #3 Selected")}
      />

      <Divider variant='faded'/>

        {/* ICON BUTTONS */}
      <AppText variant="h2">Icon Buttons</AppText>
      <View style={{
        flexDirection: 'row', gap: 20, marginBottom: 30, justifyContent: 'center'
      }}>

        {/* SETTINGS ICON */}
        <IconButton
          iconSource={require('../../assets/icons/SettingsIcon_Placeholder.png')}
          onPress={() => console.log("Settings Pressed!")}
        />

        {/* BACK ICON */}
        <IconButton
          iconSource={require('../../assets/icons/BackIcon_Placeholder.png')}
          onPress={() => console.log("Back Pressed!")}
        />

        {/* REPORT ICON */}
        <IconButton
          iconSource={require('../../assets/icons/ReportIcon_Placeholder.png')}
          onPress={() => console.log("Report Pressed!")}
          isAlert={true}
        />

      </View>

      <Divider/>

      {/* --- IMAGE CAROUSELS --- */}
      <AppText variant='h1'>Image Carousels</AppText>

      <ImageCarousel
          title="Examples"
          images={[
            require('../../assets/icons/Image_Placeholder.png'),
            require('../../assets/icons/Image_Placeholder.png'),
            require('../../assets/icons/Image_Placeholder.png'),
            require('../../assets/icons/Image_Placeholder.png'),
            require('../../assets/icons/Image_Placeholder.png')
          ]}
      />

      <Divider/>

      {/* --- THEME TOGGLES --- */}
      <AppText variant='h1'>Theme Toggles</AppText>
            <FormRadioButton
                label="Default Theme"
                selectedOption={activeThemeLabel}
                onSelect={() => setTheme('default')}
            />
            <FormRadioButton
                label="Sakura Theme"
                selectedOption={activeThemeLabel}
                onSelect={() => setTheme('sakura')}
            />
            <FormRadioButton
                label="Evergreen Theme"
                selectedOption={activeThemeLabel}
                onSelect={() => setTheme('evergreen')}
            />
            <FormRadioButton
                label="Midnight Theme"
                selectedOption={activeThemeLabel}
                onSelect={() => setTheme('midnight')}
            />
            <FormRadioButton
                label="Midnight Purple Theme"
                selectedOption={activeThemeLabel}
                onSelect={() => setTheme('midnightPurple')}
            />
            <FormRadioButton
                label="Tropical Reef Theme"
                selectedOption={activeThemeLabel}
                onSelect={() => setTheme('tropicalReef')}
            />
            <FormRadioButton
                label="Abyssal Theme"
                selectedOption={activeThemeLabel}
                onSelect={() => setTheme('abyssal')}
            />

          <Divider/>

      {/* NAVIGATION BAR */}
      <AppText variant="h1">Navigation Bar</AppText>

      <View style={{ width: '100%', paddingBottom: 40, paddingTop: 10 }}>
        <NavBar
          activeTab={activeNavTab}
          onTabPress={(tab) => setActiveNavTab(tab)}
        />
      </View>

    </ScrollView>
  );
}