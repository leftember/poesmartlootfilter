#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Amber Amulet" "Archon Kite Shield" "Ebony Tower Shield" "Eternal Sword" "Fiend Dagger" "Gavel" "Jade Amulet" "Leather Belt" "Long Staff" "Medium Cluster Jewel" "Onyx Amulet" "Paua Amulet" "Prophet Crown" "Sadist Garb" "Saint's Hauberk" "Small Cluster Jewel" "Stealth Boots" "Stibnite Flask" "Studded Belt" "Topaz Ring" "Turquoise Amulet" "Two-Stone Ring" "Unset Ring"
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

Show # $type->uniques $tier->exjewels
    Rarity Unique
    Class "Jewel"
    BaseType == "Cobalt Jewel" "Crimson Jewel" "Ghastly Eye Jewel" "Hypnotic Eye Jewel" "Murderous Eye Jewel" "Searching Eye Jewel" "Viridian Jewel"
    SetFontSize 45
    SetTextColor 175 96 37 255
    SetBorderColor 0 240 190 255
    SetBackgroundColor 53 13 13 255
    PlayAlertSound 2 300
    PlayEffect Blue
    MinimapIcon 2 Blue Star

