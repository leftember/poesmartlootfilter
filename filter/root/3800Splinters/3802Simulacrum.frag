
#------------------------------------
#   [3801] Simulacrum Splinters
#------------------------------------

Show # $type->currency->splinter->simulacrum $tier->t1
StackSize >= 100
Class "Currency"
BaseType "Simulacrum Splinter"
SetFontSize 45
SetTextColor 130 214 255 255
SetBorderColor 130 214 255 255
SetBackgroundColor 255 255 255 255
PlayAlertSound 6 300
PlayEffect Red
MinimapIcon 0 Red Kite

Show # $type->currency->splinter->simulacrum $tier->t2
StackSize >= 30
Class "Currency"
BaseType "Simulacrum Splinter"
SetFontSize 45
SetTextColor 255 255 255 255
SetBorderColor 255 255 255 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 1 300
PlayEffect Red
MinimapIcon 0 Red Kite

Show # $type->currency->splinter->simulacrum $tier->t3
StackSize >= 12
Class "Currency"
BaseType "Simulacrum Splinter"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 2 300
PlayEffect Yellow
MinimapIcon 1 Yellow Kite

Show # $type->currency->splinter->simulacrum $tier->t4
StackSize >= 3
Class "Currency"
BaseType "Simulacrum Splinter"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 130 214 255 255
PlayAlertSound 2 300
PlayEffect White
MinimapIcon 2 White Kite

Show # %H5 $type->currency->splinter->simulacrum $tier->t5
Class "Currency"
BaseType "Simulacrum Splinter"
SetFontSize 45
SetTextColor 255 255 255 255
SetBorderColor 130 15 255 255
SetBackgroundColor 65 20 80
PlayAlertSound 2 300
PlayEffect Purple Temp
MinimapIcon 2 Grey Kite
