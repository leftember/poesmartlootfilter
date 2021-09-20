
#------------------------------------
#   [4202] Tier 1 uniques
#------------------------------------

Show # $type->uniques $tier->t1
Rarity Unique
BaseType == "Blood Raiment" "Crusader Boots" "Crusader Helmet" "Deerskin Gloves" "Fluted Bascinet" "Greatwolf Talisman" "Jewelled Foil" "Large Cluster Jewel" "Ornate Quiver" "Prismatic Jewel" "Rawhide Boots" "Sapphire Flask" "Savant's Robe" "Siege Axe" "Silk Gloves" "Timeless Jewel" "Vaal Rapier" "Wyrmscale Doublet"
SetFontSize 45
SetTextColor 175 96 37 255
SetBorderColor 175 96 37 255
SetBackgroundColor 255 255 255 255
PlayAlertSound 6 300
PlayEffect Red
MinimapIcon 0 Red Star

#------------------------------------
#   [4203] Exceptions #2
#------------------------------------

Show # $type->uniques $tier->2xcorrupteduniques
	Corrupted True
	CorruptedMods >= 2
	Rarity Unique
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 230 186 55 255
	PlayAlertSound 1 300
	PlayEffect Red
	MinimapIcon 0 Yellow Star

Show # $type->uniques $tier->2xabyss
	Sockets >= AA
	Rarity Unique
	Class "Boots" "Gloves" "Helmets"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 230 186 55 255
	PlayAlertSound 1 300
	PlayEffect Red
	MinimapIcon 0 Yellow Star

Show # %D4 $type->uniques $tier->5link
	LinkedSockets 5
	Rarity Unique
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 230 186 55 255
	PlayAlertSound 1 300
	PlayEffect Red
	MinimapIcon 0 Yellow Star

