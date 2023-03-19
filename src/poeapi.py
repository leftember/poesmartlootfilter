import requests
import os
import json
from requests.structures import CaseInsensitiveDict

from pathlib import Path
home = str(Path.home())

def get_access_token():
    try:
        with open(f'{home}/poe/clientSecret') as fp:
            clientSecret = fp.readline().replace('\n','')
    except FileNotFoundError:
        print('please save client secret at {home}/poe/clientSecret')
        exit()
    tokenUrl = 'https://www.pathofexile.com/oauth/token'
    hhh = {'user-agent':'my agent'}

    r = requests.post(tokenUrl, data= {'client_id':'blowblood','client_secret': clientSecret,
        'grant_type':'client_credentials','scope':'account:profile account:item_filter'},
                  headers = hhh)
    result = r.json()
    return result["access_token"]

#token = get_access_token()
#print(token)
tokenFile = f'{home}/poe/token'
try:
    with open(tokenFile) as fp:
        token = fp.readline().replace('\n','')
except FileNotFoundError:
    token = get_access_token()
    with open(tokenFile,'w') as fp:
        fp.write(token)

if not token:
    exit()

def get_loot_filters():
    url = 'https://www.pathofexile.com/api/item-filter'
    # url = 'https://api.pathofexile.com/item-filter/lJQYrU1'
    # url = 'https://api.pathofexile.com/profile'
    headers = CaseInsensitiveDict()
    headers["Authorization"] = f"Bearer {token}"
    headers["user-agent"] = f"leftember smart loot filter v0.0.1"

    r = requests.get(url, headers = headers)
    print(r)
    print(r.json())

def upload_loot_filter(filtername:str, filter:str, isPublic:bool = False):
    url = 'https://www.pathofexile.com/api/item-filter/O9qmXcE?validate=true'
    headers = CaseInsensitiveDict()
    headers["Authorization"] = f"Bearer {token}"
    headers["user-agent"] = f"leftember smart loot filter v0.0.1"
    headers["Content-Type"] = "application/json"

    data = {
        'filter_name':filtername,
        'realm':'pc',
        'description':'a loot filter from app',
        'version':'v0.0.1',
        'filter':filter}

    if isPublic:
        data['public'] = True

    payload = json.dumps(data)
    r = requests.post(url, data=payload, headers = headers)
    print(r)
    if r.status_code != 200:
        print(r.json()['error'])

filter = """
Show
    SetFontSize 45
    SetTextColor 0 0 1 0
    """

fullpath = os.path.abspath(__file__)
curDir = os.path.dirname(fullpath)

with open(f'{curDir}/../target/final.filter') as fp:
    filter = fp.read()

get_loot_filters()
# upload_loot_filter('fromoauth', filter)
