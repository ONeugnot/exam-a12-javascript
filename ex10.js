function filtrerNegatifs(tab) {
	let resultat = [];
	if (tab > 0) {
		resultat.push(tab);
	}
	return resultat;
}
console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
