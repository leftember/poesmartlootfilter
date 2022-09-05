#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Carnal Armour" "Elegant Round Shield" "Soldier Boots" "Triumphant Lamellar" "Saint's Hauberk" "Ancient Gauntlets" "Sacrificial Garb" "Spidersilk Robe" "Sage's Robe" "Sadist Garb" "Full Dragonscale" "Zodiac Leather" "Sentinel Jacket" "Crusader Plate" "Lacquered Garb" "Scholar's Robe" "Saintly Chainmail" "Exquisite Leather" "Destiny Leather" "Necromancer Silks" "Sun Leather" "Desert Brigandine" "Widowsilk Robe" "Iron Circlet" "Full Wyrmscale" "Cutthroat's Garb" "Varnished Coat" "Murder Mitts" "Elegant Ringmail" "Crusader Gloves" "Simple Robe" "Astral Plate" "Assassin's Garb" "Stealth Boots" "Destroyer Regalia" "Vaal Regalia" "Silken Vest" "Golden Plate" "Coronal Leather" "Glorious Plate" "Murder Boots" "Royal Burgonet" "Primal Arrow Quiver" "Carnal Mitts" "Ambush Mitts" "Holy Chainmail" "Hubris Circlet" "Buckskin Tunic" "Crusader Chainmail" "Magistrate Crown" "Bone Armour" "Archon Kite Shield" "Fugitive Boots" "Vaal Spirit Shield" "Wild Leather" "Callous Mask" "Copper Plate" "Plate Vest" "Prophet Crown" "Assassin's Boots" "Blunt Arrow Quiver" "Praetor Crown" "Conquest Chainmail" "Colossal Tower Shield" "Sharkskin Tunic" "Necromancer Circlet" "Slink Boots" "Great Crown" "Latticed Ringmail" "Carnal Boots" "Titan Greaves" "Ezomyte Burgonet" "Hydrascale Gauntlets" "Pinnacle Tower Shield" "Ornate Ringmail" "Vaal Gauntlets" "Titanium Spirit Shield" "Vaal Mask" "Goathide Boots" "Mirrored Spiked Shield" "Shagreen Boots" "Bone Helmet" "Silken Hood" "Soldier Gloves" "Sorcerer Boots" "Assassin's Mitts" "Legion Gloves" "Zealot Gloves" "Lacquered Buckler" "Arcanist Slippers" "Ebony Tower Shield" "Titan Gauntlets" "Lacquered Helmet" "Arcanist Gloves" "Laminated Kite Shield" "Sinner Tricorne" "Steelscale Gauntlets" "Two-Point Arrow Quiver" "Bronzescale Gauntlets" "Archon Kite Shield Piece" "Callous Mask Piece" "Goliath Greaves" "Harlequin Mask" "Solaris Circlet" "Spike-Point Arrow Quiver" "Festival Mask" "Mind Cage" "Blunt Arrow Quiver Piece" "Bronzescale Boots" "Great Helmet" "Silk Slippers" "Samite Gloves" "Satin Gloves" "Sulphur Flask" "Ruby Flask" "Quartz Flask" "Iron Flask" "Stibnite Flask" "Topaz Flask" "Granite Flask" "Silver Flask" "Sanctified Mana Flask" "Maelström Staff" "Royal Bow" "Death Bow" "Imperial Bow" "Judgement Staff" "Ranger Bow" "Quarterstaff" "Despot Axe" "Infernal Sword" "Assassin Bow" "Ezomyte Staff" "Vaal Axe" "Primordial Staff" "Short Bow" "Serpentine Staff" "Lathi" "Vile Staff" "Military Staff" "Spine Bow" "Void Axe" "Imperial Maul" "Highborn Staff" "Imperial Staff" "Citadel Bow" "Iron Staff" "Steelwood Bow" "Legion Sword" "Karui Maul" "Fiend Dagger" "Spiraled Wand" "Tiger Sword" "Great Mallet" "Long Bow" "Meatgrinder" "Crude Bow" "Recurve Bow" "Coiled Staff" "Reaver Sword" "Abyssal Axe" "Bastard Sword" "Etched Greatsword" "Cutlass" "Ezomyte Axe" "Shadow Axe" "Harbinger Bow" "Jasper Chopper" "Ezomyte Blade" "Ornate Sword" "Poleaxe" "Nailed Fist" "Lion Sword" "Headsman Axe" "Royal Staff" "Highland Blade" "Woodsplitter" "Gemstone Sword" "Vaal Sceptre" "Carved Wand" "Karui Chopper" "Ambusher" "Jagged Maul" "Steelhead" "Gavel" "Ezomyte Dagger" "Decimation Bow" "Terror Maul" "Elegant Sword" "Brass Maul" "Dread Maul" "Imperial Claw" "Sledgehammer" "Void Sceptre" "Gladius" "Sage Wand" "Crystal Sceptre" "Ornate Mace" "Eternal Sword" "Tornado Wand" "Shadow Sceptre" "Royal Skean" "Hellion's Paw" "War Sword" "Gut Ripper" "Elder Sword" "Gnarled Branch" "Grinning Fetish" "Terror Claw" "Imperial Staff Piece" "Legion Sword Piece" "Stiletto" "Engraved Wand" "Boot Knife" "Vaal Claw" "Heavy Belt" "Leather Belt" "Onyx Amulet" "Chain Belt" "Sapphire Ring" "Cloth Belt" "Opal Ring" "Crystal Belt" "Topaz Ring" "Jade Amulet" "Turquoise Amulet" "Two-Stone Ring" "Amber Amulet" "Ruby Ring" "Prismatic Ring" "Paua Amulet" "Amethyst Ring" "Lapis Amulet" "Paua Ring" "Moonstone Ring" "Unset Ring" "Rustic Sash" "Iron Ring" "Gold Amulet" "Gold Ring" "Coral Ring" "Citrine Amulet" "Agate Amulet" "Cloth Belt Piece" "Coral Amulet" "Large Cluster Jewel" "Viridian Jewel" "Cobalt Jewel" "Crimson Jewel" "Small Cluster Jewel"
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

