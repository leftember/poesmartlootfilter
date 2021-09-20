#===============================================================================================================
# NeverSink's Indepth Loot Filter - for Path of Exile
#===============================================================================================================
# VERSION:  8.2.1.2021.263.13
# TYPE:     4-VERY STRICT
# STYLE:    AZURITE
# AUTHOR:   NeverSink
# BUILDNOTES: Filter generated with NeverSink's FilterpolishZ and the domainlanguage Exo.
#
#------------------------------------
# LINKS TO LATEST VERSION AND FILTER EDITOR
#------------------------------------
#
# EDIT/CUSTOMIZE FILTER ON: 	https://www.FilterBlade.xyz
# GET THE LATEST VERSION ON: 	https://www.FilterBlade.xyz or https://github.com/NeverSinkDev/NeverSink-Filter
# POE FORUM THREAD: 			https://goo.gl/oQn4EN
#
#------------------------------------
# SUPPORT THE DEVELOPMENT:
#------------------------------------
#
# SUPPORT ME ON PATREON: 		https://www.patreon.com/Neversink
# SUPPORT THE FILTERBLADE TEAM: https://www.filterblade.xyz/About
#
#------------------------------------
# INSTALLATION / UPDATE :
#------------------------------------
#
# 0) It's recommended to check for updates once a month or at least before new leagues, to receive economy finetuning and new features!
# 1) Paste this file into the following folder: %userprofile%/Documents/My Games/Path of Exile
# 2) INGAME: Escape -> Options -> UI -> Scroll down -> Select the filter from the Dropdown box
#
#------------------------------------
# CONTACT - if you want to get notifications about updates or just get in touch:
#------------------------------------
# PLEASE READ THE FAQ ON https://goo.gl/oQn4EN BEFORE ASKING QUESTIONS
#
# TWITTER: @NeverSinkDev
# TWITCH:  https://www.twitch.tv/neversink
# DISCORD: https://discord.gg/mye6xhF
# GITHUB:  NeverSinkDev

#===============================================================================================================
# [WELCOME] TABLE OF CONTENTS + QUICKJUMP TABLE
#===============================================================================================================
# [[0100]] OVERRIDE AREA 1 - Override ALL rules here
# [[0100]] Global overriding rules
# [[0200]] High tier influenced items
#   [0201] Influenced Maps
#   [0202] Crusader
#   [0203] Warlord
#   [0204] Redeemer
#   [0205] Hunter
#   [0206] Shaper
#   [0207] Elder
#   [0208] Remaining
# [[0300]] Exotic Bases
# [[0400]] IDENTIFIED MOD FILTERING
#   [0401] Physical
#   [0402] Elemental
#   [0403] Gembased
#   [0404] Caster and Spellslinger
#   [0405] Boots
#   [0406] Gloves
#   [0407] Helmets
#   [0408] Amulets
#   [0409] Rings
#   [0410] Quivers
#   [0411] Belts
#   [0412] Shields
#   [0413] Jewels
#   [0414] Misc
# [[0500]] Exotic Mods Filtering
#   [0501] Veiled/Betrayal
#   [0502] Incursion/Temple Mods
#   [0503] Bestiary
#   [0504] Other
# [[0600]] Exotic Item Classes
#   [0601] Trinkets
#   [0602] Magic Watchstones
#   [0603] Secret Society Equipment
#   [0604] Craftable Invitations
# [[0700]] Exotic Item Variations
#   [0701] Double Corruptions
#   [0702] Abyss Jeweled Rares
#   [0703] Synthesised
#   [0704] Fractured
#   [0705] Enchanted
# [[0800]] Jewels
#   [0801] Special Cases
#   [0802] Cluster Jewels
#   [0803] Abyss Jewels
#   [0804] Generic Jewels
# [[0900]] Recipes and 5links
# [[1000]] High Level Crafting Bases
#   [1001] ILVL 84
#   [1002] ILVL ANY
#   [1003] RGB Endgame
#   [1004] Chisel Recipes
# [[1100]] Chancing Bases
# [[1200]] Endgame Flasks
#   [1201] High quality assorted flasks
#   [1202] Utility OR quality flasks
#   [1203] Early mapping life/mana/utility flasks
# [[1300]] Misc Rules
# [[1400]] Hide Layer 1 - Normal and Magic Endgame Gear
# [[1500]] Rare Item Decorators
# [[1600]] Endgame - Rare - Exotic Corrupted Items
# [[1700]] Endgame - Rare - Accessoires
# [[1800]] Endgame - Rare - Accessoires
# [[1900]] Endgame - Rare - Gear - T1 - handpicked
# [[2000]] Endgame - Rare - Gear - T2 - handpicked
# [[2100]] Endgame - Rare - Gear - T2 - handpicked
# [[2200]] Endgame - Rare - Gear - T3 - droplevel-based
# [[2300]] Endgame - Rare - Gear - T4 - rest
# [[2400]] Hide Layer 2 - Rare Gear
# [[2500]] Heist Gear
#   [2501] Heist Cloak
#   [2502] Heist Brooch
#   [2503] Heist Gear
#   [2504] Heist Tool
# [[2600]] Gem Tierlists
#   [2601] Exceptional Gems - Awakened and AltQuality
#   [2602] Exceptional Gems - Special gems
#   [2603] High Quality and Leveled Gems
# [[2700]] REPLICA UNIQUES
# [[2800]] Special Maps
#   [2801] Unique Maps
#   [2802] Blighted maps
#   [2803] Delirium/Blight/Enchanted Maps!
#   [2804] Beyond-Nemesis Maps, for those juicy sextants.
# [[2900]] Normal Map Progression
#   [2901] Map progression
#   [2902] Labyrinth items, Offerings
# [[3000]] Heist Contracts and Blueprints
# [[3100]] Expedition Logbooks
# [[3200]] Fragments
#   [3201] Scarabs
#   [3202] Regular Fragment Tiering
# [[3300]] Currency - Exceptions - Stacked Currency
#   [3301] Perandus Coins
#   [3302] Heist Coins
# [[3400]] Currency - Exceptions - Leveling Currencies
# [[3500]] Currency - Regular Currency Tiering
# [[3600]] Currency - SPECIAL
#   [3601] Delirum Orbs
#   [3602] Delve - Resonators
#   [3603] Delve - Fossils
#   [3604] Blight - Oils
#   [3605] Expedition Currencies
#   [3606] Essences
#   [3607] Incubators
#   [3608] Others
# [[3700]] Currency - Prophecies
# [[3800]] Currency - Splinters
#   [3801] Simulacrum Splinters
# [[3900]] Divination Cards
# [[4000]] Remaining Currency
# [[4100]] Questlike-Items1 (override uniques)
# [[4200]] Uniques
#   [4201] Exceptions #1
#   [4202] Tier 1 uniques
#   [4203] Exceptions #2
#   [4204] Tier 2 uniques
#   [4205] Multi-Unique bases.
#   [4206] Tier 3 uniques 
#   [4207] Tier 4 uniques
# [[4300]] Misc Map Items
# [[4400]] Questlike-Items2
# [[4500]] Hide outdated leveling flasks
# [[4600]] Leveling - Flasks
#   [4601] Hybrid flasks
#   [4602] Life flasks
#   [4603] Mana flasks
# [[4700]] Leveling - Rules
#   [4701] Rares - Decorators
#   [4702] Rares - Universal
#   [4703] Rares - Caster
#   [4704] Rares - Archer
#   [4705] Rares - Melee
# [[4800]] Leveling - Useful magic and normal items
#   [4801] Normals
#   [4802] Weapon Progression
#   [4803] Remaining Magics
#   [4804] Show All unknown Section

#===============================================================================================================
# [[0100]] Global overriding rules
#===============================================================================================================
# !! Chapter "High Priority Rules"
# !! Override 010 : "ALL Rules"

Show # $type->6l $tier->arm
	Corrupted False
	LinkedSockets 6
	Rarity <= Rare
	Class "Body Armours"
	SetFontSize 45
	SetTextColor 200 0 0 255
	SetBorderColor 200 0 0 255
	SetBackgroundColor 255 255 255 255
	PlayAlertSound 6 300
	PlayEffect Red
	MinimapIcon 0 Red Star

Show # $type->6l $tier->wep
	LinkedSockets 6
	Rarity <= Rare
	SetFontSize 45
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 200 0 0 255
	PlayAlertSound 1 300
	PlayEffect Red
	MinimapIcon 0 Red Diamond

