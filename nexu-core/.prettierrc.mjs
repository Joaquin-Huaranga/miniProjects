/** @type {import("prettier").Config} */
export default {
    plugins: [
        'prettier-plugin-astro',
        'prettier-plugin-tailwindcss'
    ],
    overrides: [
        { files: '*.astro', options: { parser: 'astro' } }
    ],
    semi: false,
    singleQuote: true,
    printWidth: 100,
    tailwindConfig: './tailwind.config.mjs'
}
