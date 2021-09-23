# !! Override 690 : "Harbinger Scrolls"

Show # $type->currency->others $tier->harbinger
    Class "Currency"
    BaseType == "Deregulation Scroll" "Electroshock Scroll" "Fragmentation Scroll" "Haemocombustion Scroll" "Specularity Scroll" "Time-light Scroll"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Circle

Show # $type->currency->others $tier->misc
    Class "Currency"
    BaseType "Imprint" "Unshaping Orb"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Circle
