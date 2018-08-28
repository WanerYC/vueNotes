---
typora-copy-images-to: ./media
---

# Vue基础

## 相关概念

### 混合开发和前后端分离

- 混合开发(服务器端渲染)

- 前后端分离
后端提供接口，前端开发界面效果(专注于用户的交互)

### 库和框架

- 库

  库提供大量API，需要自己调用这些API简化开发。

- 框架

  框架提供了一些基础服务，一般不需要自己调用，会自动完成一些基本功能。


## 什么是Vue

### 什么是Vue

- 一款非常优秀的前端 JavaScript 框架，由尤雨溪创建开发

- 可以轻松构建单页 (SPA) 应用程序

- 通过 **指令** 扩展了 HTML，通过 **表达式** 绑定数据到 HTML

- 最大程度上解放了 DOM 操作

- 它能让你更加的享受编程的乐趣

- 数据驱动，开源

  [官网](https://cn.vuejs.org/)

### Vue的特点

- 简单易用
- 灵活渐进式
- 轻量高效
- 虚拟 DOM
- MVVM
- 组件化


## Vue初体验

## 安装Vue

### 下载Vue

* Vue.js 不支持 IE8 及其以下版本

* 最新稳定版本：2.5.16

* 直接下载

  * 开发版本：<https://vuejs.org/js/vue.js>
  * 生产版本：<https://vuejs.org/js/vue.min.js>

* CDN

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
  ```

* 使用 `npm`下载（默认安装最新稳定版）

  ```bash
  npm install vue
  ```

### Hello World

通过数据绑定的方式，在界面上展示Hello World

```html
<div id="app">
    <h1>{{ msg }}</h1>
</div>
<script src="vue.js"></script>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            msg: 'Hello World'
        }
    });
</script>
```

## Vue实例

### 创建Vue实例 

每一个Vue应用都是通过Vue构造函数创建一个Vue的实例开始

```js
var vm = new Vue({
    // Vue的选项
});
```

- Vue的选项
  - `el` 选项：指定Vue作用的范围
  - `data` 选项：data提供数据对象，绑定的数据

## 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。

### 插值表达式

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

```html
<h1>
    {{ msg }}
</h1>
```

### JavaScript表达式

对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。

```html
{{ number + 1 }}

{{ age > 18 ? '年满18岁' : '未满18岁' }}

{{ message.split('').reverse().join('') }}

<h1>
    {{ msg }}
</h1>
```

**注意：**差值表达式中不能写语句。例如：var a = 10;

## 指令

指令 (Directives) 是带有 `v-` 前缀的特殊特性。指令特性的值预期是**单个 JavaScript 表达式**(`v-for` 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。[参考文档](https://cn.vuejs.org/v2/api/#%E6%8C%87%E4%BB%A4)

### v-html/v-text

- v-text
  - v-text和差值表达式的区别
    - v-text 标签的指令更新整个标签中的内容
    - 差值表达式，可以更新标签中局部的内容
- v-html
  - 可以渲染内容中的HTML标签
  - 尽量避免使用，否则会带来危险(XSS攻击 跨站脚本攻击)

### v-bind

可以绑定标签上的任何属性。

- 动态绑定图片的路径

  ```html
  <img v-bind:src="src" />
  <script>
      var vm = new Vue({
          el: '#app',
          data: {
              src: '1.jpg'
          }
      });
  </script>
  ```


- 绑定a标签上的id

  ```html
  <a v-bind:href="'del.php?id=' + id">删除</a>
  <script>
  	var vm = new Vue({
          el: '#app',
          data: {
              id: 11
          }
      });
  </script>
  ```

- 绑定class

  对象语法和数组语法

  - 对象语法

    如果isActive为true，则返回的结果为 `<div class="active"></div>`

    ```html
    <div v-bind:class="{active: isActive}">
        hei
    </div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
            	isActive: true  
            }
        });
    </script>
    ```

  - 数组语法

    渲染的结果 `<div class="active text-danger"></div>`

    ```html
    <div v-bind:class="[activeClass, dangerClass]">
        hei
    </div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
            	activeClass: 'active',
                dangerClass: 'text-danger'
            }
        });
    </script>
    ```

- 绑定style

  对象语法和数组语法

  - 对象语法

    渲染的结果<div style="color: red; font-size: 18px;"></div>

    ```html
    <div v-bind:style="{color: redColor, fontSize: font18 + 'px'}">
        hei
    </div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
            	redColor: 'red',
                font18: 18
            }
        });
    </script>
    ```

  - 数组语法

    ```html
    <div v-bind:style="[color, fontSize]">abc</div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                color: {
                    color: 'red'
                },
                fontSize: {
                    'font-size': '18px'
                }
            }
        });
    </script>
    ```

- 简化语法

  ```html
  <div v-bind:class="{active: isActive}">
  </div>
  <!-- 可以简化为，简化语法更常用 -->
  <div :class="{active: isActive}">
  </div>
  ```

### v-model

表单元素的绑定

- 双向数据绑定

  - 数据发生变化可以更新到界面
  - 通过界面可以更改数据

- 绑定文本框

  当文本框的值发生边框后，div中的内容也会发生变化

  ```html
  <input type="text" v-model="name">
  <div>{{ name }}</div>
  <script>
      var vm = new Vue({
         el: '#app',
          data: {
              name: ''
          }
      });
  </script>
  ```

- 绑定多行文本框

  ```html
  <textarea v-model="name"></textarea>
  <div>{{ name }}</div>
  ```

  **注意：**多行文本框中不能使用`{{ name }}`的方式绑定

- 绑定复选框

  - 绑定一个复选框

  ```html
  <input type="checkbox" v-model="checked">
  <div>{{ checked }}</div>
  ```

  - 绑定多个复选框

    此种方式需要input标签**提供value属性**

  ```html
  吃饭：<input type="checkbox" value="eat" v-model="checklist"><br>
  睡觉：<input type="checkbox" value="sleep" v-model="checklist"><br>
  打豆豆：<input type="checkbox" value="ddd" v-model="checklist"><br>
  {{ checklist }}
  <script>
      var vm = new Vue({
         el: '#app',
          data: {
              checklist: []
          }
      });
  </script>
  ```

- 绑定单选框

  ```html
  男<input type="radio" name="sex" value="男" v-model="sex">
  女<input type="radio" name="sex" value="女" v-model="sex">
  {{sex}}
  <script>
      var vm = new Vue({
         el: '#app',
          data: {
              sex: ''
          }
      });
  </script>
  ```

- 绑定下拉框

  ```html
  <div id="example-5">
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
  ```

### v-on

- 绑定事件

- 事件修饰符：

  - `.prevent`
  - `.once`

- 简化语法

  ```html
  <a href="#" @click.prevent="handleDelete">删除<a>
  ```

### v-show

### v-if

### v-for

### v-cloak

### v-once

* 一次性绑定

## Vue的选项对象

当创建一个 Vue 实例时，你可以传入一个**选项对象**。你可以在 [API 文档](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE) 中浏览完整的选项列表。

* `el` 选项

  > 参考文档：<https://cn.vuejs.org/v2/api/#el>

  提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。

  **注意：**

  * 不能作用到 `<html>` 或者 `<body>` 上
  * 也可以通过 `实例.$mount()` 手动挂载

* `data` 选项

  > 参考文档：<https://cn.vuejs.org/v2/api/#data>

  * Vue 实例的数据对象，能够响应式数据变化(**双向绑定**)
  * 可以通过 `vm.$data` 访问原始数据对象
  * Vue 实例也代理了 data 对象上所有的属性，因此访问 `vm.a` 等价于访问 `vm.$data.a`
  * 视图中绑定的数据必须显式的初始化到 data 中

* `methods` 选项

  > 参考文档：<https://cn.vuejs.org/v2/api/#methods>

  methods 将被混入到 Vue 实例中。可以直接通过 `vm` 实例访问这些方法，或者在指令表达式中使用。方法中的 `this`自动绑定为 Vue 实例。

  **注意：** **不应该使用箭头函数来定义 method 函数** (例如 `plus: () => this.a++`)。理由是箭头函数绑定了父级作用域的上下文，所以 `this` 将不会按照期望指向 Vue 实例，`this.a` 将是 undefined。

  ```js
  var vm = new Vue({
    data: { a: 1 },
    methods: {
      plus: function () {
        this.a++
      }
    }
  })
  vm.plus()
  vm.a // 2
  ```

## 案例：表格操作

- 展示列表数据
- 删除数据
- 添加数据

**总结：**

* Vue 最大程度上减少了页面上的 DOM 操作
* 让开发人员更专注于业务操作
* 通过简洁的指令结合页面结构与逻辑数据
* 代码结构更合理
* 维护成本更低
* 数据驱动
* **VueJS 解放了传统 JavaScript 中频繁的 DOM 操作**

## DevTools

https://github.com/vuejs/vue-devtools

## MVVM

![MVVMPattern.png](media/MVVMPattern.png)

## 其它知识点

### 过滤器

Vue.js 允许你自定义过滤器，可被用于一些常见的**文本格式化**。过滤器可以用在两个地方：**双花括号插值和 v-bind 表达式** (后者从 2.1.0+ 开始支持)。

**需求：**对表格案例中的日期进行格式化。

```html
<td>{{ item.date | fmrTime('YYYY-MM-DD HH:mm:ss') }}</td>
<script>
Vue.filter('fmrTime', function (time, formatStr) {
    // 使用moment.js对日期进行格式化
    return moment(time).format(formatStr);
});
</script>
```

### 计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。

- 计算属性当依赖的data中的数据发生变化的时候执行

- **计算属性是基于它们的依赖进行缓存的**，计算属性只有在它的相关依赖发生改变时才会重新求值。

  > [参考文档](https://cn.vuejs.org/v2/guide/computed.html)

通过获取时间，演示计算属性和methods中方法的区别(缓存数据的差异)。

**计算属性和方法的区别**

1. 方法每次调用都会执行
2. 计算属性只有当依赖的数据方法变化才会执行

**需求：**表格案例中实现搜索功能

```html
<tr v-for="(item, index) in newList" :key="index">
....
<tr v-if="newList.length === 0">
<script>
    var vm = new Vue({
        el: ....
        computed: {
            newList() {
              return this.list.filter((item) => {
                return item.name.startsWith(this.searchKey);
              });
            }
          }
    })
</script>
```

### ref

在Vue.js中操作DOM。

**需求：**表格案例中让文本框默认获得焦。 

1. 给要获取焦点的元素增加ref属性
2. 在mounted中通过$refs获取DOM元素

```html
<input type="text" ref="username" v-model="name">

<script>
    var vm = new Vue({
       el: '#app',
       // mounted当页面加载完毕执行
       mounted: function () {
           this.$refs.username.focus();
       },
       data.....,
    });
</script>
```

**注意：**Vue.js中不推荐直接操作DOM，除非必须否则不建议这么使用。

### 自定义指令

除了核心功能默认的指令，例如：`v-model` 和 `v-show`，Vue 也允许注册自定义指令。

**需求：**表格案例中让文本框默认获得焦。 给文本框增加自定义指令 `v-focus`

```html
<input type="text" v-focus v-model="name">
<script>
// 全局自定义指令
Vue.directive('focus', {
    inserted: function (el) {
        el.focus();
    }
});
</script>

```

## 发送网络请求

在Vue.js中发送网络请求本质还是ajax，我们可以使用插件方便操作。

- vue-resource

  Vuejs的插件，已经不维护，作者不推荐使用

- **axios**

  可以在任何地方使用，推荐

### axios

既可以在浏览器端又可以在node.js中使用的发送http请求的库，支持Promise，默认不支持jsonp。[官网](https://github.com/axios/axios)

- 发送get请求

  ```js
  axios.get('http://localhost:3000/brands')
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.dir(err)
        });
  ```

- 发送delete请求

  ```js
  axios.delete('http://localhost:3000/brands/109')
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.dir(err)
        });
  ```

- 发送post请求

  ```js
  axios.post('http://localhost:3000/brands', {name: '小米', date: new Date()})
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.dir(err)
        });
  ```

- jsonp

  https://github.com/axios/axios/blob/master/COOKBOOK.md

  ```js
  jsonp('http://localhost:3000/brands', (err, data) => {
        if (err) {
          console.dir(err.msg);
        } else {
          console.dir(data);
        }
      });
  ```

### 表格案例

- 数据列表

- 删除数据

- 添加数据

- 查询数据
  - 侦听器

    监听data对象的searchKey属性的变化，执行相应的操作

  ```js
  watch: {
      searchKey: function (newValue, oldValue) {
          // 发送请求获取列表数据
          axios.get('http://localhost:3000/brands?name_like=' + newValue)
              .then(res => {
              this.list = res.data;
          })
              .catch(err => {
              console.log(err);
          });
      }
  ```

## 过渡和动画

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。

### 在 CSS 过渡和动画中自动应用 class

Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

```js
// v要替换成transition组件的name属性值
v-enter：定义进入过渡的开始状态。
v-enter-active：定义进入过渡生效时的状态。
v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。
v-leave: 定义离开过渡的开始状态。
v-leave-active：定义离开过渡生效时的状态。
v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。
```

**示例：**

```html
<style>
    .box {
        position: absolute;
        left: 0;
        top: 50px;
        width: 100px;
        height: 100px;
        background-color: red;
    }
    .slide-enter, .slide-leave-to {
        left: 200px;
        opacity: 0;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 2s;
    }
    .slide-enter-to, .slide-leave {
        left: 0px;
        opacity: 1;
    }
</style>
<button @click="isShow = !isShow">显示/隐藏</button>

<transition name="slide"> 
    <div v-show="isShow" class="box"></div>
</transition>
<script>
    var vm = new Vue({
      el: '#app',
      data: {
        isShow: true
      }
    });
</script>
```

### 自定义过渡动画的类名

可以通过transition组件自定义过渡动画的类名，可以方便结合第三方的动画库使用，比如：[animate.css](https://github.com/daneden/animate.css)

```js
// transition组件的属性 
enter-class
enter-active-class
enter-to-class (2.1.8+)
leave-class
leave-active-class
leave-to-class (2.1.8+)
```

**示例：**

```html

<button @click="isShow = !isShow">toggle</button>
<transition 
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut">
    <div v-show="isShow">hello</div>
</transition>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            isShow: true
        }
    });
</script>
```

## 组件

### 什么是组件

组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：

![Component Tree](media/components.png)

### 组件和模块

- 模块：侧重于功能或者数据的封装
- 组件：包含了 template、style 和 script，而它的 script 可以由各种模块组成

![img](media/b25efd3e8af188b5ab36ccb66baddd71_hd.jpg)



### Vue中的组件开发

组件是可复用的 Vue 实例，且带有一个名字，比如 `<my-breadcrumb>`。把这个组件作为自定义元素来使用。组件的好处是写一次可以进行任意次数的复用。

[组件参考文档](https://cn.vuejs.org/v2/guide/components.html)

#### 全局组件

```js
Vue.component('my-breadcrumb', {
      template: `<div>
          <span>{{ level1 }}</span>
          <span>/</span>
          <span @click="t">{{ level2 }}</span>
        <div>`,
      data() {
        return {
          level1: '用户管理1',
          level2: '用户列表1'
        };
      },
      methods: {
        t() {
          alert('hello');
        }
      }
    });
```

> **注意：**
>
> 1. 组件的模板中必须有且只有一个根标签
> 2. 组件是一个特殊的Vue实例
> 3. 组件中的data是一个方法，目的是让每一个组件维护一个自己的数据
> 4. 组件有自己的作用域

#### 私有组件

```js
// 私有组件
var ComponentA = {
    template: '<div>{{ msg }}</div>',
    data() {
        return {
            msg: 'hello'
        };
    }
};
var vm = new Vue({
    el: '#app',
    components: {
        'component-a': ComponentA
    }
});
```

#### 通过Props给子组件传值

1. 子组件可以通过 `props` 选项接收一个一些值，通过 `props` 传递的值变成了改组件的一个属性。

   ```js
   var ComponentA = {
       template: '<div>{{ title }}</div>',
       props: ['title'],
   };
   ```

2. 当然子组件具有 `props` 选项后，数据可以通过标签的自定义属性传递给子组件

   ```html
   <component-a :title="msg"></component-a>
   ```

3. 在vue的实例中提供该属性值

   ```js
   var vm = new Vue({
       el: '#app',
       data: {
           msg: 'hello heima',
       },
       components: {
           'component-a': ComponentA
       }
   });
   ```

   ​

## Vue实例的生命周期

- 什么生命周期

  **定义：**生命周期是指vue实例或者组件从诞生到消亡经历的每一个阶段，在这些阶段的前后可以设置一些函数当做事件来调用。

- 参考

  [生命周期](https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

- 生命周期中的钩子函数

```javascript
//创造vue实例之后运行此函数，vm中的data/methods中的成员不可用
beforeCreate: function () {
   console.log("beforeCreate")
}
```

```javascript
//创造vue实例之后运行此函数，vm中的data/methods属性可用
created: function () {
  console.log("created")
}
```

```javascript
//当vue实例的el节点或组件挂载到页面以前运行次函数
beforeMount: function () {
	console.log("beforeMount")
}
```

```javascript
//当vue实例的el节点或组件挂载到页面以后运行次函数
mounted: function () {
	console.log("mounted")
}
```

```javascript
//当vue实例数据发生改变前触发此函数
beforeUpdate: function () {
	console.log("beforeUpdate")
}
```

```javascript
//当vue实例数据发生改变后触发此函数
updated: function () {
	console.log("updated")
}
```
## 前端路由

### 单页应用

- 什么是单页应用

  **单页应用**(single page web application，**SPA**)，是在一个页面完成所有的业务功能，浏览器一开始会加载必需的HTML、CSS和JavaScript，之后所有的操作都在这张页面完成，这一切都由JavaScript来控制。

- 单页应用优缺点

  - 优点
    - **操作体验流畅**
    - **完全的前端组件化**
  - 缺点
    - **首次加载大量资源**(可以只加载所需部分)
    - **对搜索引擎不友好**
    - **开发难度相对较高**

- 单页应用的原理

  - Hash路由

    - 利用URL上的hash，当hash改变不会引起页面刷新，所以可以利用 hash 值来做单页面应用的路由，

      并且当 url 的 hash 发生变化的时候，可以触发相应 hashchange 回调函数。

    - 模拟实现

    ```js
    var app = document.getElementById('app');
    window.onhashchange = function () {
        var hash = location.hash.replace('#', '');
        switch (hash.toLowerCase()) {
            case '/': 
                app.innerHTML = '首页内容';
                break;
            case '/users':
                app.innerHTML = '用户管理内容';
                break;
                ……
        }
    };
    ```

  - History路由

    - History 路由是基于 HTML5 规范，在 HTML5 规范中提供了 *history.pushState || history.replaceState* 来进行路由控制。

### vue-router

#### 快速体验

1. 导入vue和vue-router

2. 设置HTML中的内容

   ```html
   <!-- router-link 最终会被渲染成a标签，to指定路由的跳转地址 -->
   <router-link to="/users">用户管理</router-link>

   <!-- 路由匹配到的组件将渲染在这里 -->
   <router-view></router-view>
   ```

3. 创建组件

   ```js
   // 创建组件
   // 组件可以放到单独的js文件中
   var Home = {
       template: '<div>这是Home内容</div>'
   };
   var Users = {
       template: '<div>这是用户管理内容</div>'
   };
   ```

4. 配置路由规则

   ```js
   // 配置路由规则
   var router = new VueRouter({
       routes: [
           { name: 'home', path: '/', component: Home },
           { name: 'users', path: '/users', component: Users }
       ]
   });
   ```

5. 设置vue的路由选项

   ```js
   var vm = new Vue({
       el: '#app',
       router
   });
   ```

#### 动态路由匹配

假设有一个用户列表，想要删除某一个用户，需要获取用户的id传入组件内，如何实现呢？

此时可以通过路由传参来实现，具体步骤如下：

1. 路由规则中增加参数，在path最后增加 **:id**

   ```js
   { name: 'users', path: '/users/:id', component: Users },
   ```

2. 通过 <router-link> 传参，在路径上传入具体的值

   ```html
   <router-link to="/users/120">用户管理</router-link>
   ```

3. 在组件内部可以使用，**this.$route** 获取当前路由对象

   ```js
   var Users = {
       template: '<div>这是用户管理内容 {{ $route.params.id }}</div>',
       mounted() {
           console.log(this.$route.params.id);
       }
   };
   ```

## webpack

*webpack* 是一个模块打包器。*webpack* 的主要目标是将 JavaScript 文件打包在一起,打包后的文件用于在浏览器中使用。

**参考网站：** [中文参考网站](https://www.webpackjs.com/concepts/)    [官网](https://webpack.js.org/concepts/)

### 安装webpack

最新webpack版本4.x

1. 本地安装webpack
2. 安装webpack的命令行工具  webpack-cli

```bash
$ npm install webpack webpack-cli --save-dev
```

### 快速实践

[参考官网](https://www.webpackjs.com/guides/getting-started/)

- 项目结构，默认的目录和文件名称不可修改

```
  webpack-demo
  |- package.json
+ |- /dist
+ |- index.html
  |- /src
    |- index.js
```

- 入口js文件，默认名称index.js

math.js

```js
export default {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  }
};
```

index.js

```js
import Math from './math';

var x = 5;
var y = 6;

console.log(Math.add(5, 6));
console.log(Math.sub(5, 6));
```

- 运行

```bash
$ npx webpack
```

### 配置文件 webpack.config.js

webpack4.x 以前，必须要有配置文件。在 webpack 4.x 以后，可以无须任何配置使用()，然而大多数项目会需要很复杂的设置，这就是为什么 webpack 仍然要支持。

- 使用步骤

  - 项目根目录下，手动新建webpack.config.js

  ```js
  const path = require('path');
  module.exports = {
    // 配置入口文件
    entry: './src/index.js',
    // 配置打包的文件和路径
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
  ```

  - 运行命令

  ```bash
  $ npx webpack --config webpack.config.js
  ```

  > **注意：**打包的文件名改变后，要修改index.html的script标签引入的文件名
  >
  > <script src="bundle.js"></script>

- NPM脚本

  输入上面的命令太繁琐，可以直接在终端运行 webpack，会默认加载webpack.config.js配置文件。

  - 在package.json中新增

  ```js
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack"
    },
  ```

  - 终端输入

  ```bash
  $ npm run build
  ```

### webpack常用的Loader

webpack 最出色的功能之一就是，除了 JavaScript，还可以通过 loader *引入任何其他类型的文件*。webpack 可以把所有文件作为模块，**动态打包(dynamically bundle)**所有依赖项。

[参考文档](https://www.webpackjs.com/guides/asset-management/#%E5%8A%A0%E8%BD%BD-css)

#### 打包CSS

- 安装和配置 [style-loader](https://www.webpackjs.com/loaders/style-loader) 和 [css-loader](https://www.webpackjs.com/loaders/css-loader)

  - 安装

  ```bash
  $ npm install --save-dev style-loader css-loader
  ```

  - 配置，在webpack.config.js中

  ```js
    const path = require('path');
    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
  +   module: {
  +     rules: [
  +       {
  +         test: /\.css$/,
  +         use: [
  +           'style-loader',
  +           'css-loader'
  +         ]
  +       }
  +     ]
  +   }
    };
  ```

- 在入口index.js中，导入css模块

  ```js
  import './css/index.css';
  ```

- 运行webpack命令

  ```bash
  $ npm run build
  ```

#### 打包less

- 安装和配置

  ```bash
  $ npm install less-loader less --save-dev
  ```

  ```json
  {
      test: /\.less$/,
      use: [
          'style-loader',
          'css-loader',
          'less-loader'
      ]
  }
  ```

- less

  ```less
  @color: yellow;
  body {
      background-color: @color;
  }
  ```

#### 打包sass

- 安装和配置

  ```bash
  $ npm install sass-loader node-sass --save-dev
  ```

  ```js
  {
      test: /\.scss$/,
      use: [
         'style-loader',
         'css-loader',
         'sass-loader'
      ]
  }
  ```

- scss

  ```scss
  $color: red;
  body {
      background-color: $color;
  }
  ```

#### 加载图片

使用 file-loader 可以加载图片和字体

- 安装和配置

  ```bash
  $ npm install --save-dev file-loader
  ```

  ```js
  {
  	test: /\.(png|svg|jpg|gif)$/,
  	use: [
  		'file-loader'
  	]
  }
  ```

#### 加载字体

- 配置

  ```js
  {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
         'file-loader'
      ]
  }
  ```


### webpack常用插件

除了通过loader去处理不同的资源文件以外，webpack还支持插件机制，通过插件可以完成更多的事情。

#### HtmlWebpackPlugin

自动生成index.html，并引入资源文件，还可以通过配置压缩HTML。

- 安装

  ```bash
  npm install --save-dev html-webpack-plugin
  ```

- 配置

  ```js
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  ......
  plugins: [
      new HtmlWebpackPlugin({
          // 文档的标题
          title: 'Output Management',
          // 生成的文档文件名
          filename: 'index.html',
          // 模板文件
          template: 'index.html',
          minify: {
            collapseWhitespace: true
          }
      })
  ]
  ......
  ```

#### CleanWebpackPlugin

清空dist目录。

- 安装

  ```bash
  npm install clean-webpack-plugin --save-dev
  ```

- 配置

  ```js
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  ……
  new CleanWebpackPlugin(['dist']),
  ……
  ```

#### 使用source map

[参考文档](https://www.webpackjs.com/guides/development/#%E4%BD%BF%E7%94%A8-source-map)

在webpack.config.js中添加

```
devtool: 'inline-source-map',
```

#### 使用 webpack-dev-server

`webpack-dev-server` 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。让我们设置以下：

```bash
$ npm install --save-dev webpack-dev-server
```

**webpack.config.js**

```js
devServer: {
    contentBase: './dist'
},
```

**package.json**

```js
"start": "webpack-dev-server --open"
```

#### 启用HMR

模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。

**webpack.config.js**

```js
const webpack = require('webpack');

.......
devServer: {
    contentBase: './dist',
    hot: true
},
.......

.......
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
.......
```



## 综合案例

### 单文件组件

可以通过 .vue 文件封装组件，[参考文档](https://cn.vuejs.org/v2/guide/single-file-components.html)

- 处理 .vue 文件 — 使用 vue-loader

  vue-loader使用比较特殊，如下

  ```bash
  $ npm install vue-loader --save-dev
  $ npm install vue-template-compiler --save-dev
  ```

  ```js
  // 配置插件
  ```

  ```js
  // 配置loader
  {
      test: /\.vue$/,
      loader: 'vue-loader'
  }
  ```


### 案例演示

![image-20180526145007221](media/image-20180526145007221.png)

### 搭建项目结构

- 新建项目

  - 初始化package.json

  ```bash
  # 注意项目名称不能有中文
  $ npm init -y
  ```

  - 拷贝 **webpack.config.js** 到根目录
  - 拷贝依赖

  ```js
  "devDependencies": {
      "clean-webpack-plugin": "^0.1.19",
      "css-loader": "^0.28.11",
      "file-loader": "^1.1.11",
      "html-minifier": "^3.5.16",
      "html-webpack-plugin": "^3.2.0",
      "less": "^3.0.4",
      "less-loader": "^4.1.0",
      "node-sass": "^4.9.0",
      "sass-loader": "^7.0.1",
      "style-loader": "^0.21.0",
      "url-loader": "^1.0.1",
      "vue-loader": "^15.2.0",
      "vue-template-compiler": "^2.5.16",
      "webpack": "^4.8.3",
      "webpack-cli": "^2.1.4",
      "webpack-dev-server": "^3.1.4"
    },
    "dependencies": {
      "vue": "^2.5.16"
    }
  ```

  - 安装依赖

  ```bash
  $ npm install
  ```

  - 下载bootstrap3

  ```bash
  $ npm install bootstrap@3.3.7 --save
  ```

- 项目结构

		 ![image-20180526111928852](media/image-20180526111928852.png)

### 配置根组件

- 从模板中复制自定义样式 index.css 到assets/css目录

- 入口文件 **src/index.js**

  ```js
  import Vue from 'vue';
  import App from './App.vue';

  // 导入bootstrap样式
  import 'bootstrap/dist/css/bootstrap.css';
  // 导入自定义样式
  import './assets/css/index.css';

  const vm = new Vue({
    el: '#app',
    render: c => c(App)
  });
  ```

- 根组件 **src/App.vue**

  复制模板中index.html的内容到App.vue中

- 运行测试

  ```bash
  $ npm start
  ```

### 提取子组件

- 提取头部组件 components/header.vue

- 提取侧边栏组件 components/sidebar.vue

- 提取英雄列表组件 views/hero-list.vue

- 根组件 src/App.vue 中加载组件

  ```js
  import Header from './components/header.vue';
  import Sidebar from './components/sidebar.vue';
  import Heroes from './views/heroes.vue';
  export default {
    components: {
      Header,
      Sidebar,
      Heroes
    }
  };
  ```

  ```html
  <div>
      <Header></Header>
      <div class="container-fluid">
          <div class="row">
              <Sidebar></Sidebar>
              <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                  <h2 class="sub-header">Hero List</h2>
                  <a class="btn btn-success" href="add.html">Add</a>
                  <div class="table-responsive">
                      <Heroes></Heroes>
                  </div>
              </div>
          </div>
      </div>
  </div>
  ```

### 使用 Vue-Router 实现页面导航管理

> Vue-Router 能帮我们实现点击某个导航链接的时候动态的展示一个组件

- 安装路由模块

  ```bash
  $ npm install vue-router --save
  ```

- 注册路由插件

  在index.js中，加载路由插件

  ```js
  import VueRouter from 'vue-router';
  // 注册路由插件
  Vue.use(VueRouter);
  ```

- 加载组件，配置路由规则

  index.js中

  ```js
  // 加载组件
  import Heroes from './views/heroes/heroes.vue';
  import Weapons from './views/weapons.vue';
  import Equips from './views/equips.vue';
  // 配置路由规则
  const router = new VueRouter({
    routes: [
      // 设置根路径跳转到英雄管理界面
      {'name': 'home', path: '/', redirect: {name: 'heroes'}},
      {'name': 'heroes', path: '/heroes', component: Heroes},
      {'name': 'weapons', path: '/weapons', component: Weapons},
      {'name': 'equips', path: '/equips', component: Equips}
    ]
  });

  new Vue({
    el: '#app',
    render: c => c(App),
    // 设置路由
    router
  });
  ```

- 在 `src/App.vue` 组件中留路由出口（告诉路由往哪里渲染 path 匹配到的组件）

  ```html
  <Sidebar></Sidebar>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <router-view></router-view>
  </div>
  ```

- 在侧边栏 `src/components/sidebar.vue` 组件中 增加两个导航链接

  [将激活-class-应用在外层元素](https://router.vuejs.org/zh/api/#%E5%B0%86%E6%BF%80%E6%B4%BB-class-%E5%BA%94%E7%94%A8%E5%9C%A8%E5%A4%96%E5%B1%82%E5%85%83%E7%B4%A0)

  ```html
  <ul class="nav nav-sidebar">
      <router-link to="/heroes" tag="li" active-class="active">
          <a>英雄列表</a>
      </router-link>
      <router-link to="/weapons" tag="li" active-class="active">
          <a>武器列表</a>
      </router-link>
      <router-link to="/equips" tag="li" active-class="active">
          <a>装备列表</a>
      </router-link>
  </ul>
  ```

### JSON Server

可以快速开启 REST API 测试服务器的工具命令行工具。[官网](https://github.com/typicode/json-server)

#### 安装

```bash
$ npm install json-server -g
```

#### 使用

```bash
$ json-server --watch db.json
```

####接口地址

-  获取英雄列表

  * 请求路径：`http://localhost:3000/heros`
  * 请求方法：`GET`

- 根据英雄id获取一个英雄

  - 请求路径：

    ```
    http://localhost:3000/heros/:id
    ```

    * `:id` 需要给定一个英雄的 id

  - 请求方法：`GET`

- 添加英雄

  * 请求路径：`http://localhost:3000/heros`
  * 请求方法：`POST`
  * 请求体：

  ```
  {
    name: '英雄名称',
    gender: '英雄性别'
  }
  ```

- 删除英雄

  - 请求路径：

    ```
    http://localhost:3000/heros/:id
    ```

    * `:id` 需要给定一个英雄的 id

  - 请求方法：`DELETE`

- 编辑英雄

  - 请求路径：

    ```
    http://localhost:3000/heros/:id
    ```

    * `:id` 需要给定一个英雄的 id

  - 请求方法：`PATCH`

  - 请求体：

    ```
    {
      name: '英雄名称',
      gender: '英雄性别'
    }
    ```

### 实现项目功能

安装 axios 到项目中

```bash
 $ npm install axios --save
```

#### 英雄列表

**JS**

```js
import axios from 'axios';
export default {
  data() {
    return {
      heroes: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await axios.get('http://localhost:3000/heros');
      this.heroes = res.data;
    }
  }
};
```

**HTML**

```html
<tr v-for="(item, index) in heroes" :key="item.id">
    <td>{{ index + 1 }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.gender }}</td>
    <td>
        <!-- <router-link :to="'/edit/' + item.id"></router-link> -->
        <a href="edit.html">edit</a>
        &nbsp;&nbsp;
        <a href="javascript:window.confirm('Are you sure?')">delete</a>
    </td>
</tr>
```

#### 删除英雄

**HTML**

```html
<!-- prevent 修饰符，阻止后续内容的执行 -->
<a href="#" @click.prevent="handleClick(item.id)">delete</a>
```

**JS**

```js
async handleClick(id) {
    const isConfirmed = confirm('确认要删除该英雄？');
    if (!isConfirmed) {
        return;
    }
    const res = await axios.delete(`http://localhost:3000/heros/${id}`);
    if (res.status === 200) {
        this.loadData();
        alert('删除成功');
    } else {
        alert('删除失败');
    }
}
```

#### 添加英雄

**路由**

- 新建 `src/views/heroes/heroes-add.vue`

- 配置路由

  ```js
  import HeroesAdd from '../views/heroes/heroes-add.vue';

  // 增加一个路由规则
  {'name': 'heroesadd', path: '/heroes/add', component: HeroesAdd}, 
  {'name': 'heroes', path: '/heroes', component: Heroes},
  ```

- `src/views/heroes/heroes.vue` 中点击添加按钮

  ```html
  <router-link class="btn btn-success" to="/heroes/add">Add</router-link>
  ```

**HTML**

```html
<h2 class="sub-header">添加英雄</h2>
<form>
    <div class="form-group">
        <label for="name">英雄名称</label>
        <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="英雄名称">
    </div>
    <div class="form-group">
        <label for="sex">英雄性别</label>
        <input type="text" v-model="formData.gender" class="form-control" id="sex" placeholder="英雄性别">
    </div>
    <button type="submit" @click.prevent="handleAdd" class="btn btn-success">Submit</button>
</form>
```

**JS**

```js
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      }
    };
  },
  methods: {
    async handleAdd() {
      const res = await axios.post('http://localhost:3000/heros', this.formData);
      if (res.status === 201) {
        // 跳转到列表页面
        this.$router.push({
          name: 'heroes'
        });
      } else {
        alert('添加失败');
      }
    }
  }
};
```

#### 编辑英雄

**路由**

- 新建 `src/views/heroes/heroes-edit.vue`

- 配置路由

  ```js
  import HeroesEdit from '../views/heroes/heroes-edit.vue';

  // 增加一个路由规则
  {'name': 'heroes', path: '/heroes', component: Heroes},
  {'name': 'heroesadd', path: '/heroes/add', component: HeroesAdd},
  {'name': 'heroesedit', path: '/heroes/edit/:id', component: HeroesEdit},
  ```

- `src/views/heroes/heroes.vue` 中，设置编辑

  ```html
  <router-link :to="{name: 'heroesedit', params: {id: item.id}}">edit</router-link>
  ```

**HTML**

和添加英雄一样

**JS**

```js
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      heroId: -1
    };
  },
  created() {
    this.heroId = this.$route.params.id;
    this.getHeroById();
  },
  methods: {
    // 根据id，获取英雄信息
    async getHeroById() {
      const res = await axios.get(`http://localhost:3000/heros/${this.heroId}`);
      if (res.status === 200) {
        this.formData = res.data;
      }
    },
    // 更新英雄信息
    async handleEdit() {
      const res = await axios.patch(`http://localhost:3000/heros/${this.heroId}`, this.formData);
      if (res.status === 200) {
        // 跳转到列表页面
        this.$router.push({
          name: 'heroes'
        });
      } else {
        alert('编辑失败');
      }
    }
  }
};
```

## NPM 缓存安装

需要曾经从网络使用NPM安装过想要的包

```bash
$ npm --cache-min 9999999 install webpack --save-dev
```



