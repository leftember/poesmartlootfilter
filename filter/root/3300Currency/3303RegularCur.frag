
#===============================================================================================================
# [[3500]] Currency - Regular Currency Tiering
#===============================================================================================================

Show # $type->currency $tier->t1exalted
    Class "Currency"
    BaseType == "Albino Rhoa Feather" "Awakener's Orb" "Crusader's Exalted Orb" "Eternal Orb" "Exalted Orb" "Hunter's Exalted Orb" "Mirror of Kalandra" "Mirror Shard" "Prime Regrading Lens" "Redeemer's Exalted Orb" "Secondary Regrading Lens" "Tailoring Orb" "Tempering Orb" "Warlord's Exalted Orb" "Divine Orb" "Divine Orb"
    SetFontSize 45
    SetTextColor 130 214 255 255
    SetBorderColor 130 214 255 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->currency $tier->t2divine
    Class "Currency"
    BaseType == "Blessing of Chayula" "Crescent Splinter" "Elevated Sextant" "Sacred Orb" "Tainted Blessing" "Tainted Chromatic Orb" "Tainted Orb of Fusing" "Tainted Jeweller's Orb" "Kalguuran Delirium Orb" "Deft Fossil" "Fundamental Fossil" "Tainted Exalted Orb" "Tainted Mythic Orb" "Tainted Blacksmith's Whetstone" "Tainted Armourer's Scrap" "Tainted Chaos Orb" "Tainted Divine Teardrop"
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
    BaseType == "Abrasive Catalyst" "Annulment Shard" "Bestiary Orb" "Enkindling Orb" "Facetor's Lens" "Glassblower's Bauble" "Harbinger's Shard" "Instilling Orb" "Intrinsic Catalyst" "Orb of Alchemy" "Orb of Fusing" "Orb of Horizons" "Orb of Regret" "Orb of Scouring" "Regal Orb" "Simple Sextant" "Turbulent Catalyst" "Vaal Orb" "Imbued Catalyst" "Noxious Catalyst"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 130 214 255 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Circle

Hide # %H4 $type->currency $tier->t6chrom
    Class "Currency"
    BaseType == "Cartographer's Chisel" "Orb of Alteration"
    SetFontSize 40
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 61 156 136 255

Hide # %H4 $type->currency $tier->t7chance
    Class "Currency"
    BaseType == "Chaos Shard" "Horizon Shard" "Jeweller's Orb" "Orb of Binding" "Orb of Chance" "Chromatic Orb" 
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 61 156 136 255

Hide # %H2 $type->currency $tier->t9 shards
	Class "Currency"
	BaseType == "Alteration Shard" "Transmutation Shard" "Alchemy Shard" "Binding Shard" "Engineer's Shard" "Regal Shard" "Engineer's Orb" 
	SetFontSize 40
	SetTextColor 170 158 130 255
	SetBorderColor 170 158 130 255
	SetBackgroundColor 0 0 0 255
