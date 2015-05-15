// get rid of facebook invariant to avoid annoying 
// problems with gulp + browserify + envify

var notInvariant = function(condition, error, arg) {
    if (!condition) {
        throw new Error(error.replace(/%s/g, arg));
    }
}

module.exports = notInvariant;
