// css block loads _variables.scss file globally, so SASS variables can be accessed in any component

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.scss";`
            }
        }
    },
    publicPath: '/color-picker/'
}