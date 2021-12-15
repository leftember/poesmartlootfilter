
#===============================================================================================================
# [[0400]] IDENTIFIED MOD FILTERING
#===============================================================================================================
# !! Override 040 : "identified mod filtering"

#------------------------------------
#   [0401] Physical
#------------------------------------

Show # $type->rareid $tier->veiledphys
	Identified True
	DropLevel >= 55
	Rarity Rare
	Class "Bows" "Claws" "Daggers" "One Hand" "Two Hand" "Wands" "Warstaves"
	HasExplicitMod >=1 "Flaring" "Merciless" "Veiled"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->2highphys
	Identified True
	DropLevel >= 55
	Rarity Rare
	Class "Bows" "Claws" "Daggers" "One Hand" "Two Hand" "Wands" "Warstaves"
	HasExplicitMod >=2 "of the Underground" "Subterranean" "of Many" "of Tacati" "Tacati's" "Flaring" "Tempered" "Merciless" "Tyrannical" "Dictator's" "Emperor's" "of Celebration"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3highphys
	Identified True
	DropLevel >= 55
	Rarity Rare
	Class "Bows" "Claws" "Daggers" "One Hand" "Two Hand" "Wands" "Warstaves"
	HasExplicitMod >=3 "Veiled" "of the Underground" "Subterranean" "of Many" "of Tacati" "Tacati's" "Flaring" "Tempered" "Razor-sharp" "Merciless" "Tyrannical" "Cruel" "Dictator's" "Emperor's" "Conqueror's" "of Celebration" "of Infamy" "of Incision" "of Destruction"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4highphys
	Identified True
	DropLevel >= 55
	Rarity Rare
	Class "Bows" "Claws" "Daggers" "One Hand" "Two Hand" "Wands" "Warstaves"
	HasExplicitMod >=4 "Veiled" "of the Underground" "Subterranean" "of Many" "of Tacati" "Tacati's" "Flaring" "Tempered" "Razor-sharp" "Annealed" "Merciless" "Tyrannical" "Cruel" "Bloodthirsty" "Dictator's" "Emperor's" "Conqueror's" "Champion's" "of Celebration" "of Infamy" "of Fame" "of Incision" "of Penetrating" "of Destruction" "of Ferocity"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0402] Elemental
#------------------------------------

Show # $type->rareid $tier->3highele
Identified True
Rarity Rare
BaseType == "Ambusher" "Corsair Sword" "Eye Gouger" "Fancy Foil" "Gemini Claw" "Grove Bow" "Hellion's Paw" "Imperial Bow" "Imperial Claw" "Jewelled Foil" "Maraketh Bow" "Spiraled Foil" "Thicket Bow"
HasExplicitMod >=3 "Veiled" "of the Underground" "Subterranean" "of Many" "Matatl's" "Tacati" "Topotante's" "Carbonising" "Cremating" "Crystalising" "Entombing" "Vapourising" "Electrocuting" "of Celebration" "of Incision" "of Penetrating" "of Destruction"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 0 0 255
PlayAlertSound 3 300
PlayEffect Purple
MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4highele
Identified True
Rarity Rare
BaseType == "Ambusher" "Corsair Sword" "Eye Gouger" "Fancy Foil" "Gemini Claw" "Grove Bow" "Hellion's Paw" "Imperial Bow" "Imperial Claw" "Jewelled Foil" "Maraketh Bow" "Spiraled Foil" "Thicket Bow"
HasExplicitMod >=4 "Veiled" "of the Underground" "Subterranean" "of Many" "Matatl's" "Tacati" "Topotante's" "Carbonising" "Cremating" "Blasting" "Crystalising" "Entombing" "Polar" "Vapourising" "Electrocuting" "Discharging" "of Celebration" "of Infamy" "of Incision" "of Penetrating" "of Puncturing" "of Destruction" "of Ferocity"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 0 0 255
PlayAlertSound 3 300
PlayEffect Purple
MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0403] Gembased
#------------------------------------

Show # $type->rareid $tier->gemmodsbow
	Identified True
	Rarity Rare
	Class "Bows"
	HasExplicitMod >=2 "Paragon's" "Sharpshooter's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->gemmodscaster
	Identified True
	Rarity Rare
	Class "Rune Daggers" "Sceptres" "Wands"
	HasExplicitMod >=2 "of the Underground" "Subterranean" "of Many" "Martinet's" "Matatl's" "Tacati" "Topotante's" "Magister's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->gemmodsstaves
	Identified True
	Rarity Rare
	Class "Staves"
	HasExplicitMod >=2 "of the Underground" "Subterranean" "of Many" "Martinet's" "Matatl's" "Tacati" "Topotante's" "Lava Conjurer's" "Winter Beckoner's" "Tempest Master's" "Splintermind's" "Tecton's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0404] Caster and Spellslinger
#------------------------------------

Show # $type->rareid $tier->3highcaster
	Identified True
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Wands"
	HasExplicitMod >=3 "Veiled" "Empress's" "Queen's" "Martinet's" "Matatl's" "Tacati" "Topotante's" "of the Underground" "Subterranean" "of Many" "Runic" "Glyphic" "Incanter's" "Xoph's" "Pyroclastic" "Magmatic" "Tul's" "Cryomancer's" "Crystalline" "Esh's" "Ionising" "Smiting" "Electrocuting" "Discharging" "Entombing" "Polar" "Cremating" "Blasting" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Magister's" "of Unmaking" "of Ruin" "of Finesse" "of Destruction" "Zaffre" "Lich's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4highcaster
	Identified True
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Wands"
	HasExplicitMod >=4 "Veiled" "of the Veil" "Empress's" "Queen's" "Martinet's" "Matatl's" "Tacati" "Topotante's" "of the Underground" "Subterranean" "of Many" "Runic" "Glyphic" "Incanter's" "Xoph's" "Pyroclastic" "Magmatic" "Tul's" "Cryomancer's" "Crystalline" "Esh's" "Ionising" "Smiting" "Electrocuting" "Discharging" "Shocking" "Entombing" "Polar" "Glaciated" "Cremating" "Blasting" "Incinerating" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Magister's" "of Unmaking" "of Ruin" "of Calamity" "of Finesse" "of Sortilege" "of Destruction" "of Ferocity" "of Nirvana" "Zaffre" "Blue" "Mazarine" "Lich's" "Archmage's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->firecaster
	Identified True
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Wands"
	HasExplicitMod >=3 "Veiled" "Matatl's" "Tacati" "Topotante's" "of the Underground" "Subterranean" "of Many" "Runic" "Glyphic" "Incanter's" "Xoph's" "Pyroclastic" "Magmatic" "Electrocuting" "Discharging" "Shocking" "Lava Conjurer's" "Tecton's" "Magister's" "of Unmaking" "of Ruin" "of Calamity" "of Finesse" "of Sortilege" "of Destruction" "of Ferocity" "of Nirvana" "Zaffre" "Blue" "Mazarine" "of Liquefaction" "of Dispersion" "of Conflagrating" "of Combusting" "Carbonising" "Cremating" "Fanatical" "Zealous" "Baleful" "Inimical" "Corrosive" "Dissolving" "Ardent" "Lich's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->coldcaster
	Identified True
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Wands"
	HasExplicitMod >=3 "Veiled" "Matatl's" "Tacati" "Topotante's" "of the Underground" "Subterranean" "of Many" "Runic" "Glyphic" "Incanter's" "Tul's" "Cryomancer's" "Crystalline" "Entombing" "Polar" "Glaciated" "Winter Beckoner's" "Tecton's" "Magister's" "of Unmaking" "of Ruin" "of Calamity" "of Finesse" "of Sortilege" "of Destruction" "of Ferocity" "of Nirvana" "Zaffre" "Blue" "Mazarine" "of Liquefaction" "of Dispersion" "Crystalising" "Baleful" "Inimical" "Mortifying" "Festering" "Heartstopping" "Gelid" "Boreal" "Lich's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->lightcaster
	Identified True
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Wands"
	HasExplicitMod >=3 "Veiled" "Matatl's" "Tacati" "Topotante's" "of the Underground" "Subterranean" "of Many" "Runic" "Glyphic" "Incanter's" "Esh's" "Ionising" "Smiting" "Cremating" "Blasting" "Incinerating" "Tempest Master's" "Tecton's" "Magister's" "of Unmaking" "of Ruin" "of Calamity" "of Finesse" "of Sortilege" "of Destruction" "of Ferocity" "of Nirvana" "Zaffre" "Blue" "Mazarine" "of Liquefaction" "of Dispersion" "Vapourising" "Electrocuting" "Baleful" "Inimical" "Excruciating" "Harrowing" "Lich's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->chaoscaster
	Identified True
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Wands"
	HasExplicitMod >=3 "Veiled" "Matatl's" "Tacati" "Topotante's" "of the Underground" "Subterranean" "of Many" "Runic" "Glyphic" "Incanter's" "Mad Lord's" "Tecton's" "Magister's" "of Unmaking" "of Ruin" "of Calamity" "of Finesse" "of Sortilege" "of Destruction" "of Ferocity" "of Nirvana" "of Euphoria" "Zaffre" "Blue" "Mazarine" "of Liquefaction" "of Dispersion" "Baleful" "Inimical" "Lich's" "Disintegrating" "Atrophying" "Deteriorating"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3spellslinger
	Identified True
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Wands"
	HasExplicitMod >=3 "Veiled" "Matatl's" "Tacati" "Topotante's" "of the Underground" "Subterranean" "of Many" "Runic" "Glyphic" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Magister's" "of Unmaking" "of Ruin" "of Destruction" "Baleful" "Lich's" "Xoph's" "Pyroclastic" "Tul's" "Cryomancer's" "Esh's" "Ionising" "Electrocuting" "Discharging" "Entombing" "Polar" "Cremating" "Blasting" "Flaring" "Carbonising" "Crystalising" "Vapourising" "Merciless" "Tyrannical" "Cruel" "Malicious"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4spellslinger
	Identified True
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Wands"
	HasExplicitMod >=4 "Veiled" "of the Veil" "Matatl's" "Tacati" "Topotante's" "of the Underground" "Subterranean" "of Many" "Runic" "Glyphic" "Incanter's" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Magister's" "of Unmaking" "of Ruin" "of Calamity" "of Destruction" "of Ferocity" "of Fury" "Baleful" "Inimical" "Lich's" "Xoph's" "Pyroclastic" "Magmatic" "Tul's" "Cryomancer's" "Crystalline" "Esh's" "Ionising" "Smiting" "Electrocuting" "Discharging" "Shocking" "Entombing" "Polar" "Glaciated" "Cremating" "Blasting" "Incinerating" "Flaring" "Tempered" "Carbonising" "Crystalising" "Vapourising" "Merciless" "Tyrannical" "Cruel" "Malicious" "of Acclaim"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0405] Boots
#------------------------------------

Show # $type->rareid $tier->3lifeboots
	Identified True
	Rarity Rare
	Class "Boots"
	HasExplicitMod "Hellion's" "Cheetah's" "Veiled"
	HasExplicitMod >=2 "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "Athlete's" "Virile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "Zaffre"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4lifeboots
	Identified True
	Rarity Rare
	Class "Boots"
	HasExplicitMod "Hellion's" "Cheetah's" "Gazelle's"
	HasExplicitMod >=3 "Veiled" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "Athlete's" "Virile" "Rotund" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "Zaffre" "Blue"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3esboots
	Identified True
	DropLevel >= 55
	Rarity Rare
	Class "Boots"
	HasExplicitMod "Hellion's" "Cheetah's" "Gazelle's" "Veiled"
	HasExplicitMod >=2 "Seething" "Pulsing" "Unassailable" "Indomitable" "Dauntless" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4esboots
	Identified True
	DropLevel >= 55
	Rarity Rare
	Class "Boots"
	HasExplicitMod "Hellion's" "Cheetah's" "Gazelle's" "Veiled"
	HasExplicitMod >=3 "Seething" "Pulsing" "Unassailable" "Indomitable" "Dauntless" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->highstatboots
	Identified True
	Rarity Rare
	Class "Boots"
	HasExplicitMod >=3 "Veiled" "of the Veil" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "Athlete's" "of the Godslayer" "of the Gods" "of the Blur" "of the Wind" "of the Polymath" "of the Genius"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0406] Gloves
#------------------------------------

Show # $type->rareid $tier->3lifegloves
	Identified True
	Rarity Rare
	Class "Gloves"
	HasExplicitMod >=3 "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "Athlete's" "Virile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "of Grandmastery" "of Mastery" "of Lioneye" "of the Ranger" "Thirsty" "Remora's" "Prior's" "Urchin's" "Fawn's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4lifegloves
	Identified True
	Rarity Rare
	Class "Gloves"
	HasExplicitMod >=3 "Veiled" "of the Veil" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "Athlete's" "Virile" "Rotund" "Robust" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "of Grandmastery" "of Mastery" "of Lioneye" "of the Ranger" "Thirsty" "Remora's" "Honed" "Crackling" "Burning" "Frigid" "Prior's" "Urchin's" "Fawn's" "Zaffre" "Blue"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3esgloves
	Identified True
	DropLevel >= 55
	Rarity Rare
	Class "Gloves"
	HasExplicitMod >=2 "Seething" "Pulsing" "Unassailable" "Indomitable" "Dauntless"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4esgloves
	Identified True
	DropLevel >= 55
	Rarity Rare
	Class "Gloves"
	HasExplicitMod >=4 "Prior's" "Deacon's" "Seraphim's" "Seething" "Pulsing" "Radiating" "Unassailable" "Indomitable" "Dauntless" "Veiled" "of the Veil" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "of Grandmastery" "of Mastery" "of Lioneye" "of the Ranger" "Thirsty" "Remora's" "Honed" "Crackling" "Burning" "Frigid" "Zaffre" "Blue"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0407] Helmets
#------------------------------------

Show # $type->rareid $tier->3lifehelmet
	Identified True
	Rarity Rare
	Class "Helmets"
	HasExplicitMod "Fecund" "Athlete's"
	HasExplicitMod >=3 "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "of Lioneye" "of the Ranger" "Necromancer's" "Summoner's" "Nautilus's" "Urchin's" "Ram's" "Fawn's" "Abbot's" "Prior's" "Zaffre" "Blue"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4lifehelmet
	Identified True
	Rarity Rare
	Class "Helmets"
	HasExplicitMod "Fecund" "Athlete's" "Virile"
	HasExplicitMod >=3 "of Tzteosh" "of the Magma" "of the Volcano" "Veiled" "of the Veil" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "of Lioneye" "of the Ranger" "of the Marksman" "Necromancer's" "Summoner's" "Nautilus's" "Urchin's" "Ram's" "Fawn's" "Abbot's" "Prior's" "Zaffre" "Blue" "Mazarine"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3eshelm
	Identified True
	DropLevel >= 55
	Rarity Rare
	Class "Helmets"
	HasExplicitMod >=2 "Blazing" "Seething" "Pulsing" "Unassailable" "Indomitable"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4eshelm
	Identified True
	Rarity Rare
	Class "Helmets"
	HasExplicitMod >=4 "Prior's" "Deacon's" "Seraphim's" "Blazing" "Seething" "Pulsing" "Unassailable" "Indomitable" "Veiled" "of the Veil" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "of Lioneye" "of the Ranger" "Priest's" "Abbot's" "Djinn's" "Naga's" "Necromancer's" "Summoner's" "Zaffre" "Blue"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0408] Amulets
#------------------------------------

Show # $type->rareid $tier->3modattackamu
	Corrupted False
	Identified True
	Rarity Rare
	Class "Amulets"
	HasExplicitMod "Athlete's" "Virile" "Dazzling" "Resplendent"
	HasExplicitMod >=2 "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Ranger" "of the Marksman" "Devastating" "Overpowering" "Unleashed" "Cremating" "Entombing" "Electrocuting" "Flaring" "Tempered" "of the Span" "of the Rainbow" "of the Multiverse" "of the Infinite" "of Incision" "of Penetrating" "of Destruction" "of Ferocity" "Unassailable" "Vaporous" "Impregnable"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4modattackamu
	Corrupted False
	Identified True
	Rarity Rare
	Class "Amulets"
	HasExplicitMod "Athlete's" "Virile" "Rotund" "Dazzling" "Resplendent" "Incandescent"
	HasExplicitMod >=3 "Veiled" "of the Veil" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "of the Ranger" "of the Marksman" "of the Sniper" "Devastating" "Overpowering" "Unleashed" "Empowering" "Cremating" "Blasting" "Entombing" "Polar" "Electrocuting" "Discharging" "Flaring" "Tempered" "Razor-sharp" "of the Span" "of the Rainbow" "of Variegation" "of the Multiverse" "of the Infinite" "of the Universe" "of Incision" "of Penetrating" "of Puncturing" "of Destruction" "of Ferocity" "of Fury" "Unassailable" "Indomitable" "Vaporous" "Phased" "Impregnable" "Girded"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3modcasteramu
	Corrupted False
	Identified True
	Rarity Rare
	Class "Amulets"
	HasExplicitMod "Athlete's" "Virile" "Dazzling" "Resplendent"
	HasExplicitMod >=2 "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "of Expertise" "of Nimbleness" "Zaffre" "Blue" "of Nirvana" "of Euphoria" "Wizard's" "Thaumaturgist's" "of Immolation" "of Flames" "of Floe" "of Rime" "of Discharge" "of Voltage" "of the Span" "of the Rainbow" "of the Multiverse" "of the Infinite" "of Incision" "of Penetrating" "of Destruction" "of Ferocity" "Unassailable" "Indomitable"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4modcasteramu
	Corrupted False
	Identified True
	Rarity Rare
	Class "Amulets"
	HasExplicitMod "Athlete's" "Virile" "Rotund" "Dazzling" "Resplendent" "Incandescent"
	HasExplicitMod >=3 "Veiled" "of the Veil" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "of Expertise" "of Nimbleness" "Zaffre" "Blue" "Mazarine" "of Nirvana" "of Euphoria" "of Bliss" "Wizard's" "Thaumaturgist's" "of Immolation" "of Flames" "of Cinders" "of Floe" "of Rime" "of Ice" "of Discharge" "of Voltage" "of Electricity" "of the Span" "of the Rainbow" "of Variegation" "of the Multiverse" "of the Infinite" "of the Universe" "of Incision" "of Penetrating" "of Puncturing" "of Destruction" "of Ferocity" "of Fury" "Unassailable" "Indomitable" "Dauntless"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4highstatamu
	Corrupted False
	Identified True
	Rarity Rare
	Class "Amulets"
	HasExplicitMod >=4 "Veiled" "of the Veil" "Athlete's" "Virile" "Rotund" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Ranger" "of the Marksman" "Devastating" "Overpowering" "Unleashed" "Cremating" "Entombing" "Electrocuting" "Flaring" "Tempered" "of the Span" "of the Rainbow" "of the Multiverse" "of the Infinite" "of Incision" "of Penetrating" "of Destruction" "of Ferocity" "Unassailable" "Impregnable" "Vaporous" "Dazzling" "Resplendent"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0409] Rings
#------------------------------------ 	

Show # $type->rareid $tier->2modringattack
	Identified True
	Rarity Rare
	Class "Rings"
	HasExplicitMod "Virile" "Rotund" "Resplendent"
	HasExplicitMod >=2 "Overpowering" "Unleashed" "Cremating" "Blasting" "Entombing" "Polar" "Electrocuting" "Discharging" "Annealed" "Gleaming" "of Skill" "Thirsty" "Remora's" "of the Ranger" "of the Marksman" "of Flames" "of Rime" "of Voltage" "of the Rainbow" "of Variegation" "of the Comet" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "Quintessential" "Flawless"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3modringattack
	Identified True
	Rarity Rare
	Class "Rings"
	HasExplicitMod "Veiled" "of the Veil" "Virile" "Rotund" "Robust" "Resplendent" "Incandescent"
	HasExplicitMod >=3 "Overpowering" "Unleashed" "Empowering" "Cremating" "Blasting" "Incinerating" "Entombing" "Polar" "Glaciated" "Electrocuting" "Discharging" "Shocking" "Annealed" "Gleaming" "Honed" "of Skill" "Thirsty" "Remora's" "of the Ranger" "of the Marksman" "of the Sniper" "of Flames" "of Rime" "of Voltage" "of the Rainbow" "of Variegation" "of the Kaleidoscope" "of the Comet" "of the Meteor" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "Quintessential" "Flawless"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->2modringcaster
	Identified True
	Rarity Rare
	Class "Rings"
	HasExplicitMod "Virile" "Rotund" "Resplendent" "Incandescent"
	HasExplicitMod >=2 "Ultramarine" "Zaffre" "of Skill" "of Talent" "of Nirvana" "of Euphoria" "of Flames" "of Rime" "of Voltage" "of the Rainbow" "of Variegation" "of the Comet" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "Quintessential" "Flawless"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3modringcaster
	Identified True
	Rarity Rare
	Class "Rings"
	HasExplicitMod "Veiled" "of the Veil" "Virile" "Rotund" "Robust" "Resplendent" "Incandescent" "Scintillating"
	HasExplicitMod >=3 "Ultramarine" "Zaffre" "Blue" "of Skill" "of Talent" "of Nirvana" "of Euphoria" "of Bliss" "of Flames" "of Rime" "of Voltage" "of the Rainbow" "of Variegation" "of the Kaleidoscope" "of the Comet" "of the Meteor" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "Quintessential" "Flawless"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0410] Quivers
#------------------------------------

Show # $type->rareid $tier->4modquiver
	Identified True
	Rarity Rare
	Class "Quivers"
	HasExplicitMod "Fecund" "Athlete's"
	HasExplicitMod >=3 "Veiled" "of the Veil" "of the Ranger" "of the Marksman" "Remora's" "Thirsty" "of Mastery" "of Ease" "of Rending" "of Incision" "of Destruction" "of Ferocity" "of Fury" "of Liquefaction" "of Dispersion" "of the Gale" "of the Zephyr" "of the Blur" "of the Wind" "of the Phantom" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->5modquiver
	Identified True
	Rarity Rare
	Class "Quivers"
	HasExplicitMod "Fecund" "Athlete's" "Virile" "Rotund"
	HasExplicitMod >=4 "Veiled" "of the Veil" "of the Ranger" "of the Marksman" "of the Sniper" "Remora's" "Thirsty" "of Mastery" "of Ease" "of Skill" "of Rending" "of Incision" "of Penetrating" "of Rupturing" "of Destruction" "of Ferocity" "of Fury" "of Rage" "of Liquefaction" "of Dispersion" "of Acrimony" "of the Gale" "of the Zephyr" "of Propulsion" "Honed" "Burning" "Frigid" "Crackling" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0411] Belts
#------------------------------------

Show # $type->rareid $tier->4modbelt
	Corrupted False
	Identified True
	Rarity Rare
	Class "Belts"
	HasExplicitMod "Veiled" "of the Veil" "Fecund" "Athlete's" "Dazzling"
	HasExplicitMod >=3 "Blue" "Devastating" "Overpowering" "Enveloped" "Encased" "of Overflowing" "of Sipping" "of Savouring" "of Refilling" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->5modbelt
	Corrupted False
	Identified True
	Rarity Rare
	Class "Belts"
	HasExplicitMod "Veiled" "of the Veil" "Fecund" "Athlete's" "Virile" "Dazzling" "Resplendent"
	HasExplicitMod >=4 "Blue" "Devastating" "Overpowering" "Unleashed" "Enveloped" "Encased" "Carapaced" "of Overflowing" "of Sipping" "of Savouring" "of Refilling" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0412] Shields
#------------------------------------ 		

Show # $type->rareid $tier->2lifecastershield
	Identified True
	Rarity Rare
	Class "Shields"
	HasExplicitMod "Vigorous" "Fecund" "Incandescent" "Scintillating" "Unfaltering" "Unassailable"
	HasExplicitMod >=2 "Runic" "Glyphic" "Incanter's" "Xoph's" "Pyroclastic" "Tul's" "Cryomancer's" "Esh's" "Ionising" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Baleful" "Excruciating" "Mortifying" "Corrosive" "of Expertise" "of Unmaking" "of Ruin" "of Nirvana" "of Euphoria" "Zaffre" "of Blocking" "of the Bulwark" "of the Span" "of the Rainbow" "of Sanctuary" "of Revitalization" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->2escastershield
	Identified True
	Rarity Rare
	Class "Shields"
	HasExplicitMod >=2 "Incandescent" "Scintillating" "Blazing" "Unfaltering" "Unassailable" "Indomitable"
	HasExplicitMod "Runic" "Glyphic" "Incanter's" "Xoph's" "Pyroclastic" "Tul's" "Cryomancer's" "Esh's" "Ionising" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Baleful" "Excruciating" "Mortifying" "Corrosive" "of Expertise" "of Unmaking" "of Ruin" "of Nirvana" "of Euphoria" "Zaffre" "of Blocking" "of the Bulwark" "of the Span" "of the Rainbow" "of Sanctuary" "of Revitalization" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3lifecastershield
	Identified True
	Rarity Rare
	Class "Shields"
	HasExplicitMod "Vigorous" "Fecund" "Athlete's" "Incandescent" "Scintillating" "Blazing" "Unfaltering" "Unassailable" "Indomitable"
	HasExplicitMod >=3 "Runic" "Glyphic" "Incanter's" "Occultist's" "Xoph's" "Pyroclastic" "Magmatic" "Tul's" "Cryomancer's" "Crystalline" "Esh's" "Ionising" "Smiting" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Baleful" "Inimical" "Excruciating" "Harrowing" "Mortifying" "Festering" "Corrosive" "Dissolving" "of Expertise" "of Nimbleness" "of Unmaking" "of Ruin" "of Calamity" "of Nirvana" "of Euphoria" "of Bliss" "Zaffre" "Blue" "of Blocking" "of the Bulwark" "of the Span" "of the Rainbow" "of Sanctuary" "of Revitalization" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3escastershield
	Identified True
	Rarity Rare
	Class "Shields"
	HasExplicitMod "Incandescent" "Scintillating" "Blazing" "Seething" "Unfaltering" "Unassailable" "Indomitable" "Dauntless"
	HasExplicitMod >=2 "Runic" "Glyphic" "Incanter's" "Occultist's" "Xoph's" "Pyroclastic" "Magmatic" "Tul's" "Cryomancer's" "Crystalline" "Esh's" "Ionising" "Smiting" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Baleful" "Inimical" "Excruciating" "Harrowing" "Mortifying" "Festering" "Corrosive" "Dissolving" "of Expertise" "of Nimbleness" "of Unmaking" "of Ruin" "of Calamity" "of Nirvana" "of Euphoria" "of Bliss" "Zaffre" "Blue" "of Blocking" "of the Bulwark" "of the Span" "of the Rainbow" "of Sanctuary" "of Revitalization" "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->3damagecastershield
	Identified True
	Rarity Rare
	Class "Shields"
	HasExplicitMod >=3 "Veiled" "of the Veil" "Runic" "Glyphic" "Incanter's" "Xoph's" "Pyroclastic" "Tul's" "Cryomancer's" "Esh's" "Ionising" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Baleful" "Excruciating" "Mortifying" "Corrosive" "of Expertise" "of Unmaking" "of Ruin" "of Nirvana" "of Euphoria" "Zaffre"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->4damagecastershield
	Identified True
	Rarity Rare
	Class "Shields"
	HasExplicitMod >=4 "Veiled" "of the Veil" "Runic" "Glyphic" "Incanter's" "Occultist's" "Xoph's" "Pyroclastic" "Magmatic" "Tul's" "Cryomancer's" "Crystalline" "Esh's" "Ionising" "Smiting" "Flame Shaper's" "Frost Singer's" "Thunderhand's" "Mad Lord's" "Lithomancer's" "Baleful" "Inimical" "Excruciating" "Harrowing" "Mortifying" "Festering" "Corrosive" "Dissolving" "of Expertise" "of Nimbleness" "of Unmaking" "of Ruin" "of Calamity" "of Nirvana" "of Euphoria" "of Bliss" "Zaffre" "Blue" "of Blocking" "of the Bulwark" "of the Span" "of the Rainbow" "of Sanctuary" "of Revitalization" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->highdefshields
	Identified True
	DropLevel >= 50
	Rarity Rare
	Class "Shields"
	HasExplicitMod >=2 "Impenetrable" "Impregnable" "Carapaced" "Plated" "Phased" "Blurred" "Illusion's" "Mirage's" "Interpermeated" "Inspired" "Consecrated" "Beatified" "Incorporeal" "Illusory" "Eidolon's" "Spirit's" "Incandescent" "Scintillating" "Unfaltering" "Unassailable"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->rareid $tier->highstatshield
	Identified True
	DropLevel >= 50
	Rarity Rare
	Class "Shields"
	HasExplicitMod >=4 "Impenetrable" "Impregnable" "Carapaced" "Plated" "Phased" "Blurred" "Illusion's" "Mirage's" "Interpermeated" "Inspired" "Consecrated" "Beatified" "Incorporeal" "Illusory" "Eidolon's" "Spirit's" "Incandescent" "Scintillating" "Unfaltering" "Unassailable" "of Blocking" "of the Bulwark" "of the Span" "of the Rainbow" "of Sanctuary" "of Revitalization" "Vigorous" "Fecund" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0413] Jewels
#------------------------------------

Show # $type->rareid $tier->potentiallyvaluablejewel
	Identified True
	Rarity Rare
	Class "Jewel"
	HasExplicitMod >=3 "Vivid" "Shimmering" "of Potency" "of Entropy" "of Blasting" "of Berserking" "of Zeal" "of Resistance" "of Combat" "of Archery" "of Wounding" "of Enchanting" "Piercing" "Rupturing" "Puncturing" "Infernal" "Arctic" "Surging" "of the Elements" "of Unmaking" "Master's" "of Resilience" "Leadership"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

#------------------------------------
#   [0414] Misc
#------------------------------------

Show # $type->rareid $tier->highresstat
	Identified True
	Rarity Rare
	HasExplicitMod >=3 "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Blur" "of the Wind" "of the Polymath" "of the Genius" "of the Span" "of the Rainbow"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->magicid $tier->phys
	Corrupted False
	Identified True
	DropLevel >= 56
	Rarity Magic
	Class "Bows" "Claws" "Daggers" "One Hand" "Two Hand" "Wands" "Warstaves"
	HasExplicitMod >=1 "Merciless" "Tyrannical" "of Many"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->magicid $tier->damagemods
	Corrupted False
	Identified True
	Rarity Magic
	Class "Rune Daggers" "Sceptres" "Shields" "Wands"
	HasExplicitMod >=1 "Runic" "Xoph's" "Tul's" "Esh's" "Magister's" "Empress's" "Martinet's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond

Show # $type->magicid $tier->speed
	Corrupted False
	Identified True
	Rarity Magic
	Class "Boots"
	HasExplicitMod >=1 "Hellion's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Purple
	MinimapIcon 1 Purple Diamond
