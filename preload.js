const luamin = require('./luamin')
let lua_tools = {
    "Beautify": luamin.Beautify,
    "Minify": luamin.Minify,
    "Uglify": luamin.Uglify,
}

window.lua_tools = lua_tools

