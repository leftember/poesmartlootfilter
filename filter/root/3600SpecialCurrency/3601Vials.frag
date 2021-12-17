#------------------------------------
# [5103] Incursion - Vials
#------------------------------------
# !! Override 640 : "Vials, Delirium Orbs"

Show # $type->vials $tier->t1
    Class "Currency"
    BaseType "Vial of Consequence" "Vial of the Ghost" "Vial of Transcendence" "Vial of Summoning"
    SetFontSize 45
    SetTextColor 130 214 255 255
    SetBorderColor 130 214 255 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->vials $tier->t2 the remaining, no need to tier more.
    Class "Currency"
    BaseType "Vial of" 
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Circle
