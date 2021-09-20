# !! Chapter "Leveling - remaining normal and magic items"
# !! Override 910 : "Linked Gear"
#------------------------------------
# [6002] Purpose Picked Items
#------------------------------------

Show # %D4 $type->leveling->normalmagic->4l $tier->general
	LinkedSockets >= 4
	Rarity <= Magic
	SetFontSize 45
	SetBorderColor 0 140 240 255
	SetBackgroundColor 0 0 0 255
	PlayEffect Grey
	MinimapIcon 2 Grey Diamond

#Show # %D3 $type->leveling->normalmagic->rgb $tier->rgbsmall1
#	Width <= 2
#	Height <= 2
#	Rarity <= Magic
#	SocketGroup "RGB"
#	SetFontSize 45
#	SetTextColor 0 0 0 255
#	SetBorderColor 200 200 200 255
#	SetBackgroundColor 73 92 91 255

#Show # %D3 $type->leveling->normalmagic->rgb $tier->rgbsmall2
#	Width <= 1
#	Height <= 4
#	Rarity <= Magic
#	SocketGroup "RGB"
#	SetFontSize 45
#	SetTextColor 0 0 0 255
#	SetBorderColor 200 200 200 255
#	SetBackgroundColor 73 92 91 255

#Show # %D2 $type->leveling->normalmagic->rgb $tier->rgblarge
#	Width >= 2
#	Height >= 4
#	Rarity <= Magic
#	SocketGroup "RGB"
#	SetFontSize 40
#	SetTextColor 0 0 0 255
#	SetBorderColor 0 0 0 255
#	SetBackgroundColor 73 92 91 255

#Show # %D2 $type->leveling->normalmagic->rgb $tier->rgbmedium
#	Width >= 2
#	Height 3
#	Rarity <= Magic
#	SocketGroup "RGB"
#	SetFontSize 40
#	SetTextColor 0 0 0 255
#	SetBorderColor 0 0 0 255
#	SetBackgroundColor 73 92 91 255

#Show # %D3 $type->leveling->normalmagic->3l $tier->earlythreelinks
#	LinkedSockets >= 3
#	AreaLevel <= 15
#	Rarity <= Magic
#	SetFontSize 40
#	SetBorderColor 0 120 120 255
#	SetBackgroundColor 0 0 0 255
#	PlayEffect Grey Temp

#Show # %D2 $type->leveling->normalmagic->3l $tier->general
#	LinkedSockets >= 3
#	AreaLevel <= 28
#	Rarity <= Magic
#	SetFontSize 35
#	SetBorderColor 0 120 120 255
#	SetBackgroundColor 0 0 0 255
#	PlayEffect Grey Temp

# !! Override 920 : "Act 1-3 specific gear"

Show # %D4 $type->leveling->normalmagic->act1 $tier->casterweapons
	Sockets >= 3
	AreaLevel <= 15
	Rarity Magic
	Class "Sceptres" "Wands"
	SetBorderColor 0 120 120 255
	SetBackgroundColor 0 0 0 255
	PlayEffect Grey Temp

Show # %D4 $type->leveling->normalmagic->act1 $tier->castercraftrings
AreaLevel <= 15
Rarity <= Magic
BaseType "Iron Ring" "Ruby Ring" "Sapphire Ring" "Topaz Ring"
SetFontSize 45
SetBorderColor 0 240 190 255
SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->normalmagic->act1 $tier->general
AreaLevel <= 15
Rarity <= Magic
BaseType "Amber Amulet" "Chain Belt" "Coral Ring" "Jade Amulet" "Lapis Amulet" "Leather Belt"
SetFontSize 45
SetBorderColor 0 240 190 255
SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->normalmagic->act1 $tier->boots
	AreaLevel <= 15
	Rarity Magic
	Class "Boots"
	SetFontSize 45
	SetBorderColor 0 240 190 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->normalmagic->act1 $tier->quivers
	AreaLevel <= 15
	Rarity <= Magic
	Class "Quivers"
	SetFontSize 40
	SetBorderColor 75 75 75 255
	SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->normalmagic->act1 $tier->physical
AreaLevel <= 15
Rarity <= Magic
BaseType "Iron Ring" "Rustic Sash"
SetFontSize 40
SetBorderColor 0 240 190 255
SetBackgroundColor 0 0 0 255

Show # %D4 $type->leveling->normalmagic->act1 $tier->jewellery
	AreaLevel <= 15
	Rarity <= Magic
	Class "Amulets" "Belts" "Rings"
	SetFontSize 40
	SetBorderColor 255 255 255 255
	SetBackgroundColor 0 0 0 255

#Show # %D3 $type->leveling->normalmagic->act2 $tier->castercraftrings
#	AreaLevel >= 15
#	AreaLevel <= 24
#	Rarity <= Magic
#	BaseType "Iron Ring" "Ruby Ring" "Sapphire Ring" "Topaz Ring"
#	SetFontSize 35
#	SetBorderColor 100 100 100 150
#	SetBackgroundColor 0 0 0 255

#Show # %D3 $type->leveling->normalmagic->act2 $tier->physical
#	AreaLevel >= 15
#	AreaLevel <= 24
#	Rarity <= Magic
#	BaseType "Rustic Sash"
#	SetFontSize 35
#	SetBorderColor 100 100 100 150
#	SetBackgroundColor 0 0 0 255

#Show # %D2 $type->leveling->normalmagic->otheracts $tier->highphysquivers
#	AreaLevel >= 24
#	AreaLevel <= 41
#	Rarity <= Magic
#	BaseType "Broadhead Arrow Quiver"
#	SetFontSize 35
#	SetBorderColor 100 100 100 150
#	SetBackgroundColor 0 0 0 180

#Show # %D2 $type->leveling->normalmagic->otheracts $tier->fireresistgear
#	AreaLevel >= 24
#	AreaLevel <= 51
#	Rarity <= Magic
#	BaseType "Ruby Ring"
#	SetFontSize 35
#	SetBorderColor 100 100 100 150
#	SetBackgroundColor 0 0 0 180

#Show # %D2 $type->leveling->normalmagic->otheracts $tier->generalcrafting
#	AreaLevel >= 34
#	Rarity <= Magic
#	BaseType "Leather Belt" "Onyx Amulet" "Prismatic Ring" "Two-Stone Ring"
#	SetFontSize 35
#	SetBorderColor 100 100 100 150
#	SetBackgroundColor 0 0 0 180

#Show  # $type->leveling->normalmagic->otheracts $tier->summonshield
#	AreaLevel <= 46
#	Rarity <= Magic
#	BaseType "Bone Spirit Shield"
#	SetFontSize 40
#	SetBorderColor 100 100 100 150
#	SetBackgroundColor 0 0 0 180

#------------------------------------
#   [4801] Normals
#------------------------------------
# !! Override 930 : "first levels gear"

Hide # %H1 $type->leveling->firstlevels $tier->earlybodyarmours
	AreaLevel >= 2
	AreaLevel <= 8
	Rarity Normal
	Class "Body Armours"
	SetTextColor 180 180 180
	SetBorderColor 0 0 0
	SetBackgroundColor 0 0 0 180

Hide # %H3 $type->leveling->firstlevels $tier->threesocketedgear
	Sockets >= 3
	AreaLevel <= 8
	Rarity <= Magic
	Class "Boots" "Gloves" "Helmets" "Shields"
	SetFontSize 40
	SetBorderColor 100 100 100 150
	SetBackgroundColor 0 0 0 255

Hide # %H3 $type->leveling->firstlevels $tier->firstareas
	AreaLevel <= 4
	Rarity Normal
	SetTextColor 180 180 180
	SetBorderColor 0 0 0
	SetBackgroundColor 0 0 0 180

