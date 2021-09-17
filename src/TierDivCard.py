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
        high.append((k,v))
    elif v > 2:
        mid.append((k,v))
    else:
        low.append((k,v))

print('-----high------')
for k,v in high:
    print((k,v))

print('-----mid------')
for k,v in mid:
    print((k,v))

