# Node.js 第一天课堂笔记

### 知识点

#### 1. Node.js 介绍(了解)

##### 1.1 Node 是什么

- JavaScript 语言的服务器运行环境-让 js 可以在服务器环境中执行

- Chrome V8 引擎

- **不是语言，不是框架，是一个可以解析和执行 JavaScript 的平台**

- 某种意义上也是一个 Web 容器

##### 1.2 为什么要学习 Node.js

- 企业需求
- 进一步理解 Web
- 大前端必备技能-Node 产生的工具
- 为了更好的学习前端框架
- 增加职业竞争力

##### 1.3 Node.js 的发展历史及前景

- 作者：Ryan Dahl
- 诞生于 2009 年
- nodejs 和 iojs 之间的恩怨
- 重大版本迭代发布历程
- 发展前景
- [Node.js 简史](https://cnodejs.org/topic/555d3d54e684c4c8088a0d78)
- [聊聊 Node.js 历史](http://gitbook.cn/books/58e796fd09012f0a48761eae/index.html)

##### 1.4 Node.js 使用场景

- Web 服务器
- 命令行应用程序
  less
  npm
- 网络爬虫
- 桌面应用程序（Electron）
  - HTML
  - CSS
  - JavaScript
    - 浏览器中的 JavaScript
    - Node 中的 JavaScript
- **服务端技术，和 Java、PHP、Python、ruby 处于相同地位**

##### ****1.5 Node.js 学习资源

- 深入浅出 Node.js

- Node.js 权威指南（API 讲解）

- Node.js 实战（第 1 季）

- Node.js 实战（第 2 季）

##### 1.6 Node.js 相关链接

- [Github-node](https://github.com/nodejs/node)
- [Node 官网](https://nodejs.org/en/)
- [Node 中文网](http://nodejs.cn/)
- [cNode 中文社区](https://cnodejs.org/)

#### 2. NodeJS 起步

##### 2.1 环境安装

- 下载

  - LTS 稳定版本(推荐)
  - Current 最新版本

- 安装:覆盖升级

- 确认 node 版本

  - 确认操作系统

  - [下载历史版本](https://nodejs.org/en/download/releases/)

  - 确认安装成功

    ```shell
    node --version
    ```

##### 2.2 REPL 运行环境(了解)

- 进入和退出 REPL运行环境

  - 进入 cmd 中的控制台

    ```shell
    任意目录下\ node + 回车
    ```

  - 退出 cmd 中的控制台

    ```shell
    ctrl+两次c(cancle)
    ```

##### 2.3 HelloWorld

###### 2.3.1 执行一个 js 脚本

1.  - 新建一个 hello.js 并写入以下示例代码
    - 打开命令行并定位到 hello.js 文件所属目录
    - 在命令行中输入 node hello.js 回车执行

**注意:**

> - 文件名不要起名为 `node.js`
> - 文件名或者文件路径最好不要有中文
> - 文件路径或者文件名不要出现空格



``` js
// 可以在哪些平台中写命令
1 cmd
2 git bash
3 cmder
4 IDE自带终端中

// 找到文件路径
1 盘符 C/
2 cd 拖拽文件

// cmd常用指令
cd 
dir/ls
cd ..
+tab
上下


```



###### 2.3.2 读取和写入文件

- 演示在 node 中操作文件,使用对应的模块(fs)

- - 读取文件

    ```js
    const fs = require("fs");

    fs.readFile("/etc/passwd", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    ```

  - 写入文件

    ```js
    const fs = require("fs");

    fs.writeFile("test.txt", "Hello Node.js", err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    ```

    **注意:require()表示加载要使用的模块**

###### 2.3.3 网络相关功能-http 模块

```js
// 1. 加载 http 核心模块
var http = require("http");
// 2. 使用 http.createServer() 方法创建一个 Web 服务器
//    返回一个 Server 实例
var server = http.createServer();
// 3. 为服务器实例对象注册request请求事件处理函数
server.on("request", function() {
  res.end("Hello Node.js!");
});
// 4. 绑定端口号，启动服务器
server.listen(3000, function() {
  console.log("服务器启动成功，请求访问 http://127.0.0.1:3000/");
});
```

启动服务器

```cmd
node web服务器.js
```

关闭服务器

```cmd
ctrl + c
```

##### 2.4 总结

#### 3. 核心概念

##### 3.1 Node 中的 js

- 浏览器中的 JavaScript 组成

  - ECMAScript
  - BOM
  - DOM

- Node 中的 js

  - 有 ECMAScript

  - 没有 BOM 和 DOM

    进入 node 的控制台

    ```cmd
    window
    ```

    ```cmd
    document
    ```

    **document is not defined**

    **有定时器**

- IO（输入与输出）
  文件:浏览器中不能操作文件,node 中可以

- 模块化
  模块解决方案
  核心模块
  文件操作
  网络操作
  和操作系统交互
  第三方模块
  用户模块

#### 4. 模块系统

##### 4.1 模块化概念

###### 4.1.1 浏览器中的 JavaScript 的缺点

- 变量污染
- 文件依赖
  - 缓存
  - 同步加载

###### 4.1.2 什么是模块化

- 就是把大一个文件中很多的代码拆分到不同的小文件中，每个小文件就称之为一个模块，例如我们看到的 jQuery 真正的源码

###### 4.1.3 模块化的好处

- 开发效率高
- 可维护性好
- 可复用性

###### 4.1.4 jQuery

- 1w+的代码并不是源代码
- 浏览器不支持 less
- 合并多个文件为一个文件：减少请求数量

      			Node 中的模块化不需要打包
      			Node 本身就支持
      			不用合并文件
      	CommonJS 模块规范
      		一个 JavaScript 文件就是一个模块
      		没有全局作用域，取而代之的是模块作用域
      		模块通信
      			输出
      				module.exports
      				exports
      			输入
      				require
      					加载并执行模块中的代码
      					得到模块的接口对象

###### 4.1.5 模块的分类

- 核心模块

  - 定义：由 Node 提供，通过特定的标识名称加载
  - fs 文件操作
  - http 网络操作
  - path 文件路径
  - os 操作系统信息
  - process 进程交互
  - url 路径处理
  - ...

- **用户模块**

  - \*\*\*\*定义：自己编写的文件模块

- 第三方模块

  - 定义：类似于 jQuery，由第三方开发

  - 如何使用

    - 查找(npm官网)

    - 下载

      - 是否全局安装

        ``` js
        -g 可以在任意路径下 使用node -v
        非全局  当前路径下 使用
        ```


      ```cmd
      npm install xxx
      ```
    
    - 使用
    
      ```js
      require("xxx");
      ```

##### 4.2 模块通信

```cmd
// 核心模块
var fs = require('fs')

// 第三方模块
// npm install marked
var marked = require('marked')

// 用户模块（自己写的），正确的，正确的方式
// 注意：加载自己写的模块，相对路径不能省略 ./
var foo = require('./foo.js')

// 用户模块（自己写的），正确的（推荐），可以省略后缀名 .js
var foo = require('./foo')
```

#### 5 包与 npm

##### 5.1 npm 是什么

- npm 全称  `Node Package Manager`，它的诞生是为了解决 Node 中第三方包共享的问题。 和浏览器一样，由于都是 JavaScript，所以前端开发也使用 npm 作为第三方包管理工具。 例如大名鼎鼎的 jQuery、Bootstrap 等都可以通过 npm 来安装。 所以官方把 npm 定义为  `JavaScript Package Manager`。

##### 5.2 [npm 网站](https://www.npmjs.com/)

##### 5.3 npm 命令行工具

- npm 的第二层含义就是一个命令行工具，只要你安装了 node 就已经安装了 npm。

  ```cmd
  npm --version
  ```

- 升级 npm

  ```cmd
  npm install --global npm
  ```

- 常用命令

  ```cmd
  // 在项目中初始化一个 package.json 文件,凡是使用 npm 来管理的项目都会有这么一个文件
  npm init

  // 跳过向导，快速生成 package.json 文件,简写是 -y
  npm init --yes

  // 一次性安装 dependencies 中所有的依赖项,简写是 npm i
  npm install

  // 安装指定的包，可以简写为 npm i 包名
  // npm 5 以前只下载，不保存依赖信息，如果需要保存，则需要加上 --save 选项
  // npm 5 以后就可以省略 --save 选项了
  npm install 包名

  // 一次性安装多个指定包
  npm install 包名 包名 包名 ...

  // 安装指定版本的包
  npm install 包名@版本号

  // 卸载指定的包
  npm uninstall 包名

  // 安装全局包
  npm install --global 包名

  // 查看包信息
  npm view 包名

  // 查看使用帮助
  npm help

  // 查看某个命令的使用帮助
  // 例如我忘记了 uninstall 命令的简写了，这个时候，可以输入 npm uninstall --help 来查看使用帮助
  npm 命令 --help
  ```

##### 5.4 package.json

- 我们的项目会放到云端的仓库中，例如 github ，第三方包没有上传的意义，我们只需要把我们的源码放到云端仓库，`node_modules` 目录中存储的就是第三方包（不用担心丢失问题），如果没有 `package.json` 文件则你就找不回来了。

- 建议每一个项目都要有一个  `package.json`  文件（包描述文件，就像产品的说明书一样），给人踏实的感觉最重要的就是保存这个项目的第三方依赖信息（因为我们不需要提交第三方包到我们的云端仓库，只需要提交我们自己的代码），有了这个文件中的依赖信息结合  `npm install`  命令我们就可以放心了。

- 这个文件可以通过 `npm init` 的方式来自动初始化出来。

  ```cmd
  npm init
  ```

- 对于咱们目前来讲，最有用的是那个 `dependencies` 选项，可以用来帮我们保存第三方包的依赖信息。

- 如果你的 `node_modules` 删除了也不用担心，我们只需要：`npm install` 就会自动把 `package.json` 中的 `dependencies` 中所有的依赖项都下载回来。

- 建议每个项目的根目录下都有一个 `package.json` 文件

  - 不同的项目有不同依赖，各自保存各自的

- 建议执行 npm install 包名的的时候都加上

  ```
  --save
  ```

  这个选项，目的是用来保存依赖项信息

  - npm 5 以前不会自动保存依赖信息到 package.json 文件中，必须手动加 `--save` 选项才可以
  - npm 5 以后不需要加 `--save` 选项了，因为它会自动保存依赖项

##### 5.5 package-lock.json

- npm 5 以前是不会有 `package-lock.json` 这个文件的。（被开发者诟病，吐槽的问题）。
- 当你安装包的时候，npm 都会生成或者更新 `package-lock.json` 这个文件。
- npm 5 以后的版本安装包不需要加 `--save` 参数，它会自动保存依赖信息
- 当你安装包的时候，会自动创建或者是更新 `package-lock.json` 这个文件
- `package-lock.json`  这个文件会保存  `node_modules`  中所有包的信息（版本、下载地址）
  - 这样的话重新 `npm install` 的时候速度就可以提升
- 从文件来看，有一个 lock 称之为锁
  - lock 是用来锁定版本的,如果项目依赖了 `1.1.1` 版本,如果你重新 isntall 其实会下载最新版本，而不是 1.1.1,我们的目的就是希望可以锁住 1.1.1 这个版本,所以这个 `package-lock.json` 这个文件的另一个作用就是锁定版本号，防止自动升级新版.

##### 5.6 npm 墙的问题

npm 存储包文件的服务器在国外，有时候会被墙，速度很慢，所以我们需要解决这个问题。

国内淘宝的开发团队把 npm 在国内做了一个备份，网址是：[http://npm.taobao.org/。](http://npm.taobao.org/%E3%80%82)

最简单的方式就是我们在安装包的时候告诉 npm 你去哪个服务器下载。

例如使用淘宝的 npm 镜像源下载 jquery:

```cmd
npm install jquery --registry=https://registry.npm.taobao.org
```

但是每次手动往后面加 `--registry=https://registry.npm.taobao.org` 很麻烦， 所以我们可以通过修改配置文件的方式来处理解决。

```cmd
// 配置到淘宝服务器
npm config set registry https://registry.npm.taobao.org
// 查看 npm 配置信息
npm config list
```

只要经过了上面命令的配置，则你以后所有的 `npm install` 都会使用你配置的 `registry` 下载。

[配置文档](http://npm.taobao.org/)

##### 5.7 dependencies 和 devDependencies

- `--save` 会保存到 `dependencies` 依赖项中
- `--save-dev` 会保存到 `devDependencies` 依赖项中

我们把一些辅助开发的工具包安装到 `devDependencies` 中。这样做的目的是对包进行分类，项目上线的时候可以使用 `npm install --production` 命令只安装 `dependencies` 依赖项中的包。

#### 6 [ES6](http://es6.ruanyifeng.com/)

- 查看离线文档

  - 把仓库文档下载到本地（推荐直接下载到你服务器的 www 目录中，方便访问）

    ```cmd
    # --depth=1 就是只下载最后一次的 commit ，其它历史记录不要
    git clone https://github.com/ruanyf/es6tutorial.git --depth=1
    ```

  - 然后把 `es6tutorial` 放到一个 Web 服务器中。（第 1 步做了这里就省略）

  - 打开访问。

---

#### 7 [js编码规范](https://standardjs.com/readme-zhcn.html)

### 总结

#### 1.1 Node 是什么

- Node 是 JavaScript 的服务器运行环境，是一个服务端技术，和 Java、PHP 等都是平起平坐

#### 1.2 Node.js 中的 JavaScript

- 此 JavaScript 非浏览器中的 JavaScript
  - ECMAScript
  - BOM
  - DOM
- ECMAScript
- Node 环境 API
  - require
  - module
  - module.exports
  - fs
  - http
  - ...
- IO
  - 本地磁盘 IO
  - 网络数据 IO

#### 1.3 模块系统

- 一个 JavaScript 文件就是一个模块
- 没有全局作用域（global，类似于浏览器中的 window）
- Node 中的 JavaScript 都是模块作用域
  - 完全避免了变量污染问题
- require 方法
  - 1.  执行被加载模块中的代码
  - 1.  得到文件模块中的 `module.exports` 接口对象
- module.exports 接口对象
  - 任何模块最后都有这么一句代码：`return module.exports`

#### 1.4 模块分类

- 核心模块
  - 由 Node 本身提供，例如 fs、http
- 第三方模块
  - 由社区提供
  - 1.  找包
  - 1.  npm install 包名
  - 1.  require('第三方包名') 加载
  - 1.  看文档调用 API
- 自定义模块
  - 自己写的，按照路径来加载，注意 `./` 或者 `../` 不能省略

#### 1.5npm 的两层含义

- 网站 npmjs.com
- 命令行工具

- npm 常用命令
  - npm init -y
    - 初始化 package.json 文件
  - npm install
    - 读取 package.json 文件中的 `dependencies` 依赖项下载
  - npm install 包名
    - 安装包的同时会自动更新 package.json 文件中的依赖信息
    - 注意：npm 5 以前是不会自动保存依赖信息的，需要加上 `--save` 选项才可以
  - npm uninstall 包名
    - 卸载包
- package.json 文件
  - 我们不上传第三方包，没有必要浪费时间
  - package.json 就是项目的说明书，它里面可以存储项目的依赖等信息
  - 所以我们上传的时候只需要上传这个文件就可以了
- package-lock.json 文件
  - 锁定版本
  - 保存包的下载地址，提高下载速度

#### 1.6 [ES6](http://es6.ruanyifeng.com/)

##### 1.6.1 ES6背景

###### 1.6.1.1 ES6介绍

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

###### 1.6.1.2 ECMAScript 和 JavaScript 关系

ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 Jscript 和 ActionScript）。日常场合，这两个词是可以互换的。 

###### 1.6.1.3 ES6 与 ECMAScript 2015 的关系

ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。

#####  1.6.2 ES6基础语法

###### 1.6.2.1 var和let、const

- var

  - 作用:变量声明

  - 缺陷:

    - 变量提升 

    ``` js
    var foo = "bar"
    if(1){var foo = "baz"}
    console.log(foo)
    ```

    - 可以重复声明

  - 作用域:全局作用域、函数作用域

    ``` js
    var foo = "bar"
    if(1){var foo = "baz"}
    console.log(foo)

    function f(){
        var foo = "xx"
        console.log(foo)
        }
    f()
    ```

  - 没有块级作用域

  - 在浏览器中默认属于window

###### 1.6.2.2 let

- 解决了var的缺陷

  ``` js
  let a = 100
  if(1){
      let a = 20
      console.log(a)//20
  }
  cnsole.log(a)// 100
  ```

- 是块级作用域

- 必须先声明后使用

- 在同一个块中不允许重复声明

  ``` js
  let a = 10
  let a = 10
  console.log(a) 
  ```

- 没有变量提升

  ``` js
  console.log(c)
  let c = 10;
  // not defined
  ```

###### 1.6.2.3 const

- 常量声明
- 常量:只读的, 一旦声明,不可以改变
- 声明同时必须赋值
- 块级作用域
- 没有常量提升
- 不可重复声明

###### 1.6.2.4 解构赋值

``` js
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

let { loc, loc: { start }, loc: { start: { line }} } = node;
```

- 数组的结构赋值

- 对象的解构赋值

  使用场景

- 交换变量值

  ``` js
  var [a,b]=[b,a]
  ```

- 从函数返回多个值(把多个值放在一个对象中)

- 提取json数据(对象的解构)

- 模块成员导入

  ``` js
  var {readFile} = require('fs')
  readFile()
  ```

###### 1.6.2.5字符串新增方法

"abcdef".includes('a')

"abcdef".startsWith('a')

"abcdef".endsWith('a')

模板字符串 ``

``` js
// 1. 换行麻烦
// 2. 变量拼接麻烦
var person = {
  name: '小强',
  age: 18,
  gender: '男'
}
// var str = '大家好，我叫'+ person.name +'，我今年'+ person.age +'岁了，我是'+ person.gender +'生'
var str = `大家好
我叫${person.name}
我今年${person.age}岁了
我是${person.gender}生`
console.log(str)

// 使用建议：
//    如果不做拼接也不做换行，则还是单引号（双引号）声明字符串
//    如果需要拼接或是换行，则使用模板字符串

```



