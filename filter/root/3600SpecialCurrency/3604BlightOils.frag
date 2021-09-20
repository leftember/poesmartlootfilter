
#------------------------------------
#   [3604] Blight - Oils
#------------------------------------
# !! Override 660 : "Blight Oils"

Show # $type->currency->oil $tier->t1
Class "Currency"
BaseType == "Tainted Oil"
SetFontSize 45
SetTextColor 130 214 255 255
SetBorderColor 130 214 255 255
SetBackgroundColor 255 255 255 255
PlayAlertSound 6 300
PlayEffect Red
MinimapIcon 0 Red Star

Show # $type->currency->oil $tier->t2
Class "Currency"
BaseType == "Golden Oil" "Opalescent Oil" "Silver Oil"
SetFontSize 45
SetTextColor 255 255 255 255
SetBorderColor 255 255 255 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 1 300
PlayEffect Red
MinimapIcon 0 Red Circle

Show # %H5 $type->currency->oil $tier->t3
Class "Currency"
BaseType == "Black Oil" "Crimson Oil" "Teal Oil"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 2 300
PlayEffect White
MinimapIcon 2 White Circle

Hide # %H3 $type->currency->oil $tier->t4
	Class "Currency"
	BaseType == "Amber Oil" "Azure Oil" "Clear Oil" "Indigo Oil" "Sepia Oil" "Verdant Oil" "Violet Oil"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBorderColor 0 0 0 255
	SetBackgroundColor 61 156 136 255

Show # $type->currency->oil $tier->restex
Class "Currency"
BaseType "Oil"
SetFontSize 45
SetTextColor 255 0 255 255
SetBorderColor 255 0 255 255
SetBackgroundColor 100 0 100 255
PlayAlertSound 3 300
PlayEffect Pink
MinimapIcon 0 Pink Circle

