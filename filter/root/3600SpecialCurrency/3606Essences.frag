
#------------------------------------
#   [3606] Essences
#------------------------------------
# !! Override 670 : "Essences"

Show # $type->currency->essence $tier->t1
Class "Currency"
BaseType "Deafening Essence of" "Essence of Delirium" "Essence of Horror" "Essence of Hysteria" "Essence of Insanity"
SetFontSize 45
SetTextColor 255 255 255 255
SetBorderColor 255 255 255 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 1 300
PlayEffect Red
MinimapIcon 0 Red Circle

Show # $type->currency->essence $tier->t2
Class "Currency"
BaseType "Remnant of Corruption" "Shrieking Essence of"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 2 300
PlayEffect Yellow
MinimapIcon 1 Yellow Circle

Show # %H5 $type->currency->essence $tier->t3
Class "Currency"
BaseType "Screaming Essence of"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 2 300
PlayEffect White
MinimapIcon 2 White Circle

Hide # %H3 $type->currency->essence $tier->t4
	Class "Currency"
	BaseType "Wailing Essence of"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBorderColor 0 0 0 255
	SetBackgroundColor 61 156 136 255

Hide # %H2 $type->currency->essence $tier->t5
	Class "Currency"
	BaseType "Weeping Essence of"
	SetFontSize 45
	SetTextColor 190 178 135 255
	SetBorderColor 190 178 135 255
	SetBackgroundColor 0 0 0 255

Hide # %H1 $type->currency->essence $tier->t6
	Class "Currency"
	BaseType "Muttering Essence of" "Whispering Essence of"
	SetFontSize 45
	SetTextColor 190 178 135 255
	SetBorderColor 190 178 135 255
	SetBackgroundColor 0 0 0 255
