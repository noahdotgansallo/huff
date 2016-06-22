var Collection = function()
{
	return this;
}

Collection.prototype.find = function(id) {
	return this[id];
};

Collection.prototype.add = function(id, object) {
	this[id] = {};
	if (typeof object !== 'undefined') {
		this[id] = object;
	};
	return this[id];
};

Collection.prototype.remove = function(id) {
	try {
		delete this[id];
		return true;
	} catch(err) {
		return false;
	}
};