
#===============================================================================================================
# [[3500]] Currency - Regular Currency Tiering
#===============================================================================================================

Show # $type->currency $tier->t1exalted
    Class "Currency"
    BaseType == "Albino Rhoa Feather" "Awakener's Orb" "Crusader's Exalted Orb" "Eternal Orb" "Exalted Orb" "Hunter's Exalted Orb" "Maven's Orb" "Mirror of Kalandra" "Mirror Shard" "Prime Regrading Lens" "Redeemer's Exalted Orb" "Secondary Regrading Lens" "Tailoring Orb" "Tempering Orb" "Warlord's Exalted Orb"
    SetFontSize 45
    SetTextColor 130 214 255 255
    SetBorderColor 130 214 255 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->currency $tier->t2divine
    Class "Currency"
    BaseType == "Blessing of Chayula" "Crescent Splinter" "Divine Orb" "Elevated Sextant"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Circle

Show # $type->currency $tier->t3annul
    Class "Currency"
    BaseType == "Ancient Orb" "Awakened Sextant" "Blessing of Esh" "Blessing of Tul" "Blessing of Uul-Netol" "Blessing of Xoph" "Exalted Shard" "Fertile Catalyst" "Harbinger's Orb" "Infused Engineer's Orb" "Orb of Annulment" "Orb of Unmaking" "Prismatic Catalyst" "Ritual Vessel" "Unstable Catalyst" "Veiled Chaos Orb"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Circle

Show # $type->currency $tier->t4chaos
    Class "Currency"
    BaseType == "Accelerating Catalyst" "Ancient Shard" "Blessed Orb" "Chaos Orb" "Gemcutter's Prism" "Prime Sextant" "Ritual Splinter" "Stacked Deck" "Tempering Catalyst"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Show # %H5 $type->currency $tier->t5alchemy
    Class "Currency"
    BaseType == "Abrasive Catalyst" "Annulment Shard" "Bestiary Orb" "Enkindling Orb" "Facetor's Lens" "Glassblower's Bauble" "Harbinger's Shard" "Instilling Orb" "Intrinsic Catalyst" "Orb of Alchemy" "Orb of Fusing" "Orb of Horizons" "Orb of Regret" "Orb of Scouring" "Regal Orb" "Simple Sextant" "Turbulent Catalyst" "Vaal Orb"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Show # %H4 $type->currency $tier->t6chrom
    Class "Currency"
    BaseType == "Cartographer's Chisel" "Chromatic Orb" "Imbued Catalyst" "Noxious Catalyst" "Orb of Alteration"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 61 156 136 255
    PlayAlertSound 2 300
    PlayEffect Grey
    MinimapIcon 2 Grey Circle

Show # %H4 $type->currency $tier->t7chance
    Class "Currency"
    BaseType == "Chaos Shard" "Horizon Shard" "Jeweller's Orb" "Orb of Binding" "Orb of Chance" "Silver Coin"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 61 156 136 255

Show # %H3 $type->currency $tier->t8trans
	Class "Currency"
	BaseType == "Blacksmith's Whetstone" "Engineer's Orb" "Orb of Augmentation" "Orb of Transmutation" "Armourer's Scrap" 
	SetFontSize 45
	SetTextColor 190 178 135 255
	SetBorderColor 190 178 135 255
	SetBackgroundColor 0 0 0 255

Hide # %H2 $type->currency $tier->t9 shards
	Class "Currency"
	BaseType == "Alteration Shard" "Transmutation Shard" "Alchemy Shard" "Binding Shard" "Engineer's Shard" "Regal Shard"  
	SetFontSize 40
	SetTextColor 170 158 130 255
	SetBorderColor 170 158 130 255
	SetBackgroundColor 0 0 0 255

