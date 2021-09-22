#==============================================================================================================:
# [[1000]] High Level Crafting Bases
#===============================================================================================================
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
