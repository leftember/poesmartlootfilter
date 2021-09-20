#===============================================================================================================
# [[1000]] High Level Crafting Bases
#===============================================================================================================
# !! Override 130 : "High level crafting bases"
#------------------------------------
# [1234] ILVL 86
#------------------------------------

Show # $type->decorator->craftingrare $tier->raredecoratorilvl75
	Corrupted False
	ItemLevel >= 75
	Rarity Rare
	SetTextColor 106 175 255 255
	Continue

Show # $type->decorator->craftingrare $tier->raredecoratorilvl84
	Corrupted False
	ItemLevel >= 84
	Rarity Rare
	SetTextColor 106 175 255 255
	Continue

Show # $type->decorator->craftingrare $tier->raredecoratorilvl86
	Corrupted False
	ItemLevel >= 86
	Rarity Rare
	SetTextColor 106 175 255 255
	Continue

Show # $type->decorator->craftingrare $tier->raredecoratorgear
	Corrupted False
	ItemLevel >= 68
	Rarity Rare
	Class "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rune Daggers" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetFontSize 45
	SetBackgroundColor 31 0 75 255
	Continue

Show # $type->decorator->craftingrare $tier->raredecoratorjwlry
	Corrupted False
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets" "Belts" "Rings"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 121 70 225 255
	Continue

Show # $type->decorator->craftingrare $tier->normaldecorator
	Corrupted False
	ItemLevel >= 68
	Rarity <= Magic
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Daggers" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetBorderColor 100 100 100 150
	SetBackgroundColor 0 0 0 180
	Continue

Show # $type->normalcraft->i86 $tier->t1
Corrupted False
ItemLevel >= 86
Rarity <= Rare
BaseType == "Apothecary's Gloves" "Blue Pearl Amulet" "Bone Helmet" "Cerulean Ring" "Crystal Belt" "Fingerless Silk Gloves" "Fugitive Boots" "Gripped Gloves" "Iolite Ring" "Marble Amulet" "Opal Ring" "Ornate Quiver" "Sacrificial Garb" "Seaglass Amulet" "Spiked Gloves" "Steel Ring" "Stygian Vise" "Two-Toned Boots" "Vermillion Ring"
SetFontSize 45
SetBorderColor 255 125 0 240
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 1 Blue Diamond

Show # %D4 $type->normalcraft->i86 $tier->t2
Corrupted False
ItemLevel >= 86
Rarity <= Rare
BaseType == "Astral Plate" "Citadel Bow" "Colossal Tower Shield" "Convoking Wand" "Diamond Ring" "Eclipse Staff" "Eternal Burgonet" "Fossilised Spirit Shield" "Golden Kris" "Grappler" "Hubris Circlet" "Imbued Wand" "Jewelled Foil" "Karui Chopper" "Lion Pelt" "Onyx Amulet" "Opal Sceptre" "Opal Wand" "Platinum Kris" "Prismatic Ring" "Profane Wand" "Royal Burgonet" "Sambar Sceptre" "Siege Axe" "Sorcerer Boots" "Sorcerer Gloves" "Thicket Bow" "Titanium Spirit Shield" "Two-Stone Ring" "Vaal Regalia"
SetBorderColor 255 125 0 185

#Show # %D3 $type->normalcraft->i86 $tier->t3
#	Corrupted False
#	ItemLevel >= 86
#	Rarity <= Rare
#	BaseType == "Agate Amulet" "Ambusher" "Amethyst Ring" "Archon Kite Shield" "Artillery Quiver" "Assassin's Garb" "Citrine Amulet" "Copper Kris" "Deicide Mask" "Exquisite Blade" "Fleshripper" "Gemini Claw" "Harmonic Spirit Shield" "Imperial Maul" "Karui Maul" "Leather Belt" "Maraketh Bow" "Penetrating Arrow Quiver" "Pinnacle Tower Shield" "Runic Hatchet" "Rustic Sash" "Sadist Garb" "Sharktooth Arrow Quiver" "Slink Boots" "Slink Gloves" "Spike-Point Arrow Quiver" "Spiraled Foil" "Titan Gauntlets" "Titan Greaves" "Turquoise Amulet" "Unset Ring" "Vaal Axe" "Vanguard Belt" "Void Sceptre"
#	SetBorderColor 255 125 0 185

#------------------------------------
#   [1001] ILVL 84
#------------------------------------

Show # %D4 $type->normalcraft->i84 $tier->t1
Corrupted False
ItemLevel >= 84
Rarity <= Rare
BaseType == "Apothecary's Gloves" "Blue Pearl Amulet" "Bone Helmet" "Cerulean Ring" "Crystal Belt" "Fingerless Silk Gloves" "Fugitive Boots" "Gripped Gloves" "Iolite Ring" "Marble Amulet" "Opal Ring" "Ornate Quiver" "Sacrificial Garb" "Seaglass Amulet" "Spiked Gloves" "Steel Ring" "Stygian Vise" "Two-Toned Boots" "Vermillion Ring"
SetFontSize 45
SetBorderColor 200 200 0 240
PlayAlertSound 3 300
PlayEffect White
MinimapIcon 2 White Diamond

#Show # %D2 $type->normalcraft->i84 $tier->t2
#	Corrupted False
#	ItemLevel >= 84
#	Rarity <= Rare
#	BaseType == "Astral Plate" "Citadel Bow" "Colossal Tower Shield" "Convoking Wand" "Diamond Ring" "Eclipse Staff" "Eternal Burgonet" "Fossilised Spirit Shield" "Golden Kris" "Grappler" "Hubris Circlet" "Imbued Wand" "Jewelled Foil" "Karui Chopper" "Lion Pelt" "Onyx Amulet" "Opal Sceptre" "Opal Wand" "Platinum Kris" "Prismatic Ring" "Profane Wand" "Royal Burgonet" "Sambar Sceptre" "Siege Axe" "Sorcerer Boots" "Sorcerer Gloves" "Thicket Bow" "Titanium Spirit Shield" "Two-Stone Ring" "Vaal Regalia"
#	SetBorderColor 200 200 0 185

#Show  # $type->normalcraft->i84 $tier->t3
#	Corrupted False
#	ItemLevel >= 84
#	Rarity <= Rare
#	BaseType == "Agate Amulet" "Ambusher" "Amethyst Ring" "Archon Kite Shield" "Artillery Quiver" "Assassin's Garb" "Citrine Amulet" "Copper Kris" "Deicide Mask" "Exquisite Blade" "Fleshripper" "Gemini Claw" "Harmonic Spirit Shield" "Imperial Maul" "Karui Maul" "Leather Belt" "Maraketh Bow" "Penetrating Arrow Quiver" "Pinnacle Tower Shield" "Runic Hatchet" "Rustic Sash" "Sadist Garb" "Sharktooth Arrow Quiver" "Slink Boots" "Slink Gloves" "Spike-Point Arrow Quiver" "Spiraled Foil" "Titan Gauntlets" "Titan Greaves" "Turquoise Amulet" "Unset Ring" "Vaal Axe" "Vanguard Belt" "Void Sceptre"
#	SetBorderColor 200 200 0 185

#------------------------------------
#   [1002] ILVL ANY
#------------------------------------

#Show # %D3 $type->normalcraft->rest $tier->t1
#	Corrupted False
#	ItemLevel <= 83
#	ItemLevel >= 68
#	Rarity <= Rare
#	BaseType == "Apothecary's Gloves" "Blue Pearl Amulet" "Bone Helmet" "Cerulean Ring" "Crystal Belt" "Fingerless Silk Gloves" "Fugitive Boots" "Gripped Gloves" "Iolite Ring" "Marble Amulet" "Opal Ring" "Ornate Quiver" "Sacrificial Garb" "Seaglass Amulet" "Spiked Gloves" "Steel Ring" "Stygian Vise" "Two-Toned Boots" "Vermillion Ring"
#	SetFontSize 45
#	SetBorderColor 255 255 255 255
#	PlayAlertSound 3 300
#	PlayEffect Grey
#	MinimapIcon 2 Grey Diamond

#Show # %D0 $type->normalcraft->rest $tier->t2
#	Corrupted False
#	ItemLevel <= 83
#	ItemLevel >= 68
#	Rarity <= Rare
#	BaseType == "Astral Plate" "Citadel Bow" "Colossal Tower Shield" "Convoking Wand" "Diamond Ring" "Eclipse Staff" "Eternal Burgonet" "Fossilised Spirit Shield" "Golden Kris" "Grappler" "Hubris Circlet" "Imbued Wand" "Jewelled Foil" "Karui Chopper" "Lion Pelt" "Onyx Amulet" "Opal Sceptre" "Opal Wand" "Platinum Kris" "Prismatic Ring" "Profane Wand" "Royal Burgonet" "Sambar Sceptre" "Siege Axe" "Sorcerer Boots" "Sorcerer Gloves" "Thicket Bow" "Titanium Spirit Shield" "Two-Stone Ring" "Vaal Regalia"
#	SetBorderColor 200 200 200 200

#Show  # $type->normalcraft->rest $tier->t3
#	Corrupted False
#	ItemLevel <= 83
#	ItemLevel >= 68
#	Rarity <= Rare
#	BaseType == "Agate Amulet" "Ambusher" "Amethyst Ring" "Archon Kite Shield" "Artillery Quiver" "Assassin's Garb" "Citrine Amulet" "Copper Kris" "Deicide Mask" "Exquisite Blade" "Fleshripper" "Gemini Claw" "Harmonic Spirit Shield" "Imperial Maul" "Karui Maul" "Leather Belt" "Maraketh Bow" "Penetrating Arrow Quiver" "Pinnacle Tower Shield" "Runic Hatchet" "Rustic Sash" "Sadist Garb" "Sharktooth Arrow Quiver" "Slink Boots" "Slink Gloves" "Spike-Point Arrow Quiver" "Spiraled Foil" "Titan Gauntlets" "Titan Greaves" "Turquoise Amulet" "Unset Ring" "Vaal Axe" "Vanguard Belt" "Void Sceptre"
#	SetBorderColor 200 200 200 200

Show # $type->decorator->craftinggeneric $tier->raredecoratorremover
	Corrupted False
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetFontSize 32
	SetTextColor 255 255 119
	SetBorderColor 0 0 0 255
	SetBackgroundColor 0 0 0 240
	Continue

Show # $type->decorator->craftinggeneric $tier->magicdecoratorremover
	Corrupted False
	ItemLevel >= 68
	Rarity Magic
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetFontSize 32
	SetBorderColor 0 0 0 255
	SetBackgroundColor 0 0 0 240
	Continue

Show # $type->decorator->craftinggeneric $tier->normaldecoratorremover
	Corrupted False
	ItemLevel >= 68
	Rarity Normal
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetFontSize 32
	SetBorderColor 0 0 0 255
	SetBackgroundColor 0 0 0 240
	Continue

# Minimal list of bases for harvest specific crafting. This list is really not conclusive, but you can adjust it yourself on filterblade or here.
# Having this list too long will lead to being too flooded with these drops.

#Show # %D2 $type->normalcraft->extra $tier->any
#	Corrupted False
#	ItemLevel >= 68
#	ItemLevel <= 83
#	Rarity < Magic
#	BaseType "Imbued Wand" "Sorcerer Boots" "Sorcerer Gloves" "Titanium Spirit Shield" "Two-Stone Ring"
#	SetBorderColor 200 200 200 200

