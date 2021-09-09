def Split():
    from NSFilterOp import NSFilterOp
    filter = NSFilterOp('../NeverSink/Base.filter')
    for kk in filter.data:
        with open(f'../data/{kk}.filter', mode='w',encoding='utf-8') as fp:
            fp.writelines(s + '\n' for s in filter.data[kk])

# Split()

def merge():
    import os
    files = [f.path for  f in os.scandir('../data') if f.name[:4].isdigit()]
    result = []

    for f in files:
        with open(f) as fp:
            ff = fp.read().splitlines()
            result.extend(ff)

    with open(f'../data/final.filter', mode='w',encoding='utf-8') as fp:
        fp.writelines(s + '\n' for s in result)

# merge()

from FilterFragment import FilterFragment

def Combine():
    import os
    files = [f.path for  f in os.scandir('../data') if f.name[:4].isdigit()]

    result = FilterFragment()

    for f in files:
        fragment = FilterFragment()
        fragment.loadfromfile(f)
        result.extend(fragment)
    result.finalize()
    result.printheader()

Combine()