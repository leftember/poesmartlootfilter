import os

def GetAllFiles(rootDir:str) -> []:
    result = []
    for dir in os.scandir(rootDir):
        if dir.is_dir():
            result.extend(GetAllFiles(dir))
        else:
            result.append((dir.name, dir.path))
    return result

def Combine():
    # in python 3.8 and earlier, __file__ is only the path specified in commandline, so have to get
    # abspath first.
    fullpath = os.path.abspath(__file__)
    curDir = os.path.dirname(fullpath)
    print(f'working on {curDir}')

    files = GetAllFiles(f'{curDir}/../filter/root')
    files.sort(key = lambda x: x[0])

    with open(f'{curDir}/../target/final.filter', encoding='utf-8', mode='w') as fp:
        for f in files:
            if f[0][:4].isdigit() and f[0].endswith('.frag'):
               print(f'reading {f[1]}...')
               with open(f[1]) as src:
                    fp.write(src.read())
                    fp.write('\n')

        #fragment = FilterFragment()
        #fragment.loadfromfile(f)
        #result.extend(fragment)
    #result.finalize()
    #result.printheader()

Combine()

