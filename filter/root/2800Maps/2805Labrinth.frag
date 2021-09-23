#------------------------------------
#   [2902] Labyrinth items, Offerings
#------------------------------------
# !! Override 570 : "labyrinth offerings"

Show # %H4 $type->labyrinthofferings $tier->offerings
    BaseType "Offering to the Goddess"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 3 300
    PlayEffect White
    MinimapIcon 2 White Hexagon

Show # $type->labyrinthofferings $tier->offeringsupgraded
    BaseType "Dedication to the Goddess" "Gift to the Goddess" "Tribute to the Goddess"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 3 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Hexagon
