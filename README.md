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

## 使用git-merge-file命令合并文件
三路文件合并  
```
usage: git merge-file [<options>] [-L <name1> [-L <orig> [-L <name2>]]] <file1> <orig-file> <file2>

    -p, --stdout          send results to standard output
    --diff3               use a diff3 based merge
    --ours                for conflicts, use our version
    --theirs              for conflicts, use their version
    --union               for conflicts, use a union version
    --marker-size <n>     for conflicts, use this marker size
    -q, --quiet           do not warn about conflicts
    -L <name>             set labels for file1/orig-file/file2
```

规则为合并file1、file2到file1文件中，file1、file2以orig-file为原始文件，这里可以给一个空文件  
file1指定为用户目录下的文件，file2指定项目中要merge的文件，orig-file为lib下的空文件  
调用bash命令执行合并  

### 使用/dev/null代替空文件
```
git merge-file file1 /dev/null file2
```

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
