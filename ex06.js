function doublons(tab) {
	let array = [];
	for (let i = 0; i < tab; i++) {
		tab[i] * 2;
		array.push(tab[i]);
	}
	return array;
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]
