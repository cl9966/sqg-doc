module.exports = function (source) {
    const { config } = this.getOptions()

    let code = ''
    for (const lib of config.libs) {
        code += `import * as ${lib.var} from '${lib.name}'\n`
        code += `window['${lib.var}'] = ${lib.var}\n`
    }

    return code + source
}