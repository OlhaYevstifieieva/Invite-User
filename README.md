# Invite-User

This is a single-page application (SPA) designed to configure a user on the platform. It is developed using the Vue 3 framework.

The form on this page does not communicate with the server. However, when the user clicks the "Invite User" button, all the information entered in the form is logged to the console. Since only a small amount of information is involved, the decision was made to use localStorage instead of Vuex. After "sending" the information, all input fields are disabled to prevent further modifications.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
## Technologies

    Vue
    Vue-router
