# Genfe-cli
初衷不想一遍遍写这该死的配置文件，重复的东西都该想办法消除  
通过命令行快速生成配置、基础代码、以及相关生态  
要可以同步本地已有配置，保留自定义改动  
可以选择性的生成某个配置  

## 生成配置清单
- eslint
  + .eslintignore
  + .eslintrc.yml
- typescript
  + tsconfig.json
  + tslint.json
- husky
  + .huskyrc
- lint-staged
  + .lintstagedrc
- commitlint
  + commitlint.config.js
- nodemon
  + nodemon.json
- prettier
  + .prettierrc
- babel
  + .babelrc
  + .babel.js
  + babel.config.js
- webpack
  + webpack.config.js

### 其他类型配置文件
- jsconfig.json
- .editorconfig
- .npmignore
- .npmrc

## IDE配置

### vscode
- .vscode

## 生成项目清单
- react
- react-native
- vue

## TODO
- [ ] 基础代码，先完善目前定义的所有的配置
- [ ] 优化配置，补充参考业内好的配置
- [ ] 提供cli，可一键生成，或自定义
- [ ] 增加vscode配置
- [ ] 如何使用git merge的形式合并配置文件

## 参考项目
- [create-react-app](https://github.com/facebook/create-react-app)
- [vue-cli](https://github.com/vuejs/vue-cli)
- [config-gen](https://github.com/cszatma/config-gen)
- [generate-eslint](https://github.com/generate/generate-eslint)
