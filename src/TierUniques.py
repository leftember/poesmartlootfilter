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

for b in multi:
    minValue = min([int(v) for k,v in multi[b]])
    if minValue > 100:
        T1.append(b)
    elif minValue > 10:
        T2.append(b)
    elif minValue > 2:
        T3.append(b)
    else:
        T4.append(b)

print(T1)
print(len(T2))
print(len(T3))
print(len(T4))
print(len(multi))



"""
with open(f'{curDir}/../filter/root/3900DivCards/3901DivCards.template') as tempFP:
    template = tempFP.read()
    template = template.replace("{{T1DivNames}}", "\"" + "\" \"".join(high) + "\"")
    template = template.replace("{{T2DivNames}}", "\"" + "\" \"".join(mid) + "\"")
    template = template.replace("{{T3DivNames}}", "\"" + "\" \"".join(low) + "\"")
    #with open(f'{curDir}/../filter/root/3900DivCards/3901DivCards.frag', mode='w') as fragFP:
    #  fragFP.write(template) """
