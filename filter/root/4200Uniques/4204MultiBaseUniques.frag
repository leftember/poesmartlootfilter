#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Carnal Armour" "Carnal Mitts" "Elegant Round Shield" "Buckskin Tunic" "Soldier Boots" "Triumphant Lamellar" "Sentinel Jacket" "Sadist Garb" "Royal Burgonet" "Assassin's Mitts" "Sage's Robe" "Dragonscale Boots" "Sharkskin Tunic" "Holy Chainmail" "Crusader Gloves" "Saint's Hauberk" "Spidersilk Robe" "Crusader Plate" "Widowsilk Robe" "Necromancer Silks" "Primal Arrow Quiver" "Varnished Coat" "Lacquered Garb" "Scholar's Robe" "Assassin's Garb" "Full Dragonscale" "Astral Plate" "Saintly Chainmail" "Exquisite Leather" "Destiny Leather" "Elegant Ringmail" "Silken Vest" "Sun Leather" "Cutthroat's Garb" "Vaal Regalia" "Simple Robe" "Wild Leather" "Full Wyrmscale" "Murder Boots" "Golden Plate" "Destroyer Regalia" "Magistrate Crown" "Colossal Tower Shield" "Hubris Circlet" "Prophet Crown" "Glorious Plate" "Praetor Crown" "Vaal Greaves" "Plate Vest" "Bone Armour" "Latticed Ringmail" "Crusader Chainmail" "Archon Kite Shield" "Copper Plate" "Chiming Spirit Shield" "Fugitive Boots" "Blunt Arrow Quiver" "Ebony Tower Shield" "Conquest Chainmail" "Stealth Boots" "Pinnacle Tower Shield" "Callous Mask" "Great Crown" "Lacquered Buckler" "Hydrascale Gauntlets" "Ornate Ringmail" "Mirrored Spiked Shield" "Iron Circlet" "Vaal Gauntlets" "Titanium Spirit Shield" "Sorcerer Boots" "Arcanist Slippers" "Shagreen Boots" "Titan Greaves" "Coronal Leather" "Spike-Point Arrow Quiver" "Bone Helmet" "Goathide Boots" "Laminated Kite Shield" "Two-Point Arrow Quiver" "Murder Mitts" "Steelscale Gauntlets" "Silken Hood" "Soldier Gloves" "Goliath Greaves" "Harlequin Mask" "Solaris Circlet" "Legion Gloves" "Bronzescale Boots" "Zealot Gloves" "Sinner Tricorne" "Festival Mask" "Titan Gauntlets" "Satin Gloves" "Samite Gloves" "Arcanist Gloves" "Great Helmet" "Lacquered Helmet" "Vaal Mask" "Mind Cage" "Bone Circlet" "Silk Slippers" "Steel Circlet" "Bronzescale Gauntlets" "Tarnished Spirit Shield" "Nightmare Bascinet" "Legion Boots" "Amethyst Flask" "Bismuth Flask" "Sulphur Flask" "Quartz Flask" "Ruby Flask" "Stibnite Flask" "Granite Flask" "Silver Flask" "Sanctified Mana Flask" "Infernal Sword" "Despot Axe" "Citadel Bow" "Vaal Axe" "Ezomyte Staff" "Decimation Bow" "Maelström Staff" "Judgement Staff" "Imperial Skean" "Spine Bow" "Serpentine Staff" "Lathi" "Highborn Staff" "Abyssal Axe" "Assassin Bow" "Death Bow" "Short Bow" "Tiger Sword" "Vile Staff" "Royal Bow" "Great Mallet" "Imperial Staff" "Ranger Bow" "Meatgrinder" "Primordial Staff" "Ezomyte Axe" "Shadow Axe" "Military Staff" "Poleaxe" "Iron Staff" "Highland Blade" "Long Bow" "Dread Maul" "Legion Sword" "Crude Bow" "Recurve Bow" "Labrys" "Gavel" "Ezomyte Blade" "Terror Maul" "Etched Greatsword" "Royal Staff" "Hellion's Paw" "Reaver Sword" "Void Sceptre" "Ambusher" "Jasper Chopper" "Karui Chopper" "Harbinger Bow" "Headsman Axe" "Ornate Sword" "Woodsplitter" "Vaal Claw" "Jagged Maul" "Steelhead" "Bastard Sword" "Ornate Mace" "Spiraled Wand" "Fiend Dagger" "Carved Wand" "Gladius" "Sledgehammer" "Eternal Sword" "Elegant Sword" "Lion Sword" "Tornado Wand" "Vaal Sceptre" "Shadow Sceptre" "Sage Wand" "Imperial Claw" "Elder Sword" "Engraved Wand" "Boot Knife" "Nailed Fist" "Brass Maul" "Vaal Blade" "War Sword" "Stiletto" "Grinning Fetish" "Gut Ripper" "Gnarled Branch" "Royal Skean" "Crystal Sceptre" "Terror Claw" "Midnight Blade" "Heavy Belt" "Amethyst Ring" "Topaz Ring" "Leather Belt" "Onyx Amulet" "Chain Belt" "Two-Stone Ring" "Sapphire Ring" "Cloth Belt" "Opal Ring" "Crystal Belt" "Prismatic Ring" "Ruby Ring" "Turquoise Amulet" "Moonstone Ring" "Paua Amulet" "Lapis Amulet" "Jade Amulet" "Amber Amulet" "Paua Ring" "Unset Ring" "Iron Ring" "Agate Amulet" "Gold Ring" "Rustic Sash" "Gold Amulet" "Coral Ring" "Coral Amulet" "Citrine Amulet" "Large Cluster Jewel" "Crimson Jewel" "Cobalt Jewel" "Viridian Jewel" "Small Cluster Jewel"
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

