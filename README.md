# Genfe-cli

初衷不想一遍遍写这该死的配置文件，重复的东西都该想办法消除  
通过命令行快速生成配置、基础代码、以及相关生态  
要可以同步本地已有配置，保留自定义改动  
可以选择性的生成某个配置

## 配置清单

### typescript

- tsconfig.json

### tslint

- tslint.json

### husky

- .huskyrc

### lint-staged

- .lintstagedrc

### commitlint

- commitlint.config.js

### prettier

- .prettierrc

### eslint

- .eslintignore
- .eslintrc.yml

### nodemon

- nodemon.json

### babel

- babel.config.js (.babelrc, .babel.js)

### browserslist

- .browserslistrc

### npm

- .npmignore
- .npmrc

### vscode

- .vscode
- jsconfig.json
- .editorconfig

## 项目清单

- react
- react-native
- vue

## 合并方式

使用 git-merge-file 三路文件合并命令合并文件

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

规则为合并 file1、file2 到 file1 文件中，file1、file2 以 orig-file 为原始文件，这里可以给一个空文件  
file1 指定为用户目录下的文件，file2 指定项目中要 merge 的文件，orig-file 为 lib 下的空文件  
调用 bash 命令执行合并

### 合并命令

使用/dev/null 代替空文件

```
git merge-file file1 /dev/null file2
```

## TODO

- [x] 基础代码，先完善目前定义的所有的配置
- [x] 提供 cli，可一键生成，或自定义
- [x] 增加 vscode 配置
- [x] 如何使用 git merge 的形式合并配置文件
- [ ] 支持写入 package 里的配置
- [ ] 优化配置，补充参考业内好的配置
- [ ] 考虑如何生成项目模板代码

## 参考项目

- [create-react-app](https://github.com/facebook/create-react-app)
- [vue-cli](https://github.com/vuejs/vue-cli)
- [config-gen](https://github.com/cszatma/config-gen)
- [generate-eslint](https://github.com/generate/generate-eslint)

## 参考文档

- [git](https://www.php.cn/manual/view/35026.html)
