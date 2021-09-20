
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

Show # $type->currency->expedition->shards $tier->high
Class "Currency"
BaseType == "Grand Black Scythe Artifact" "Grand Broken Circle Artifact" "Grand Order Artifact" "Grand Sun Artifact"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 2 300
PlayEffect White
MinimapIcon 2 White Circle

Show # $type->currency->expedition->shards $tier->mid
Class "Currency"
BaseType == "Greater Black Scythe Artifact" "Greater Broken Circle Artifact" "Greater Order Artifact" "Greater Sun Artifact"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 2 300
PlayEffect White
MinimapIcon 2 White Circle

Show # $type->currency->expedition->shards $tier->low
Class "Currency"
BaseType == "Common Black Scythe Artifact" "Common Broken Circle Artifact" "Common Order Artifact" "Common Sun Artifact" "Lesser Black Scythe Artifact" "Lesser Broken Circle Artifact" "Lesser Order Artifact" "Lesser Sun Artifact"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 61 156 136 255
PlayAlertSound 2 300
PlayEffect Grey
MinimapIcon 2 Grey Circle

Show # $type->currency->expedition->shards $tier->restex
Class "Currency"
BaseType "Artifact"
SetFontSize 45
SetTextColor 255 0 255 255
SetBorderColor 255 0 255 255
SetBackgroundColor 100 0 100 255
PlayAlertSound 3 300
PlayEffect Pink
MinimapIcon 0 Pink Circle

