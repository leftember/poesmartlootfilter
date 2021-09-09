class StyleOp:
    style = {}
    def __init__(self, baseStyle):
        self.apply(baseStyle)

    def apply(self, toapplied):
        with open(toapplied) as fp:
            lines = fp.read().splitlines()
        for line in lines:
            if line.startswith('START: '):
                continue
            if line and line.strip():
                keyword = line[line.index('// # ')+ len('// # '):]
                self.style[keyword] = line

    def getStyle(self, keyword) -> str:
        return self.style[keyword]

    def GetAll(self) -> {}:
        return self.style