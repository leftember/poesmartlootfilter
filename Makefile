all: divCard uniques combine

poeninja:
	python ./src/GetPoeNinjaData.py
	
divCard:
	python ./src/TierDivCard.py

uniques:
	python ./src/TierUniques.py

combine:
	python ./src/Combine.py

release:
	mv target/final.filter /var/www/html/
