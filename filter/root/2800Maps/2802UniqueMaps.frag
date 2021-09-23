
#------------------------------------
#   [2801] Unique Maps
#------------------------------------

Show # $type->uniques->maps $tier->ex
    MapTier 16
    Rarity Unique
    Class "Maps"
    BaseType "Harbinger Map"
    SetFontSize 45
    SetTextColor 175 96 37 255
    SetBorderColor 175 96 37 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->uniques->maps $tier->t1
    Rarity Unique
    Class "Maps"
    BaseType "Basilica Map" "Chateau Map" "Courthouse Map" "Courtyard Map" "Maze Map" "Park Map" "Relic Chambers Map" "Siege Map"
    SetFontSize 45
    SetTextColor 175 96 37 255
    SetBorderColor 175 96 37 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->uniques->maps $tier->t2
    Rarity Unique
    Class "Maps"
    BaseType "Cursed Crypt Map" "Harbinger Map" "Museum Map"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 230 186 55 255
    PlayAlertSound 1 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Star

Show # %H5 $type->uniques->maps $tier->t3
    Rarity Unique
    Class "Maps"
    BaseType "Cemetery Map" "Moon Temple Map" "Necropolis Map" "Primordial Blocks Map" "Promenade Map" "Shore Map" "Temple Map" "Underground River Map"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 175 96 37 255
    PlayAlertSound 3 300
    PlayEffect Brown
    MinimapIcon 1 Brown Star

Show # %H4 $type->uniques->maps $tier->t4
    Rarity Unique
    Class "Maps"
    BaseType "Atoll Map" "Bone Crypt Map" "Dunes Map" "Overgrown Shrine Map" "Strand Map" "Underground Sea Map" "Vaal Pyramid Map"
    SetFontSize 45
    SetTextColor 175 96 37 255
    SetBorderColor 175 96 37 255
    SetBackgroundColor 0 0 0 255
    PlayAlertSound 3 300
    PlayEffect Brown
    MinimapIcon 2 Brown Star

Show # $type->uniques->maps $tier->restex
	Rarity Unique
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBorderColor 255 0 255 255
	SetBackgroundColor 100 0 100 255
	PlayAlertSound 3 300
	PlayEffect Pink
	MinimapIcon 0 Pink Circle

