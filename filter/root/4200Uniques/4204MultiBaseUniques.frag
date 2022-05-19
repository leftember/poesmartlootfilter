#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Carnal Armour" "Elegant Round Shield" "Soldier Boots" "Triumphant Lamellar" "Widowsilk Robe" "Astral Plate" "Saint's Hauberk" "Full Dragonscale" "Zodiac Leather" "Sentinel Jacket" "Sadist Garb" "Elegant Ringmail" "Crusader Plate" "Necromancer Silks" "Saintly Chainmail" "Strapped Leather" "Lacquered Garb" "Sacrificial Garb" "Magistrate Crown" "Glorious Plate" "Varnished Coat" "Loricated Ringmail" "Savant's Robe" "Destiny Leather" "Golden Plate" "Exquisite Leather" "Full Wyrmscale" "Necromancer Circlet" "Great Crown" "Hydrascale Gauntlets" "Spidersilk Robe" "Stealth Boots" "Destroyer Regalia" "Ambush Mitts" "Archon Kite Shield" "Vaal Spirit Shield" "Callous Mask" "Slink Boots" "Assassin's Garb" "Titan Greaves" "Bone Armour" "Blunt Arrow Quiver" "Sorcerer Boots" "Simple Robe" "Vaal Gauntlets" "Vaal Regalia" "Crusader Gloves" "Crusader Chainmail" "Holy Chainmail" "Desert Brigandine" "Ezomyte Burgonet" "Sharkskin Tunic" "Cutthroat's Garb" "Sage's Robe" "Carnal Mitts" "Prophet Crown" "Buckskin Tunic" "Conquest Chainmail" "Coronal Leather" "Plate Vest" "Scholar's Robe" "Wild Leather" "Latticed Ringmail" "Ornate Ringmail" "Copper Plate" "Royal Burgonet" "Steelscale Gauntlets" "Murder Boots" "Iron Circlet" "Goliath Greaves" "Titan Gauntlets" "Laminated Kite Shield" "Ebony Tower Shield" "Solaris Circlet" "Carnal Boots" "Mirrored Spiked Shield" "Two-Point Arrow Quiver" "Archon Kite Shield Piece" "Blunt Arrow Quiver Piece" "Callous Mask Piece" "Praetor Crown" "Hubris Circlet" "Silken Hood" "Soldier Gloves" "Bone Circlet" "Lacquered Buckler" "Arcanist Slippers" "Harlequin Mask" "Festival Mask" "Goathide Boots" "Legion Gloves" "Sinner Tricorne" "Lacquered Helmet" "Nightmare Bascinet" "Vaal Mask" "Mind Cage" "Titanium Spirit Shield" "Assassin's Mitts" "Bronzescale Boots" "Silk Slippers" "Arcanist Gloves" "Zealot Gloves" "Sorcerer Gloves" "Spike-Point Arrow Quiver" "Bone Helmet" "Shagreen Boots" "Clasped Mitts" "Sharktooth Arrow Quiver" "Tarnished Spirit Shield" "Murder Mitts" "Great Helmet" "Samite Gloves" "Quartz Flask" "Sulphur Flask" "Iron Flask" "Stibnite Flask" "Ruby Flask" "Granite Flask" "Silver Flask" "Sanctified Mana Flask" "Royal Bow" "Infernal Sword" "Maelström Staff" "Judgement Staff" "Void Axe" "Assassin Bow" "Highborn Staff" "Reaver Sword" "Ornate Sword" "Quarterstaff" "Death Bow" "Vaal Axe" "Serpentine Staff" "Imperial Maul" "Imperial Bow" "Citadel Bow" "Fiend Dagger" "Military Staff" "Despot Axe" "Ezomyte Staff" "Imperial Staff" "Long Bow" "Short Bow" "Lathi" "Primordial Staff" "Siege Axe" "Bone Bow" "Spine Bow" "Cutlass" "Tiger Sword" "Gemstone Sword" "Legion Sword" "Ezomyte Axe" "Terror Maul" "Great Mallet" "Ambusher" "Jasper Chopper" "Karui Maul" "Vile Staff" "Steelwood Bow" "Meatgrinder" "Tornado Wand" "Iron Staff" "Imperial Claw" "Lion Sword" "Eternal Sword" "Ezomyte Blade" "Abyssal Axe" "Karui Chopper" "Decimation Bow" "Etched Greatsword" "Steelhead" "Ranger Bow" "Harbinger Bow" "Shadow Axe" "Recurve Bow" "Crude Bow" "Royal Staff" "Brass Maul" "Labrys" "Jagged Maul" "Woodsplitter" "Carved Wand" "Void Sceptre" "Ornate Mace" "Gladius" "Highland Blade" "Headsman Axe" "Dread Maul" "Poleaxe" "Sledgehammer" "Bastard Sword" "Elegant Sword" "Sage Wand" "Imperial Staff Piece" "Legion Sword Piece" "Nailed Fist" "Shadow Sceptre" "Royal Skean" "Imperial Skean" "Hellion's Paw" "Gut Ripper" "Elder Sword" "Gnarled Branch" "Engraved Wand" "Boot Knife" "Vaal Claw" "Vaal Sceptre" "Gavel" "Midnight Blade" "Terror Claw" "War Sword" "Grinning Fetish" "Heavy Belt" "Leather Belt" "Onyx Amulet" "Sapphire Ring" "Cloth Belt" "Opal Ring" "Chain Belt" "Topaz Ring" "Ruby Ring" "Amber Amulet" "Amethyst Ring" "Studded Belt" "Turquoise Amulet" "Prismatic Ring" "Jade Amulet" "Two-Stone Ring" "Paua Amulet" "Lapis Amulet" "Unset Ring" "Iron Ring" "Gold Ring" "Rustic Sash" "Cloth Belt Piece" "Paua Ring" "Crystal Belt" "Agate Amulet" "Citrine Amulet" "Gold Amulet" "Coral Amulet" "Large Cluster Jewel" "Viridian Jewel" "Small Cluster Jewel" "Crimson Jewel" "Cobalt Jewel"
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

