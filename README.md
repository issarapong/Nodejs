# NodeJS
>.help
>process.env
>process.arch
>proocess.cwd()
>console.log(process.env.HOME)

 ###
```
>process.env.AAA = 'cc14'
>console.log(process.env.AAA)
```
%export PORT =3500
>process.env.PORT


>os.cpus()
>os.cpus().length  // count by lenght

>os.cpus()[0].model
>os.platform()
>os.totalmem()




## install by version

```
npm i chalk@4.1.2

```

## install dev version เพื่อใช้งาน แต่ไม่ production

```
npm i -D chalk@4.1.2
```


## Check module
```
npm ls
lab02@1.0.0 //lab02
├── axios@1.4.0
└── cowsay@1.5.0
```

## Check global module
```
lab02 % npm ls -g
/usr/local/lib
├── corepack@0.17.0
├── n@9.0.0
├── nodemon@2.0.22
├── npm@9.5.1
└── serve@14.1.2
```

##
```
npm ls -g nodemon
/usr/local/lib
└── nodemon@2.0.22
```
## อ้างอิง

https://dev.to/ganeshtyjo/npm-cheat-sheet-2om5

## อื่นๆ
บาง module จะไม่ support แบบ require (commonjs) หมายถึง module ไหม่ๆ หรือ version ไหม่ๆ
ตั้วย่าง
```
npm i chalk@4.1.2 

const chalk = require('chalk')

------------------------------

npm i chalk

import chalk from 'chalk';

```


