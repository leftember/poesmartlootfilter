
#===============================================================================================================
# [[2500]] Heist Gear
#===============================================================================================================
# !! Chapter "Heist Gear"

#------------------------------------
#   [2501] Heist Cloak
#------------------------------------
# !! Override 310 : "Heist Cloaks"

Show # %HS5 $type->heist->cloak $tier->t1highlevel
    ItemLevel >= 83
    Rarity <= Rare
    Class "Heist Cloak"
    BaseType "Whisper-woven Cloak"
    SetFontSize 45
    SetTextColor 250 165 0 255
    SetBorderColor 255 85 85 255
    SetBackgroundColor 31 0 75 255
    PlayAlertSound 3 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Raindrop

Show # %H5 $type->heist->cloak $tier->t1
    Rarity <= Rare
    Class "Heist Cloak"
    BaseType "Whisper-woven Cloak"
    SetFontSize 45
    SetBorderColor 255 85 85 255
    SetBackgroundColor 31 0 75 255
    PlayAlertSound 3 300
    PlayEffect White
    MinimapIcon 1 White Raindrop

Show # %HS4 $type->heist->cloak $tier->t2
    Rarity <= Rare
    Class "Heist Cloak"
    BaseType "Hooded Cloak"
    SetFontSize 45
    SetBorderColor 255 85 85 200
    SetBackgroundColor 0 0 0 255
    PlayAlertSound 3 300
    PlayEffect Grey
    MinimapIcon 1 Grey Raindrop

Show # %HS3 $type->heist->cloak $tier->t3any
	Rarity <= Rare
	Class "Heist Cloak"
	SetFontSize 40
	SetBorderColor 255 85 85 200
	SetBackgroundColor 0 0 0 255

#------------------------------------
#   [2502] Heist Brooch
#------------------------------------
# !! Override 320 : "Heist Brooch"

Show # %HS5 $type->heist->brooch $tier->t1highlevel
    ItemLevel >= 84
    Rarity <= Rare
    Class "Heist Brooch"
    BaseType "Foliate Brooch"
    SetFontSize 45
    SetTextColor 250 165 0 255
    SetBorderColor 255 85 85 255
    SetBackgroundColor 31 0 75 255
    PlayAlertSound 3 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Raindrop

Show # %H5 $type->heist->brooch $tier->t1
    Rarity <= Rare
    Class "Heist Brooch"
    BaseType "Foliate Brooch"
    SetFontSize 45
    SetBorderColor 255 85 85 255
    SetBackgroundColor 31 0 75 255
    PlayAlertSound 3 300
    PlayEffect White
    MinimapIcon 1 White Raindrop

Show # %HS4 $type->heist->brooch $tier->t2
    Rarity <= Rare
    Class "Heist Brooch"
    BaseType "Enamel Brooch"
    SetFontSize 45
    SetBorderColor 255 85 85 200
    SetBackgroundColor 0 0 0 255
    PlayAlertSound 3 300
    PlayEffect Grey
    MinimapIcon 1 Grey Raindrop

Show # %HS3 $type->heist->brooch $tier->t3any
	Rarity <= Rare
	Class "Heist Brooch"
	SetFontSize 40
	SetBorderColor 255 85 85 200
	SetBackgroundColor 0 0 0 255

#------------------------------------
#   [2503] Heist Gear
#------------------------------------
# !! Override 330 : "Heist Gear"

Show # %HS5 $type->heist->gear $tier->t1highlevel
    ItemLevel >= 81
    Rarity <= Rare
    Class "Heist Gear"
    BaseType "Burst Band" "Obsidian Sharpening Stone" "Precise Arrowhead"
    SetFontSize 45
    SetTextColor 250 165 0 255
    SetBorderColor 255 85 85 255
    SetBackgroundColor 31 0 75 255
    PlayAlertSound 3 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Raindrop

Show # %H5 $type->heist->gear $tier->t1
    Rarity <= Rare
    Class "Heist Gear"
    BaseType "Burst Band" "Obsidian Sharpening Stone" "Precise Arrowhead"
    SetFontSize 45
    SetBorderColor 255 85 85 255
    SetBackgroundColor 31 0 75 255
    PlayAlertSound 3 300
    PlayEffect White
    MinimapIcon 1 White Raindrop

Show # %HS4 $type->heist->gear $tier->t2
    Rarity <= Rare
    Class "Heist Gear"
    BaseType "Aggregator Charm" "Fine Sharpening Stone" "Fragmenting Arrowhead"
    SetFontSize 45
    SetBorderColor 255 85 85 200
    SetBackgroundColor 0 0 0 255
    PlayAlertSound 3 300
    PlayEffect Grey
    MinimapIcon 1 Grey Raindrop

Show # %HS3 $type->heist->gear $tier->t3any
	Rarity <= Rare
	Class "Heist Gear"
	SetFontSize 40
	SetBorderColor 255 85 85 200
	SetBackgroundColor 0 0 0 255

#------------------------------------
#   [2504] Heist Tool
#------------------------------------
# !! Override 340 : "Heist Tool"

Show # %HS5 $type->heist->tool $tier->t1highlevel
    ItemLevel >= 83
    Rarity <= Rare
    Class "Heist Tool"
    BaseType "Grandmaster Keyring" "Master Lockpick" "Regicide Disguise Kit" "Silkweave Sole" "Steel Bracers" "Thaumaturgical Sensing Charm" "Thaumaturgical Ward" "Thaumetic Blowtorch" "Thaumetic Flashpowder"
    SetFontSize 45
    SetTextColor 250 165 0 255
    SetBorderColor 255 85 85 255
    SetBackgroundColor 31 0 75 255
    PlayAlertSound 3 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Raindrop

Show # %H5 $type->heist->tool $tier->t1
    Rarity <= Rare
    Class "Heist Tool"
    BaseType "Grandmaster Keyring" "Master Lockpick" "Regicide Disguise Kit" "Silkweave Sole" "Steel Bracers" "Thaumaturgical Sensing Charm" "Thaumaturgical Ward" "Thaumetic Blowtorch" "Thaumetic Flashpowder"
    SetFontSize 45
    SetBorderColor 255 85 85 255
    SetBackgroundColor 31 0 75 255
    PlayAlertSound 3 300
    PlayEffect White
    MinimapIcon 1 White Raindrop

Show # %HS4 $type->heist->tool $tier->t2
    Rarity <= Rare
    Class "Heist Tool"
    BaseType "Azurite Flashpowder" "Espionage Disguise Kit" "Fine Lockpick" "Polished Sensing Charm" "Runed Bracers" "Shining Ward" "Skeleton Keyring" "Sulphur Blowtorch" "Winged Sole"
    SetFontSize 45
    SetBorderColor 255 85 85 200
    SetBackgroundColor 0 0 0 255
    PlayAlertSound 3 300
    PlayEffect Grey
    MinimapIcon 1 Grey Raindrop

Show # %HS3 $type->heist->tool $tier->t3any
	Rarity <= Rare
	Class "Heist Tool"
	SetFontSize 40
	SetBorderColor 255 85 85 200
	SetBackgroundColor 0 0 0 255
