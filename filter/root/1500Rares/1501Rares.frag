#===============================================================================================================
# [[1500]] Rare Item Decorators
#===============================================================================================================

#===============================================================================================================
# [[1600]] Endgame - Rare - Exotic Corrupted Items
#===============================================================================================================
# !! Override 220 : "Talismans"

Hide # %H3 $type->rare->exotic->breachrings $tier->any
	ItemLevel >= 68
	Rarity Rare
	Class "Rings"
	BaseType "Breach"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBorderColor 0 240 190 255
	SetBackgroundColor 103 34 163 255

Show # %H2 $type->rare->exotic->talisman $tier->any. Sorry, Chris, but Talisman is pure shit. turning back on for oils.
	AnyEnchantment True
	ItemLevel >= 68
	Rarity Rare
	Class "Amulets"
	BaseType "Talisman"
	SetFontSize 40
	SetTextColor 0 0 0 255
	SetBorderColor 0 240 190 180
	SetBackgroundColor 103 34 163 255

#   don't show any normal rare. Only show special base is in 0301Heist^RitualBase.frag
#   Siege of the atlas items.
Show
    HasEaterOfWorldsImplicit [1-6]
    SetFontSize 45
    SetTextColor 50 130 165 255
    SetBorderColor 50 130 165 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Cross

Show
    HasSearingExarchImplicit [1-6]
    SetFontSize 45
    SetTextColor 50 130 165 255
    SetBorderColor 50 130 165 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Cross


