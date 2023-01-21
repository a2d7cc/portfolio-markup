### Install Tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- create tailwind.config.js and fill the code from doumentation(install tailwind nextjs)
- adding to global.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- add app to config in taiwind.config.js and plugins

```

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./app/components/**/*.{js,ts,jsx,tsx}",
  ​
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

- install

```
 npm i @tailwindcss/forms
 npm i @tailwindcss/aspect-ratio
```

- copy tailwind extends, plugins settings from frontend project
- install sass
- create in app folder structure: assets, components, config, hooks, services, shared, store, utils
- copy tsconfig.json - there are paths like @/components
- copy .prettierrc file
- install

```
npm i -D prettier @trivago/prettier-plugin-sort-imports
```

- creating ENV file

### Structure

- delete unnessesary files
- create in app folder structure: assets, components, config, hooks, services, shared, store, utils
- in components: ui, screens, layout
- refer to screen pages from pages folder
