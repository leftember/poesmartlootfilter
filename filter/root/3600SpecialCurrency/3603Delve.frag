
#------------------------------------
#   [3602] Delve - Resonators
#------------------------------------
# !! Override 650 : "Resonators, Fossils"

Show # $type->currency->resonator $tier->t1
Class "Delve Stackable Socketable Currency"
BaseType == "Prime Alchemical Resonator" "Prime Chaotic Resonator"
SetFontSize 45
SetTextColor 255 255 255 255
SetBorderColor 255 255 255 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 1 300
PlayEffect Red
MinimapIcon 0 Red Circle

Show # %H5 $type->currency->resonator $tier->t2
Class "Delve Stackable Socketable Currency"
BaseType == "Potent Chaotic Resonator" "Powerful Chaotic Resonator" "Primitive Chaotic Resonator"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 2 300
PlayEffect White
MinimapIcon 2 White Circle

Show # %H4 $type->currency->resonator $tier->t3
Class "Delve Stackable Socketable Currency"
BaseType == "Potent Alchemical Resonator" "Powerful Alchemical Resonator" "Primitive Alchemical Resonator"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 61 156 136 255
PlayAlertSound 2 300
PlayEffect Grey
MinimapIcon 2 Grey Circle

Show # $type->currency->resonator $tier->restex
	Class "Delve Stackable Socketable Currency"
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBorderColor 255 0 255 255
	SetBackgroundColor 100 0 100 255
	PlayAlertSound 3 300
	PlayEffect Pink
	MinimapIcon 0 Pink Circle

#------------------------------------
#   [3603] Delve - Fossils
#------------------------------------

Show # $type->currency->fossil $tier->t1
Class "Currency"
BaseType == "Faceted Fossil"
SetFontSize 45
SetTextColor 130 214 255 255
SetBorderColor 130 214 255 255
SetBackgroundColor 255 255 255 255
PlayAlertSound 6 300
PlayEffect Red
MinimapIcon 0 Red Star

Show # $type->currency->fossil $tier->t2
Class "Currency"
BaseType == "Bloodstained Fossil" "Fractured Fossil" "Glyphic Fossil" "Hollow Fossil"
SetFontSize 45
SetTextColor 255 255 255 255
SetBorderColor 255 255 255 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 1 300
PlayEffect Red
MinimapIcon 0 Red Circle

Show # %H5 $type->currency->fossil $tier->t3
Class "Currency"
BaseType == "Aetheric Fossil" "Bound Fossil" "Corroded Fossil" "Dense Fossil" "Enchanted Fossil" "Gilded Fossil" "Perfect Fossil" "Prismatic Fossil" "Sanctified Fossil" "Serrated Fossil" "Shuddering Fossil" "Tangled Fossil"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 2 300
PlayEffect White
MinimapIcon 2 White Circle

Show # %H4 $type->currency->fossil $tier->t4
Class "Currency"
BaseType == "Aberrant Fossil" "Encrusted Fossil" "Frigid Fossil" "Jagged Fossil" "Lucent Fossil" "Metallic Fossil" "Pristine Fossil" "Scorched Fossil"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 61 156 136 255
PlayAlertSound 2 300
PlayEffect Grey
MinimapIcon 2 Grey Circle

Show # $type->currency->fossil $tier->restex
Class "Currency"
BaseType "Fossil"
SetFontSize 45
SetTextColor 255 0 255 255
SetBorderColor 255 0 255 255
SetBackgroundColor 100 0 100 255
PlayAlertSound 3 300
PlayEffect Pink
MinimapIcon 0 Pink Circle
