#===============================================================================================================
# [[0500]] Exotic Mods Filtering
#===============================================================================================================
#------------------------------------
#   [0504] Other Delve, Warband, Essence
#------------------------------------

Show # $type->exoticmods $tier->delve
	Identified True
	Rarity Rare
	HasExplicitMod "of the Underground" "Subterranean"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D4 $type->exoticmods $tier->warband
	Identified True
	Rarity Rare
	HasExplicitMod "Betrayer's" "Brinerot" "Deceiver's" "Mutewind" "Redblade" "Turncoat's"
	SetFontSize 45
	SetBorderColor 0 240 190 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 2 Blue Diamond

Show # $type->exoticmods $tier->essence
	Identified True
	Rarity Rare
	HasExplicitMod "of the Essence"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond
	PlayEffect Blue Temp
