#------------------------------------
#   [4205] Multi-Unique bases.
#------------------------------------
# These bases have multiple uniques. One of the uniques, is a high value one
# While others are cheap. We give them a high quality display, while making a normal unique
# Sound to prevent false excitement.

Show # $type->uniques $tier->multispecial
    Rarity Unique
    BaseType == "Great Crown" "Triumphant Lamellar" "Carnal Armour" "Magistrate Crown" "Golden Buckler" "Saint's Hauberk" "Golden Plate" "Sacrificial Garb" "Sadist Garb" "Crusader Plate" "Sentinel Jacket" "Widowsilk Robe" "Varnished Coat" "Lacquered Garb" "Spidersilk Robe" "Elegant Ringmail" "Astral Plate" "Vaal Regalia" "Latticed Ringmail" "Full Dragonscale" "Full Wyrmscale" "Destiny Leather" "Glorious Plate" "Necromancer Silks" "Iron Circlet" "Strapped Leather" "Soldier Boots" "Vaal Gauntlets" "Assassin's Garb" "Destroyer Regalia" "Wild Leather" "Crusader Chainmail" "Reinforced Greaves" "Saintly Chainmail" "Ebony Tower Shield" "Archon Kite Shield" "Plate Vest" "Mirrored Spiked Shield" "Penetrating Arrow Quiver" "Stealth Boots" "Crusader Gloves" "Cutthroat's Garb" "Praetor Crown" "Desert Brigandine" "Hydrascale Gauntlets" "Chiming Spirit Shield" "Callous Mask" "Sage's Robe" "Steelscale Gauntlets" "Prophet Crown" "Holy Chainmail" "Bone Armour" "Sorcerer Boots" "Tarnished Spirit Shield" "Murder Boots" "Blunt Arrow Quiver" "Sharktooth Arrow Quiver" "Buckskin Tunic" "Coronal Leather" "Copper Plate" "Bone Circlet" "Silken Hood" "Pinnacle Tower Shield" "Sharkskin Tunic" "Simple Robe" "Conquest Chainmail" "Carnal Mitts" "Solaris Circlet" "Loricated Ringmail" "Scholar's Robe" "Necromancer Circlet" "Lacquered Buckler" "Ornate Ringmail" "Leather Hood" "Murder Mitts" "Titan Greaves" "Arcanist Slippers" "Velvet Gloves" "Zealot Gloves" "Spike-Point Arrow Quiver" "Goathide Boots" "Sinner Tricorne" "Legion Boots" "Gilded Sallet" "Goathide Gloves" "Two-Point Arrow Quiver" "Fire Arrow Quiver" "Hubris Circlet" "Harlequin Mask" "Carnal Boots" "Legion Gloves" "Assassin's Mitts" "Goliath Greaves" "Iron Mask" "Titan Gauntlets" "Samite Gloves" "Laminated Kite Shield" "Great Helmet" "Clasped Boots" "Plank Kite Shield" "Vine Circlet" "Painted Buckler" "Bronzescale Boots" "Shagreen Boots" "Sorcerer Gloves" "Broadhead Arrow Quiver" "Festival Mask" "Iron Hat" "Soldier Gloves" "Velvet Slippers" "Nightmare Bascinet" "Archon Kite Shield Piece" "Serrated Arrow Quiver" "Clasped Mitts" "Vaal Mask" "Blunt Arrow Quiver Piece" "Ironscale Boots" "Mind Cage" "Titanium Spirit Shield" "Golden Mask" "Silk Slippers" "Bone Helmet" "Lacquered Helmet" "Callous Mask Piece" "War Buckler" "Sulphur Flask" "Quartz Flask" "Silver Flask" "Stibnite Flask" "Granite Flask" "Ruby Flask" "Sanctified Mana Flask" "Maelström Staff" "Ezomyte Staff" "Ranger Bow" "Judgement Staff" "Spine Bow" "Vaal Axe" "Terror Maul" "Assassin Bow" "Despot Axe" "Serpentine Staff" "Death Bow" "Meatgrinder" "Infernal Sword" "Ezomyte Axe" "Short Bow" "Imperial Bow" "Ornate Sword" "Lathi" "Reaver Sword" "Imperial Staff" "Steelhead" "Royal Bow" "Primordial Staff" "Tiger Sword" "Elegant Sword" "Coiled Staff" "Great Mallet" "Lion Sword" "Military Staff" "Iron Staff" "Long Bow" "Woodsplitter" "Ambusher" "Gemstone Sword" "Sledgehammer" "Abyssal Axe" "Crude Bow" "Legion Sword" "Fiend Dagger" "Royal Staff" "Brass Maul" "Ornate Mace" "Vile Staff" "Jagged Maul" "Labrys" "Cutlass" "Harbinger Bow" "Ezomyte Blade" "Shadow Axe" "Headsman Axe" "Vaal Claw" "Karui Chopper" "Etched Greatsword" "Decimation Bow" "Highland Blade" "Gladius" "Gavel" "Recurve Bow" "Boot Knife" "Dread Maul" "Bastard Sword" "Gnarled Branch" "Bone Bow" "Poleaxe" "Eternal Sword" "Tornado Wand" "Crystal Wand" "Void Sceptre" "Shadow Sceptre" "Sage Wand" "Jade Hatchet" "Rusted Sword" "Grinning Fetish" "Royal Skean" "Imperial Claw" "Elder Sword" "Nailed Fist" "Carved Wand" "Vaal Blade" "Engraved Wand" "Skinning Knife" "War Sword" "Spiraled Wand" "Hellion's Paw" "Stiletto" "Imperial Skean" "Vaal Sceptre" "Gut Ripper" "Terror Claw" "Cleaver" "Legion Sword Piece" "Imperial Staff Piece" "War Hammer" "Midnight Blade" "Chain Belt" "Leather Belt" "Sapphire Ring" "Cloth Belt" "Prismatic Ring" "Turquoise Amulet" "Paua Ring" "Jade Amulet" "Two-Stone Ring" "Studded Belt" "Paua Amulet" "Ruby Ring" "Onyx Amulet" "Topaz Ring" "Amber Amulet" "Unset Ring" "Amethyst Ring" "Coral Ring" "Heavy Belt" "Citrine Amulet" "Lapis Amulet" "Iron Ring" "Moonstone Ring" "Gold Amulet" "Gold Ring" "Opal Ring" "Rustic Sash" "Agate Amulet" "Coral Amulet" "Cloth Belt Piece" "Cobalt Jewel" "Crimson Jewel" "Viridian Jewel" "Small Cluster Jewel"
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

