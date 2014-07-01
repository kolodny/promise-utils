Promise.props = function(obj) {
    if (typeof obj !== 'object') throw new TypeError('Argument 1 of Promise.props must be an object');
    var props = Object.keys(obj);
    var values = props.map(function(prop) { return obj[prop]; });
    return Promise.all(values).then(function(resolvedArray) {
        var resolved = {};
        props.forEach(function(prop, index) {
            resolved[prop] = resolvedArray[index];
        });
        return resolved;
    });
};
