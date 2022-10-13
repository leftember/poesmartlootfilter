#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Ancient Gauntlets" "Carnal Armour" "Elegant Round Shield" "Soldier Boots" "Triumphant Lamellar" "Saint's Hauberk" "Sentinel Jacket" "Sadist Garb" "Primal Arrow Quiver" "Sacrificial Garb" "Sage's Robe" "Varnished Coat" "Lacquered Garb" "Saintly Chainmail" "Desert Brigandine" "Spidersilk Robe" "Crusader Plate" "Necromancer Silks" "Hubris Circlet" "Crusader Gloves" "Sun Leather" "Full Wyrmscale" "Scholar's Robe" "Widowsilk Robe" "Exquisite Leather" "Destiny Leather" "Simple Robe" "Royal Burgonet" "Golden Plate" "Iron Circlet" "Cutthroat's Garb" "Astral Plate" "Elegant Ringmail" "Ambush Mitts" "Vaal Regalia" "Silken Vest" "Assassin's Garb" "Destroyer Regalia" "Murder Boots" "Wild Leather" "Holy Chainmail" "Callous Mask" "Colossal Tower Shield" "Prophet Crown" "Blunt Arrow Quiver" "Magistrate Crown" "Buckskin Tunic" "Vaal Spirit Shield" "Stealth Boots" "Glorious Plate" "Mirrored Spiked Shield" "Fugitive Boots" "Latticed Ringmail" "Praetor Crown" "Plate Vest" "Archon Kite Shield" "Crusader Chainmail" "Copper Plate" "Sharkskin Tunic" "Carnal Mitts" "Bone Armour" "Conquest Chainmail" "Silken Hood" "Assassin's Boots" "Ornate Ringmail" "Ebony Tower Shield" "Vaal Gauntlets" "Titanium Spirit Shield" "Murder Mitts" "Necromancer Circlet" "Great Crown" "Ezomyte Burgonet" "Hydrascale Gauntlets" "Pinnacle Tower Shield" "Coronal Leather" "Slink Boots" "Titan Greaves" "Soldier Gloves" "Carnal Boots" "Chiming Spirit Shield" "Goathide Boots" "Sorcerer Boots" "Legion Gloves" "Zealot Gloves" "Lacquered Buckler" "Arcanist Slippers" "Shagreen Boots" "Sinner Tricorne" "Titan Gauntlets" "Vaal Mask" "Bone Helmet" "Laminated Kite Shield" "Spike-Point Arrow Quiver" "Lacquered Helmet" "Two-Point Arrow Quiver" "Harlequin Mask" "Solaris Circlet" "Assassin's Mitts" "Arcanist Gloves" "Festival Mask" "Steelscale Gauntlets" "Goliath Greaves" "Silk Slippers" "Great Helmet" "Satin Gloves" "Steel Circlet" "Mind Cage" "Archon Kite Shield Piece" "Bronzescale Boots" "Samite Gloves" "Bronzescale Gauntlets" "Nightmare Bascinet" "Blunt Arrow Quiver Piece" "Callous Mask Piece" "Bone Circlet" "Sulphur Flask" "Ruby Flask" "Iron Flask" "Quartz Flask" "Stibnite Flask" "Granite Flask" "Silver Flask" "Sanctified Mana Flask" "Topaz Flask" "Infernal Sword" "Legion Sword" "Citadel Bow" "Coiled Staff" "Quarterstaff" "Imperial Staff" "Serpentine Staff" "Great Mallet" "Assassin Bow" "Imperial Bow" "Judgement Staff" "Despot Axe" "Maelström Staff" "Labrys" "Imperial Maul" "Highborn Staff" "Ezomyte Staff" "Death Bow" "Short Bow" "Spine Bow" "Military Staff" "Void Axe" "Ranger Bow" "Royal Bow" "Vile Staff" "Primordial Staff" "Lathi" "Terror Maul" "Abyssal Axe" "Vaal Axe" "Karui Maul" "Ezomyte Axe" "Iron Staff" "Crude Bow" "Spiraled Wand" "Tiger Sword" "Reaver Sword" "Woodsplitter" "Long Bow" "Recurve Bow" "Fiend Dagger" "Karui Chopper" "Jasper Chopper" "Brass Maul" "Lion Sword" "Meatgrinder" "Cutlass" "Gavel" "Ezomyte Blade" "Harbinger Bow" "Etched Greatsword" "Shadow Axe" "Highland Blade" "Ambusher" "Ornate Sword" "Imperial Claw" "Ornate Mace" "Headsman Axe" "Elegant Sword" "Bastard Sword" "Royal Staff" "Jagged Maul" "Sledgehammer" "Eternal Sword" "Void Sceptre" "Vaal Sceptre" "Carved Wand" "Steelhead" "Poleaxe" "Decimation Bow" "Gladius" "Dread Maul" "Shadow Sceptre" "Nailed Fist" "Sage Wand" "Tornado Wand" "Crystal Sceptre" "Boot Knife" "Hellion's Paw" "War Sword" "Gut Ripper" "Gnarled Branch" "Elder Sword" "Engraved Wand" "Vaal Claw" "Bone Bow" "Grinning Fetish" "Royal Skean" "Terror Claw" "Stiletto" "Imperial Staff Piece" "Legion Sword Piece" "Heavy Belt" "Leather Belt" "Onyx Amulet" "Sapphire Ring" "Cloth Belt" "Topaz Ring" "Chain Belt" "Opal Ring" "Amethyst Ring" "Crystal Belt" "Prismatic Ring" "Turquoise Amulet" "Two-Stone Ring" "Ruby Ring" "Jade Amulet" "Paua Amulet" "Amber Amulet" "Lapis Amulet" "Paua Ring" "Unset Ring" "Coral Ring" "Iron Ring" "Gold Ring" "Moonstone Ring" "Rustic Sash" "Gold Amulet" "Cloth Belt Piece" "Agate Amulet" "Coral Amulet" "Citrine Amulet" "Large Cluster Jewel" "Viridian Jewel" "Crimson Jewel" "Cobalt Jewel" "Small Cluster Jewel"
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

