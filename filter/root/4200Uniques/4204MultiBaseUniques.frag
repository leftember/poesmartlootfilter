#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Two-Point Arrow Quiver" "Carnal Armour" "Elegant Round Shield" "Triumphant Lamellar" "Blood Raiment" "Soldier Boots" "Great Crown" "Sentinel Jacket" "Sacrificial Garb" "Saint's Hauberk" "Crusader Plate" "Necromancer Silks" "Astral Plate" "Saintly Chainmail" "Sadist Garb" "Golden Plate" "Strapped Leather" "Magistrate Crown" "Full Dragonscale" "Widowsilk Robe" "Varnished Coat" "Exquisite Leather" "Lacquered Garb" "Destiny Leather" "Elegant Ringmail" "Vaal Regalia" "Full Wyrmscale" "Coronal Leather" "Carnal Boots" "Loricated Ringmail" "Ebony Tower Shield" "Destroyer Regalia" "Archon Kite Shield" "Stealth Boots" "Assassin's Garb" "Spidersilk Robe" "Bone Armour" "Holy Chainmail" "Crusader Gloves" "Blunt Arrow Quiver" "Titan Greaves" "Hydrascale Gauntlets" "Crusader Chainmail" "Sharkskin Tunic" "Callous Mask" "Ezomyte Burgonet" "Vaal Gauntlets" "Cutthroat's Garb" "Prophet Crown" "Lacquered Buckler" "Simple Robe" "Bone Circlet" "Iron Circlet" "Buckskin Tunic" "Latticed Ringmail" "Arcanist Gloves" "Goliath Greaves" "Sage's Robe" "Titan Gauntlets" "Slink Boots" "Wild Leather" "Conquest Chainmail" "Copper Plate" "Carnal Mitts" "Necromancer Circlet" "Silk Slippers" "Spike-Point Arrow Quiver" "Laminated Kite Shield" "Zealot Gloves" "Scholar's Robe" "Mirrored Spiked Shield" "Lacquered Helmet" "Plate Vest" "Ornate Ringmail" "Goathide Boots" "Steelscale Gauntlets" "Solaris Circlet" "Arcanist Slippers" "Steel Circlet" "Desert Brigandine" "Shagreen Boots" "Praetor Crown" "Murder Boots" "Festival Mask" "Sorcerer Boots" "Silken Hood" "Sinner Tricorne" "Nightmare Bascinet" "Legion Gloves" "Hubris Circlet" "Sharktooth Arrow Quiver" "Soldier Gloves" "Harlequin Mask" "Murder Mitts" "Assassin's Mitts" "Bronzescale Boots" "Great Helmet" "Samite Gloves" "Sorcerer Gloves" "Bone Helmet" "Reinforced Greaves" "Vaal Mask" "Titanium Spirit Shield" "Tarnished Spirit Shield" "Chiming Spirit Shield" "Colossal Tower Shield" "Clasped Mitts" "Velvet Gloves" "Mind Cage" "Legion Boots" "Iron Flask" "Sulphur Flask" "Quartz Flask" "Stibnite Flask" "Granite Flask" "Ruby Flask" "Silver Flask" "Topaz Flask" "Sanctified Mana Flask" "Maelström Staff" "Lion Sword" "Vaal Axe" "Labrys" "Imperial Bow" "Ezomyte Staff" "Void Axe" "Assassin Bow" "Serpentine Staff" "Judgement Staff" "Infernal Sword" "Quarterstaff" "Despot Axe" "Lathi" "Highborn Staff" "Ranger Bow" "Brass Maul" "Imperial Staff" "Citadel Bow" "Ambusher" "Death Bow" "Reaver Sword" "Long Bow" "Royal Bow" "Woodsplitter" "Short Bow" "Bone Bow" "Spine Bow" "Fiend Dagger" "Terror Maul" "Jasper Chopper" "Void Sceptre" "Legion Sword" "Eternal Sword" "Ezomyte Axe" "Vile Staff" "Primordial Staff" "Decimation Bow" "Elegant Sword" "Etched Greatsword" "Tiger Sword" "Ornate Sword" "Ornate Mace" "Abyssal Axe" "Iron Staff" "Cutlass" "Meatgrinder" "Royal Staff" "Great Mallet" "Harbinger Bow" "Steelhead" "Gladius" "Poleaxe" "Military Staff" "Karui Chopper" "Steelwood Bow" "Imperial Claw" "Crude Bow" "Ezomyte Blade" "Shadow Axe" "Shadow Sceptre" "Recurve Bow" "Sage Wand" "Sledgehammer" "Bastard Sword" "Engraved Wand" "Tornado Wand" "Hellion's Paw" "Jagged Maul" "Nailed Fist" "Headsman Axe" "Vaal Sceptre" "Gavel" "Dread Maul" "Highland Blade" "Carved Wand" "War Sword" "Royal Skean" "Boot Knife" "Stiletto" "Imperial Skean" "Elder Sword" "Vaal Claw" "Gut Ripper" "Grinning Fetish" "Gnarled Branch" "Vaal Blade" "Midnight Blade" "Terror Claw" "Crystal Sceptre" "Spiraled Wand" "Heavy Belt" "Onyx Amulet" "Leather Belt" "Chain Belt" "Sapphire Ring" "Cloth Belt" "Prismatic Ring" "Topaz Ring" "Two-Stone Ring" "Turquoise Amulet" "Opal Ring" "Amber Amulet" "Paua Amulet" "Amethyst Ring" "Studded Belt" "Paua Ring" "Ruby Ring" "Jade Amulet" "Rustic Sash" "Unset Ring" "Lapis Amulet" "Gold Ring" "Iron Ring" "Citrine Amulet" "Gold Amulet" "Moonstone Ring" "Agate Amulet" "Coral Amulet" "Coral Ring" "Large Cluster Jewel" "Crimson Jewel" "Cobalt Jewel" "Viridian Jewel" "Small Cluster Jewel"
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

