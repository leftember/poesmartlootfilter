import yaml
import os

if __name__ == '__main__':
    curPath = os.path.dirname(__file__)
    stream = open(f'{curPath}/../conf/global.yaml')
    data = yaml.load(stream, Loader=yaml.FullLoader)
    print(data)
    print(data['version'])
    print(data['item'])
    print(type(data['item']))
