
#------------------------------------
#   [4701] Rares - Decorators
#------------------------------------
# !! Override 840 : "leveling: all rare rules"

Show # $type->decorators->leveling->rare $tier->largerares
	Width >= 2
	Height >= 3
	ItemLevel <= 68
	Rarity Rare
	SetBorderColor 0 0 0 255
	Continue

Show # $type->decorators->leveling->rare $tier->mediumrares1
	Width 1
	Height >= 3
	ItemLevel <= 68
	Rarity Rare
	SetBorderColor 180 180 180 255
	Continue

Show # $type->decorators->leveling->rare $tier->mediumrares2
	Width 2
	Height 2
	ItemLevel <= 68
	Rarity Rare
	SetBorderColor 180 180 180 255
	Continue

Show # $type->decorators->leveling->rare $tier->tinyrares
	Width <= 2
	Height 1
	ItemLevel <= 68
	Rarity Rare
	SetBorderColor 200 200 200 255
	Continue

#------------------------------------
#   [4702] Rares - Universal
#------------------------------------

Show # %D5 $type->leveling->rare->universal $tier->rusticsash
    Rarity Rare
    BaseType "Rustic Sash"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 121 70 225 255

Show # %D5 $type->leveling->rare->universal $tier->jewellery
	Rarity Rare
	Class == "Amulets" "Belts" "Rings"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 121 70 225 255

# !! Override 840 : "leveling: rare armours"

Show # %D4 $type->leveling->rare->armours $tier->bootsfocus
	Rarity Rare
	Class == "Boots"
	SetFontSize 45
	SetBorderColor 255 255 255 255
	SetBackgroundColor 31 0 75 255

Show # %D4 $type->leveling->rare->armours $tier->general
	Rarity Rare
	Class == "Boots" "Gloves" "Helmets"
	SetFontSize 45
	SetBorderColor 255 255 255 255
	SetBackgroundColor 31 0 75 255

Show # %D4 $type->leveling->rare->armours $tier->bodyarmours
	Rarity Rare
	Class == "Body Armours"
	SetFontSize 40
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->armours $tier->shields
	Rarity Rare
	Class == "Shields"
	SetFontSize 40
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->armours $tier->quivers
	Rarity Rare
	Class == "Quivers"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

#------------------------------------
#   [4703] Rares - Caster
#------------------------------------
# !! Override 850 : "leveling: class specific leveling weapons"

Show # %D4 $type->leveling->rare->caster $tier->earlylevels
	ItemLevel <= 16
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Staves" "Wands"
	SetFontSize 45
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->caster $tier->general
	Rarity Rare
	Class == "Rune Daggers" "Sceptres" "Staves" "Wands"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

#------------------------------------
#   [4704] Rares - Archer
#------------------------------------

Show # %D4 $type->leveling->rare->archer $tier->l1
	ItemLevel <= 16
	Rarity Rare
	Class == "Bows"
	SetFontSize 45
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->archer $tier->l2
	ItemLevel <= 20
	DropLevel >= 8
	Rarity Rare
	Class == "Bows"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->archer $tier->l3
	ItemLevel <= 26
	DropLevel >= 14
	Rarity Rare
	Class == "Bows"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->archer $tier->l4
	ItemLevel <= 32
	DropLevel >= 20
	Rarity Rare
	Class == "Bows"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->archer $tier->l5
	ItemLevel <= 38
	DropLevel >= 26
	Rarity Rare
	Class == "Bows"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->archer $tier->l6
	ItemLevel <= 44
	DropLevel >= 32
	Rarity Rare
	Class == "Bows"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->archer $tier->l7
	ItemLevel <= 50
	DropLevel >= 38
	Rarity Rare
	Class == "Bows"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->archer $tier->l8
	ItemLevel <= 56
	DropLevel >= 44
	Rarity Rare
	Class == "Bows"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->archer $tier->l9
	ItemLevel <= 58
	DropLevel >= 50
	Rarity Rare
	Class == "Bows"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->archer $tier->l10
	ItemLevel <= 68
	DropLevel >= 56
	Rarity Rare
	Class == "Bows"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

#------------------------------------
#   [4705] Rares - Melee
#------------------------------------

Show # %D4 $type->leveling->rare->melee $tier->l1
	ItemLevel <= 16
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 45
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->melee $tier->l2
	ItemLevel <= 20
	DropLevel >= 8
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->melee $tier->l3
	ItemLevel <= 26
	DropLevel >= 14
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->melee $tier->l4
	ItemLevel <= 32
	DropLevel >= 20
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->melee $tier->l5
	ItemLevel <= 38
	DropLevel >= 26
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->melee $tier->l6
	ItemLevel <= 44
	DropLevel >= 32
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->melee $tier->l7
	ItemLevel <= 50
	DropLevel >= 38
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->melee $tier->l8
	ItemLevel <= 56
	DropLevel >= 44
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->melee $tier->l9
	ItemLevel <= 58
	DropLevel >= 50
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->rare->melee $tier->l10
	ItemLevel <= 68
	DropLevel >= 56
	Rarity Rare
	Class == "Claws" "Daggers" "One Hand Axes" "One Hand Maces" "One Hand Swords" "Two Hand Axes" "Two Hand Maces" "Two Hand Swords" "Warstaves"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

