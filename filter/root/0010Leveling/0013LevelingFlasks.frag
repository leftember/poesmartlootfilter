# !! Override 810 : "All leveling rules incl. utility flasks"

Hide # $type->hidelayer $tier->outdatedlevelflaska
Quality 0
AreaLevel >= 15
Class "Life Flask" "Mana Flask"
BaseType "Large" "Medium" "Small"
SetFontSize 18
SetBorderColor 0 0 0 0
SetBackgroundColor 0 0 0 0
DisableDropSound True

Hide # $type->hidelayer $tier->outdatedlevelflaskb
Quality 0
AreaLevel >= 30
Class "Life Flask" "Mana Flask"
BaseType "Grand" "Greater"
SetFontSize 18
SetBorderColor 0 0 0 0
SetBackgroundColor 0 0 0 0
DisableDropSound True

Hide # $type->hidelayer $tier->outdatedlevelflaskc
Quality 0
AreaLevel >= 48
Class "Life Flask" "Mana Flask"
BaseType "Colossal" "Giant" "Sacred"
SetFontSize 18
SetBorderColor 0 0 0 0
SetBackgroundColor 0 0 0 0
DisableDropSound True

Hide # $type->hidelayer $tier->outdatedlevelflaskd
Quality 0
AreaLevel >= 60
Class "Life Flask" "Mana Flask"
BaseType "Hallowed" "Sanctified"
SetFontSize 18
SetBorderColor 0 0 0 0
SetBackgroundColor 0 0 0 0
DisableDropSound True

#===============================================================================================================
# [[4600]] Leveling - Flasks
#===============================================================================================================
#------------------------------------
# [6002] Utility Flasks
#------------------------------------

Show # $type->leveling->flasks->utility $tier->quicksilver
BaseType "Quicksilver Flask"
SetFontSize 45
SetTextColor 50 200 125
SetBorderColor 50 200 125
SetBackgroundColor 25 100 75
PlayAlertSound 2 300
PlayEffect Grey
MinimapIcon 1 Yellow Raindrop

Show # $type->leveling->flasks->utility $tier->asortedutility
BaseType "Aquamarine Flask" "Basalt Flask" "Diamond Flask" "Granite Flask" "Iron Flask" "Jade Flask" "Quartz Flask" "Quicksilver Flask" "Silver Flask" "Stibnite Flask" "Sulphur Flask"
SetFontSize 45
SetBorderColor 50 200 125
SetBackgroundColor 25 100 75
PlayEffect Grey Temp
MinimapIcon 2 Grey Raindrop

Hide # %H3 $type->leveling->flasks->utility $tier->any
	Class "Utility Flask"
	SetFontSize 40
	SetBorderColor 0 0 0 255
	SetBackgroundColor 25 100 75

#Show # %D3 $type->leveling->flasks->quality $tier->max
#	Quality >= 20
#	Class "Flask"
#	SetFontSize 45
#	SetTextColor 255 255 255 255
#	SetBorderColor 255 255 255 255
#	SetBackgroundColor 0 112 106 255
#	PlayEffect Grey Temp

#Show # %D2 $type->leveling->flasks->quality $tier->high
#	Quality >= 15
#	Class "Flask"
#	SetFontSize 40
#	SetTextColor 0 0 0 255
#	SetBorderColor 200 200 200 255
#	SetBackgroundColor 73 92 91 255

#Show # %D1 $type->leveling->flasks->quality $tier->any
#	Quality >= 1
#	Class "Flask"
#	SetFontSize 35
#	SetTextColor 0 0 0 255
#	SetBorderColor 0 0 0 255
#	SetBackgroundColor 73 92 91 255

#------------------------------------
#   [4601] Hybrid flasks
#------------------------------------
# !! Override 820 : "leveling life and mana flasks"

Hide # %H2 $type->leveling->flasks->hybrid $tier->t1
	AreaLevel <= 20
	Class "Hybrid Flask"
	BaseType "Small"
	SetFontSize 40
	SetBorderColor 100 0 100

Hide # %H2 $type->leveling->flasks->hybrid $tier->t2
	AreaLevel <= 30
	Class "Hybrid Flask"
	BaseType "Medium"
	SetFontSize 40
	SetBorderColor 100 0 100

Hide # %H2 $type->leveling->flasks->hybrid $tier->t3
	AreaLevel <= 40
	Class "Hybrid Flask"
	BaseType "Large"
	SetFontSize 40
	SetBorderColor 100 0 100

Hide # %H2 $type->leveling->flasks->hybrid $tier->t4
	AreaLevel <= 50
	Class "Hybrid Flask"
	BaseType "Colossal"
	SetFontSize 40
	SetBorderColor 100 0 100

Hide # %H2 $type->leveling->flasks->hybrid $tier->t5
	AreaLevel <= 60
	Class "Hybrid Flask"
	BaseType "Sacred"
	SetFontSize 40
	SetBorderColor 100 0 100

Hide # %H2 $type->leveling->flasks->hybrid $tier->t6
	AreaLevel <= 67
	Class "Hybrid Flask"
	BaseType "Hallowed"
	SetFontSize 40
	SetBorderColor 100 0 100

#------------------------------------
#   [4602] Life flasks
#------------------------------------

Show # $type->leveling->flasks->life $tier->t1
AreaLevel <= 5
Class "Life Flask"
BaseType "Small"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t2
AreaLevel <= 8
Class "Life Flask"
BaseType "Medium"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t3
AreaLevel <= 13
Class "Life Flask"
BaseType "Large"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t4
AreaLevel <= 19
Class "Life Flask"
BaseType "Greater"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t5
AreaLevel <= 25
Class "Life Flask"
BaseType "Grand"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t6
AreaLevel <= 31
Class "Life Flask"
BaseType "Giant"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t7
AreaLevel <= 37
Class "Life Flask"
BaseType "Colossal"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t8
AreaLevel <= 43
Class "Life Flask"
BaseType "Sacred"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t9
AreaLevel <= 51
Class "Life Flask"
BaseType "Hallowed"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t10
AreaLevel <= 60
Class "Life Flask"
BaseType "Sanctified"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t11
AreaLevel <= 68
Class "Life Flask"
BaseType "Divine"
SetFontSize 40
SetBorderColor 120 0 0

Show # $type->leveling->flasks->life $tier->t12
AreaLevel <= 68
Class "Life Flask"
BaseType "Eternal"
SetFontSize 40
SetBorderColor 120 0 0

#------------------------------------
#   [4603] Mana flasks
#------------------------------------

Show # $type->leveling->flasks->mana $tier->t1
AreaLevel <= 5
Class "Mana Flask"
BaseType "Small"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t2
AreaLevel <= 8
Class "Mana Flask"
BaseType "Medium"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t3
AreaLevel <= 13
Class "Mana Flask"
BaseType "Large"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t4
AreaLevel <= 19
Class "Mana Flask"
BaseType "Greater"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t5
AreaLevel <= 25
Class "Mana Flask"
BaseType "Grand"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t6
AreaLevel <= 31
Class "Mana Flask"
BaseType "Giant"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t7
AreaLevel <= 37
Class "Mana Flask"
BaseType "Colossal"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t8
AreaLevel <= 43
Class "Mana Flask"
BaseType "Sacred"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t9
AreaLevel <= 51
Class "Mana Flask"
BaseType "Hallowed"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t10
AreaLevel <= 60
Class "Mana Flask"
BaseType "Sanctified"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t11
AreaLevel <= 68
Class "Mana Flask"
BaseType "Divine"
SetFontSize 40
SetBorderColor 0 0 120

Show # $type->leveling->flasks->mana $tier->t12
AreaLevel <= 68
Class "Mana Flask"
BaseType "Eternal"
SetFontSize 40
SetBorderColor 0 0 120
