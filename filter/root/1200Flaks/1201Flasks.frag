
#===============================================================================================================
# [[1200]] Endgame Flasks
#===============================================================================================================

#------------------------------------
#   [1201] High quality assorted flasks
#------------------------------------

Show # %D3 $type->endgameflasks $tier->highqualutility
	Quality >= 15
	AreaLevel >= 68
	AreaLevel <= 77
	Rarity <= Magic
	BaseType "Aquamarine Flask" "Basalt Flask" "Diamond Flask" "Granite Flask" "Iron Flask" "Jade Flask" "Quartz Flask" "Quicksilver Flask" "Silver Flask" "Stibnite Flask" "Sulphur Flask"
	SetFontSize 45
	SetTextColor 50 200 125
	SetBorderColor 50 200 125
	SetBackgroundColor 25 100 75
	PlayAlertSound 3 300
	PlayEffect Grey
	MinimapIcon 2 Grey Circle

Show # %D2 $type->endgameflasks $tier->earlymappinglifemana
	AreaLevel >= 80	
	SetFontSize 45
	Class "Utility Flasks"
	BaseType "Amethyst Flask" "Ruby Flask" "Sapphire Flask" "Topaz Flask"
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 0 112 106 255
	PlayAlertSound 2 300
	PlayEffect Grey
	MinimapIcon 2 Grey Hexagon

#------------------------------------
#   [1202] Utility OR quality flasks
#------------------------------------

#Show # %D2 $type->endgameflasks $tier->asortedutility
#	AreaLevel >= 68
#	AreaLevel <= 77
#	Rarity <= Magic
#	BaseType "Aquamarine Flask" "Basalt Flask" "Diamond Flask" "Granite Flask" "Iron Flask" "Jade Flask" "Quartz Flask" "Quicksilver Flask" "Silver Flask" "Stibnite Flask" "Sulphur Flask"
#	SetFontSize 40
#	SetBorderColor 50 200 125
#	SetBackgroundColor 25 100 75
#	PlayEffect Grey Temp

#Show # %D2 $type->endgameflasks $tier->anyutility
#	AreaLevel >= 68
#	AreaLevel <= 72
#	Rarity <= Magic
#	Class "Utility Flasks"
#	SetFontSize 40
#	SetBorderColor 0 0 0 255
#	SetBackgroundColor 25 100 75

#Show # %D2 $type->endgameflasks $tier->qualityhigh
#	Quality >= 15
#	AreaLevel >= 68
#	AreaLevel <= 77
#	Rarity <= Magic
#	BaseType "Flask"
#	SetFontSize 40
#	SetTextColor 0 0 0 255
#	SetBorderColor 200 200 200 255
#	SetBackgroundColor 73 92 91 255

#Show # %D1 $type->endgameflasks $tier->qualitylow
#	Quality >= 1
#	AreaLevel >= 68
#	AreaLevel <= 77
#	Rarity <= Magic
#	BaseType "Flask"
#	SetFontSize 35
#	SetTextColor 0 0 0 255
#	SetBorderColor 0 0 0 255
#	SetBackgroundColor 73 92 91 255

#------------------------------------
#   [1203] Early mapping life/mana/utility flasks
#------------------------------------

#Show # %D2 $type->endgameflasks $tier->earlymappinglifemana
#	AreaLevel >= 68
#	AreaLevel <= 69
#	Rarity <= Magic
#	BaseType "Divine Life Flask" "Divine Mana Flask" "Eternal Life Flask" "Eternal Mana Flask" "Hallowed Hybrid Flask"
#	SetBorderColor 100 100 100 150
#	SetBackgroundColor 0 0 0 180
