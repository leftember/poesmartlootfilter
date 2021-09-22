#------------------------------------
# [5103] Incursion - Vials
#------------------------------------
# !! Override 640 : "Vials, Delirium Orbs"

Show # $type->vials $tier->t1
    Class "Currency"
    BaseType "Vial of Consequence" "Vial of the Ghost" "Vial of Transcendence"
    SetFontSize 45
    SetTextColor 130 214 255 255
    SetBorderColor 130 214 255 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->vials $tier->t2
    Class "Currency"
    BaseType "Vial of Dominance" "Vial of Sacrifice" "Vial of Summoning"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Circle

Show # %H5 $type->vials $tier->t3
    Class "Currency"
    BaseType "Vial of Awakening" "Vial of Fate" "Vial of the Ritual"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Show # $type->vials $tier->restex
    Class "Currency"
    BaseType "Vial of"
    SetFontSize 45
    SetTextColor 255 0 255 255
    SetBorderColor 255 0 255 255
    SetBackgroundColor 100 0 100 255
    PlayAlertSound 3 300
    PlayEffect Pink
    MinimapIcon 0 Pink Circle

