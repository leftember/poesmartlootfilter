import os
import json

curDir = os.path.dirname(__file__)
targetFile = f'{curDir}/../target/DivinationCard.json'

print(f'processing {targetFile}')

with open(targetFile) as fp:
    data = json.load(fp)

lines = data['lines']

print(f'got {len(lines)} lines of data')

cards = []

for d in lines:
    cards.append((d['name'], d['chaosValue']))

high = []
mid = []
low = []

for k,v in cards:
    if v > 10:
        high.append(k)
    elif v > 1:
        mid.append(k)
    else:
        low.append(k)

with open(f'{curDir}/../filter/root/3900DivCards/3901DivCards.template') as tempFP:
    template = tempFP.read()
    template = template.replace("{{T1DivNames}}", "\"" + "\" \"".join(high) + "\"")
    template = template.replace("{{T2DivNames}}", "\"" + "\" \"".join(mid) + "\"")
    template = template.replace("{{T3DivNames}}", "\"" + "\" \"".join(low) + "\"")
    with open(f'{curDir}/../filter/root/3900DivCards/3901DivCards.frag', mode='w') as fragFP:
        fragFP.write(template)


print("div cards are tiered")
