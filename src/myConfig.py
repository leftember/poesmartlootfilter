import yaml
import os

def loadYamlConfig()-> None:
    # load yaml file into a variable, named conf
    curPath = os.path.dirname(__file__)
    stream = open(f'{curPath}/../conf/global.yaml')
    conf = yaml.load(stream, Loader=yaml.FullLoader)
    return conf

conf = loadYamlConfig()

if __name__ == '__main__':
    print(conf)
    print( conf['version'])
    print(conf['item'])
    print(type(conf['item']))

