/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/next'],
  plugins: ['simple-import-sort'],
  rules: {
    // Sem opções aqui, o eslint-plugin-prettier usa só o @saas/prettier
    // (o @rocketseat/eslint-config fixa opções que sobrescrevem o .prettierrc)
    'prettier/prettier': ['error', {}],
    'simple-import-sort/imports': 'error',
  },
}
