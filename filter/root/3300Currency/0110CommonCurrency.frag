#===============================================================================================================
# [[0150]] Currency - Exceptions - Leveling Currencies
#===============================================================================================================

Show # %H4 %C4 $tier->t1 $type->currency->leveling
    Class Currency
    BaseType "Blacksmith's Whetstone"
    SetFontSize 45
    SetTextColor 170 158 130 255         # TEXTCOLOR:       Transmutation Leveling Tier
    SetBorderColor 190 178 135 180       # BORDERCOLOR:     Transmutation
    SetBackgroundColor 0 0 0 255         # BACKGROUND:      Neutral T2

Hide # %H3 %C3 $tier->t2 $type->currency->leveling
    AreaLevel > 66
    Class Currency
    BaseType "Armourer's Scrap"  "Orb of Transmutation" "Orb of Augmentation"
    SetFontSize 45
    SetTextColor 170 158 130 255            # TEXTCOLOR:     Transmutation Leveling Tier
    SetBorderColor 75 75 75 255          # BORDERCOLOR:     Currency Augment
    SetBackgroundColor 0 0 0 255         # BACKGROUND:     Neutral T2

Show # %H3 %C3 $tier->t3 $type->currency->leveling
    Class Currency
    BaseType "Portal Scroll"
    SetFontSize 45
    SetTextColor 170 158 130 255            # TEXTCOLOR:     Transmutation Leveling Tier
    SetBorderColor 30 50 100 255         # BORDERCOLOR:     Portal
    SetBackgroundColor 0 0 0 255         # BACKGROUND:     Neutral T2

Show # %H3 %C3 $tier->t4 $type->currency->leveling
    AreaLevel < 30
    Class Currency
    BaseType "Scroll of Wisdom"
    SetFontSize 45
    SetTextColor 170 158 130 255            # TEXTCOLOR:     Transmutation Leveling Tier
    SetBorderColor 100 50 30 255         # BORDERCOLOR:     Wisdom
    SetBackgroundColor 0 0 0 255         # BACKGROUND:     Neutral T2

Hide # Wisdom and Portal scroll 
    AreaLevel > 20
    Class Currency
    BaseType "Scroll of Wisdom" "Portal Scroll"
