# DZ E-Commerce

### Hi every one 🙋🏻‍♂️,

#### Kindly find DZ E-Commerce Docs below 🚀⚛️

#### Note: this project is public because my account is restricted from creating private repos on Github.

## Project structure & Thought process 🏗️

- I used `feature based structure` as project's files and folders structure where each `feature` and all of its related stuff lay inside separate folder under `src/app/features/` folder, and there is `src/app/shared/` folder that includes all the stuff that is shared between multiple features.
- I built and used `<Umbrella>` component to act as wrapper for any type of UI that needs to be available application wide.
- Throughout my career I built scalable services solution based on `@tanstack/react-query`, you can find it inside `src/lib/react-query`.

## Used Packages 📦

I used only 2 extra packages:

- [@tanstack/react-query](https://tanstack.com/query/latest/docs/framework/react/overview) for data manipulation and caching.
- [axios](https://axios-http.com/docs/intro) as Promise based HTTP client (used
  internally by `@tanstack/react-query`).
- (NOT USED but I would) [React Hook Form](https://react-hook-form.com/) for form validations with [zod](https://github.com/colinhacks/zod) or [yup](https://github.com/jquense/yup) for schema validation.

## Run Locally ⛏️

If you want to run the project locally, run the following commands:

- `git clone [git url]`
- `cd [project dir]`
- `npm install`
- `npm run dev`

For Build and Local Deploy run the following command:

- `npm run build && npm run start`

## Notes 🧷

- It's always recommended in `feature based structure` to extract all component's CSS styles (if there is any) to a separate `styles.ts` file inside the component's folder like `SomeComponent/styles.ts`.
- I added empty folders to demonstrate the full capacity of `feature based folders structure`.
- I didn't implement `unit` or `e2e` tests but I added basic folder structure for it.
