#===============================================================================================================
# [[0700]] Exotic Item Variations
#===============================================================================================================
# !! Override 070 : "exotic gear: synthesised, fractured, enchanted gear"

#------------------------------------
#   [0701] Double Corruptions
#------------------------------------

Show # %D6 $type->exotic->corruptions $tier->doublecorruptedjwlry
	Corrupted True
	CorruptedMods >= 2
	Rarity Rare
	Class "Amulet" "Belt" "Jewel" "Ring"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 75 30 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 0 Blue Diamond

Show # %D5 $type->exotic->corruptions $tier->doublecorruptedany
	Corrupted True
	CorruptedMods >= 2
	Rarity Rare
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

#------------------------------------
#   [0702] Abyss Jeweled Rares
#------------------------------------

Show # $type->exotic->sockets $tier->anynonbelt
	Rarity <= Rare
	SocketGroup "A"
	Class "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rune Daggers" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

#------------------------------------
#   [0703] Synthesised
#------------------------------------

Show # %D6 $type->exotic->synthesised $tier->synthselected
SynthesisedItem True
Rarity <= Rare
BaseType "Ambusher" "Archon Kite Shield" "Assassin's Garb" "Bone Helmet" "Carnal Armour" "Colossal Tower Shield" "Corsair Sword" "Crusader Boots" "Crusader Gloves" "Deicide Mask" "Dragonscale Boots" "Dragonscale Gauntlets" "Elegant Round Shield" "Eternal Burgonet" "Eternal Sword" "Exquisite Blade" "Ezomyte Tower Shield" "Fancy Foil" "Gemini Claw" "Glorious Plate" "Hubris Circlet" "Imperial Buckler" "Imperial Claw" "Imperial Staff" "Jewelled Foil" "Judgement Staff" "Karui Maul" "Lathi" "Lion Pelt" "Lion Sword" "Murder Boots" "Murder Mitts" "Nightmare Bascinet" "Nightmare Mace" "Pinnacle Tower Shield" "Royal Burgonet" "Runic Hatchet" "Sadist Garb" "Saint's Hauberk" "Saintly Chainmail" "Siege Axe" "Sinner Tricorne" "Slink Boots" "Slink Gloves" "Sorcerer Boots" "Sorcerer Gloves" "Spiraled Foil" "Stealth Boots" "Supreme Spiked Shield" "Tempered Foil" "Titan Gauntlets" "Titan Greaves" "Titanium Spirit Shield" "Triumphant Lamellar" "Vaal Greaves" "Vaal Regalia" "Zodiac Leather"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 75 30 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 0 Blue Diamond

Show # %D6 $type->exotic->synthesised $tier->synthclasses
	SynthesisedItem True
	Rarity <= Rare
	Class "Amulets" "Belt" "Bows" "Jewel" "Maps" "Rings" "Rune Daggers" "Sceptres" "Wands"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 75 30 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 0 Blue Diamond

Show # %D5 $type->exotic->synthesised $tier->synthrandom
	SynthesisedItem True
	Rarity <= Rare
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

#------------------------------------
#   [0704] Fractured
#------------------------------------ 	

Show # %D5 $type->exotic->fractured $tier->fractselected
FracturedItem True
Rarity <= Rare
BaseType "Ambusher" "Archon Kite Shield" "Assassin's Garb" "Astral Plate" "Behemoth Mace" "Bone Helmet" "Carnal Armour" "Citadel Bow" "Colossal Tower Shield" "Convoking Wand" "Copper Kris" "Corsair Sword" "Crusader Boots" "Crusader Gloves" "Deicide Mask" "Demon Dagger" "Dragonscale Boots" "Dragonscale Gauntlets" "Eclipse Staff" "Elegant Round Shield" "Eternal Burgonet" "Eternal Sword" "Exquisite Blade" "Fiend Dagger" "Fingerless Silk Gloves" "Fossilised Spirit Shield" "Gemini Claw" "Glorious Plate" "Golden Kris" "Gripped Gloves" "Harbinger Bow" "Harmonic Spirit Shield" "Hubris Circlet" "Imbued Wand" "Imperial Bow" "Imperial Buckler" "Imperial Claw" "Jewelled Foil" "Judgement Staff" "Karui Chopper" "Karui Maul" "Lion Pelt" "Lion Sword" "Maraketh Bow" "Mosaic Kite Shield" "Murder Boots" "Murder Mitts" "Nightmare Bascinet" "Opal Sceptre" "Opal Wand" "Pinnacle Tower Shield" "Platinum Kris" "Profane Wand" "Prophecy Wand" "Royal Burgonet" "Runic Hatchet" "Sai" "Saint's Hauberk" "Saintly Chainmail" "Sambar Sceptre" "Siege Axe" "Skean" "Slink Boots" "Slink Gloves" "Sorcerer Boots" "Sorcerer Gloves" "Spiked Gloves" "Spiraled Foil" "Supreme Spiked Shield" "Thicket Bow" "Tiger Hook" "Titan Gauntlets" "Titan Greaves" "Titanium Spirit Shield" "Tornado Wand" "Triumphant Lamellar" "Two-Toned Boots" "Vaal Regalia" "Vaal Spirit Shield" "Void Sceptre" "Zodiac Leather"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 0 0 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 1 Blue Diamond

Show # %D5 $type->exotic->fractured $tier->fractclasses
	FracturedItem True
	Rarity <= Rare
	Class "Amulets" "Belt" "Jewel" "Maps" "Rings"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D4 $type->exotic->fractured $tier->fractrandom
	FracturedItem True
	Rarity <= Rare
	SetFontSize 45
	SetBorderColor 0 240 190 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 2 Blue Diamond

#------------------------------------
#   [0705] Enchanted
#------------------------------------

Show # $type->exotic->enchanted $tier->exotic
	AnyEnchantment True
	Rarity <= Rare
	Class "Body Armours" "Bows" "Claws" "Daggers" "One Hand" "Quivers" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 75 30 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 0 Blue Diamond

Show # $type->exotic->enchanted $tier->helmets
	AnyEnchantment True
	Rarity <= Rare
	Class "Helmets"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

#Show # %D2 $type->exotic->enchanted $tier->glovesboots
#	AnyEnchantment True
#	Rarity <= Rare
#	Class "Boots" "Gloves"
#	SetFontSize 40
#	SetBorderColor 0 240 190 180
#	PlayEffect Blue Temp
