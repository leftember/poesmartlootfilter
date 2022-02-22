#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Elegant Round Shield" "Carnal Armour" "Soldier Boots" "Triumphant Lamellar" "Great Crown" "Strapped Leather" "Sentinel Jacket" "Crusader Plate" "Saintly Chainmail" "Saint's Hauberk" "Astral Plate" "Zodiac Leather" "Sacrificial Garb" "Sadist Garb" "Necromancer Silks" "Exquisite Leather" "Golden Plate" "Elegant Ringmail" "Blood Raiment" "Varnished Coat" "Savant's Robe" "Lacquered Garb" "Glorious Plate" "Magistrate Crown" "Full Dragonscale" "Widowsilk Robe" "Coronal Leather" "Vaal Regalia" "Destiny Leather" "Full Wyrmscale" "Hydrascale Gauntlets" "Spidersilk Robe" "Iron Circlet" "Destroyer Regalia" "Carnal Boots" "Crusader Gloves" "Archon Kite Shield" "Stealth Boots" "Necromancer Circlet" "Assassin's Garb" "Loricated Ringmail" "Ambush Mitts" "Blunt Arrow Quiver" "Callous Mask" "Crusader Chainmail" "Ezomyte Burgonet" "Cutthroat's Garb" "Desert Brigandine" "Bone Armour" "Vaal Spirit Shield" "Vaal Gauntlets" "Slink Boots" "Holy Chainmail" "Pinnacle Tower Shield" "Titan Greaves" "Buckskin Tunic" "Lacquered Helmet" "Sharkskin Tunic" "Simple Robe" "Sage's Robe" "Praetor Crown" "Steelscale Gauntlets" "Carnal Mitts" "Assassin's Boots" "Copper Plate" "Conquest Chainmail" "Latticed Ringmail" "Scholar's Robe" "Wild Leather" "Prophet Crown" "Lacquered Buckler" "Arcanist Slippers" "Plate Vest" "Ornate Ringmail" "Laminated Kite Shield" "Full Scale Armour" "Murder Boots" "Titan Gauntlets" "Goliath Greaves" "Sorcerer Boots" "Assassin's Mitts" "Legion Gloves" "Mirrored Spiked Shield" "Ebony Tower Shield" "Hubris Circlet" "Goathide Boots" "Harlequin Mask" "Silk Slippers" "Sinner Tricorne" "Bone Helmet" "Festival Mask" "Nightmare Bascinet" "Two-Point Arrow Quiver" "Clasped Mitts" "Soldier Gloves" "Reinforced Greaves" "Sharktooth Arrow Quiver" "Silken Hood" "Vaal Mask" "Bone Circlet" "Arcanist Gloves" "Zealot Gloves" "Shagreen Boots" "Spike-Point Arrow Quiver" "Titanium Spirit Shield" "Sorcerer Gloves" "Mind Cage" "Solaris Circlet" "Murder Mitts" "Bronzescale Boots" "Great Helmet" "Samite Gloves" "Steel Circlet" "Sulphur Flask" "Quartz Flask" "Iron Flask" "Ruby Flask" "Granite Flask" "Stibnite Flask" "Silver Flask" "Topaz Flask" "Sanctified Mana Flask" "Imperial Staff" "Maelström Staff" "Highborn Staff" "Ranger Bow" "Infernal Sword" "Quarterstaff" "Assassin Bow" "Void Axe" "Judgement Staff" "Royal Staff" "Imperial Maul" "Death Bow" "Royal Bow" "Imperial Bow" "Despot Axe" "Citadel Bow" "Ezomyte Staff" "Serpentine Staff" "Long Bow" "Woodsplitter" "Ornate Sword" "Vaal Axe" "Karui Maul" "Jasper Chopper" "Military Staff" "Steelwood Bow" "Spine Bow" "Fiend Dagger" "Lathi" "Ezomyte Axe" "Terror Maul" "Reaver Sword" "Short Bow" "Great Mallet" "Primordial Staff" "Gemstone Sword" "Tiger Sword" "Abyssal Axe" "Cutlass" "Lion Sword" "Coiled Staff" "Vile Staff" "Elegant Sword" "Karui Chopper" "Iron Staff" "Legion Sword" "Meatgrinder" "Etched Greatsword" "Imperial Claw" "Steelhead" "Ezomyte Blade" "Crude Bow" "Harbinger Bow" "Sage Wand" "Bone Bow" "Poleaxe" "Carved Wand" "Nailed Fist" "Eternal Sword" "Gladius" "Decimation Bow" "Ornate Mace" "Labrys" "Void Sceptre" "Shadow Axe" "Recurve Bow" "Ambusher" "Headsman Axe" "Jagged Maul" "Highland Blade" "Bastard Sword" "Shadow Sceptre" "Dread Maul" "Brass Maul" "Sledgehammer" "Ezomyte Dagger" "Royal Skean" "Tornado Wand" "Engraved Wand" "Gavel" "Crystal Sceptre" "Hellion's Paw" "War Sword" "Grinning Fetish" "Gut Ripper" "Gnarled Branch" "Elder Sword" "Boot Knife" "Vaal Claw" "Imperial Skean" "Vaal Sceptre" "Vaal Blade" "Midnight Blade" "Stiletto" "Heavy Belt" "Leather Belt" "Onyx Amulet" "Chain Belt" "Cloth Belt" "Opal Ring" "Sapphire Ring" "Topaz Ring" "Turquoise Amulet" "Studded Belt" "Paua Amulet" "Two-Stone Ring" "Prismatic Ring" "Ruby Ring" "Jade Amulet" "Amber Amulet" "Amethyst Ring" "Lapis Amulet" "Unset Ring" "Iron Ring" "Gold Ring" "Rustic Sash" "Paua Ring" "Agate Amulet" "Gold Amulet" "Citrine Amulet" "Moonstone Ring" "Coral Amulet" "Large Cluster Jewel" "Cobalt Jewel" "Viridian Jewel" "Small Cluster Jewel" "Crimson Jewel"
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

