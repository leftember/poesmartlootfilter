import re
from StyleOp import StyleOp

class NSFilterOp:
    header = {}
    data = {}

    def __init__(self, fitlerFile):
        with open(fitlerFile) as fp:
            lines = fp.read().splitlines()
        style = StyleOp('../NeverSink/Default.fsty')
        style.apply('../NeverSink/Azurite.fsty')

        allStyle = style.GetAll()
        newlines = []
        for line in lines:
            newline = line
            for token in allStyle:
                if token in line:
                    newline = '\t' + allStyle[token].replace("//","")
                    break
            newlines.append(newline)
        eoh = self.__loadHeaders(newlines)
        self.__loadData(newlines[eoh:])

    def __loadHeaders(self, content:[]) -> int:
        startToken = "# [[0100]]"
        endToken = "# [[5800]]"
        started = False
        endofHeader = 0
        for c in content:
            endofHeader = endofHeader +1
            if c.startswith(startToken):
                started = True
            if started:
                mm = re.match(r'#\s*\[\[(\d{4})\]\]\s(.*)',c)
                if mm:
                    self.header[mm[1]] = mm[2]
            if c.startswith(endToken):
                break
        return endofHeader

    def __loadData(self, content:[]):
        lineNum = 0
        result = []
        previousKey = '0000'
        for lineNum in range(1, len(content)):
            mm = re.match(r'#\s*\[\[(\d{4})\]\]\s(.*)',content[lineNum])
            if mm:
                if previousKey == '0000':
                    previousKey = mm[1]
                else:
                    self.data[previousKey] = result #save result
                    result = []
                    previousKey = mm[1]
            else:
                result.append(content[lineNum-2]) # already ++ so previous line is -2
        self.data[previousKey] = result #save the last result

    def getSectionById(self, sectionIndex:int) -> str:
        idstr = f'{sectionIndex:04}'
        return self.data[idstr]

    def getSectionByName(self, sectionName:str) -> []:
        return []
