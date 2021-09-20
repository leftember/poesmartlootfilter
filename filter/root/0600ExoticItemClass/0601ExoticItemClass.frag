#===============================================================================================================
# [[0600]] Exotic Item Classes
#===============================================================================================================
# !! Override 060 : "exotic gear: trinkets, watchstones etc., invitations"

#------------------------------------
#   [0601] Trinkets
#------------------------------------

Show # $type->artefact->trinkets $tier->anytrinket
	Class "Trinkets"
	SetFontSize 45
	SetTextColor 240 0 0 255
	SetBorderColor 240 0 0 255
	SetBackgroundColor 70 0 20 255
	PlayAlertSound 3 300
	PlayEffect Orange
	MinimapIcon 0 Orange Pentagon

#------------------------------------
#   [0602] Magic Watchstones
#------------------------------------

Show # $type->artefact->watchstones $tier->craftablewatchstone
Rarity <= Unique
BaseType "Glennach Cairns Watchstone" "Haewark Hamlet Watchstone" "Lex Ejoris Watchstone" "Lex Proxima Watchstone" "Lira Arthain Watchstone" "New Vastir Watchstone" "Tirn's End Watchstone" "Valdo's Rest Watchstone"
SetFontSize 45
SetTextColor 240 0 0 255
SetBorderColor 240 0 0 255
SetBackgroundColor 70 0 20 255
PlayAlertSound 3 300
PlayEffect Orange
MinimapIcon 0 Orange Pentagon

#------------------------------------
#   [0603] Secret Society Equipment
#------------------------------------

Show # $type->artefact->redacted $tier->scp3889
	Class "Fishing Rod"
	SetFontSize 45
	SetTextColor 240 0 0 255
	SetBorderColor 240 0 0 255
	SetBackgroundColor 70 0 20 255
	PlayAlertSound 3 300
	PlayEffect Orange
	MinimapIcon 0 Orange Pentagon

#------------------------------------
#   [0604] Craftable Invitations
#------------------------------------

Show # $type->questlikeexception $tier->questitems
	Class "Pantheon Soul" "Quest"
	SetFontSize 45
	SetTextColor 74 230 58 255
	SetBorderColor 74 230 58 255
	SetBackgroundColor 0 0 0 255
	PlayAlertSound 3 300
	PlayEffect Green
	MinimapIcon 1 Green Pentagon

Show # $type->exotic->invitation $tier->t1
Rarity <= Rare
BaseType == "Maven's Invitation: The Formed" "Maven's Invitation: The Twisted"
SetFontSize 45
SetTextColor 225 111 255 255
SetBorderColor 225 111 255 255
SetBackgroundColor 255 255 255 255
PlayAlertSound 6 300
PlayEffect Red
MinimapIcon 0 Red Star

Show # $type->exotic->invitation $tier->t2
Rarity <= Rare
BaseType == "Maven's Invitation: The Forgotten"
SetFontSize 45
SetTextColor 255 255 255 255
SetBorderColor 255 255 255 255
SetBackgroundColor 225 111 255 255
PlayAlertSound 1 300
PlayEffect Red
MinimapIcon 0 Red Pentagon

Show # $type->exotic->invitation $tier->t3
Rarity <= Rare
BaseType == "Maven's Invitation: Glennach Cairns" "Maven's Invitation: Haewark Hamlet" "Maven's Invitation: Lex Ejoris" "Maven's Invitation: Lex Proxima" "Maven's Invitation: Lira Arthain" "Maven's Invitation: New Vastir" "Maven's Invitation: The Feared" "Maven's Invitation: The Hidden" "Maven's Invitation: Tirn's End" "Maven's Invitation: Valdo's Rest"
SetFontSize 45
SetTextColor 0 0 0 255
SetBorderColor 0 0 0 255
SetBackgroundColor 225 111 255 255
PlayAlertSound 3 300
PlayEffect Yellow
MinimapIcon 1 Yellow Pentagon
