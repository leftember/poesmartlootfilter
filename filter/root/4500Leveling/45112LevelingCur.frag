# !! Override 620 : "Leveling Currency"

Show # %D4 $type->currency->leveling $tier->essences
AreaLevel <= 67
    Class "Currency"
    BaseType "Muttering Essence of" "Wailing Essence of" "Weeping Essence of" "Whispering Essence of"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 Grey Circle

Show # %D4 $type->currency->leveling $tier->trans
    AreaLevel <= 67
    Class "Currency"
    BaseType == "Blacksmith's Whetstone" "Orb of Transmutation"
    SetFontSize 45
    SetTextColor 190 178 135 255
    SetBorderColor 190 178 135 255
    SetBackgroundColor 0 0 0 255
    MinimapIcon 2 Grey Circle

Show # %D4 $type->currency->leveling $tier->aug
    AreaLevel <= 67
    Class "Currency"
    BaseType == "Armourer's Scrap" "Orb of Augmentation"
    SetFontSize 45
    SetTextColor 170 158 130 255
    SetBorderColor 170 158 130 255
    SetBackgroundColor 0 0 0 255
