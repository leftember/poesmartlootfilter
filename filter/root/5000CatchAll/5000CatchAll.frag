#------------------------------------
#   [4804] Show All unknown Section
#------------------------------------
# THIS ENTRY IS CAUGHT IN 3 CASES:
# 1) YOUR FILTER IS OUT OF DATE!
# 2) YOU DID SOMETHING SILLY WHEN EDITING THE FILTER
# 3) YOU ENCOUNTERED A PREVIOUSLY UNKNOWN UNIQUE

Show # $type->anyremaining $tier->restex
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBorderColor 255 0 255 255
	SetBackgroundColor 100 0 100 255
	PlayAlertSound 3 300
	PlayEffect Pink
	MinimapIcon 0 Pink Circle
