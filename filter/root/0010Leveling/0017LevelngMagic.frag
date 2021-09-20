#------------------------------------
#   [4803] Remaining Magics
#------------------------------------
# !! Override 950 : "magic vendor items"

Show # $type->decorators->leveling->magic $tier->medium1
	Width 1
	Height >= 3
	ItemLevel <= 68
	Rarity Magic
	SetBorderColor 100 100 100 150
	Continue

Show # $type->decorators->leveling->magic $tier->medium2
	Width 2
	Height 2
	ItemLevel <= 68
	Rarity Magic
	SetBorderColor 100 100 100 150
	Continue

Show # $type->decorators->leveling->magic $tier->tiny
	Width <= 2
	Height 1
	ItemLevel <= 68
	Rarity Magic
	SetBorderColor 255 255 255 255
	Continue

Hide # $type->leveling->magic->remaining $tier->largemagicblocker
	Width >= 2
	Height >= 3
	AreaLevel >= 15
	Rarity Magic
	SetFontSize 18
	SetBorderColor 0 0 0 0
	SetBackgroundColor 0 0 0 0
	DisableDropSound True

Hide # $type->leveling->magic->remaining $tier->mediummagicblocker
	Height > 1
	AreaLevel >= 24
	Rarity Magic
	SetFontSize 18
	SetBorderColor 0 0 0 0
	SetBackgroundColor 0 0 0 0
	DisableDropSound True

Hide # %H1 $type->leveling->magic->remaining $tier->rest
	AreaLevel >= 34
	AreaLevel <= 68
	Rarity Magic
	SetFontSize 30

Hide # %H2 $type->leveling->magic->remaining $tier->act2
	AreaLevel >= 15
	AreaLevel <= 24
	Rarity Magic
	SetFontSize 35

Hide # %H3 $type->leveling->magic->remaining $tier->act1
	AreaLevel >= 8
	AreaLevel <= 15
	Rarity Magic
	SetFontSize 35

Hide # %H3 $type->leveling->magic->remaining $tier->firstlevels
	AreaLevel >= 1
	AreaLevel <= 8
	Rarity Magic
	SetFontSize 40
