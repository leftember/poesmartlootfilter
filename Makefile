all: divCard uniques influence combine

poeninja:
	python ./src/GetPoeNinjaData.py
	
divCard:
	python ./src/TierDivCard.py
	
influence:
	python ./src/TierInfluence.py

uniques:
	python ./src/TierUniques.py

combine:
	python ./src/Combine.py

publish:
	python ./src/poeapi.py

release:
	mv target/final.filter /var/www/html/
