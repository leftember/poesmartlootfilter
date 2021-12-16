import requests
import json
import os
from myConfig import conf

league = conf['league']
currencyTypes = conf['currency']
itemTypes = conf['item']

def GetData(category:str, type:str) -> None:
    url = f'https://poe.ninja/api/data/{category}Overview?league={league}&type={type}&language=en'
    print(f'getting data from {url}')
    response = requests.get(url)
    path = os.path.dirname(__file__)
    cacheFile = f'{path}/../target/{type}.json'

    with open(cacheFile, mode='w', encoding='utf-8') as fp:
        json.dump(response.json(), fp)

def GetAllData() -> None:
    for t in currencyTypes:
        GetData('Currency', t)
    for t in itemTypes:
        GetData('Item', t)

if __name__ == '__main__':
    GetAllData()
