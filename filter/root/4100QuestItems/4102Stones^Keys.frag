# !! Override 780 : "Quest Items and Relic Keys"

Show # $type->miscmapitemsextra $tier->relickeys
    BaseType "Ancient Reliquary Key" "Timeworn Reliquary Key" "Vaal Reliquary Key"
    SetFontSize 45
    SetTextColor 130 214 255 255
    SetBorderColor 130 214 255 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->miscmapitemsextra $tier->inscribedultimatum
    BaseType "Inscribed Ultimatum"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Hexagon

Show # $type->miscmapitemsextra $tier->alvatemple
    BaseType "Chronicle of Atzoatl"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Hexagon

Show # $type->miscmapitems $tier->restex
	Class "Misc Map Items"
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBorderColor 255 0 255 255
	SetBackgroundColor 100 0 100 255
	PlayAlertSound 3 300
	PlayEffect Pink
	MinimapIcon 0 Pink Circle

#===============================================================================================================
# [[4400]] Questlike-Items2
#===============================================================================================================

Show # $type->questlike $tier->invitations
    BaseType "Maven's"
    SetFontSize 45
    SetTextColor 74 230 58 255
    SetBorderColor 74 230 58 255
    SetBackgroundColor 0 0 0 255
    PlayAlertSound 3 300
    PlayEffect Green
    MinimapIcon 1 Green Pentagon

Show # $type->questlike $tier->labyrinthconsumable
	Class "Labyrinth"
	SetFontSize 45
	SetTextColor 74 230 58 255
	SetBorderColor 74 230 58 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Green
	MinimapIcon 1 Green Pentagon

Show # $type->questlike $tier->incursionconsumable
	Class "Incursion Item"
	SetFontSize 45
	SetTextColor 74 230 58 255
	SetBorderColor 74 230 58 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Green
	MinimapIcon 1 Green Pentagon

Show # $type->questlike $tier->questwatchstones
	Class "Atlas Upgrade Item"
	SetFontSize 45
	SetTextColor 74 230 58 255
	SetBorderColor 74 230 58 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Green
	MinimapIcon 1 Green Pentagon
