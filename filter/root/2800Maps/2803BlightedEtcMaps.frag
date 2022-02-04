
#------------------------------------
#   [2802] Blighted maps
#------------------------------------
# !! Override 530 : "blighted maps, enchanted maps, maps with special mods"

Show # $type->maps->blighted $tier->t1
	BlightedMap True
	MapTier >= 13
	Class "Maps"
	SetFontSize 45
	SetTextColor 145 30 220 255
	SetBorderColor 145 30 220 255
	SetBackgroundColor 235 220 245 255
	PlayAlertSound 5 300
	PlayEffect Purple
	MinimapIcon 0 Purple Square

Show # %H5 $type->maps->blighted $tier->any
	BlightedMap True
	Class "Maps"
	SetFontSize 45
	SetTextColor 145 30 220 255
	SetBorderColor 145 30 220 255
	SetBackgroundColor 200 200 200 255
	PlayAlertSound 5 300
	PlayEffect Purple
	MinimapIcon 1 Purple Square

# Synthesised map
Show # $type->maps->blighted $tier->t1
	"Synthesised Map" True
	Class "Maps"
	SetFontSize 45
	SetTextColor 145 30 220 255
	SetBorderColor 145 30 220 255
	SetBackgroundColor 235 220 245 255
	PlayAlertSound 5 300
	PlayEffect Purple
	MinimapIcon 0 Purple Square

#------------------------------------
#   [2803] Delirium/Blight/Enchanted Maps!
#------------------------------------

Show # $type->maps->enchanted $tier->t1
	AnyEnchantment True
	MapTier >= 14
	Class "Maps"
	SetFontSize 45
	SetTextColor 145 30 220 255
	SetBorderColor 145 30 220 255
	SetBackgroundColor 235 220 245 255
	PlayAlertSound 5 300
	PlayEffect Purple
	MinimapIcon 0 Purple Square

Show # %H5 $type->maps->enchanted $tier->any
	AnyEnchantment True
	Class "Maps"
	SetFontSize 45
	SetTextColor 145 30 220 255
	SetBorderColor 145 30 220 255
	SetBackgroundColor 200 200 200 255
	PlayAlertSound 5 300
	PlayEffect Purple
	MinimapIcon 1 Purple Square

#------------------------------------
#   [2804] Beyond-Nemesis Maps, for those juicy sextants.
#------------------------------------

Show # %H5 $type->maps->identified $tier->nemesisbeyond
	Identified True
	Class "Maps"
	HasExplicitMod "Otherworldly"
	HasExplicitMod "Antagonist's"
	SetFontSize 45
	SetTextColor 145 30 220 255
	SetBorderColor 145 30 220 255
	SetBackgroundColor 200 200 200 255
	PlayAlertSound 5 300
	PlayEffect Purple
	MinimapIcon 1 Purple Square
