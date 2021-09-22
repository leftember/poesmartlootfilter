# !! Override 740 : "Remaining Currency" -- catch miss segment

Hide # $type->currency $tier->scrollfragments
    Class "Currency"
    BaseType "Scroll Fragment"
    SetFontSize 35
    SetBorderColor 0 0 0

Show # $type->currency $tier->restex
	Class "Currency"
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBorderColor 255 0 255 255
	SetBackgroundColor 100 0 100 255
	PlayAlertSound 3 300
	PlayEffect Pink
	MinimapIcon 0 Pink Circle
