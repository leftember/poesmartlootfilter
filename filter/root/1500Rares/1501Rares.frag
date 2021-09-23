#===============================================================================================================
# [[1500]] Rare Item Decorators
#===============================================================================================================

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

Show # %D4 $type->rr->belts $tier->t1
    ItemLevel >= 68
    Rarity Rare
    Class "Belts"
    BaseType "Crystal Belt" "Stygian Vise"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBackgroundColor 121 70 225 255

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
    SetBackgroundColor 0 0 0 200
