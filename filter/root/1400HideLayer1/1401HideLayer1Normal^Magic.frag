
#===============================================================================================================
# [[1400]] Hide Layer 1 - Normal and Magic Endgame Gear
#===============================================================================================================

### For Animate Weapon
#Show # $type->leveling->flasks->mana $tier->t5
#	Rarity = Normal
#	Class "Claws" "Daggers" "One Hand" "Rune Dagger" "Sceptres" "Staves" "Two Hand" "Warstaves"
#	SetFontSize 30
#	SetTextColor 0 0 100 200
#	SetBorderColor 0 100 0 255
#	SetBackgroundColor 0 0 100 200
#	DisableDropSound True
#    SetBorderColor 0 0 120
#
Hide # $type->hidelayer $tier->normalmagicendgame
	AreaLevel >= 68
	Rarity < Rare
	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Flask" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
	SetFontSize 18
	SetBorderColor 0 0 0 0
	SetBackgroundColor 0 0 0 0
	DisableDropSound True

