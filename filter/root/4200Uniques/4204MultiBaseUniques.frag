#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Elegant Round Shield" "Great Crown" "Saint's Hauberk" "Saintly Chainmail" "Carnal Armour" "Soldier Boots" "Necromancer Silks" "Sadist Garb" "Widowsilk Robe" "Varnished Coat" "Lacquered Garb" "Crusader Plate" "Elegant Ringmail" "Sentinel Jacket" "Vaal Gauntlets" "Destiny Leather" "Necromancer Circlet" "Full Wyrmscale" "Desert Brigandine" "Sorcerer Boots" "Sinner Tricorne" "Exquisite Leather" "Praetor Crown" "Destroyer Regalia" "Hydrascale Gauntlets" "Spidersilk Robe" "Hubris Circlet" "Solaris Circlet" "Prophet Crown" "Murder Boots" "Golden Plate" "Titan Greaves" "Simple Robe" "Crusader Gloves" "Magistrate Crown" "Stealth Boots" "Carnal Mitts" "Steelscale Gauntlets" "Bone Armour" "Assassin's Garb" "Vaal Regalia" "Slink Boots" "Holy Chainmail" "Cutthroat's Garb" "Astral Plate" "Crusader Chainmail" "Ezomyte Burgonet" "Sharkskin Tunic" "Assassin's Mitts" "Loricated Ringmail" "Ebony Tower Shield" "Sage's Robe" "Conquest Chainmail" "Archon Kite Shield" "Buckskin Tunic" "Strapped Leather" "Archon Kite Shield Piece" "Latticed Ringmail" "Titan Gauntlets" "Wild Leather" "Iron Circlet" "Scholar's Robe" "Goliath Greaves" "Copper Plate" "Bone Helmet" "Harlequin Mask" "Lacquered Buckler" "Ornate Ringmail" "Vaal Mask" "Two-Point Arrow Quiver" "Plate Vest" "Zealot Gloves" "Arcanist Slippers" "Silk Slippers" "Silken Hood" "Soldier Gloves" "Legion Gloves" "Laminated Kite Shield" "Sorcerer Gloves" "Nightmare Bascinet" "Goathide Boots" "Blunt Arrow Quiver Piece" "Arcanist Gloves" "Titanium Spirit Shield" "Bronzescale Boots" "Great Helmet" "Shagreen Boots" "Spike-Point Arrow Quiver" "Festival Mask" "Sharktooth Arrow Quiver" "Colossal Tower Shield" "Samite Gloves" "Tarnished Spirit Shield" "Murder Mitts" "Sulphur Flask" "Iron Flask" "Quartz Flask" "Granite Flask" "Topaz Flask" "Stibnite Flask" "Silver Flask" "Sanctified Mana Flask" "Legion Sword" "Maelström Staff" "Judgement Staff" "Fiend Dagger" "Ezomyte Axe" "Imperial Staff" "Death Bow" "Ambusher" "Military Staff" "Lathi" "Reaver Sword" "Great Mallet" "Ezomyte Staff" "Void Sceptre" "Infernal Sword" "Citadel Bow" "Terror Maul" "Serpentine Staff" "Meatgrinder" "Short Bow" "Gladius" "Harbinger Bow" "Tiger Sword" "Tornado Wand" "Imperial Bow" "Spine Bow" "Abyssal Axe" "Long Bow" "Nailed Fist" "Karui Chopper" "Iron Staff" "Gemstone Sword" "Assassin Bow" "Vaal Axe" "Despot Axe" "Eternal Sword" "Decimation Bow" "Karui Maul" "Void Axe" "Crude Bow" "Imperial Staff Piece" "Ornate Mace" "Ezomyte Blade" "Ranger Bow" "Jasper Chopper" "Steelhead" "Vile Staff" "Imperial Skean" "Ornate Sword" "Vaal Claw" "Engraved Wand" "Legion Sword Piece" "Shadow Axe" "Recurve Bow" "Royal Staff" "Gnarled Branch" "Boot Knife" "Royal Bow" "Headsman Axe" "Jagged Maul" "Etched Greatsword" "Poleaxe" "Highland Blade" "Woodsplitter" "Sledgehammer" "Bastard Sword" "Carved Wand" "Grinning Fetish" "Gut Ripper" "Shadow Sceptre" "Royal Skean" "Elder Sword" "Stiletto" "Brass Maul" "Primordial Staff" "Dread Maul" "Sage Wand" "Vaal Sceptre" "Elegant Sword" "Terror Claw" "War Sword" "Midnight Blade" "Lion Sword" "Gavel" "Spiraled Wand" "Onyx Amulet" "Leather Belt" "Cloth Belt" "Turquoise Amulet" "Amber Amulet" "Opal Ring" "Jade Amulet" "Studded Belt" "Chain Belt" "Amethyst Ring" "Heavy Belt" "Topaz Ring" "Ruby Ring" "Prismatic Ring" "Paua Amulet" "Unset Ring" "Sapphire Ring" "Two-Stone Ring" "Citrine Amulet" "Iron Ring" "Paua Ring" "Cloth Belt Piece" "Agate Amulet" "Lapis Amulet" "Rustic Sash" "Gold Amulet" "Gold Ring" "Moonstone Ring" "Coral Amulet" "Crimson Jewel" "Small Cluster Jewel" "Cobalt Jewel" "Viridian Jewel"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 175 96 37 255
    PlayAlertSound 2 300
    PlayEffect Blue
    MinimapIcon 1 Blue Star

Show # %D4 $type->uniques $tier->highvinktar
    ItemLevel >= 81
    Rarity Unique
    BaseType == "Imperial Staff"
    SetFontSize 45
    SetTextColor 0 0 0 255
    SetBorderColor 0 0 0 255
    SetBackgroundColor 175 96 37 255
    PlayAlertSound 2 300
    PlayEffect Yellow
    MinimapIcon 1 Brown Star

