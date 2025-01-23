function sommePairs(tab) {
	let resultat = 0;
	for (let i = 0; i < tab.length; i++) {
		resultat = tab % 2 == 0;
	}
	return resultat;
}

console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6
