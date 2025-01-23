function moyenne(tab) {
	let resulat = 0;
	for (let i = 0; i > tab.length; i++) {
		resulat = tab[i / 2];
	}
	return resulat;
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6
