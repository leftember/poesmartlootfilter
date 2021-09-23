#------------------------------------
#   [0201] Influenced Maps
#------------------------------------

Show # $type->maps->influenced $tier->infshaper
	HasInfluence Shaper
	Rarity <= Rare
	Class "Maps"
	SetFontSize 45
	SetTextColor 100 0 122 255
	SetBorderColor 100 0 122 255
	SetBackgroundColor 255 255 255 255
	PlayAlertSound 1 300
	PlayEffect Red
	MinimapIcon 0 Red Square

Show # $type->maps->influenced $tier->infelder
	HasInfluence Elder
	Rarity <= Rare
	Class "Maps"
	SetFontSize 45
	SetTextColor 100 0 122 255
	SetBorderColor 100 0 122 255
	SetBackgroundColor 255 255 255 255
	PlayAlertSound 1 300
	PlayEffect Red
	MinimapIcon 0 Red Square
