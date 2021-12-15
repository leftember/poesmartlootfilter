
#------------------------------------
#   [3605] Expedition Currencies
#------------------------------------
# !! Override 661 : "Expedition"

Show # $type->currency->expedition->reroll $tier->any
    Class "Currency"
    BaseType == "Astragali" "Burial Medallion" "Exotic Coinage" "Scrap Metal"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Circle
