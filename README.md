# Reproducable - Vee Validate fieldArray with useField

useFieldArray and useField don't work well together.

To reproduce:
1. add fields
2. remove fields
3. fields arent properly removed and the state is out of sync
    - You can only remove one item, the last field becomes an empty object

Workaround:  
Follow NOTE instruction in `src/components/ItemFields.vue`

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
