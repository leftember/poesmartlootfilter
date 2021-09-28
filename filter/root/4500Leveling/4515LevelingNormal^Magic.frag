# !! Chapter "Leveling - remaining normal and magic items"
# !! Override 910 : "Linked Gear"
#------------------------------------
# 4L items and AreaLevel <15 normal&magic items, as well as Bone Spirit Shield for +1 minion helm. 
#------------------------------------

Show # %D4 $type->leveling->normalmagic->4l $tier->general
	LinkedSockets >= 4
	Rarity <= Magic
	SetFontSize 45
	SetBorderColor 0 140 240 255
	SetBackgroundColor 0 0 0 255
	PlayEffect Grey
	MinimapIcon 2 Grey Diamond
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

Show  # $type->leveling->normalmagic->otheracts $tier->summonshield
	AreaLevel <= 46
	Rarity <= Magic
	BaseType "Bone Spirit Shield"
	SetFontSize 40
	SetBorderColor 100 100 100 150
	SetBackgroundColor 0 0 0 180

#------------------------------------
#   [4801] Normals
#------------------------------------
# !! Override 930 : "first levels gear"

Show # %H1 $type->leveling->firstlevels $tier->earlybodyarmours
	AreaLevel >= 2
	AreaLevel <= 8
	Rarity Normal
	Class "Body Armours"
	SetTextColor 180 180 180
	SetBorderColor 0 0 0
	SetBackgroundColor 0 0 0 180

Show # %H3 $type->leveling->firstlevels $tier->threesocketedgear
	Sockets >= 3
	AreaLevel <= 8
	Rarity <= Magic
	Class "Boots" "Gloves" "Helmets" "Shields"
	SetFontSize 40
	SetBorderColor 100 100 100 150
	SetBackgroundColor 0 0 0 255

Show # %H3 $type->leveling->firstlevels $tier->firstareas
	AreaLevel <= 4
	Rarity Normal
	SetTextColor 180 180 180
	SetBorderColor 0 0 0
	SetBackgroundColor 0 0 0 180

