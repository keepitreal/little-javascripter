var car = function (lat) {
	return lat[0];
};

var cdr = function (lat) {
	lat.splice(0,1);
	return lat;
};

var cons = function (a, lat) {
	lat.unshift(a);
	return lat;
};

var member = function (a, lat) {
	if (lat.length === 0) {
		return false;
	} else {
		return (car(lat) === a) || (member(a, cdr(lat)));
	}
};

var rember = function (a, lat) {
	if (lat.length === 0) {
		return [];
	} else {
		if (car(lat) === a) {
			return cdr(lat);
		} else {
			return cons(car(lat), rember(a, cdr(lat)));
		}
	}
};

var firsts = function (l) {
	if (l.length === 0) {
		return [];
	} else {
		return cons(car(car(l)), firsts(cdr(l)));
	}
};

var insertR = function (neww, oldd, lat) {
	if (lat.length === 0) {
		return [];
	} else {
		if (car(lat) === oldd) {
			return cons(old, cons(neww, cdr(lat)));
		} else {
			return cons(car(lat), insertR(neww, oldd, cdr(lat)));
		}
	}
};

var insertL = function (neww, oldd, lat) {
	if (lat.length === 0) {
		return [];
	} else {
		if (car(lat) === oldd) {
			return cons(neww, cons(old, cdr(lat)));
		} else {
			return cons(car(lat), insertL(neww, oldd, cdr(lat)));
		}
	}
};

var subst = function(neww, oldd, lat) {
	if (lat.length === 0) {
		return [];
	} else {
		if (car(lat) === oldd) {
			return cons(neww, cdr(lat));
		} else {
			return cons((car(lat)), (subst(neww, oldd, cdr(lat))));
		}
	}
};



