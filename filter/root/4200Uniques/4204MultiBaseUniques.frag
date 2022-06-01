#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Carnal Armour" "Elegant Round Shield" "Soldier Boots" "Triumphant Lamellar" "Sadist Garb" "Saint's Hauberk" "Magistrate Crown" "Vaal Regalia" "Crusader Plate" "Astral Plate" "Elegant Ringmail" "Strapped Leather" "Saintly Chainmail" "Widowsilk Robe" "Necromancer Silks" "Sacrificial Garb" "Sentinel Jacket" "Golden Plate" "Exquisite Leather" "Destiny Leather" "Great Crown" "Varnished Coat" "Lacquered Garb" "Full Dragonscale" "Full Scale Armour" "Full Wyrmscale" "Glorious Plate" "Loricated Ringmail" "Destroyer Regalia" "Ambush Mitts" "Archon Kite Shield" "Spidersilk Robe" "Vaal Spirit Shield" "Crusader Gloves" "Callous Mask" "Hydrascale Gauntlets" "Stealth Boots" "Necromancer Circlet" "Blunt Arrow Quiver" "Assassin's Garb" "Ezomyte Burgonet" "Vaal Gauntlets" "Cutthroat's Garb" "Holy Chainmail" "Simple Robe" "Bone Armour" "Crusader Chainmail" "Sharkskin Tunic" "Buckskin Tunic" "Slink Boots" "Pinnacle Tower Shield" "Desert Brigandine" "Carnal Mitts" "Copper Plate" "Scholar's Robe" "Wild Leather" "Latticed Ringmail" "Conquest Chainmail" "Ornate Ringmail" "Sage's Robe" "Iron Circlet" "Titan Greaves" "Sorcerer Boots" "Prophet Crown" "Ebony Tower Shield" "Plate Vest" "Goliath Greaves" "Titan Gauntlets" "Lacquered Buckler" "Laminated Kite Shield" "Royal Burgonet" "Steelscale Gauntlets" "Lacquered Helmet" "Festival Mask" "Praetor Crown" "Murder Boots" "Sharktooth Arrow Quiver" "Assassin's Mitts" "Legion Gloves" "Arcanist Slippers" "Mirrored Spiked Shield" "Carnal Boots" "Hubris Circlet" "Sinner Tricorne" "Two-Point Arrow Quiver" "Goathide Boots" "Archon Kite Shield Piece" "Callous Mask Piece" "Silken Hood" "Harlequin Mask" "Vaal Mask" "Arcanist Gloves" "Zealot Gloves" "Bone Helmet" "Coronal Leather" "Soldier Gloves" "Nightmare Bascinet" "Blunt Arrow Quiver Piece" "Solaris Circlet" "Titanium Spirit Shield" "Murder Mitts" "Bone Circlet" "Bronzescale Boots" "Silk Slippers" "Spike-Point Arrow Quiver" "Reinforced Greaves" "Samite Gloves" "Clasped Mitts" "Mind Cage" "Tarnished Spirit Shield" "Great Helmet" "Shagreen Boots" "Sorcerer Gloves" "Sulphur Flask" "Quartz Flask" "Iron Flask" "Stibnite Flask" "Ruby Flask" "Granite Flask" "Silver Flask" "Sanctified Mana Flask" "Ezomyte Staff" "Royal Bow" "Judgement Staff" "Assassin Bow" "Ranger Bow" "Maelström Staff" "Citadel Bow" "Death Bow" "Imperial Maul" "Infernal Sword" "Reaver Sword" "Royal Staff" "Quarterstaff" "Despot Axe" "Imperial Bow" "Highborn Staff" "Vaal Axe" "Karui Maul" "Void Axe" "Imperial Staff" "Serpentine Staff" "Long Bow" "Great Mallet" "Terror Maul" "Short Bow" "Lathi" "Spine Bow" "Jasper Chopper" "Ezomyte Axe" "Military Staff" "Fiend Dagger" "Tiger Sword" "Coiled Staff" "Labrys" "Cutlass" "Legion Sword" "Vile Staff" "Primordial Staff" "Ornate Mace" "Woodsplitter" "Ambusher" "Lion Sword" "Gemstone Sword" "Abyssal Axe" "Iron Staff" "Crude Bow" "Meatgrinder" "Karui Chopper" "Eternal Sword" "Etched Greatsword" "Imperial Claw" "Ezomyte Blade" "Decimation Bow" "Steelhead" "Harbinger Bow" "Ornate Sword" "Shadow Axe" "Recurve Bow" "Poleaxe" "Jagged Maul" "Highland Blade" "Carved Wand" "Brass Maul" "Void Sceptre" "Headsman Axe" "Dread Maul" "Sledgehammer" "Bastard Sword" "Nailed Fist" "Sage Wand" "Tornado Wand" "Shadow Sceptre" "Gladius" "Royal Skean" "Gavel" "Elegant Sword" "Spiraled Wand" "Legion Sword Piece" "Vaal Sceptre" "Crystal Sceptre" "Imperial Staff Piece" "Engraved Wand" "Boot Knife" "Hellion's Paw" "War Sword" "Stiletto" "Grinning Fetish" "Gnarled Branch" "Elder Sword" "Vaal Claw" "Bone Bow" "War Hammer" "Imperial Skean" "Terror Claw" "Gut Ripper" "Heavy Belt" "Onyx Amulet" "Leather Belt" "Cloth Belt" "Sapphire Ring" "Chain Belt" "Ruby Ring" "Turquoise Amulet" "Unset Ring" "Opal Ring" "Two-Stone Ring" "Topaz Ring" "Prismatic Ring" "Jade Amulet" "Amber Amulet" "Paua Amulet" "Studded Belt" "Amethyst Ring" "Gold Ring" "Lapis Amulet" "Iron Ring" "Paua Ring" "Rustic Sash" "Moonstone Ring" "Gold Amulet" "Cloth Belt Piece" "Coral Ring" "Agate Amulet" "Crystal Belt" "Citrine Amulet" "Coral Amulet" "Large Cluster Jewel" "Cobalt Jewel" "Viridian Jewel" "Crimson Jewel" "Small Cluster Jewel"
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

