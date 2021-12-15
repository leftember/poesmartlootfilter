
#===============================================================================================================
# [[3700]] Currency - Prophecies
#===============================================================================================================
# !! Chapter "Currencylike item tierlists 2"
# !! Override 710 : "Prophecies"

Show # $type->currency->prophecy $tier->t1
    Class "Currency"
    BaseType "Prophecy"
    Prophecy == "Darktongue's Shriek" "Fated Connections" "Monstrous Treasure" "Storm on the Reef" "The Forgotten Soldiers" "The Queen's Sacrifice" "The Unbreathing Queen V" "Trash to Treasure" "Unbearable Whispers IV" "Unbearable Whispers V"
    SetFontSize 45
    SetTextColor 225 111 255 255
    SetBorderColor 225 111 255 255
    SetBackgroundColor 255 255 255 255
    PlayAlertSound 6 300
    PlayEffect Red
    MinimapIcon 0 Red Star

Show # $type->currency->prophecy $tier->t2
Class "Currency"
    BaseType "Prophecy"
    Prophecy == "A Prodigious Hand" "Beyond Sight IV" "Deadly Rivalry V" "Echoes of Witchcraft" "Pools of Wealth" "Song of the Sekhema" "Thaumaturgical History IV" "The Child of Lunaris" "The Feral Lord V" "The Mentor" "The Plaguemaw V" "The Unbreathing Queen III" "The Unbreathing Queen IV" "Unbearable Whispers III"
    SetFontSize 45
    SetTextColor 255 255 255 255
    SetBorderColor 255 255 255 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 1 300
    PlayEffect Red
    MinimapIcon 0 Red Hexagon

Show # %H5 $type->currency->prophecy $tier->t3
    Class "Currency"
    BaseType "Prophecy"
    Prophecy == "A Dishonourable Death" "A Vision of Ice and Fire" "Ancient Doom" "Battle Hardened" "Cleanser of Sins" "Cold Blooded Fury" "Day of Sacrifice III" "Day of Sacrifice IV" "Deadly Rivalry II" "Deadly Rivalry III" "Defiled in the Sceptre" "Dying Cry" "Fire and Ice" "Fire, Wood and Stone" "In the Grasp of Corruption" "Last of the Wildmen" "Lost in the Pages" "Nature's Resilience" "Path of Betrayal" "Severed Limbs" "Storm on the Horizon" "Thaumaturgical History II" "Thaumaturgical History III" "The Apex Predator" "The Bishop's Legacy" "The Bowstring's Music" "The Dream Trial" "The Feral Lord III" "The Feral Lord IV" "The Great Leader of the North" "The Great Mind of the North" "The Jeweller's Touch" "The King's Path" "The Misunderstood Queen" "The Plaguemaw III" "The Plaguemaw IV" "The Servant's Heart" "The Sword King's Passion" "The Watcher's Watcher" "Twice Enchanted" "Unbearable Whispers II" "Visions of the Drowned" "Wind and Thunder"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Hexagon

Show # %H5 $type->currency->prophecy $tier->t3mapping
    Class "Currency"
    BaseType "Prophecy"
    Prophecy == "A Master Seeks Help" "Anarchy's End III" "Anarchy's End IV" "Beyond Sight III" "Bountiful Traps" "Crushing Squall" "Deadly Rivalry IV" "Deadly Twins" "Fire from the Sky" "Hidden Reinforcements" "Hidden Vaal Pathways" "Ice from Above" "Lightning Falls" "Mysterious Invaders" "Overflowing Riches" "Plague of Frogs" "Plague of Rats" "Possessed Foe" "Reforged Bonds" "The Beautiful Guide" "The Cursed Choir" "The Dreamer's Dream" "The Fortune Teller's Collection" "The Four Feral Exiles" "The Hungering Swarm" "The Trembling Earth" "The Twins" "The Undead Storm" "The Warmongers III" "The Warmongers IV" "Vaal Winds" "Waiting in Ambush"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 240 100 0 255
    SetBackgroundColor 225 111 255 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Yellow Hexagon

Show # %H4 $type->currency->prophecy $tier->t4upgrade
    Class "Currency"
    BaseType "Prophecy"
    Prophecy == "A Forest of False Idols" "A Rift in Time" "Agony at Dusk" "Black Devotion" "Blind Faith" "Blinding Light" "Burning Dread" "Cold Greed" "Crimson Hues" "Dance of Steel" "Dark Instincts" "End of the Light" "Faith Exhumed" "Fire and Brimstone" "From The Void" "Greed's Folly" "Mouth of Horrors" "Pleasure and Pain" "Power Magnified" "Sun's Punishment" "The Beginning and the End" "The Bloody Flowers Redux" "The Dreaded Rhoa" "The Fall of an Empire" "The Flow of Energy" "The Karui Rebellion" "The King and the Brambles" "The Malevolent Witch" "The Nightmare Awakens" "The Silverwood" "The Snuffed Flame" "The Storm Spire" "Trapped in the Tower" "Winter's Mournful Melodies"
    SetFontSize 45
    SetTextColor 225 111 255 255
    SetBorderColor 0 240 190 255
    SetBackgroundColor 0 0 0 255
    PlayAlertSound 2 300
    PlayEffect White
    MinimapIcon 2 White Hexagon

Hide # %H3 $type->currency->prophecy $tier->t4drop
	Class "Currency"
	BaseType "Prophecy"
	Prophecy == "A Call into the Void" "A Firm Foothold" "A Whispered Prayer" "Abnormal Effulgence" "Against the Tide" "Baptism by Death" "Blood in the Eyes" "Blood of the Betrayed" "Custodians of Silence" "Erasmus' Gift" "Fear's Wide Reach" "Flesh of the Beast" "From Death Springs Life" "Graceful Flames" "Heart of the Fire" "Kalandra's Craft" "Notched Flesh" "Roth's Legacy" "Strong as a Bull" "The Ambitious Bandit III" "The Brutal Enforcer" "The Eagle's Cry" "The Flayed Man" "The God of Misfortune" "The Lady in Black" "The Last Watch" "The Lost Maps" "The Lost Undying" "The Mysterious Gift" "The Nest" "The Petrified" "The Prison Guard" "The Prison Key" "The Queen's Vaults" "The Sinner's Stone" "The Soulless Beast" "The Vanguard" "The Walking Mountain" "The Ward's Ward" "Weeping Death"
	SetFontSize 45
	SetTextColor 225 111 255 255
	SetBorderColor 225 111 255 255
	SetBackgroundColor 0 0 0 255

Hide # %H2 $type->currency->prophecy $tier->t5
	Class "Currency"
	BaseType "Prophecy"
	Prophecy == "A Regal Death" "A Valuable Combination" "An Unseen Peril" "Anarchy's End I" "Anarchy's End II" "Beyond Sight I" "Beyond Sight II" "Day of Sacrifice I" "Day of Sacrifice II" "Deadly Rivalry I" "Ending the Torment" "Erased from Memory" "Fallow At Last" "Forceful Exorcism" "Gilded Within" "Golden Touch" "Heavy Blows" "Holding the Bridge" "Hunter's Lesson" "Lasting Impressions" "Living Fires" "Nemesis of Greed" "Rebirth" "Resistant to Change" "Risen Blood" "Smothering Tendrils" "Soil, Worms and Blood" "Thaumaturgical History I" "The Alchemist" "The Ambitious Bandit I" "The Ambitious Bandit II" "The Brothers of Necromancy" "The Corrupt" "The Feral Lord I" "The Feral Lord II" "The Forgotten Garrison" "The Hardened Armour" "The Invader" "The Plaguemaw I" "The Plaguemaw II" "The Scout" "The Sharpened Blade" "The Singular Spirit" "The Stockkeeper" "The Unbreathing Queen I" "The Unbreathing Queen II" "The Undead Brutes" "The Warmongers I" "The Warmongers II" "The Wealthy Exile" "Touched by the Wind" "Unbearable Whispers I" "Undead Uprising" "Unnatural Energy" "Vaal Invasion" "Vital Transformation"
	SetFontSize 40
	SetTextColor 225 111 255 255
	SetBorderColor 0 0 0

Show # $type->currency->prophecy $tier->restex
    Class "Currency"
    BaseType "Prophecy"
    SetFontSize 45
    SetTextColor 255 0 255 255
    SetBorderColor 255 0 255 255
    SetBackgroundColor 100 0 100 255
    PlayAlertSound 3 300
    PlayEffect Pink
    MinimapIcon 0 Pink Circle

