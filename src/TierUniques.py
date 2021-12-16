import os
import json

T1 = []
T2 = []
T3 = []
T4 = []
multi = {}

def loadData(f):
    print(f'processing {f}')
    with open(f) as fp:
        data = json.load(fp)

    lines = data['lines']
    print(f'got {len(lines)} lines of data')

    non6Links = [x for x in lines if 'links' not in x or x['links'] != 6]

    items = []
    for d in lines:
        items.append((d['name'], d['baseType'], d['chaosValue']))

    base = set()
    multiBase = set()
    for k,b,v in items:
        if b not in base:
            base.add(b)
        else:
            multiBase.add(b)

    for k,b,v in items:
        if b == 'Amethyst Flask':
            print((k,b,v))
        if b not in multiBase:
            if v > 100:
                T1.append(b)
            elif v > 10:
                T2.append(b)
            elif v > 2:
                T3.append(b)
            else:
                T4.append(b)
        else:
            if b not in multi:
                multi[b] = [(k,v)]
            else:
                multi[b].append((k,v))

def generateFrag(templateFile, fragFile, token, values):
    with open(templateFile) as tempFP:
        template = tempFP.read()
        template = template.replace(token, "\"" + "\" \"".join(values) + "\"")
        with open(fragFile, mode='w') as fragFP:
            fragFP.write(template)

curDir = os.path.dirname(__file__)
loadData(f'{curDir}/../target/UniqueArmour.json')
loadData(f'{curDir}/../target/UniqueFlask.json')
loadData(f'{curDir}/../target/UniqueWeapon.json')
loadData(f'{curDir}/../target/UniqueAccessory.json')
loadData(f'{curDir}/../target/UniqueJewel.json')

print(T1)
print(len(T2))
print(len(T3))
print(len(T4))
print(len(multi))

wild = []

for b in multi:
    maxValue = max([int(v) for k,v in multi[b]])
    minValue = min([int(v) for k,v in multi[b]])
    if minValue > 100:
        T1.append(b)
    elif minValue > 10:
        T2.append(b)
    elif minValue > 5:
        T3.append(b)
    elif maxValue < 2:    # exclude <2 trashes even multi bases
        T4.append(b)
    else:
        wild.append(b)

print(T1)
print(len(T2))
print(len(T3))
print(len(T4))
print(len(wild))

generateFrag(f'{curDir}/../filter/root/4200Uniques/4202Tier1Uniques.template',
             f'{curDir}/../filter/root/4200Uniques/4202Tier1Uniques.frag',
             "{{T1Uniques}}",
             T1)

generateFrag(f'{curDir}/../filter/root/4200Uniques/4203Tier2Uniques.template',
             f'{curDir}/../filter/root/4200Uniques/4203Tier2Uniques.frag',
             "{{T2Uniques}}",
             T2)

generateFrag(f'{curDir}/../filter/root/4200Uniques/4204MultiBaseUniques.template',
             f'{curDir}/../filter/root/4200Uniques/4204MultiBaseUniques.frag',
             "{{wild}}",
             wild)

generateFrag(f'{curDir}/../filter/root/4200Uniques/4205Tier3Uniques.template',
             f'{curDir}/../filter/root/4200Uniques/4205Tier3Uniques.frag',
             "{{T3Uniques}}",
             T3)

generateFrag(f'{curDir}/../filter/root/4200Uniques/4206Tier4Uniques.template',
             f'{curDir}/../filter/root/4200Uniques/4206Tier4Uniques.frag',
             "{{T4Uniques}}",
             T4)
