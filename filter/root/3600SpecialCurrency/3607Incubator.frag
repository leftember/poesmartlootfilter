
#------------------------------------
#   [3607] Incubators
#------------------------------------

Show # %H5 $type->currency->incubators $tier->leveledex
    ItemLevel >= 81
    Class "Incubator"
    BaseType == "Blighted Incubator" "Cartographer's Incubator" "Celestial Armoursmith's Incubator" "Celestial Blacksmith's Incubator" "Celestial Jeweller's Incubator" "Enchanted Incubator" "Fragmented Incubator" "Otherworldly Incubator"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Show # $type->currency->incubators $tier->t2
    Class "Incubator"
    BaseType == "Geomancer's Incubator" "Time-Lost Incubator" "Kalguuran Incubator"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Circle

Show # %H5 $type->currency->incubators $tier->t3
    Class "Incubator"
    BaseType == "Blighted Incubator" "Cartographer's Incubator" "Diviner's Incubator"  "Foreboding Incubator" "Fossilised Incubator" "Gemcutter's Incubator" "Infused Incubator" "Maddening Incubator" "Morphing Incubator" "Obscured Incubator" "Ornate Incubator" "Otherworldly Incubator" "Singular Incubator" "Skittering Incubator" "Thaumaturge's Incubator" "Fine Incubator" "Fragmented Incubator"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Hide # %H4 $type->currency->incubators $tier->t4
    Class "Incubator"
    BaseType == "Celestial Armoursmith's Incubator" "Celestial Blacksmith's Incubator" "Celestial Jeweller's Incubator"  "Mysterious Incubator" "Primal Incubator" "Whispering Incubator" "Abyssal Incubator" "Enchanted Incubator"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 61 156 136 255
    PlayAlertSound 2 300
    PlayEffect Grey
    MinimapIcon 2 Grey Circle

Show # $type->currency->incubators $tier->restex
	Class "Incubator"
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBorderColor 255 0 255 255
	SetBackgroundColor 100 0 100 255
	PlayAlertSound 3 300
	PlayEffect Pink
	MinimapIcon 0 Pink Circle
