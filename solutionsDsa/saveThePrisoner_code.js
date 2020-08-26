function saveThePrisoner(n, m, s) {
	var res = (s + (m % n) - 1) % n;
	if (res == 0) {
		return n;
	} else {
		return res;
	}
}
