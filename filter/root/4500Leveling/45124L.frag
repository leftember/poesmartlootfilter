
#===============================================================================================================
# [[1300]] Misc Rules
#===============================================================================================================
# !! Override 170 : "Overquality and endgame 4links"

#Show # %D2 $type->miscendgamerules $tier->overquality
#	Corrupted False
#	Quality >= 29
#	ItemLevel >= 75
#	DropLevel >= 50
#	Rarity <= Rare
#	Class "Amulets" "Belts" "Body Armours" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rings" "Rune Dagger" "Sceptres" "Shields" "Staves" "Two Hand" "Wands" "Warstaves"
#	SetFontSize 40
#	SetBorderColor 0 240 190 180
#	PlayEffect Blue Temp

#Show # %D1 $type->miscendgamerules $tier->earlyendgame4link
#	Corrupted False
#	LinkedSockets >= 4
#	AreaLevel <= 72
#	AreaLevel >= 68
#	Rarity < Rare
#	Class "Body Armours" "Boots" "Gloves" "Helmets"
#	SetBorderColor 100 100 100 150
#	SetBackgroundColor 0 0 0 180

#Show  # $type->animatedweapons $tier->normalmelee
#	Rarity Normal
#	Class "Claws" "Daggers" "One Hand" "Rune Dagger" "Sceptres" "Staves" "Thrusting" "Two Hand" "Warstaves"
#	SetFontSize 18
#	SetBorderColor 230 0 0 255
#	SetBackgroundColor 0 0 0 100

#Show  # $type->animatedweapons $tier->normalranged
#	Rarity Normal
#	Class "Bows" "Wands"
#	SetFontSize 18
#	SetBorderColor 230 0 0 255
#	SetBackgroundColor 0 0 0 100

#Show  # $type->animatedweapons $tier->magicmelee
#	Rarity Magic
#	Class "Claws" "Daggers" "One Hand" "Rune Dagger" "Sceptres" "Staves" "Thrusting" "Two Hand" "Warstaves"
#	SetFontSize 18
#	SetBorderColor 230 0 0 255
#	SetBackgroundColor 0 0 0 100

#Show  # $type->animatedweapons $tier->magicranged
#	Rarity Magic
#	Class "Bows" "Wands"
#	SetFontSize 18
#	SetBorderColor 230 0 0 255
#	SetBackgroundColor 0 0 0 100

#------------------------------------
# [6002] Links and Sockets
#------------------------------------

Show # %D4 $type->leveling->rare->socketslinks $tier->4linkrares
	LinkedSockets >= 4
	ItemLevel <= 68
	Rarity Rare
	SetFontSize 45
	SetBorderColor 0 140 240 255
	SetBackgroundColor 0 0 0 255
	PlayEffect Grey
	MinimapIcon 2 Grey Diamond
