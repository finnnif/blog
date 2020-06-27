export default {
    base: '/blog/',
    srcDir: 'src',
    publicDir: 'public',
    // https://docs.npmjs.com/using-npm/developers.html#keeping-files-out-of-your-package
    ignore: [
        /\/\..+\.swp$/,
        /\/\._/,
        /\/\.DS_Store$/,
        /\/\.git\//,
        /\/\.hg\//,
        /\/\.npmrc$/,
        /\/\.lock-wscript$/,
        /\/\.svn\//,
        /\/\.wafpickle-.+/,
        /\/config\.gypi$/,
        /\/CVS\//,
        /\/npm-debug\.log$/,
        /\/node_modules\//
    ],
    theme: 'default',
    plugins: ['init', 'md', 'tsx', 'script', 'layout', 'write'],
    watch: false,
    serve: false,
    port: 8000,
    title: "finnnif's blog"
};