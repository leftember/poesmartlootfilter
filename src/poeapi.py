import requests
import json
from requests.structures import CaseInsensitiveDict

from pathlib import Path
home = str(Path.home())


def get_access_token():
    with open(f'{home}/poe/clientSecret') as fp:
        clientSecret = fp.readline().replace('\n','')
    tokenUrl = 'https://www.pathofexile.com/oauth/token'
    hhh = {'user-agent':'my agent'}

    r = requests.post(tokenUrl, data= {'client_id':'blowblood','client_secret': clientSecret,
        'grant_type':'client_credentials','scope':'account:profile account:item_filter'},
                  headers = hhh)
    result = r.json()
    return result["access_token"]

#token = get_access_token()
#print(token)
with open(f'{home}/poe/token') as fp:
    token = fp.readline().replace('\n','')

url = 'https://www.pathofexile.com/api/item-filter'
# url = 'https://api.pathofexile.com/item-filter/lJQYrU1'

# url = 'https://api.pathofexile.com/profile'
headers = CaseInsensitiveDict()
headers["Authorization"] = f"Bearer {token}"
headers["user-agent"] = f"leftember smart loot filter v0.0.1"

r = requests.get(url, headers = headers)
print(r)
print(r.json())
headers["Content-Type"] = "application/json"

filter = """
Show
    SetFontSize 45
    SetTextColor 0 0 1 0
    """

data = {
    'filter_name':'fromoauth',
    'realm':'pc',
    'description':'a loot filter from app',
    'version':'v0.0.1',
    'public':False,
    'filter':filter
}

payload = json.dumps(data)
r = requests.post(url, data=payload, headers = headers)

print(r)
print(r.text)

