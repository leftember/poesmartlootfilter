#===============================================================================================================
# [[0300]] Exotic Bases
#===============================================================================================================
# !! Override 030 : "heist and ritual bases"
# These bases don't usually drop during normal gameplay and are usually only acquired form certain sources
# These are bases such as heist and ritual bases.

Show # $type->exoticbases $tier->exoticheistbases
    Rarity <= Rare
    BaseType "Accumulator Wand" "Alternating Sceptre" "Anarchic Spiritblade" "Apex Cleaver" "Assembler Wand" "Astrolabe Amulet" "Banishing Blade" "Battery Staff" "Blasting Blade" "Blunt Force Condenser" "Boom Mace" "Capacity Rod" "Capricious Spiritblade" "Cogwork Ring" "Cold-attuned Buckler" "Congregator Wand" "Crack Mace" "Crushing Force Magnifier" "Disapprobation Axe" "Endothermic Buckler" "Eventuality Rod" "Exhausting Spirit Shield" "Exothermic Tower Shield" "Fickle Spiritblade" "Flare Mace" "Flashfire Blade" "Flickerflame Blade" "Foundry Bow" "Geodesic Ring" "Heat-attuned Tower Shield" "Hedron Bow" "Hollowpoint Dagger" "Honed Cleaver" "Impact Force Propagator" "Infernal Blade" "Magmatic Tower Shield" "Malign Fangs" "Maltreatment Axe" "Mechalarm Belt" "Micro-Distillery Belt" "Oscillating Sceptre" "Pneumatic Dagger" "Polar Buckler" "Potentiality Rod" "Pressurised Dagger" "Prime Cleaver" "Psychotic Axe" "Rebuking Blade" "Reciprocation Staff" "Shadow Fangs" "Simplex Amulet" "Solarine Bow" "Stabilising Sceptre" "Subsuming Spirit Shield" "Transfer-attuned Spirit Shield" "Transformer Staff" "Void Fangs"
    SetFontSize 45
    SetTextColor 0 240 190 255
    SetBorderColor 0 240 190 255
    SetBackgroundColor 0 75 30 255
    PlayAlertSound 3 300
    PlayEffect Blue
    MinimapIcon 0 Blue Diamond

Show # $type->exoticbases $tier->exoticritualbases
    Rarity <= Rare
    BaseType "Aetherwind Gloves" "Archdemon Crown" "Atonement Mask" "Basemetal Treads" "Blizzard Crown" "Brimstone Treads" "Cloudwhisper Boots" "Darksteel Treads" "Debilitation Gauntlets" "Demon Crown" "Dreamquest Slippers" "Duskwalk Slippers" "Gale Crown" "Gauche Gloves" "Gruelling Gauntlets" "Imp Crown" "Leyline Gloves" "Nexus Gloves" "Nightwind Slippers" "Penitent Mask" "Sinistral Gloves" "Sorrow Mask" "Southswing Gloves" "Stormrider Boots" "Taxing Gauntlets" "Windbreak Boots" "Winter Crown"
    SetFontSize 45
    SetTextColor 0 240 190 255
    SetBorderColor 0 240 190 255
    SetBackgroundColor 0 75 30 255
    PlayAlertSound 3 300
    PlayEffect Blue
    MinimapIcon 0 Blue Diamond

Show # $type->exoticbases $tier->exoticexpeditionbases
    Rarity <= Rare
    BaseType "Iron Flask" "Runic Crest" "Runic Crown" "Runic Gages" "Runic Gauntlets" "Runic Gloves" "Runic Greaves" "Runic Helm" "Runic Sabatons" "Runic Sollerets"
    SetFontSize 45
    SetTextColor 0 240 190 255
    SetBorderColor 0 240 190 255
    SetBackgroundColor 0 75 30 255
    PlayAlertSound 3 300
    PlayEffect Blue
    MinimapIcon 0 Blue Diamond

Show # $type->exoticbases $tier->exotictalismanbases
    Rarity <= Rare
    BaseType == "Greatwolf Talisman" "Rot Head Talisman"
    SetFontSize 45
    SetTextColor 0 240 190 255
    SetBorderColor 0 240 190 255
    SetBackgroundColor 0 75 30 255
    PlayAlertSound 3 300
    PlayEffect Blue
    MinimapIcon 0 Blue Diamond

Show # $type->exoticbases $tier->exoticbasesmisc
    Rarity <= Rare
    BaseType == "Grasping Mail"
    SetFontSize 45
    SetTextColor 0 240 190 255
    SetBorderColor 0 240 190 255
    SetBackgroundColor 0 75 30 255
    PlayAlertSound 3 300
    PlayEffect Blue
    MinimapIcon 0 Blue Diamond

