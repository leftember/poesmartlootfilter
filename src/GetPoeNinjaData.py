import requests
import json
import os

league = 'Expedition'

def GetData(category:str, type:str) -> None:
    url = f'https://poe.ninja/api/data/{category}Overview?league={league}&type={type}&language=en'
    response = requests.get(url)
    path = os.path.dirname(__file__)
    cacheFile = f'{path}/../target/{type}.json'

    with open(cacheFile, mode='w', encoding='utf-8') as fp:
        json.dump(response.json(), fp)

currencyTypes = ['Currency', 'Fragment']
itemTypes = ['DivinationCard','Prophecy','Oil','Incubator','UniqueWeapon','UniqueArmour']
itemTypes.extend(['UniqueAccessory','UniqueFlask','UniqueJewel','ClusterJewel','Fossil','Essence'])

for t in currencyTypes:
    GetData('Currency', t)

for t in itemTypes:
    GetData('Item', t)

