const { join } = require('path')

class ProvideLib {
    name = 'provide-lib'
    /**编辑器选项 */
    options = { libs: [] }

    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        const loader = {
            loader: join(__dirname, './loader.js'),
            options: { config: this.options },
            ident: this.name + '_loader'
        }

        compiler.hooks.thisCompilation.tap(this.name, (compilation) => {
            compilation.hooks.buildModule.tap(this.name, module => {
                if (!module.request) return
                if (module.request.indexOf(join('src/main.ts')) > -1) module.loaders.push(loader)
            })
        });
    }
}

module.exports = ProvideLib