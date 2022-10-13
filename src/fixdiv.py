import yaml
import json
import os


if __name__ == '__main__':
    curPath = os.path.dirname(__file__)
    with open(f'{curPath}/../conf/trashdiv.yaml') as stream:
        conf = yaml.load(stream, Loader=yaml.FullLoader)
    print(conf['Niche'])

    targetFile = f'{curPath}/../target/DivinationCard.json'
    print(f'processing {targetFile}')

    with open(targetFile) as fp:
        data = json.load(fp)

    lines = data['lines']

    print(f'got {len(lines)} lines of data')

    cards = {}

    for d in lines:
        try:
            cards[d['name']] = (d.get('stackSize', 1), d['explicitModifiers'][0]['text'])
        except:
            print(d)

    items = conf['Niche']
    for i in range(len(items)):
        it = items[i].split('->')[0]
        items[i] = f'{it}->{cards[it]}'

    items = conf['Trash']
    for i in range(len(items)):
        it = items[i].split('->')[0]
        items[i] = f'{it}->{cards[it]}'

    with open(f'{curPath}/../conf/trashdiv.yaml', 'w') as outs:
        yaml.dump(conf, outs)

