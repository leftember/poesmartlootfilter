Hide # $type->hidelayer $tier->final
	Class "Body Armour" "Boots" "Bows" "Claws" "Daggers" "Gloves" "Helmets" "One Hand" "Quivers" "Rune Dagger" "Sceptre" "Shields" "Staves" "Two Hand" "Wand" "Warstaves"
	SetFontSize 18
	SetBorderColor 0 0 0 0
	SetBackgroundColor 0 0 0 0
	DisableDropSound True

Hide # $type->hidelayer $tier->final
	Class "Amulets" "Belts" "Jewel" "Rings" 
	SetFontSize 18
	SetBorderColor 0 0 0 0
	SetBackgroundColor 0 0 0 0
	DisableDropSound True


Hide # $type->hidelayer $tier->final
	Class "Flask" "Heist Brooch" "Heist Cloak" "Heist Gear" "Heist Tool" 
	SetFontSize 18
	SetBorderColor 0 0 0 0
	SetBackgroundColor 0 0 0 0
	DisableDropSound True


#------------------------------------
#   [4804] Show All unknown Section
#------------------------------------
# THIS ENTRY IS CAUGHT IN 3 CASES:
# 1) YOUR FILTER IS OUT OF DATE!
# 2) YOU DID SOMETHING SILLY WHEN EDITING THE FILTER
# 3) YOU ENCOUNTERED A PREVIOUSLY UNKNOWN UNIQUE

Show # $type->anyremaining $tier->restex
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBorderColor 255 0 255 255
	SetBackgroundColor 100 0 100 255
	PlayAlertSound 3 300
	PlayEffect Pink
	MinimapIcon 0 Pink Circle
