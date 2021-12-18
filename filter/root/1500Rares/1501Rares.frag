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

Hide # %H2 $type->rare->exotic->talisman $tier->any. Sorry, Chris, but Talisman is pure shit.
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
