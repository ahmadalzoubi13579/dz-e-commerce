# Solution

Explain your thought process, architecture decisions, and any libraries or tools you used.

# Next Codebase

#### Hi every one 🙋🏻‍♂️, Kindly find below Project Docs 🚀⚛️

## Live Demo 🌐

[Next codebase]()

## Configs Packages 🧷

I added few packages to maintain hight quality code:

- [Eslint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io/) for code formatting (as eslint rules [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)).
- [Typescript](https://www.typescriptlang.org/) for safe typing.
- [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports) to remove all unused imports to minimize final bundle size.
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) to sort `imports` and `exports`.
- [Vite](https://vitejs.dev/) as module bundler instead of [CRA](https://create-react-app.dev/) to minimize final bundle size as much as possible.

## Other Packages 📦

- [React Router](https://reactrouter.com/en/main) for client side navigation.
- [MUI](https://mui.com/) as UI framework (i made [custom theme](https://mui.com/material-ui/customization/how-to-customize/) to match [Figma](https://www.figma.com/file/tpB2x03xAkDiq89Fv5YI0W/FE-Assesment-task?type=design&node-id=0%3A1&mode=design&t=GuwIolHUmR9mMbGY-1) visual identity).

## Project structure 🏗️

- I used `Feature based Structure` as project's files and folders structure where each `feature` and all of its related stuff lay inside separate folder under `src/features/` folder, and there is `src/shared/` folder that includes all the stuff that is shared between multiple features.
- And all other folders are as any other React SPA (Single Page Application).

## Run Locally ⛏️

If you want to run the project locally, run the following commands:

- `git clone https://gitlab.com/gogoIsComing/misraj-shahada-test.git`
- `cd misraj-shahada-test`
- `yarn install`
- `yarn dev`

## Scripts 📜

- `yarn lint` to run `eslint` and `yarn lint:fix` to fix all `eslint` & `prettier` fixable issues.
- `yarn build` to build `production` ready version and `yarn preview` to deploy it locally.

## Notes ⚠️

- It's always recommended in `Feature based Structure` to extract all component's styles to separate `styles.ts` file inside the component's folder like `some-component/styles.ts`, but for the lack of time i didn't implement it fully. Any way i added one file to demonstrate the usage.
- I added empty folders to demonstrate the full capacity of this folder structure.
- I didn't implement `tests` but i added basic folder structure for it.
- It's recommend to implement `lazy loading` for components if there was a need, for example `popups` and `dialogs`.
- It's also recommended to optimize all external assets using online tools before adding them to `assets/` folder.
- If i had access to the Digital Assistant Animations (speaking, talking..) in `LottieFiles` format, I would implement the animations easily and quickly using [react-lottie-player](https://github.com/mifi/react-lottie-player/).
- Some Enhancement to the flow would be:
  - Add logic to compare the `user spoken text` with `correct text` in order to determine the possibility to move to the next step.
  - Supply different configs for `Web Speech API` to deal with different languages, ex, `Arabic`, `English`.
