Illustrate `export * as ns from './file'` inconsistencies.

- `ng b module-with-export-as` :: OK
- `ng test module-with-export-as` :: ERROR
```
Error: ./projects/module-with-export-as/src/lib/data/index.ts 1:9
Module parse failed: Unexpected token (1:9)
File was processed with these loaders:
 * ./node_modules/@ngtools/webpack/src/ivy/index.js
You may need an additional loader to handle the result of these loaders.
> export * as Anwsers from './answer';
| 
 @ ./projects/module-with-export-as/src/lib/test.spec.ts 1:0-33 4:18-25
 @ ./projects/module-with-export-as/src sync \.spec\.ts$
 @ ./projects/module-with-export-as/src/test.ts
```
- `ng serve app-with-package` :: OK
- `ng serve app-with-relative` :: ERROR
```
Error: ./projects/module-with-export-as/src/lib/data/index.ts 1:9
Module parse failed: Unexpected token (1:9)
File was processed with these loaders:
 * ./node_modules/@ngtools/webpack/src/ivy/index.js
You may need an additional loader to handle the result of these loaders.
> export * as Anwsers from './answer';
| 
```