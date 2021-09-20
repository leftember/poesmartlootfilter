
#===============================================================================================================
# [[2900]] Normal Map Progression
#===============================================================================================================
#------------------------------------
# [4403] Generic Decorators
#------------------------------------
# !! Override 540 : "Map decorators"

Show # $type->maps $tier->deco_zone1general
	MapTier >= 14
	Class "Maps"
	SetBorderColor 0 0 0 255
	Continue

Show # $type->maps $tier->deco_zone2general
	MapTier >= 11
	MapTier <= 13
	Class "Maps"
	SetBorderColor 0 0 0 255
	Continue

Show # $type->maps $tier->deco_zone3general
	MapTier >= 6
	MapTier <= 10
	Class "Maps"
	SetBorderColor 200 200 200 255
	Continue

Show # $type->maps $tier->deco_zone4general
	MapTier >= 1
	MapTier <= 5
	Class "Maps"
	SetBorderColor 200 200 200 255
	Continue

#------------------------------------
#   [2901] Map progression
#------------------------------------
# !! Override 541 : "T11-T16 maps"

Show # $type->maps $tier->deco_mapup_t16
	MapTier >= 16
	AreaLevel < 83
	Class "Maps"
	SetBorderColor 220 50 0 255
	Continue

Show # $type->maps $tier->maps_a_t16
	MapTier >= 16
	Class "Maps"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 235 235 235 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Red Square

Show # $type->maps $tier->deco_mapup_t15
	MapTier >= 15
	AreaLevel < 82
	Class "Maps"
	SetBorderColor 220 50 0 255
	Continue

Show # $type->maps $tier->maps_a_t15
	MapTier 15
	Class "Maps"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 235 235 235 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Red Square

Show # $type->maps $tier->deco_mapup_t14
	MapTier >= 14
	AreaLevel < 81
	Class "Maps"
	SetBorderColor 220 50 0 255
	Continue

Show # $type->maps $tier->maps_a_t14
	MapTier 14
	Class "Maps"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 235 235 235 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Red Square

Show # %D4 $type->maps $tier->deco_mapup_t13
	MapTier >= 13
	AreaLevel < 80
	Class "Maps"
	SetBorderColor 220 50 0 255
	Continue

Show # %H5 $type->maps $tier->maps_b_t13
	MapTier 13
	Class "Maps"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 200 200 200 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Red Square

Show # %D4 $type->maps $tier->deco_mapup_t12
	MapTier >= 12
	AreaLevel < 79
	Class "Maps"
	SetBorderColor 220 50 0 255
	Continue

Show # %H5 $type->maps $tier->maps_b_t12
	MapTier 12
	Class "Maps"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 200 200 200 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Red Square

Show # %D4 $type->maps $tier->deco_mapup_t11
	MapTier >= 11
	AreaLevel < 78
	Class "Maps"
	SetBorderColor 220 50 0 255
	Continue

Show # %H5 $type->maps $tier->maps_b_t11
	MapTier 11
	Class "Maps"
	SetFontSize 45
	SetTextColor 0 0 0 255
	SetBackgroundColor 200 200 200 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Red Square

# !! Override 550 : "T16-T10 maps"

#Show # %D3 $type->maps $tier->deco_mapup_t10
#	MapTier >= 10
#	AreaLevel < 77
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_c_t10
	MapTier 10
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 1 Yellow Square

#Show # %D3 $type->maps $tier->deco_mapup_t9
#	MapTier >= 9
#	AreaLevel < 76
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_c_t9
	MapTier 9
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 1 Yellow Square

#Show # %D3 $type->maps $tier->deco_mapup_t8
#	MapTier >= 8
#	AreaLevel < 75
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_c_t8
	MapTier 8
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 1 Yellow Square

#Show # %D3 $type->maps $tier->deco_mapup_t7
#	MapTier >= 7
#	AreaLevel < 74
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_c_t7
	MapTier 7
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 1 Yellow Square

#Show # %D3 $type->maps $tier->deco_mapup_t6
#	MapTier >= 6
#	AreaLevel < 73
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_c_t6
	MapTier 6
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 1 Yellow Square

# !! Override 560 : "T1-T5 maps"

#Show # %D3 $type->maps $tier->deco_mapup_t5
#	MapTier >= 5
#	AreaLevel < 72
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_d_t5
	MapTier 5
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 2 White Square

#Show # %D3 $type->maps $tier->deco_mapup_t4
#	MapTier >= 4
#	AreaLevel < 71
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_d_t4
	MapTier 4
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 2 White Square

#Show # %D3 $type->maps $tier->deco_mapup_t3
#	MapTier >= 3
#	AreaLevel < 70
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_d_t3
	MapTier 3
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 2 White Square

#Show # %D3 $type->maps $tier->deco_mapup_t2
#	MapTier >= 2
#	AreaLevel < 69
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_d_t2
	MapTier 2
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 2 White Square

#Show # %D3 $type->maps $tier->deco_mapup_t1
#	MapTier >= 1
#	AreaLevel < 68
#	Class "Maps"
#	SetBorderColor 220 50 0 255
#	Continue

Show # %H4 $type->maps $tier->maps_d_t1
	MapTier 1
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 2 White Square

Show # $type->maps $tier->restex
	Class "Maps"
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBorderColor 255 0 255 255
	SetBackgroundColor 100 0 100 255
	PlayAlertSound 3 300
	PlayEffect Pink
	MinimapIcon 0 Pink Circle

