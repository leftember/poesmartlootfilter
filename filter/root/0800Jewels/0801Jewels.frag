
#===============================================================================================================
# [[0800]] Jewels
#===============================================================================================================
# !! Chapter "Endgame crafting and recipe items"
# !! Override 110 : "Jewel"

#------------------------------------
#   [0801] Special Cases
#------------------------------------

Show # $type->jewels->special $tier->1modcorrupted
    Corrupted True
    Identified True
    CorruptedMods >= 1
    Rarity Rare
    BaseType "Cobalt Jewel" "Crimson Jewel" "Viridian Jewel"
    HasExplicitMod "of Combat" "of Archery" "of Mysticism" "of Blasting" "of Wounding" "Surging" "Arctic" "Infernal" "Puncturing" "Rupturing" "Piercing" "Vivid" "Shimmering" "of Potency" "of Demolishing" "of Unmaking" "of the Elements" "of Exsanguinating" "of Atrophy" "of Order" "Leadership"
    SetFontSize 45
    SetTextColor 220 220 0 255
    SetBorderColor 0 240 190 255
    SetBackgroundColor 120 120 0 225
    PlayAlertSound 3 300
    PlayEffect Blue
    MinimapIcon 2 Blue Diamond

Show # %H4 $type->jewels->special $tier->1moduncorrupted
	Corrupted False
	Identified True
	Rarity <= Rare
	Class "Jewel"
	HasExplicitMod "Shimmering" "Vivid" "Stalwart" "Resplendent"
	SetFontSize 45
	SetBorderColor 0 240 190 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 2 Blue Diamond

#------------------------------------
#   [0802] Cluster Jewels
#------------------------------------

Show # $type->jewels->cluster $tier->optimalhighlarge
    ItemLevel >= 84
    Rarity <= Rare
    BaseType "Large Cluster Jewel"
    SetFontSize 45
    SetTextColor 150 0 255 255
    SetBorderColor 240 100 0 255
    SetBackgroundColor 34 0 67 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Pentagon

Show # %D6 $type->jewels->cluster $tier->highlarge
    Rarity <= Rare
    EnchantmentPassiveNum <= 8
    BaseType "Large Cluster Jewel"
    SetFontSize 45
    SetTextColor 150 0 255 255
    SetBorderColor 240 100 0 255
    SetBackgroundColor 34 0 67 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Pentagon

Show # %D4 $type->jewels->cluster $tier->large
    Rarity <= Rare
    BaseType "Large Cluster Jewel"
    SetFontSize 45
    SetTextColor 150 0 255 255
    SetBorderColor 100 255 0 255
    SetBackgroundColor 34 0 67 255
    PlayAlertSound 2 300
    PlayEffect Grey Temp
    MinimapIcon 2 Grey Pentagon

Show # $type->jewels->cluster $tier->optimalhighmedium
    ItemLevel >= 84
    Rarity <= Rare
    EnchantmentPassiveNum <= 5
    BaseType "Medium Cluster Jewel"
    SetFontSize 45
    SetTextColor 150 0 255 255
    SetBorderColor 240 100 0 255
    SetBackgroundColor 34 0 67 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Pentagon

Show # %D5 $type->jewels->cluster $tier->highmedium
    Rarity <= Rare
    EnchantmentPassiveNum <= 5
    BaseType "Medium Cluster Jewel"
    SetFontSize 45
    SetTextColor 150 0 255 255
    SetBorderColor 240 100 0 255
    SetBackgroundColor 34 0 67 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Pentagon

Show # %D4 $type->jewels->cluster $tier->medium
    Rarity <= Rare
    BaseType "Medium Cluster Jewel"
    SetFontSize 45
    SetTextColor 150 0 255 255
    SetBorderColor 100 255 0 255
    SetBackgroundColor 34 0 67 255
    PlayAlertSound 2 300
    PlayEffect Grey Temp
    MinimapIcon 2 Grey Pentagon

Show # %D5 $type->jewels->cluster $tier->highsmall
    ItemLevel >= 84
    Rarity <= Rare
    BaseType "Small Cluster Jewel"
    SetFontSize 45
    SetTextColor 150 0 255 255
    SetBorderColor 240 100 0 255
    SetBackgroundColor 34 0 67 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Pentagon

Show # %D4 $type->jewels->cluster $tier->small
    Rarity <= Rare
    BaseType "Small Cluster Jewel"
    SetFontSize 45
    SetTextColor 150 0 255 255
    SetBorderColor 100 255 0 255
    SetBackgroundColor 34 0 67 255
    PlayAlertSound 2 300
    PlayEffect Grey Temp
    MinimapIcon 2 Grey Pentagon

#------------------------------------
#   [0803] Abyss Jewels
#------------------------------------

Show # %HS4 $type->jewels->abyss $tier->highrare
	ItemLevel >= 82
	Rarity Rare
	Class "Abyss Jewel"
	SetFontSize 45
	SetTextColor 220 220 0 255
	SetBorderColor 240 100 0 255
	SetBackgroundColor 120 120 0 225
	PlayEffect Grey
	MinimapIcon 2 Grey Diamond

Hide # %HS3 $type->jewels->abyss $tier->highmagic
	ItemLevel >= 82
	Rarity <= Magic
	Class "Abyss Jewel"
	SetFontSize 40
	SetTextColor 0 75 250 255
	SetBorderColor 240 100 0 255
	SetBackgroundColor 0 20 40 255

Hide # %HS3 $type->jewels->abyss $tier->anyrare
	Rarity Rare
	Class "Abyss Jewel"
	SetFontSize 45
	SetTextColor 220 220 0 255
	SetBorderColor 220 220 0 255
	SetBackgroundColor 120 120 0 225

Hide # %HS2 $type->jewels->abyss $tier->anymagic
	Rarity <= Magic
	Class "Abyss Jewel"
	SetFontSize 40
	SetTextColor 0 75 250 255
	SetBorderColor 0 75 250 255
	SetBackgroundColor 0 20 40 255

#------------------------------------
#   [0804] Generic Jewels
#------------------------------------

Hide # %HS3 $type->jewels->generic $tier->anyrare
    Rarity Rare
    Class "Jewel"
    BaseType "Cobalt Jewel" "Crimson Jewel" "Viridian Jewel"
    SetFontSize 45
    SetTextColor 220 220 0 255
    SetBorderColor 220 220 0 255
    SetBackgroundColor 120 120 0 225

Hide # %H3 $type->jewels->generic $tier->anymagic
    AreaLevel > 70
	Rarity <= Magic
	Class "Jewel"
	BaseType "Cobalt Jewel" "Crimson Jewel" "Viridian Jewel"
	SetFontSize 40
	SetTextColor 0 75 250 255
	SetBorderColor 0 75 250 255
	SetBackgroundColor 0 20 40 255

Show # %H3 $type->jewels->generic $tier->anymagic
	Rarity <= Magic
	Class "Jewel"
	BaseType "Cobalt Jewel" "Crimson Jewel" "Viridian Jewel"
	SetFontSize 40
	SetTextColor 0 75 250 255
	SetBorderColor 0 75 250 255
	SetBackgroundColor 0 20 40 255
