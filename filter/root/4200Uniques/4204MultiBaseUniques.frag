#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Carnal Armour" "Carnal Mitts" "Elegant Round Shield" "Buckskin Tunic" "Soldier Boots" "Triumphant Lamellar" "Sentinel Jacket" "Sadist Garb" "Royal Burgonet" "Assassin's Mitts" "Sage's Robe" "Dragonscale Boots" "Sharkskin Tunic" "Crusader Gloves" "Saint's Hauberk" "Spidersilk Robe" "Crusader Plate" "Necromancer Silks" "Widowsilk Robe" "Silken Vest" "Primal Arrow Quiver" "Cutthroat's Garb" "Varnished Coat" "Lacquered Garb" "Scholar's Robe" "Full Dragonscale" "Astral Plate" "Saintly Chainmail" "Exquisite Leather" "Destiny Leather" "Simple Robe" "Elegant Ringmail" "Sun Leather" "Vaal Regalia" "Assassin's Garb" "Wild Leather" "Full Wyrmscale" "Holy Chainmail" "Murder Boots" "Golden Plate" "Destroyer Regalia" "Magistrate Crown" "Colossal Tower Shield" "Hubris Circlet" "Glorious Plate" "Prophet Crown" "Plate Vest" "Praetor Crown" "Vaal Greaves" "Bone Armour" "Latticed Ringmail" "Crusader Chainmail" "Archon Kite Shield" "Copper Plate" "Chiming Spirit Shield" "Fugitive Boots" "Blunt Arrow Quiver" "Ebony Tower Shield" "Conquest Chainmail" "Stealth Boots" "Pinnacle Tower Shield" "Callous Mask" "Lacquered Buckler" "Hydrascale Gauntlets" "Great Crown" "Ornate Ringmail" "Mirrored Spiked Shield" "Iron Circlet" "Vaal Gauntlets" "Titanium Spirit Shield" "Sorcerer Boots" "Arcanist Slippers" "Shagreen Boots" "Titan Greaves" "Coronal Leather" "Spike-Point Arrow Quiver" "Bone Helmet" "Goathide Boots" "Murder Mitts" "Steelscale Gauntlets" "Silken Hood" "Soldier Gloves" "Goliath Greaves" "Harlequin Mask" "Solaris Circlet" "Legion Gloves" "Bronzescale Boots" "Zealot Gloves" "Laminated Kite Shield" "Sinner Tricorne" "Festival Mask" "Titan Gauntlets" "Two-Point Arrow Quiver" "Satin Gloves" "Bone Circlet" "Arcanist Gloves" "Samite Gloves" "Great Helmet" "Lacquered Helmet" "Vaal Mask" "Silk Slippers" "Steel Circlet" "Mind Cage" "Bronzescale Gauntlets" "Nightmare Bascinet" "Tarnished Spirit Shield" "Amethyst Flask" "Bismuth Flask" "Sulphur Flask" "Quartz Flask" "Ruby Flask" "Stibnite Flask" "Granite Flask" "Silver Flask" "Sanctified Mana Flask" "Infernal Sword" "Despot Axe" "Citadel Bow" "Vaal Axe" "Ezomyte Staff" "Abyssal Axe" "Maelström Staff" "Judgement Staff" "Imperial Skean" "Spine Bow" "Serpentine Staff" "Lathi" "Highborn Staff" "Assassin Bow" "Death Bow" "Short Bow" "Tiger Sword" "Vile Staff" "Royal Bow" "Great Mallet" "Imperial Staff" "Ranger Bow" "Highland Blade" "Primordial Staff" "Ezomyte Axe" "Decimation Bow" "Shadow Axe" "Iron Staff" "Military Staff" "Dread Maul" "Labrys" "Crude Bow" "Recurve Bow" "Meatgrinder" "Legion Sword" "Gavel" "Poleaxe" "Long Bow" "Ezomyte Blade" "Terror Maul" "Etched Greatsword" "Royal Staff" "Hellion's Paw" "Void Sceptre" "Ambusher" "Jasper Chopper" "Karui Chopper" "Harbinger Bow" "Reaver Sword" "Ornate Sword" "Headsman Axe" "Jagged Maul" "Woodsplitter" "Vaal Claw" "Bastard Sword" "Sledgehammer" "Ornate Mace" "Spiraled Wand" "Fiend Dagger" "Gladius" "Carved Wand" "Elegant Sword" "Eternal Sword" "Steelhead" "Lion Sword" "Tornado Wand" "Vaal Sceptre" "Shadow Sceptre" "Boot Knife" "Engraved Wand" "Sage Wand" "Imperial Claw" "Elder Sword" "Brass Maul" "Vaal Blade" "War Sword" "Stiletto" "Nailed Fist" "Gut Ripper" "Royal Skean" "Gnarled Branch" "Grinning Fetish" "Crystal Sceptre" "Terror Claw" "Midnight Blade" "Heavy Belt" "Amethyst Ring" "Topaz Ring" "Leather Belt" "Onyx Amulet" "Chain Belt" "Two-Stone Ring" "Sapphire Ring" "Cloth Belt" "Opal Ring" "Crystal Belt" "Prismatic Ring" "Ruby Ring" "Turquoise Amulet" "Moonstone Ring" "Paua Amulet" "Lapis Amulet" "Amber Amulet" "Jade Amulet" "Paua Ring" "Unset Ring" "Agate Amulet" "Iron Ring" "Gold Ring" "Rustic Sash" "Gold Amulet" "Coral Ring" "Coral Amulet" "Citrine Amulet" "Large Cluster Jewel" "Crimson Jewel" "Cobalt Jewel" "Viridian Jewel" "Small Cluster Jewel"
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

