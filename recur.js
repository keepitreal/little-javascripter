var car = function (lat) {
	return lat[0];
};

var cdr = function (lat) {
	lat.splice(0,1);
	return lat;
};

var cons = function (a, lat) {
	lat.unshift(a);
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