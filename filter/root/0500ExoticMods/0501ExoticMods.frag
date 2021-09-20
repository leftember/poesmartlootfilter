#===============================================================================================================
# [[0500]] Exotic Mods Filtering
#===============================================================================================================

#------------------------------------
#   [0501] Veiled/Betrayal
#------------------------------------
# !! Override 050 : "veil, incursion, delve etc. mod items"

Show # %HS5 $type->exoticmods $tier->t1veil
	Identified True
	Rarity Rare
	HasExplicitMod "Catarina's Veiled" "Elreon's Veiled" "Leo's Veiled" "Rin's Veiled" "Vagan's Veiled" "Vorici's Veiled"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 75 30 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 0 Blue Diamond

Show # %HS5 $type->exoticmods $tier->t2veil
	Identified True
	Rarity Rare
	HasExplicitMod "Gravicius' Veiled" "Guff's Veiled" "Haku's" "It That Fled's Veiled" "Korell's Veiled" "of Aisling's Veil" "of Cameria's Veil" "of Hillock's Veil" "of Janus' Veil" "of Jorgin's Veil" "Riker" "Tora's Veiled"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D5 $type->exoticmods $tier->duoveil
	Identified True
	Rarity Rare
	HasExplicitMod "Veiled"
	HasExplicitMod "of the Veil"
	SetFontSize 45
	SetBorderColor 0 240 190 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 2 Blue Diamond

Show # %D5 $type->exoticmods $tier->smallveil1
	Identified True
	Width <= 2
	Height <= 2
	Rarity Rare
	HasExplicitMod "Veil"
	SetFontSize 45
	SetBorderColor 0 240 190 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 2 Blue Diamond

Show # %D5 $type->exoticmods $tier->smallveil2
	Identified True
	Width <= 1
	Height <= 4
	Rarity Rare
	HasExplicitMod "Veil"
	SetFontSize 45
	SetBorderColor 0 240 190 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 2 Blue Diamond

Show # %D4 $type->exoticmods $tier->veilrest
	Identified True
	Rarity Rare
	HasExplicitMod "Veil"
	SetFontSize 40
	SetBorderColor 0 240 190 180
	PlayEffect Blue Temp

#------------------------------------
#   [0502] Incursion/Temple Mods
#------------------------------------

Show # $type->exoticmods $tier->incursionspeedtraps
	Identified True
	Rarity Rare
	Class "Boots"
	HasExplicitMod "Matatl's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D4 $type->exoticmods $tier->incursionlifechest
	Identified True
	Rarity Rare
	Class "Body Armours"
	HasExplicitMod "Guatelitzi's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D4 $type->exoticmods $tier->incursionsumonner
	Identified True
	Rarity Rare
	Class "Claws" "Daggers" "One Hand" "Sceptres" "Staves" "Wands"
	HasExplicitMod "Citaqualotl's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D5 $type->exoticmods $tier->incursioncaster
	Identified True
	Rarity Rare
	Class "Rune Dagger" "Sceptres" "Shields" "Staves" "Wands"
	HasExplicitMod "Matatl's" "Tacati" "Topotante's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D5 $type->exoticmods $tier->incursionelemental
	Identified True
	Rarity Rare
	Class "Bows" "Claws" "Daggers" "Thrusting"
	HasExplicitMod "Topotante's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D5 $type->exoticmods $tier->incursionattack
	Identified True
	Rarity Rare
	Class "Bows" "Claws" "Daggers" "One Hand" "Two Hand" "Warstaves"
	HasExplicitMod "of Tacati" "Tacati's"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # $type->exoticmods $tier->incursionglovehelm
	Identified True
	Rarity Rare
	Class "Gloves" "Helmets"
	HasExplicitMod "Puhuarte" "Topotante"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D5 $type->exoticmods $tier->incursionjwlry
	Identified True
	Rarity Rare
	Class "Amulets" "Belts" "Rings"
	HasExplicitMod "Citaqualotl" "Guatelitzi" "Matatl" "Puhuarte" "Tacati" "Topotante" "Xopec"
	SetFontSize 45
	SetTextColor 0 240 190 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 1 Blue Diamond

Show # %D4 $type->exoticmods $tier->incursionmagic
	Identified True
	Rarity Magic
	HasExplicitMod "Citaqualotl" "Guatelitzi" "Matatl" "Puhuarte" "Tacati" "Topotante" "Xopec"
	SetFontSize 45
	SetBorderColor 0 240 190 255
	PlayAlertSound 3 300
	PlayEffect Blue
	MinimapIcon 2 Blue Diamond

#Show # %D3 $type->exoticmods $tier->incursionrandom
#	Identified True
#	Rarity Rare
#	HasExplicitMod "Citaqualotl" "Guatelitzi" "Matatl" "Puhuarte" "Tacati" "Topotante" "Xopec"
#	SetFontSize 45
#	SetBorderColor 0 240 190 255
#	PlayAlertSound 3 300
#	PlayEffect Blue
#	MinimapIcon 2 Blue Diamond

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

#------------------------------------
#   [0504] Other
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

#Show # %D2 $type->exoticmods $tier->crafting
#	Identified True
#	Rarity Rare
#	HasExplicitMod "of Crafting" "of Spellcraft" "of Weaponcraft"
#	SetFontSize 40
#	SetBorderColor 0 240 190 180
#	PlayEffect Blue Temp
