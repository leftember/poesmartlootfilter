#===============================================================================================================
# [[0900]] Recipes and 5links
#===============================================================================================================
# !! Override 120 : "5links and 6sockets"
#------------------------------------
# [1234] Link Based
#------------------------------------

Show # %D4 $type->socketslinks $tier->5linksleveling
	LinkedSockets >= 5
	AreaLevel <= 67
	Rarity <= Rare
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Yellow
	MinimapIcon 1 Yellow Diamond

Show # %D4 $type->socketslinks $tier->5link6sockets
	LinkedSockets >= 5
	Sockets >= 6
	Rarity <= Rare
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 112 106 255
	PlayAlertSound 2 300
	PlayEffect Blue
	MinimapIcon 2 Blue Hexagon

#Show # %D3 $type->socketslinks $tier->5links
#	LinkedSockets >= 5
#	AreaLevel >= 67
#	Rarity <= Rare
#	SetFontSize 45
#	SetBorderColor 0 240 190 255
#	PlayAlertSound 3 300
#	PlayEffect Blue
#	MinimapIcon 2 Blue Diamond

Show # %D4 $type->socketslinks $tier->6sockets
	Sockets >= 6
	Rarity <= Rare
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 0 112 106 255
	PlayAlertSound 2 300
	PlayEffect Grey
	MinimapIcon 2 Grey Hexagon
