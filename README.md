# ts-comp
Getting typescript, vue composition api and vuetify playing nicely.

1) Update shims-vue.d.ts
```
declare module "*.vue" {
  import { defineComponent } from "@vue/composition-api";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}
```
2) Install vue composition api
```
npm install @vue/composition-api
```

3) Create components with defineComponent to get ts inference.

4) Must add lang="ts" to script tag
```
<script lang="ts">
```

4) Add vuetify
```vue add vuetify

5) If okta is throwing types error, try:
```
npm install @types/okta__okta-vue --save
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
