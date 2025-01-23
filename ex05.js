function compterVoyelles(chaine) {
	let nombre = 0;
	let voyelle = ["a", "e", "i", "o", "u", "y"];
	for (let entier of chaine) {
		if (voyelle.includes(entier)) {
			nombre++;
		}
	}
	return nombre;
}
console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
