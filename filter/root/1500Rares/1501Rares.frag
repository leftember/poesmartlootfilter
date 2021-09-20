
#===============================================================================================================
# [[1500]] Rare Item Decorators
#===============================================================================================================
# !! Chapter "Rare Endgame Items"
# !! Override 210 : "Rare continue/style sections sections"

Show # $type->decorators->rareeg $tier->largerares
	Width >= 2
	Height >= 3
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetBorderColor 0 0 0 255
	Continue

Show # $type->decorators->rareeg $tier->mediumrares1
	Width 1
	Height >= 3
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetBorderColor 180 180 180 255
	Continue

Show # $type->decorators->rareeg $tier->mediumrares2
	Width 2
	Height 2
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetBorderColor 180 180 180 255
	Continue

Show # $type->decorators->rareeg $tier->tinyrares
	Width <= 2
	Height 1
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetBorderColor 200 200 200 255
	Continue

Show # $type->decorators->rareeg $tier->ilvl68
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetTextColor 138 59 206 220
	Continue

Show # $type->decorators->rareeg $tier->ilvl75
	ItemLevel >= 75
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetTextColor 106 175 255 255
	Continue

Show # $type->decorators->rareeg $tier->ilvl84
	ItemLevel >= 84
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetTextColor 106 175 255 255
	Continue

Show # $type->decorators->rareeg $tier->ilvl86
	ItemLevel >= 86
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetTextColor 106 175 255 255
	Continue

Show # $type->decorators->rareeg $tier->corruptedrares
	Corrupted True
	CorruptedMods 0
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetBorderColor 120 0 0 240
	Continue

Show # $type->decorators->rareeg $tier->corruptedraresimplicit
	Corrupted True
	CorruptedMods >= 1
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetBorderColor 250 0 0 255
	Continue

#===============================================================================================================
# [[1600]] Endgame - Rare - Exotic Corrupted Items
#===============================================================================================================
# !! Override 220 : "Talismans"

Hide # %H3 $type->rare->exotic->breachrings $tier->any
	ItemLevel >= 68
	Rarity Rare
	Class "Rings"
	BaseType "Breach"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 103 34 163 255

Show # %H5 $type->rare->exotic->talisman $tier->t1attacktalisman
AnyEnchantment True
ItemLevel >= 68
Rarity Rare
Class "Amulets"
BaseType "Avian Twins Talisman" "Fangjaw Talisman" "Hexclaw Talisman" "Longtooth Talisman" "Mandible Talisman" "Rotfeather Talisman" "Spinefuse Talisman" "Three Rat Talisman" "Wereclaw Talisman" "Writhing Talisman"
HasExplicitMod "Athlete's" "Virile" "Dazzling" "Resplendent"
HasExplicitMod >=3 "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Ranger" "of the Marksman" "Devastating" "Overpowering" "Unleashed" "Cremating" "Entombing" "Electrocuting" "Flaring" "Tempered" "of the Span" "of the Rainbow" "of the Multiverse" "of the Infinite" "of Incision" "of Penetrating" "of Destruction" "of Ferocity"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 75 30 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 0 Blue Diamond

Show # %H5 $type->rare->exotic->talisman $tier->t1castertalisman
AnyEnchantment True
ItemLevel >= 68
Rarity Rare
Class "Amulets"
BaseType "Avian Twins Talisman" "Bonespire Talisman" "Chrysalis Talisman" "Clutching Talisman" "Fangjaw Talisman" "Hexclaw Talisman" "Longtooth Talisman" "Mandible Talisman" "Rotfeather Talisman" "Spinefuse Talisman" "Three Rat Talisman" "Wereclaw Talisman"
HasExplicitMod "Athlete's" "Virile" "Dazzling" "Resplendent"
HasExplicitMod >=3 "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "of Expertise" "of Nimbleness" "Zaffre" "Blue" "of Nirvana" "of Euphoria" "Wizard's" "Thaumaturgist's" "of Immolation" "of Flames" "of Floe" "of Rime" "of Discharge" "of Voltage" "of the Span" "of the Rainbow" "of the Multiverse" "of the Infinite" "of Incision" "of Penetrating" "of Destruction" "of Ferocity" "Unassailable" "Indomitable"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 75 30 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 0 Blue Diamond

Show # %H4 $type->rare->exotic->talisman $tier->t2attacktalisman
AnyEnchantment True
ItemLevel >= 68
Rarity Rare
Class "Amulets"
BaseType "Ashscale Talisman" "Avian Twins Talisman" "Breakrib Talisman" "Deadhand Talisman" "Deep One Talisman" "Fangjaw Talisman" "Hexclaw Talisman" "Lone Antler Talisman" "Longtooth Talisman" "Mandible Talisman" "Rotfeather Talisman" "Spinefuse Talisman" "Three Rat Talisman" "Wereclaw Talisman" "Writhing Talisman"
HasExplicitMod "Athlete's" "Virile" "Rotund" "Dazzling" "Resplendent"
HasExplicitMod >=3 "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "of the Ranger" "of the Marksman" "of the Sniper" "Devastating" "Overpowering" "Unleashed" "Empowering" "Cremating" "Blasting" "Entombing" "Polar" "Electrocuting" "Discharging" "Flaring" "Tempered" "Razor-sharp" "of the Span" "of the Rainbow" "of Variegation" "of the Multiverse" "of the Infinite" "of the Universe" "of Incision" "of Penetrating" "of Puncturing" "of Destruction" "of Ferocity" "of Fury"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 0 0 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 1 Blue Diamond

Show # %H4 $type->rare->exotic->talisman $tier->t2castertalisman
AnyEnchantment True
ItemLevel >= 68
Rarity Rare
Class "Amulets"
BaseType "Ashscale Talisman" "Avian Twins Talisman" "Bonespire Talisman" "Breakrib Talisman" "Chrysalis Talisman" "Clutching Talisman" "Deadhand Talisman" "Deep One Talisman" "Fangjaw Talisman" "Hexclaw Talisman" "Lone Antler Talisman" "Longtooth Talisman" "Mandible Talisman" "Rotfeather Talisman" "Spinefuse Talisman" "Three Rat Talisman" "Wereclaw Talisman"
HasExplicitMod "Athlete's" "Virile" "Rotund" "Dazzling" "Resplendent"
HasExplicitMod >=3 "of Tzteosh" "of the Magma" "of the Volcano" "of Ephij" "of the Lightning" "of the Maelstrom" "of Haast" "of the Ice" "of the Polar Bear" "of Bameth" "of Exile" "of Expulsion" "of the Godslayer" "of the Gods" "of the Titan" "of the Leviathan" "of the Blur" "of the Wind" "of the Phantom" "of the Jaguar" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Savant" "of Expertise" "of Nimbleness" "Zaffre" "Blue" "Mazarine" "of Nirvana" "of Euphoria" "of Bliss" "Wizard's" "Thaumaturgist's" "of Immolation" "of Flames" "of Cinders" "of Floe" "of Rime" "of Ice" "of Discharge" "of Voltage" "of Electricity" "of the Span" "of the Rainbow" "of Variegation" "of the Multiverse" "of the Infinite" "of the Universe" "of Incision" "of Penetrating" "of Puncturing" "of Destruction" "of Ferocity" "of Fury" "Unassailable" "Indomitable"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 0 0 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 1 Blue Diamond

Show # %H5 $type->rare->exotic->talisman $tier->t1stattalisman
AnyEnchantment True
ItemLevel >= 68
Rarity Rare
Class "Amulets"
BaseType "Avian Twins Talisman" "Three Rat Talisman"
HasExplicitMod "Athlete's" "Virile"
HasExplicitMod "of the Multiverse" "of the Infinite" "of the Universe"
HasExplicitMod "of the Godslayer" "of the Gods" "of the Blur" "of the Wind" "of the Polymath" "of the Genius"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 75 30 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 0 Blue Diamond

Show # %H4 $type->rare->exotic->talisman $tier->t2stattalisman
AnyEnchantment True
ItemLevel >= 68
Rarity Rare
Class "Amulets"
BaseType "Avian Twins Talisman" "Three Rat Talisman"
HasExplicitMod "of the Multiverse" "of the Infinite" "of the Universe"
HasExplicitMod "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 0 0 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 1 Blue Diamond

Show # %H4 $type->rare->exotic->talisman $tier->t3decentmodstalisman
AnyEnchantment True
ItemLevel >= 68
Rarity Rare
Class "Amulets"
BaseType "Talisman"
HasExplicitMod >=3 "Athlete's" "Virile" "Rotund" "of Tzteosh" "of the Magma" "of Ephij" "of the Lightning" "of Haast" "of the Ice" "of Bameth" "of Exile" "of the Godslayer" "of the Gods" "of the Titan" "of the Blur" "of the Wind" "of the Phantom" "of the Polymath" "of the Genius" "of the Virtuoso" "of the Ranger" "of the Marksman" "of the Sniper" "Devastating" "Overpowering" "Unleashed" "Empowering" "Cremating" "Blasting" "Entombing" "Polar" "Electrocuting" "Discharging" "Flaring" "Tempered" "Razor-sharp" "of Expertise" "of Nimbleness" "Zaffre" "Blue" "Mazarine" "of Nirvana" "of Euphoria" "of Bliss" "Wizard's" "Thaumaturgist's" "of Immolation" "of Flames" "of Cinders" "of Floe" "of Rime" "of Ice" "of Discharge" "of Voltage" "of Electricity" "of the Span" "of the Rainbow" "of the Multiverse" "of the Infinite" "of Incision" "of Penetrating" "of Destruction" "of Ferocity" "Unassailable" "Impregnable" "Vaporous" "Dazzling" "Resplendent"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 240 190 255
SetBackgroundColor 103 34 163 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 2 Blue Diamond

Hide # %H3 $type->rare->exotic->talisman $tier->t3decenttypetalisman
	AnyEnchantment True
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets"
	BaseType "Avian Twins Talisman" "Fangjaw Talisman" "Hexclaw Talisman" "Longtooth Talisman" "Mandible Talisman" "Rotfeather Talisman" "Spinefuse Talisman" "Three Rat Talisman" "Wereclaw Talisman"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 103 34 163 255

Hide # %H2 $type->rare->exotic->talisman $tier->any
	AnyEnchantment True
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets"
	BaseType "Talisman"
	SetFontSize 40
	SetTextColor 0 0 0 255
	SetBorderColor 0 240 190 180
	SetBackgroundColor 103 34 163 255

#===============================================================================================================
# [[1700]] Endgame - Rare - Accessoires
#===============================================================================================================

#Hide  # $type->rareoptional $tier->idhider
#	Identified True
#	ItemLevel >= 68
#	Rarity Rare
#	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
#	SetFontSize 35
#	SetBorderColor 0 0 0

#===============================================================================================================
# [[1800]] Endgame - Rare - Accessoires
#===============================================================================================================
# !! Override 230 : "Rings and Amulets"

Show # %D4 $type->rr->amuring $tier->t1
ItemLevel >= 68
Rarity Rare
Class "Amulets" "Rings"
BaseType "Agate Amulet" "Blue Pearl Amulet" "Cerulean Ring" "Citrine Amulet" "Iolite Ring" "Marble Amulet" "Onyx Amulet" "Opal Ring" "Prismatic Ring" "Seaglass Amulet" "Steel Ring" "Turquoise Amulet" "Two-Stone Ring" "Vermillion Ring"
SetFontSize 45
SetTextColor 0 0 0 255
SetBackgroundColor 121 70 225 255

#Show # %D3 $type->rr->amuring $tier->t2
#	ItemLevel >= 68
#	Rarity Rare
#	Class "Amulets" "Rings"
#	BaseType "Amber Amulet" "Amethyst Ring" "Coral Ring" "Diamond Ring" "Jade Amulet" "Lapis Amulet" "Ruby Ring" "Sapphire Ring" "Topaz Ring" "Unset Ring"
#	SetFontSize 45
#	SetTextColor 0 0 0 255
#	SetBackgroundColor 103 34 163 255

#Show # %D2 $type->rr->amuring $tier->t3
#	ItemLevel >= 68
#	Rarity Rare
#	Class "Amulets" "Rings"
#	BaseType "Coral Amulet" "Gold Amulet" "Gold Ring" "Iron Ring" "Moonstone Ring" "Paua Amulet" "Paua Ring"
#	SetFontSize 40
#	SetTextColor 0 0 0 255
#	SetBackgroundColor 103 34 163 255

Show # %D4 $type->rr->belts $tier->t1
ItemLevel >= 68
Rarity Rare
Class "Belts"
BaseType "Crystal Belt" "Stygian Vise"
SetFontSize 45
SetTextColor 0 0 0 255
SetBackgroundColor 121 70 225 255

#Show # %D3 $type->rr->belts $tier->t2
#	ItemLevel >= 68
#	Rarity Rare
#	Class "Belts"
#	BaseType "Heavy Belt" "Leather Belt" "Rustic Sash"
#	SetFontSize 45
#	SetTextColor 0 0 0 255
#	SetBackgroundColor 103 34 163 255

#Show # %D2 $type->rr->belts $tier->t3
#	ItemLevel >= 68
#	Rarity Rare
#	Class "Belts"
#	BaseType "Chain Belt" "Cloth Belt" "Studded Belt" "Vanguard Belt"
#	SetFontSize 40
#	SetTextColor 0 0 0 255
#	SetBackgroundColor 103 34 163 255

#===============================================================================================================
# [[1900]] Endgame - Rare - Gear - T1 - handpicked
#===============================================================================================================
# !! Override 240 : "T1 rares - handpicked"	

Show # %D4 $type->rr $tier->t1weapons
ItemLevel >= 68
Rarity Rare
BaseType "Convoking Wand" "Imbued Wand" "Opal Sceptre" "Opal Wand" "Ornate Quiver" "Profane Wand"
SetFontSize 45
SetBackgroundColor 31 0 75 255

Show # %D4 $type->rr $tier->t1armours
ItemLevel >= 68
Rarity Rare
BaseType "Apothecary's Gloves" "Arcanist Slippers" "Assassin's Boots" "Bone Helmet" "Colossal Tower Shield" "Crusader Boots" "Dragonscale Boots" "Dragonscale Gauntlets" "Eternal Burgonet" "Fingerless Silk Gloves" "Fossilised Spirit Shield" "Fugitive Boots" "Goliath Greaves" "Gripped Gloves" "Hubris Circlet" "Imperial Buckler" "Lion Pelt" "Murder Boots" "Royal Burgonet" "Slink Boots" "Slink Gloves" "Sorcerer Boots" "Sorcerer Gloves" "Spiked Gloves" "Stealth Boots" "Titan Gauntlets" "Titan Greaves" "Titanium Spirit Shield" "Two-Toned Boots" "Vaal Greaves"
SetFontSize 45
SetBackgroundColor 31 0 75 255

#===============================================================================================================
# [[2000]] Endgame - Rare - Gear - T2 - handpicked
#===============================================================================================================
# !! Override 250 : "T2 rares - handpicked"

#Show # %D3 $type->rr $tier->t2weapons
#	ItemLevel >= 68
#	Rarity Rare
#	BaseType "Citadel Bow" "Copper Kris" "Demon's Horn" "Eclipse Staff" "Gemini Claw" "Golden Kris" "Grappler" "Jewelled Foil" "Karui Chopper" "Penetrating Arrow Quiver" "Platinum Kris" "Prophecy Wand" "Sambar Sceptre" "Siege Axe" "Spike-Point Arrow Quiver" "Spiraled Foil" "Thicket Bow" "Tornado Wand" "Vaal Sceptre" "Void Sceptre"
#	SetFontSize 40
#	SetBackgroundColor 0 0 0 255

#Show # %D3 $type->rr $tier->t2armours
#	ItemLevel >= 68
#	Rarity Rare
#	BaseType "Ambush Boots" "Ancient Greaves" "Antique Greaves" "Arcanist Gloves" "Archon Kite Shield" "Assassin's Garb" "Assassin's Mitts" "Astral Plate" "Carnal Boots" "Conjurer Boots" "Conjurer Gloves" "Crusader Buckler" "Crusader Gloves" "Deicide Mask" "Ezomyte Burgonet" "Goliath Gauntlets" "Harmonic Spirit Shield" "Hydrascale Boots" "Hydrascale Gauntlets" "Legion Boots" "Mind Cage" "Mosaic Kite Shield" "Murder Mitts" "Nightmare Bascinet" "Pig-Faced Bascinet" "Pinnacle Tower Shield" "Praetor Crown" "Sadist Garb" "Samite Slippers" "Shagreen Boots" "Shagreen Gloves" "Sharkskin Boots" "Sinner Tricorne" "Soldier Boots" "Stealth Gloves" "Vaal Gauntlets" "Vaal Regalia" "Vaal Spirit Shield" "Wyrmscale Boots"
#	SetFontSize 40
#	SetBackgroundColor 0 0 0 255

#===============================================================================================================
# [[2100]] Endgame - Rare - Gear - T2 - handpicked
#===============================================================================================================
# !! Override 255 : "Identified Item Handling"

#Show # %D3 $type->rr $tier->identifieditemhandling
#	Corrupted False
#	Identified True
#	Mirrored False
#	ItemLevel >= 68
#	Rarity Rare
#	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
#	SetFontSize 40
#	SetBorderColor 0 240 190 180
#	PlayEffect Blue Temp

#===============================================================================================================
# [[2200]] Endgame - Rare - Gear - T3 - droplevel-based
#===============================================================================================================
# !! Override 260 : "T3 rares - droplevel-based"

#Show # %D2 $type->rr $tier->t3runedaggers
#	ItemLevel >= 68
#	DropLevel >= 62
#	Rarity Rare
#	Class "Rune Daggers"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3daggers
#	ItemLevel >= 68
#	DropLevel >= 56
#	Rarity Rare
#	Class "Daggers"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3claws
#	ItemLevel >= 68
#	DropLevel >= 66
#	Rarity Rare
#	Class "Claws"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3wands
#	ItemLevel >= 68
#	DropLevel >= 45
#	Rarity Rare
#	Class "Wands"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3foils
#	Height 4
#	ItemLevel >= 68
#	DropLevel >= 60
#	Rarity Rare
#	Class "Thrusting One Hand Swords"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3swords1h
#	Height < 4
#	ItemLevel >= 68
#	DropLevel >= 66
#	Rarity Rare
#	Class "One Hand Swords"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3maces1h
#	ItemLevel >= 68
#	DropLevel >= 64
#	Rarity Rare
#	Class "One Hand Maces"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3axes1h
#	ItemLevel >= 68
#	DropLevel >= 67
#	Rarity Rare
#	Class "One Hand Axes"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3sceptres
#	ItemLevel >= 68
#	DropLevel >= 55
#	Rarity Rare
#	Class "Sceptres"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3warstaves
#	ItemLevel >= 68
#	DropLevel >= 64
#	Rarity Rare
#	Class "Warstaves"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3staves
#	ItemLevel >= 68
#	DropLevel >= 60
#	Rarity Rare
#	Class "Staves"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3swords2h
#	ItemLevel >= 68
#	DropLevel >= 65
#	Rarity Rare
#	Class "Two Hand Swords"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3axes2h
#	ItemLevel >= 68
#	DropLevel >= 64
#	Rarity Rare
#	Class "Two Hand Axes"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3maces2h
#	ItemLevel >= 68
#	DropLevel >= 65
#	Rarity Rare
#	Class "Two Hand Maces"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3bows
#	ItemLevel >= 68
#	DropLevel >= 62
#	Rarity Rare
#	Class "Bows"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3boots
#	ItemLevel >= 68
#	DropLevel >= 23
#	Rarity Rare
#	Class "Boots"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3gloves
#	ItemLevel >= 68
#	DropLevel >= 36
#	Rarity Rare
#	Class "Gloves"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3helmets
#	ItemLevel >= 68
#	DropLevel >= 47
#	Rarity Rare
#	Class "Helmets"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3body
#	ItemLevel >= 68
#	DropLevel >= 59
#	Rarity Rare
#	Class "Body Armours"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3shields
#	ItemLevel >= 68
#	DropLevel >= 62
#	Rarity Rare
#	Class "Shields"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#Show # %D2 $type->rr $tier->t3quivers
#	ItemLevel >= 68
#	DropLevel >= 28
#	Rarity Rare
#	Class "Quivers"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200

#===============================================================================================================
# [[2300]] Endgame - Rare - Gear - T4 - rest
#===============================================================================================================
# !! Override 270 : "T4 rares remaining"

#Show # %D1 $type->rr $tier->t4endgamerares
#	ItemLevel >= 68
#	Rarity Rare
#	Class "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Quivers" "Rune Daggers" "Sceptres" "Shields" "Staves" "Thrusting One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Wands" "Warstaves"
#	SetFontSize 35
#	SetBackgroundColor 0 0 0 200
