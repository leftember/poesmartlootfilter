#===============================================================================================================
# [[3000]] Heist Contracts and Blueprints
#===============================================================================================================

Show # $type->uniques->heist $tier->any
	Rarity Unique
	Class "Blueprint" "Contract"
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 230 186 55 255
	PlayAlertSound 1 300
	PlayEffect Yellow
	MinimapIcon 1 Yellow Star

Show # %H4 $type->heist->contract $tier->handpicked
    Class "Contract"
    BaseType "Contract: Bunker" "Contract: Laboratory" "Contract: Mansion" "Contract: Prohibited Library" "Contract: Records Office" "Contract: Repository" "Contract: Smuggler's Den" "Contract: Tunnels" "Contract: Underbelly"
    SetFontSize 45
    SetTextColor 220 60 60 255
    SetBorderColor 220 60 60 255
    SetBackgroundColor 0 0 0 255
    PlayAlertSound 4 300
    PlayEffect White
    MinimapIcon 2 White UpsideDownHouse

Show # %H4 $type->heist->contract $tier->any
	Class "Contract"
	SetFontSize 45
	SetTextColor 220 60 60 255
	SetBorderColor 220 60 60 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 4 300
	PlayEffect White
	MinimapIcon 2 White UpsideDownHouse

Show # %H5 $type->heist->blueprint $tier->handpicked
    Class "Blueprint"
    BaseType "Blueprint: Bunker" "Blueprint: Laboratory" "Blueprint: Mansion" "Blueprint: Prohibited Library" "Blueprint: Records Office" "Blueprint: Repository" "Blueprint: Smuggler's Den" "Blueprint: Tunnels" "Blueprint: Underbelly"
    SetFontSize 45
    SetTextColor 255 85 85 255
    SetBorderColor 255 85 85 255
    SetBackgroundColor 40 0 30 255
    PlayAlertSound 5 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow UpsideDownHouse

Show # %H5 $type->heist->blueprint $tier->any
	Class "Blueprint"
	SetFontSize 45
	SetTextColor 255 85 85 255
	SetBorderColor 255 85 85 255
	SetBackgroundColor 40 0 30 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Yellow UpsideDownHouse

#===============================================================================================================
# [[3100]] Expedition Logbooks
#===============================================================================================================

Show # $type->expedition->logbook->any $tier->any
	Class "Expedition Logbook"
	SetFontSize 45
	SetTextColor 255 85 85 255
	SetBorderColor 255 85 85 255
	SetBackgroundColor 40 0 30 255
	PlayAlertSound 5 300
	PlayEffect Yellow
	MinimapIcon 1 Yellow UpsideDownHouse

