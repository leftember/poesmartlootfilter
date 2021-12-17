#===============================================================================================================
# [[0150]] Currency - Exceptions - Leveling Currencies
#===============================================================================================================

Hide # %H3 %C3 $tier->t2 $type->currency->leveling
    AreaLevel > 66
    StackSize <= 2
    Class Currency
    BaseType "Armourer's Scrap"  "Orb of Transmutation" "Orb of Augmentation" "Blacksmith's Whetstone" "Portal Scroll" "Scroll of Wisdom"
    SetFontSize 45
    SetTextColor 170 158 130 255            # TEXTCOLOR:     Transmutation Leveling Tier
    SetBorderColor 75 75 75 255          # BORDERCOLOR:     Currency Augment
    SetBackgroundColor 0 0 0 255         # BACKGROUND:     Neutral T2

Hide # wisdom scroll 
    AreaLevel > 20
    Class Currency
    BaseType "Scroll of Wisdom"

Show # %H3 %C3 $tier->t2 $type->currency->leveling
    Class Currency
    BaseType "Armourer's Scrap"  "Orb of Transmutation" "Orb of Augmentation" "Blacksmith's Whetstone" "Portal Scroll" "Scroll of Wisdom"
    SetFontSize 45
    SetTextColor 170 158 130 255            # TEXTCOLOR:     Transmutation Leveling Tier
    SetBorderColor 75 75 75 255          # BORDERCOLOR:     Currency Augment
    SetBackgroundColor 0 0 0 255         # BACKGROUND:     Neutral T2
