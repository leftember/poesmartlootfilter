
#===============================================================================================================
# [[3700]] Currency - Prophecies
#===============================================================================================================
# !! Chapter "Currencylike item tierlists 2"
# !! Override 710 : "Prophecies
# RIP Navali!

Show # $type->currency $tier->t2divine
    Class "Currency"
    BaseType = "Lesser" "Greater" "Grand"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Circle

Show # $type->currency $tier->t2divine
    Class "Currency"
    BaseType = "Explorer's Scouting Report"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Circle

Show # $type->currency $tier->t1exalted
    Class "Currency"
    BaseType = "Exceptional" "Compass" "Conflict" "Dominance" "Eldritch" "Scouting" "Oil Extractor"
    SetFontSize 45
    SetTextColor 130 214 255 255
    SetBorderColor 130 214 255 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

