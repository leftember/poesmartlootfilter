#==============================================================================================================:
# [[1000]] High Level Crafting Bases
#===============================================================================================================

Show # %D4 $type->normalcraft->i86 $tier->t2
    Corrupted False
    ItemLevel >= 86
    Rarity <= Rare
    BaseType == "Deerskin Gloves" "Tarnished Spirit Shield" "Two-Point Arrow Quiver" "Nubuck Gloves" "Spike-Point Arrow Quiver" "Feathered Arrow Quiver" "Steel Kite Shield" "Steel Gauntlets"
    SetFontSize 45
    SetBorderColor 255 125 0 185

Show # %D4 $type->normalcraft->i86 $tier->t2
    Corrupted False
    ItemLevel == 85
    Rarity <= Rare
    BaseType == "Spiraled Wand" "Two-Point Arrow Quiver"
    SetFontSize 45
    SetBorderColor 255 125 0 185

Show # %D4 $type->normalcraft->i86 $tier->t2
    Corrupted False
    ItemLevel == 84
    Rarity <= Rare
    BaseType == "Ironscale Gauntlets" "Heathen Wand" "Vaal Buckler"
    SetFontSize 45
    SetBorderColor 255 125 0 185

Show # %D4 $type->normalcraft->i86 $tier->t2
    Corrupted False
    ItemLevel == 83
    Rarity <= Rare
    BaseType == "Dusk Ring" "Penumbra Ring" "Gloam Ring"
    SetFontSize 45
    SetBorderColor 255 125 0 185

Show # %D4 $type->normalcraft->i86 $tier->t2
    Corrupted False
    ItemLevel == 82
    Rarity <= Rare
    BaseType == "Dusk Ring" "Gloam Ring"
    SetFontSize 45
    SetBorderColor 255 125 0 185

#------------------------------------
#   [1001] ILVL 84 Atlas bases and speicial bases
#------------------------------------

Show # %D4 $type->normalcraft->i84 $tier->t1 Atlas bases, show 84+, let's see how it goes.
    Corrupted False
    Rarity <= Rare
    BaseType == "Stygian Vise" "Sacrificial Garb"
    SetBorderColor 200 200 0 240
    PlayAlertSound 3 300
    PlayEffect White
    MinimapIcon 2 White Diamond

Show # %D4 $type->normalcraft->i84 $tier->t1 Atlas bases, show 84+, let's see how it goes.
    Corrupted False
    ItemLevel >= 84
    Rarity <= Rare
    BaseType == "Apothecary's Gloves" "Artillery Quiver" "Blue Pearl Amulet" "Bone Helmet" "Cerulean Ring" "Convoking Wand" "Crystal Belt" "Fingerless Silk Gloves" "Fugitive Boots" "Gripped Gloves" "Iolite Ring" "Marble Amulet" "Opal Ring" "Seaglass Amulet" "Spiked Gloves" "Steel Ring" "Two-Toned Boots" "Vanguard Belt" "Vermillion Ring"
    SetBorderColor 200 200 0 240
    PlayAlertSound 3 300
    PlayEffect White
    MinimapIcon 2 White Diamond
