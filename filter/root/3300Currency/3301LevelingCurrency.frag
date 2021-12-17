
#===============================================================================================================
# [[3400]] Currency - Exceptions - Leveling Currencies
#===============================================================================================================
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
