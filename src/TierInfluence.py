import os
import json

curDir = os.path.dirname(__file__)
targetFile = f'{curDir}/../target/BaseType.json'

print(f'processing {targetFile}')

with open(targetFile) as fp:
    data = json.load(fp)

lines = data['lines']

print(f'got {len(lines)} lines of data')

bases = []

heistBases = {"Accumulator Wand", "Alternating Sceptre", "Anarchic Spiritblade", "Apex Cleaver", "Assembler Wand", "Astrolabe Amulet", "Banishing Blade", "Battery Staff", "Blasting Blade", "Blunt Force Condenser", "Boom Mace", "Capacity Rod", "Capricious Spiritblade", "Cogwork Ring", "Cold-attuned Buckler", "Congregator Wand", "Crack Mace", "Crushing Force Magnifier", "Disapprobation Axe", "Endothermic Buckler", "Eventuality Rod", "Exhausting Spirit Shield", "Exothermic Tower Shield", "Fickle Spiritblade", "Flare Mace", "Flashfire Blade", "Flickerflame Blade", "Foundry Bow", "Geodesic Ring", "Heat-attuned Tower Shield", "Hedron Bow", "Hollowpoint Dagger", "Honed Cleaver", "Impact Force Propagator", "Infernal Blade", "Magmatic Tower Shield", "Malign Fangs", "Maltreatment Axe", "Mechalarm Belt", "Micro-Distillery Belt", "Oscillating Sceptre", "Pneumatic Dagger", "Polar Buckler", "Potentiality Rod", "Pressurised Dagger", "Prime Cleaver", "Psychotic Axe", "Rebuking Blade", "Reciprocation Staff", "Shadow Fangs", "Simplex Amulet", "Solarine Bow", "Stabilising Sceptre", "Subsuming Spirit Shield", "Transfer-attuned Spirit Shield", "Transformer Staff", "Void Fangs"}

ritualBases = {"Aetherwind Gloves", "Archdemon Crown", "Atonement Mask", "Basemetal Treads", "Blizzard Crown", "Brimstone Treads", "Cloudwhisper Boots", "Darksteel Treads", "Debilitation Gauntlets", "Demon Crown", "Dreamquest Slippers", "Duskwalk Slippers", "Gale Crown", "Gauche Gloves", "Gruelling Gauntlets", "Imp Crown", "Leyline Gloves", "Nexus Gloves", "Nightwind Slippers", "Penitent Mask", "Sinistral Gloves", "Sorrow Mask", "Southswing Gloves", "Stormrider Boots", "Taxing Gauntlets", "Windbreak Boots", "Winter Crown"}

expeditionBases = {"Iron Flask", "Runic Crest", "Runic Crown", "Runic Gages", "Runic Gauntlets", "Runic Gloves", "Runic Greaves", "Runic Helm", "Runic Sabatons", "Runic Sollerets"}

atlasBases =  {"Apothecary's Gloves", "Artillery Quiver", "Blue Pearl Amulet", "Bone Helmet", "Cerulean Ring", "Convoking Wand", "Crystal Belt", "Fingerless Silk Gloves", "Fugitive Boots", "Gripped Gloves", "Iolite Ring", "Marble Amulet", "Opal Ring", "Seaglass Amulet", "Spiked Gloves", "Steel Ring", "Two-Toned Boots", "Vanguard Belt", "Vermillion Ring"}

skipbases = {"Grasping Mail", "Stygian Vise", "Sacrificial Garb", "Timeless Jewel", "Prismatic Jewel"}

skipbases.update(heistBases)
skipbases.update(ritualBases)
skipbases.update(expeditionBases)
skipbases.update(atlasBases)

for d in lines:
    if d['baseType'] not in skipbases and d['count'] >= 10:   # at least 10 to filter out noise
        bases.append((d['name'], d['chaosValue'], d['levelRequired'], d['baseType'], d.get('variant', 'None'), d['itemClass'], d['itemType']))

with open(f'{curDir}/../target/influence.csv', mode='w') as csv:
    csv.write('name,value,ilvl,baseType,influence,category\n')
    for b in bases:
        if "/" not in b[4]:
            csv.write(f'{b[0]},{b[1]},{b[2]},{b[3]},{b[4]},{b[6]}\n')

nonInf = [b for b in bases if b[4] == 'None' and b[1] >= 11]

print(f'{len(nonInf)} normal items are parsed')

nonInf82 = []
nonInf83 = []
nonInf84 = []
nonInf85 = []
nonInf86 = []

buckets = {82:nonInf82, 83:nonInf83, 84:nonInf84, 85:nonInf85, 86:nonInf86}

for b in nonInf:
    buckets[b[2]].append(b[0])

for bu in buckets:
    if len(buckets[bu]) == 0:
        buckets[bu].append('Grasping Mail') ## loot filter doens't like empty string

with open(f'{curDir}/../filter/root/1000HighLvlBases/1001HighLvlBases.template') as tempFP:
    template = tempFP.read()
    template = template.replace("{{86bases}}", "\"" + "\" \"".join(nonInf86) + "\"")
    template = template.replace("{{85bases}}", "\"" + "\" \"".join(nonInf85) + "\"")
    template = template.replace("{{84bases}}", "\"" + "\" \"".join(nonInf84) + "\"")
    template = template.replace("{{83bases}}", "\"" + "\" \"".join(nonInf83) + "\"")
    template = template.replace("{{82bases}}", "\"" + "\" \"".join(nonInf82) + "\"")
    with open(f'{curDir}/../filter/root/1000HighLvlBases/1001HighLvlBases.frag', mode='w') as fragFP:
        fragFP.write(template)

def LoadData(inf, infTemplate) -> str:
    infBases = [b for b in bases if b[4] == inf and b[1] >= 11] # show base with at least 11c.
    print(f'get {len(infBases)} of {inf} items')
    infBuckets = {82:[], 83:[], 84:[], 85:[], 86:[]}
    for b in infBases:
        infBuckets[b[2]].append(b[0])

    for bu in infBuckets:
        if len(infBuckets[bu]) == 0:
            infBuckets[bu].append('Grasping Mail')

    infTemplate = infTemplate.replace("{{" + inf + "86}}", "\"" + "\" \"".join(infBuckets[86]) + "\"")
    infTemplate = infTemplate.replace("{{" + inf + "85}}", "\"" + "\" \"".join(infBuckets[85]) + "\"")
    infTemplate = infTemplate.replace("{{" + inf + "84}}", "\"" + "\" \"".join(infBuckets[84]) + "\"")
    infTemplate = infTemplate.replace("{{" + inf + "83}}", "\"" + "\" \"".join(infBuckets[83]) + "\"")
    infTemplate = infTemplate.replace("{{" + inf + "82}}", "\"" + "\" \"".join(infBuckets[82]) + "\"")
    return infTemplate

with open(f'{curDir}/../filter/root/0200InfluenceItems/0201InfluenceItems.template') as tempFP:
    template = tempFP.read()
    template = LoadData('Crusader', template)
    template = LoadData('Redeemer', template)
    template = LoadData('Hunter', template)
    template = LoadData('Warlord', template)
    template = LoadData('Shaper', template)
    template = LoadData('Elder', template)
    with open(f'{curDir}/../filter/root/0200InfluenceItems/0201InfluenceItems.frag', mode='w') as fragFP:
        fragFP.write(template)


print("influnced items are tiered")
