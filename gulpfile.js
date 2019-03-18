const {src, dest} = require("gulp");

function copy () {
    return src('css/base/main.scss').pipe(dest('dist'));    
}

exports.copy = copy