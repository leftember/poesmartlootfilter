
#------------------------------------
#   [3201] Scarabs
#------------------------------------

Show # $type->fragments->scarabs $tier->t1
    Class "Map Fragments"
    BaseType "Winged Ambush Scarab" "Winged Harbinger Scarab" "Winged Legion Scarab"
    SetFontSize 45
    SetTextColor 225 111 255 255
    SetBorderColor 225 111 255 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->fragments->scarabs $tier->t2
    Class "Map Fragments"
    BaseType "Craicic Lure" "Farric Lure" "Fenumal Lure" "Gilded Abyss Scarab" "Gilded Ambush Scarab" "Gilded Bestiary Scarab" "Gilded Blight Scarab" "Gilded Breach Scarab" "Gilded Harbinger Scarab" "Gilded Legion Scarab" "Polished Ambush Scarab" "Polished Legion Scarab" "Saqawine Lure" "Winged Abyss Scarab" "Winged Bestiary Scarab" "Winged Blight Scarab" "Winged Breach Scarab" "Winged Cartography Scarab" "Winged Divination Scarab" "Winged Elder Scarab" "Winged Metamorph Scarab" "Winged Perandus Scarab" "Winged Reliquary Scarab" "Winged Shaper Scarab" "Winged Sulphite Scarab" "Winged Torment Scarab"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Hexagon

Show # $type->fragments->scarabs $tier->t3
    Class "Map Fragments"
    BaseType "Gilded Cartography Scarab" "Gilded Divination Scarab" "Gilded Elder Scarab" "Gilded Metamorph Scarab" "Gilded Perandus Scarab" "Gilded Reliquary Scarab" "Gilded Shaper Scarab" "Gilded Sulphite Scarab" "Gilded Torment Scarab" "Polished Bestiary Scarab" "Polished Blight Scarab" "Polished Breach Scarab" "Polished Cartography Scarab" "Polished Divination Scarab" "Polished Elder Scarab" "Polished Harbinger Scarab" "Polished Metamorph Scarab" "Polished Sulphite Scarab" "Rusted Bestiary Scarab" "Rusted Blight Scarab" "Rusted Cartography Scarab" "Rusted Elder Scarab" "Rusted Harbinger Scarab" "Rusted Legion Scarab" "Rusted Metamorph Scarab"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Hexagon

Show # %H4 $type->fragments->scarabs $tier->t4
    Class "Map Fragments"
    BaseType "Polished Abyss Scarab" "Polished Perandus Scarab" "Polished Reliquary Scarab" "Polished Shaper Scarab" "Polished Torment Scarab" "Rusted Abyss Scarab" "Rusted Ambush Scarab" "Rusted Breach Scarab" "Rusted Divination Scarab" "Rusted Perandus Scarab" "Rusted Reliquary Scarab" "Rusted Shaper Scarab" "Rusted Sulphite Scarab" "Rusted Torment Scarab"
    SetFontSize 45
    SetTextColor 225 111 255 255
    SetBorderColor 225 111 255 255
    SetBackgroundColor 0 0 0 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Hexagon

Show # $type->fragments->scarabs $tier->restex
    Class "Map Fragments"
    BaseType "Scarab"
    SetFontSize 45
    SetTextColor 255 0 255 255
    SetBorderColor 255 0 255 255
    SetBackgroundColor 100 0 100 255
    PlayAlertSound 3 300
    PlayEffect Pink
    MinimapIcon 0 Pink Circle

#------------------------------------
#   [3202] Regular Fragment Tiering
#------------------------------------

Show # $type->fragments $tier->t1
    Class "Map Fragments"
    BaseType "Chayula's Breachstone" "Chayula's Charged Breachstone" "Chayula's Enriched Breachstone" "Chayula's Pure Breachstone" "Simulacrum" "The Maven's Writ" "Timeless Maraketh Emblem" "Timeless Templar Emblem" "Tul's Pure Breachstone" "Uul-Netol's Pure Breachstone" "Xoph's Pure Breachstone"
    SetFontSize 45
    SetTextColor 225 111 255 255
    SetBorderColor 225 111 255 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->fragments $tier->t2
    Class "Map Fragments"
    BaseType "Eber's Key" "Esh's Charged Breachstone" "Esh's Enriched Breachstone" "Esh's Pure Breachstone" "Fragment of Constriction" "Fragment of Emptiness" "Fragment of Enslavement" "Fragment of Eradication" "Fragment of Knowledge" "Fragment of Purification" "Fragment of Shape" "Fragment of Terror" "Fragment of the Chimera" "Fragment of the Hydra" "Fragment of the Minotaur" "Fragment of the Phoenix" "Inya's Key" "Sacred Blossom" "Timeless Eternal Emblem" "Timeless Vaal Emblem" "Tul's Breachstone" "Tul's Charged Breachstone" "Tul's Enriched Breachstone" "Uul-Netol's Breachstone" "Uul-Netol's Charged Breachstone" "Uul-Netol's Enriched Breachstone" "Volkuur's Key" "Xoph's Breachstone" "Xoph's Charged Breachstone" "Xoph's Enriched Breachstone" "Yriel's Key"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Hexagon

Show # %H5 $type->fragments $tier->t3
    Class "Map Fragments"
    BaseType "Blood-filled Vessel" "Esh's Breachstone" "Mortal Grief" "Mortal Hope" "Mortal Ignorance" "Mortal Rage" "Timeless Karui Emblem"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Hexagon

Show # %HS3 $type->fragments $tier->t4
    Class "Map Fragments"
    BaseType "Divine Vessel" "Sacrifice at Dawn" "Sacrifice at Dusk" "Sacrifice at Midnight" "Sacrifice at Noon"
    SetFontSize 45
    SetTextColor 225 111 255 255
    SetBorderColor 225 111 255 255
    SetBackgroundColor 0 0 0 255

Show # $type->fragments $tier->restex
	Class "Map Fragments"
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBorderColor 255 0 255 255
	SetBackgroundColor 100 0 100 255
	PlayAlertSound 3 300
	PlayEffect Pink
	MinimapIcon 0 Pink Circle
