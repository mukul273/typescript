# TypeScript Tutorial

1. Install node js from [node.js](https://nodejs.org/en),
2. `npm install -g typescript`,
3. Install 'Live Server' extension in vscode,
4. `tsc {your file name}.ts` - to compile and make js out of ts file,
5. `tsc {your file name}.ts -w` - to not need to compile for every time you make changes but -w (watch) attribute will monitor and make changes to js file automatically,
6. Most files contain self explanatory code, Please try to uncomment the code for better understanding and try to compile and you should get an error why the code will not work and why it's commented,
7. `?` - desinates optional property,
8. once declared the object, you have to set all the prorps, can't skip it unless there is a `?` character in the definition,
9. `Objects` can be reassigned with different similar data types see [this](./005/fifth.ts),
10. `tsc --init` - to initialize a typescript project which will generate a tsconfig,
11. make sure you edit the tsconfig and set `outDir` and `rootDir` and also add `"include": ["src"]` after 'compilerOptions' construct,
12. Refer [tenth](./010/), - adding **!** at the end of line no. 3 and being certain that anchor exists then we don't need to check if the anchor exists, try removing it,
13. `public` is default access modifier even if we don't mention it,
14. `private` modifier is accessible in class but not outside the class, check [this](./013/src/app.ts) file for privare variable in class, try uncommenting and you should see an error, but they are accessible via the public method in the class,
15. `read only` are non modifiable variables, **even in the class** try modifying the values of the readonly variable in [this](./013/src/app.ts) file,
16. 


***References***

1. [Typescript Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)
2. [Github source](https://github.com/iamshaunjp/typescript-tutorial/)
