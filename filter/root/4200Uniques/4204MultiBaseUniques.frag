#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Elegant Round Shield" "Carnal Armour" "Soldier Boots" "Triumphant Lamellar" "Great Crown" "Sentinel Jacket" "Saint's Hauberk" "Sadist Garb" "Blood Raiment" "Strapped Leather" "Crusader Plate" "Astral Plate" "Saintly Chainmail" "Necromancer Silks" "Widowsilk Robe" "Zodiac Leather" "Golden Plate" "Exquisite Leather" "Elegant Ringmail" "Vaal Regalia" "Sacrificial Garb" "Varnished Coat" "Full Dragonscale" "Magistrate Crown" "Lacquered Garb" "Savant's Robe" "Destiny Leather" "Glorious Plate" "Coronal Leather" "Full Wyrmscale" "Stealth Boots" "Spidersilk Robe" "Destroyer Regalia" "Hydrascale Gauntlets" "Crusader Gloves" "Carnal Boots" "Iron Circlet" "Ambush Mitts" "Vaal Gauntlets" "Loricated Ringmail" "Assassin's Garb" "Archon Kite Shield" "Blunt Arrow Quiver" "Callous Mask" "Holy Chainmail" "Desert Brigandine" "Full Scale Armour" "Necromancer Circlet" "Assassin's Boots" "Crusader Chainmail" "Ezomyte Burgonet" "Bone Armour" "Slink Boots" "Pinnacle Tower Shield" "Cutthroat's Garb" "Vaal Spirit Shield" "Buckskin Tunic" "Lacquered Helmet" "Sharkskin Tunic" "Simple Robe" "Titan Greaves" "Sage's Robe" "Solaris Circlet" "Copper Plate" "Latticed Ringmail" "Wild Leather" "Conquest Chainmail" "Praetor Crown" "Plate Vest" "Scholar's Robe" "Ornate Ringmail" "Prophet Crown" "Carnal Mitts" "Lacquered Buckler" "Arcanist Slippers" "Goathide Boots" "Steelscale Gauntlets" "Murder Boots" "Titan Gauntlets" "Goliath Greaves" "Sorcerer Boots" "Assassin's Mitts" "Legion Gloves" "Silk Slippers" "Zealot Gloves" "Laminated Kite Shield" "Mirrored Spiked Shield" "Sinner Tricorne" "Festival Mask" "Two-Point Arrow Quiver" "Clasped Mitts" "Hubris Circlet" "Sharktooth Arrow Quiver" "Silken Hood" "Ebony Tower Shield" "Harlequin Mask" "Spike-Point Arrow Quiver" "Arcanist Gloves" "Nightmare Bascinet" "Soldier Gloves" "Reinforced Greaves" "Vaal Mask" "Bone Circlet" "Bronzescale Boots" "Samite Gloves" "Shagreen Boots" "Sorcerer Gloves" "Bone Helmet" "Steel Circlet" "Titanium Spirit Shield" "Murder Mitts" "Great Helmet" "Colossal Tower Shield" "Sulphur Flask" "Quartz Flask" "Iron Flask" "Ruby Flask" "Granite Flask" "Silver Flask" "Stibnite Flask" "Topaz Flask" "Sanctified Mana Flask" "Imperial Staff" "Coiled Staff" "Maelström Staff" "Infernal Sword" "Serpentine Staff" "Highborn Staff" "Quarterstaff" "Ezomyte Staff" "Death Bow" "Imperial Bow" "Void Axe" "Imperial Maul" "Great Mallet" "Royal Bow" "Judgement Staff" "Assassin Bow" "Despot Axe" "Citadel Bow" "Ranger Bow" "Vaal Axe" "Karui Maul" "Long Bow" "Terror Maul" "Ornate Sword" "Royal Staff" "Labrys" "Steelwood Bow" "Bone Bow" "Jasper Chopper" "Lathi" "Spine Bow" "Military Staff" "Short Bow" "Reaver Sword" "Fiend Dagger" "Ezomyte Axe" "Woodsplitter" "Primordial Staff" "Tiger Sword" "Cutlass" "Abyssal Axe" "Lion Sword" "Vile Staff" "Legion Sword" "Crude Bow" "Ornate Mace" "Decimation Bow" "Elegant Sword" "Meatgrinder" "Imperial Claw" "Iron Staff" "Etched Greatsword" "Steelhead" "Karui Chopper" "Recurve Bow" "Poleaxe" "Carved Wand" "Void Sceptre" "Eternal Sword" "Ambusher" "Ezomyte Blade" "Harbinger Bow" "Shadow Axe" "Highland Blade" "Gladius" "Shadow Sceptre" "Headsman Axe" "Jagged Maul" "Nailed Fist" "Bastard Sword" "Ezomyte Dagger" "Dread Maul" "Brass Maul" "Sledgehammer" "Royal Skean" "Gavel" "Crystal Sceptre" "Sage Wand" "Tornado Wand" "Engraved Wand" "Boot Knife" "War Sword" "Hellion's Paw" "Stiletto" "Grinning Fetish" "Gut Ripper" "Gnarled Branch" "Elder Sword" "Vaal Claw" "Imperial Skean" "Vaal Sceptre" "Terror Claw" "Spiraled Wand" "Heavy Belt" "Leather Belt" "Onyx Amulet" "Chain Belt" "Sapphire Ring" "Cloth Belt" "Opal Ring" "Prismatic Ring" "Topaz Ring" "Turquoise Amulet" "Two-Stone Ring" "Ruby Ring" "Studded Belt" "Amber Amulet" "Lapis Amulet" "Paua Amulet" "Gold Ring" "Jade Amulet" "Unset Ring" "Amethyst Ring" "Iron Ring" "Rustic Sash" "Moonstone Ring" "Paua Ring" "Agate Amulet" "Citrine Amulet" "Gold Amulet" "Coral Amulet" "Large Cluster Jewel" "Viridian Jewel" "Small Cluster Jewel" "Crimson Jewel" "Cobalt Jewel"
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

