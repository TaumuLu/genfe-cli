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
  + babelrc
  + babel.config.js
- webpack
  + webpack.config.js

### 其他类型配置文件
- jsconfig.json
- .editorconfig
- .npmignore

## 生成项目清单
- react
- react-native
- vue

## TODO
- [ ] 基础代码，先完善目前定义的所有的配置
- [ ] 优化配置，补充参考业内好的配置
- [ ] 提供cli，可一键生成，或自定义
