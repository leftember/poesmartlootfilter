#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Carnal Armour" "Elegant Round Shield" "Soldier Boots" "Triumphant Lamellar" "Sadist Garb" "Savant's Robe" "Saint's Hauberk" "Exquisite Leather" "Golden Plate" "Strapped Leather" "Astral Plate" "Crusader Plate" "Necromancer Silks" "Saintly Chainmail" "Elegant Ringmail" "Lacquered Garb" "Zodiac Leather" "Varnished Coat" "Sacrificial Garb" "Great Crown" "Vaal Regalia" "Hydrascale Gauntlets" "Magistrate Crown" "Full Dragonscale" "Destiny Leather" "Full Wyrmscale" "Sentinel Jacket" "Spidersilk Robe" "Glorious Plate" "Widowsilk Robe" "Necromancer Circlet" "Destroyer Regalia" "Assassin's Garb" "Archon Kite Shield" "Callous Mask" "Slink Boots" "Stealth Boots" "Loricated Ringmail" "Vaal Gauntlets" "Bone Armour" "Vaal Spirit Shield" "Crusader Gloves" "Cutthroat's Garb" "Coronal Leather" "Ezomyte Burgonet" "Crusader Chainmail" "Holy Chainmail" "Blunt Arrow Quiver" "Iron Circlet" "Sharkskin Tunic" "Simple Robe" "Sage's Robe" "Carnal Mitts" "Buckskin Tunic" "Wild Leather" "Conquest Chainmail" "Desert Brigandine" "Titan Greaves" "Copper Plate" "Prophet Crown" "Steelscale Gauntlets" "Latticed Ringmail" "Praetor Crown" "Lacquered Buckler" "Murder Boots" "Scholar's Robe" "Laminated Kite Shield" "Plate Vest" "Ornate Ringmail" "Sinner Tricorne" "Arcanist Slippers" "Titan Gauntlets" "Sorcerer Boots" "Archon Kite Shield Piece" "Blunt Arrow Quiver Piece" "Callous Mask Piece" "Hubris Circlet" "Goliath Greaves" "Carnal Boots" "Silk Slippers" "Mirrored Spiked Shield" "Ebony Tower Shield" "Lacquered Helmet" "Legion Gloves" "Bone Circlet" "Assassin's Mitts" "Festival Mask" "Two-Point Arrow Quiver" "Harlequin Mask" "Zealot Gloves" "Bone Helmet" "Nightmare Bascinet" "Clasped Mitts" "Goathide Boots" "Silken Hood" "Soldier Gloves" "Solaris Circlet" "Vaal Mask" "Bronzescale Boots" "Arcanist Gloves" "Samite Gloves" "Shagreen Boots" "Sorcerer Gloves" "Spike-Point Arrow Quiver" "Murder Mitts" "Sharktooth Arrow Quiver" "Mind Cage" "Titanium Spirit Shield" "Sulphur Flask" "Quartz Flask" "Iron Flask" "Ruby Flask" "Granite Flask" "Stibnite Flask" "Silver Flask" "Topaz Flask" "Sanctified Mana Flask" "Maelström Staff" "Ezomyte Staff" "Assassin Bow" "Royal Bow" "Imperial Bow" "Despot Axe" "Void Axe" "Serpentine Staff" "Quarterstaff" "Infernal Sword" "Judgement Staff" "Highborn Staff" "Death Bow" "Fiend Dagger" "Woodsplitter" "Ornate Sword" "Steelwood Bow" "Citadel Bow" "Lathi" "Long Bow" "Military Staff" "Karui Maul" "Spine Bow" "Reaver Sword" "Primordial Staff" "Terror Maul" "Short Bow" "Jasper Chopper" "Ezomyte Axe" "Great Mallet" "Tiger Sword" "Imperial Maul" "Cutlass" "Lion Sword" "Ranger Bow" "Iron Staff" "Vaal Axe" "Legion Sword" "Abyssal Axe" "Royal Staff" "Vile Staff" "Nailed Fist" "Decimation Bow" "Karui Chopper" "Harbinger Bow" "Meatgrinder" "Etched Greatsword" "Ezomyte Blade" "Crude Bow" "Imperial Claw" "Gladius" "Ambusher" "Ornate Mace" "Steelhead" "Shadow Axe" "Recurve Bow" "Poleaxe" "Sage Wand" "Headsman Axe" "Dread Maul" "Brass Maul" "Jagged Maul" "Highland Blade" "Sledgehammer" "Bastard Sword" "Eternal Sword" "Shadow Sceptre" "Tornado Wand" "Carved Wand" "Gemstone Sword" "Void Sceptre" "Imperial Staff Piece" "Legion Sword Piece" "Elegant Sword" "Gnarled Branch" "Royal Skean" "Hellion's Paw" "Grinning Fetish" "Gut Ripper" "Elder Sword" "Engraved Wand" "Stiletto" "Imperial Skean" "Vaal Sceptre" "Gavel" "Midnight Blade" "War Sword" "Boot Knife" "Vaal Claw" "Heavy Belt" "Leather Belt" "Onyx Amulet" "Cloth Belt" "Opal Ring" "Chain Belt" "Sapphire Ring" "Studded Belt" "Turquoise Amulet" "Paua Amulet" "Topaz Ring" "Amber Amulet" "Jade Amulet" "Prismatic Ring" "Ruby Ring" "Lapis Amulet" "Two-Stone Ring" "Amethyst Ring" "Gold Ring" "Unset Ring" "Rustic Sash" "Iron Ring" "Paua Ring" "Agate Amulet" "Citrine Amulet" "Gold Amulet" "Moonstone Ring" "Coral Amulet" "Large Cluster Jewel" "Viridian Jewel" "Cobalt Jewel" "Crimson Jewel" "Small Cluster Jewel"
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

