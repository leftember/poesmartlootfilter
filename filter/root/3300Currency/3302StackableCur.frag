
#===============================================================================================================
# [[3300]] Currency - Exceptions - Stacked Currency
#===============================================================================================================

Show # $type->currency->stacked $tier->splinters_t1
    StackSize >= 2
    Class "Currency"
    BaseType "Splinter of Chayula" "Timeless Maraketh Splinter" "Timeless Templar Splinter"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Show # $type->currency->stacked $tier->splinters_t2
    StackSize >= 2
    Class "Currency"
    BaseType "Splinter of Esh" "Splinter of Tul" "Splinter of Uul-Netol" "Splinter of Xoph" "Timeless Eternal Empire Splinter" "Timeless Karui Splinter" "Timeless Vaal Splinter"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Show # %H4 $type->currency->stacked $tier->shards
    StackSize >= 6
    Class "Currency"
    BaseType "Chaos Shard" "Harbinger's Shard" "Horizon Shard"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Show # $type->currency->stacked $tier->orbs_chaos
    StackSize >= 2
    Class "Currency"
    BaseType "Awakened Sextant" "Chaos Orb" "Enkindling Orb" "Facetor's Lens" "Fertile Catalyst" "Gemcutter's Prism" "Harbinger's Orb" "Instilling Orb" "Prime Sextant" "Prismatic Catalyst" "Ritual Splinter" "Stacked Deck" "Tempering Catalyst" "Vaal Orb"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Circle

Show # $type->currency->stacked $tier->orbs_alchemy
    StackSize >= 2
    Class "Currency"
    BaseType "Abrasive Catalyst" "Cartographer's Chisel" "Imbued Catalyst" "Intrinsic Catalyst" "Orb of Alchemy" "Orb of Alteration" "Orb of Binding" "Orb of Fusing" "Orb of Horizons" "Orb of Regret" "Orb of Scouring" "Regal Orb" "Turbulent Catalyst"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Show # %H5 $type->currency->stacked $tier->orbs_alt
    StackSize >= 3
    Class "Currency"
    BaseType "Blessed Orb" "Chromatic Orb" "Glassblower's Bauble" "Jeweller's Orb" "Orb of Chance" "Simple Sextant"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

#------------------------------------
#   [3302] Heist Coins
#------------------------------------

Show # $type->currency->heist $tier->highstack
    StackSize >= 150
    Class "Currency"
    BaseType = "Rogue's Marker"
    SetFontSize 45
    SetTextColor 255 178 135 255
    SetBorderColor 255 178 135 255
    SetBackgroundColor 150 90 70 255
    PlayEffect Orange

Show # $type->currency->heist $tier->highstack
    Class "Currency"
    BaseType = "Lifeforce"
    SetFontSize 45
    SetTextColor 255 178 135 255
    SetBorderColor 255 178 135 255
    SetBackgroundColor 150 90 70 255
    PlayEffect Orange

Hide # %H4 $type->currency->heist $tier->any
    Class "Currency"
    BaseType = "Rogue's Marker"
    SetFontSize 45
    SetTextColor 255 178 135 255
    SetBorderColor 255 178 135 255
    SetBackgroundColor 0 0 0 255
    PlayEffect Orange Temp
