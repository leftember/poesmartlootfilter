#------------------------------------
# [5112] Breach and Legion Splinters
#------------------------------------
# !! Override 720 : "Breach and Simulacrum Splinters"

Show # %H5 $type->currency->splinter $tier->t1
Class "Currency"
BaseType == "Splinter of Chayula" "Timeless Maraketh Splinter" "Timeless Templar Splinter" "Timeless Vaal Splinter"
SetFontSize 45
SetTextColor 255 255 255 255
SetBorderColor 210 20 210 255
SetBackgroundColor 65 20 80
PlayAlertSound 2 300
PlayEffect Purple Temp
MinimapIcon 1 Grey Kite

Show # %HS4 $type->currency->splinter $tier->t2
Class "Currency"
BaseType == "Timeless Eternal Empire Splinter" "Timeless Karui Splinter"
SetFontSize 45
SetTextColor 255 255 255 255
SetBorderColor 130 15 255 255
SetBackgroundColor 65 20 80
PlayAlertSound 2 300
PlayEffect Purple Temp
MinimapIcon 2 Grey Kite

Show # %HS3 $type->currency->splinter $tier->t3
Class "Currency"
BaseType == "Splinter of Esh" "Splinter of Tul" "Splinter of Uul-Netol" "Splinter of Xoph"
SetFontSize 40
SetTextColor 255 255 255 255
SetBorderColor 115 115 115 255
SetBackgroundColor 65 20 80
