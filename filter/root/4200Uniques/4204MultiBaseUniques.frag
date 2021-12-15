#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Magistrate Crown" "Saint's Hauberk" "Sacrificial Garb" "Sadist Garb" "Varnished Coat" "Lacquered Garb" "Astral Plate" "Full Dragonscale" "Full Wyrmscale" "Glorious Plate" "Vaal Gauntlets" "Reinforced Greaves" "Archon Kite Shield" "Mirrored Spiked Shield" "Penetrating Arrow Quiver" "Crusader Gloves" "Hydrascale Gauntlets" "Coronal Leather" "Pinnacle Tower Shield" "Lacquered Buckler" "Arcanist Slippers" "Zealot Gloves" "Sinner Tricorne" "Hubris Circlet" "Harlequin Mask" "Carnal Boots" "Legion Gloves" "Goliath Greaves" "Festival Mask" "Soldier Gloves" "Archon Kite Shield Piece" "Vaal Mask" "Callous Mask Piece" "Granite Flask" "Judgement Staff" "Spine Bow" "Assassin Bow" "Short Bow" "Lathi" "Imperial Staff" "Coiled Staff" "Lion Sword" "Gemstone Sword" "Abyssal Axe" "Labrys" "Cutlass" "Bone Bow" "Imperial Claw" "Vaal Blade" "Engraved Wand" "Vaal Sceptre" "Legion Sword Piece" "Imperial Staff Piece" "Opal Ring" "Cloth Belt Piece" "Small Cluster Jewel"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 175 96 37 255
    PlayAlertSound 2 300
    PlayEffect Blue
    MinimapIcon 1 Blue Star

Show # %D4 $type->uniques $tier->highvinktar
    ItemLevel >= 81
    Rarity Unique
    BaseType == "Imperial Staff"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 175 96 37 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Brown Star

