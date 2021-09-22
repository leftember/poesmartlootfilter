#------------------------------------
#   [0503] Bestiary
#------------------------------------

Show # $type->exoticmods $tier->bestiaryvaluable
	Identified True
	Rarity Rare
	HasExplicitMod "of Farrul" "of Fenumus"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D4 $type->exoticmods $tier->bestiaryother
	Identified True
	Rarity Rare
	HasExplicitMod "of Craiceann" "of Saqawal"
	SetFontSize 45
	SetBorderColor 0 240 190 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 2 Blue Diamond
