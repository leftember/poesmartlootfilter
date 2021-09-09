import re

class FilterFragment:
    header = {}
    data = {}

    def __init__(self):
        self.header = {}
        self.data = {}

    def loadfromfile(self, fielpath:str) -> None:
        with open(fielpath, encoding='utf-8') as fp:
            content = fp.read().splitlines()
        lineNum = 1
        result = []
        previousKey = '0000'
        previousLine = 'Unknown'
        while(lineNum < len(content)):
            mm = re.match(r'#\s*\[\[(\d{4})\]\]\s(.*)',content[lineNum])
            if mm:
                if previousKey == '0000':
                    previousKey = mm[1]
                    previousLine = content[lineNum]
                    result.append(content[lineNum-1])
                else:
                    self.data[previousKey] = result #save result
                    self.header[previousKey] = previousLine
                    result = [content[lineNum-1]]
                    previousKey = mm[1]
                    previousLine = content[lineNum]
            else:
                result.append(content[lineNum-1]) # add previous line
            lineNum += 1
        result.append(content[lineNum-1]) # pick up the last line
        self.data[previousKey] = result #save the last result
        self.header[previousKey] = previousLine

    def extend(self, other):
        for kk in other.header:
            self.header[kk] = other.header[kk]
        for kk in other.data:
            self.data[kk] = other.data[kk]

    """ wirte final result to final.fitler
    """
    def finalize(self) -> None:
        with open(f'../../final.filter', mode='w',encoding='utf-8') as fp:
            kk = list(self.data.keys())
            kk.sort()
            for kkk in kk:
                frag = self.data[kkk]
                fp.writelines(s + '\n' for s in frag)

    def printheader(self) -> None:
        kk = list(self.data.keys())
        kk.sort()
        for kkk in kk:
            print(self.header[kkk])