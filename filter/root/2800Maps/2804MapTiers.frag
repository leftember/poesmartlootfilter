
#===============================================================================================================
# [[2900]] Normal Map Progression
#===============================================================================================================

#------------------------------------
#   [2901] Map progression
#------------------------------------
# !! Override 541 : "T11-T16 maps"

Show # $type->maps $tier->maps_a_t16
	MapTier >= 16
	Class "Maps"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 235 235 235 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Red Square

Show # $type->maps $tier->maps_a_t14
    #AreaLevel < 83
	MapTier >= 14
	Class "Maps"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 235 235 235 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Red Square

Show # %H5 $type->maps $tier->maps_b_t13
    AreaLevel < 80
	MapTier >= 11
	Class "Maps"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 200 200 200 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Red Square

Show # %H4 $type->maps $tier->maps_c_t6
    AreaLevel < 75
	MapTier >= 6
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 1 Yellow Square

Show # %H4 $type->maps $tier->maps_d_t4
    AreaLevel < 70
	MapTier >= 1
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 2 White Square

Show # %H4 $type->maps $tier->maps_d_t2
	MapTier >= 1
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255

