#===============================================================================================================
# [[0900]] 6L 6S 5L etc.
#===============================================================================================================

Show # $type->6l $tier->arm
	Corrupted False
	LinkedSockets 6
	Rarity <= Rare
	Class "Body Armours"
	SetFontSize 45
	SetTextColor 200 0 0 255
	SetBorderColor 200 0 0 255
	SetBackgroundColor 255 255 255 255
	PlayAlertSound 6 300
	PlayEffect Red
	MinimapIcon 0 Red Star

Show # $type->6l $tier->wep
	LinkedSockets 6
	Rarity <= Rare
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 200 0 0 255
	PlayAlertSound 1 300
	PlayEffect Red
	MinimapIcon 0 Red Diamond

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
#	PlayAlertSound 2 300
#	PlayEffect Blue
#	MinimapIcon 2 Blue Hexagon
#
Show # %D4 $type->socketslinks $tier->6sockets
	Sockets >= 6
	# Rarity <= Rare # show uniques as well, as it is not defined in unique lists. Will hide trash uniques if not 6s.
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 0 112 106 255
#	PlayAlertSound 2 300
#	PlayEffect Grey
#	MinimapIcon 2 Grey Hexagon
