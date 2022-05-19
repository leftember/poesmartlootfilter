#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Carnal Armour" "Elegant Round Shield" "Soldier Boots" "Triumphant Lamellar" "Widowsilk Robe" "Saint's Hauberk" "Astral Plate" "Full Dragonscale" "Elegant Ringmail" "Sadist Garb" "Crusader Plate" "Zodiac Leather" "Necromancer Silks" "Strapped Leather" "Saintly Chainmail" "Sacrificial Garb" "Magistrate Crown" "Lacquered Garb" "Loricated Ringmail" "Varnished Coat" "Savant's Robe" "Destiny Leather" "Glorious Plate" "Golden Plate" "Full Wyrmscale" "Exquisite Leather" "Necromancer Circlet" "Great Crown" "Hydrascale Gauntlets" "Sentinel Jacket" "Spidersilk Robe" "Destroyer Regalia" "Stealth Boots" "Ambush Mitts" "Vaal Spirit Shield" "Archon Kite Shield" "Callous Mask" "Slink Boots" "Assassin's Garb" "Simple Robe" "Titan Greaves" "Blunt Arrow Quiver" "Sorcerer Boots" "Vaal Gauntlets" "Vaal Regalia" "Bone Armour" "Holy Chainmail" "Crusader Gloves" "Crusader Chainmail" "Desert Brigandine" "Sharkskin Tunic" "Ezomyte Burgonet" "Cutthroat's Garb" "Carnal Mitts" "Sage's Robe" "Buckskin Tunic" "Conquest Chainmail" "Prophet Crown" "Coronal Leather" "Plate Vest" "Scholar's Robe" "Wild Leather" "Latticed Ringmail" "Ornate Ringmail" "Copper Plate" "Royal Burgonet" "Murder Boots" "Iron Circlet" "Goliath Greaves" "Steelscale Gauntlets" "Titan Gauntlets" "Ebony Tower Shield" "Carnal Boots" "Two-Point Arrow Quiver" "Archon Kite Shield Piece" "Blunt Arrow Quiver Piece" "Callous Mask Piece" "Praetor Crown" "Hubris Circlet" "Silken Hood" "Soldier Gloves" "Solaris Circlet" "Bone Circlet" "Lacquered Buckler" "Laminated Kite Shield" "Arcanist Slippers" "Mirrored Spiked Shield" "Festival Mask" "Goathide Boots" "Harlequin Mask" "Legion Gloves" "Bone Helmet" "Sinner Tricorne" "Vaal Mask" "Lacquered Helmet" "Nightmare Bascinet" "Mind Cage" "Assassin's Mitts" "Bronzescale Boots" "Silk Slippers" "Arcanist Gloves" "Zealot Gloves" "Sorcerer Gloves" "Spike-Point Arrow Quiver" "Titanium Spirit Shield" "Clasped Mitts" "Sharktooth Arrow Quiver" "Tarnished Spirit Shield" "Murder Mitts" "Great Helmet" "Samite Gloves" "Shagreen Boots" "Quartz Flask" "Sulphur Flask" "Iron Flask" "Stibnite Flask" "Ruby Flask" "Granite Flask" "Silver Flask" "Sanctified Mana Flask" "Royal Bow" "Infernal Sword" "Void Axe" "Judgement Staff" "Assassin Bow" "Reaver Sword" "Ornate Sword" "Highborn Staff" "Maelström Staff" "Imperial Bow" "Quarterstaff" "Death Bow" "Vaal Axe" "Imperial Maul" "Serpentine Staff" "Citadel Bow" "Fiend Dagger" "Military Staff" "Despot Axe" "Ezomyte Staff" "Imperial Staff" "Long Bow" "Brass Maul" "Short Bow" "Lathi" "Primordial Staff" "Siege Axe" "Bone Bow" "Tiger Sword" "Spine Bow" "Gemstone Sword" "Cutlass" "Legion Sword" "Terror Maul" "Ezomyte Axe" "Great Mallet" "Karui Maul" "Vile Staff" "Jasper Chopper" "Ambusher" "Steelwood Bow" "Meatgrinder" "Imperial Claw" "Tornado Wand" "Iron Staff" "Lion Sword" "Ezomyte Blade" "Karui Chopper" "Etched Greatsword" "Decimation Bow" "Abyssal Axe" "Steelhead" "Ranger Bow" "Harbinger Bow" "Shadow Axe" "Recurve Bow" "Crude Bow" "Royal Staff" "Jagged Maul" "Highland Blade" "Woodsplitter" "Carved Wand" "Void Sceptre" "Eternal Sword" "Gladius" "Poleaxe" "Ornate Mace" "Headsman Axe" "Dread Maul" "Sledgehammer" "Bastard Sword" "Shadow Sceptre" "Elegant Sword" "Sage Wand" "Imperial Staff Piece" "Legion Sword Piece" "Nailed Fist" "Royal Skean" "Imperial Skean" "Hellion's Paw" "Gut Ripper" "Elder Sword" "Gnarled Branch" "Engraved Wand" "Boot Knife" "Vaal Claw" "War Sword" "Vaal Sceptre" "Gavel" "Midnight Blade" "Terror Claw" "Grinning Fetish" "Heavy Belt" "Leather Belt" "Onyx Amulet" "Sapphire Ring" "Opal Ring" "Cloth Belt" "Chain Belt" "Topaz Ring" "Ruby Ring" "Amber Amulet" "Amethyst Ring" "Studded Belt" "Turquoise Amulet" "Prismatic Ring" "Two-Stone Ring" "Jade Amulet" "Paua Amulet" "Lapis Amulet" "Unset Ring" "Iron Ring" "Gold Ring" "Rustic Sash" "Cloth Belt Piece" "Paua Ring" "Crystal Belt" "Agate Amulet" "Citrine Amulet" "Gold Amulet" "Moonstone Ring" "Coral Amulet" "Large Cluster Jewel" "Viridian Jewel" "Small Cluster Jewel" "Crimson Jewel" "Cobalt Jewel"
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

