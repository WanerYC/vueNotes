// 自调用函数 开启局部作用域
(function (window) {
  // snake的构造函数 
  function Snake(map) {
    // 属性 
    this.body = [];  // 存储蛇的每一节，div元素。第一元素是蛇头
    this.direction = 'right'; // 蛇运动的方向 默认 right 其它值 left top bottom
    this._map = map;
    // 初始化 蛇

    // 内部的this指向的是window，但是我们要在函数内部获取当前的蛇对象
    // 思路1 传参
    // 思路2 改变函数内部的this
    // insertHead.call(this);
    // insertHead.call(this);
    
    for (var i = 0; i < 4; i++) {
      insertHead.call(this);
    }
  }

  // 插入蛇头的函数  -- 不需要外部调用 所以定义成函数
  function insertHead() {
    // 0. 获取新蛇头的坐标
    var location = getHeadLocation(this);

    // 1 获取蛇头，标记为蛇的身体
    // 思路1：判断当前的body数组为空，新建蛇头
    //        如果数组不为空，取出数组的第一项(蛇头) 设置为蛇的身体

    // 思路2：获取body数组中的第一个元素（蛇头），如果获取的是undefined，返回空对象，设置对象的className标记为蛇的身体
    var currentHead = this.body[0] || {};
    currentHead.className = 'snake-body';

    // 2 创建新的蛇头
    var newHead = document.createElement('div');
    newHead.className = 'snake-head';
    this._map.appendChild(newHead);

    // 3 把蛇头放入body数组中的第一个元素之前
    this.body.unshift(newHead);

    // 4 设置新蛇头的坐标
    newHead.style.left = location.left + 'px';
    newHead.style.top = location.top + 'px';
  }
  // 计算新蛇头的坐标。 不需要外部访问 -- 函数
  function getHeadLocation(snake) {
    // 1 判断当前body中是否有元素，如果没有元素，返回{left: 0, top: 0}
    if (snake.body.length === 0) {
      return {left: 0, top: 0};
    }
    // 2 如果当前body数组中有元素，获取当前的蛇头, 获取当前蛇头的坐标
    // body数组中存储的都是 div对应的dom对象
    var currentHead = snake.body[0];
    var left = currentHead.offsetLeft;
    var top = currentHead.offsetTop;
    var size = 20;
    // 3 根据蛇移动的方向，计算新的坐标
    switch (snake.direction) {
      case 'right':
        left += size;
        break;
      case 'left':
        left -= size;
        break;
      case 'top':
        top -= size;
        break;
      case 'bottom':
        top += size;
        break;
    }
    return {left: left, top: top};
  }

  // 拍段蛇是否死亡 如果死亡返回true 没撞墙返回false
  function isDead (location) {
    return location.left < 0 ||
      location.top < 0 ||
      location.left >= 800 ||
      location.top >= 600;
  };

  // 方法 - 蛇移动
  Snake.prototype.move = function (food) {
    // 0 计算蛇移动后，新蛇头的坐标
    var location = getHeadLocation(this);

    //-----------------------------判断蛇是否装强----
      if (isDead(location)) {
        return true;
      };

    // -----------判断蛇是否吃到食物-----------
    // 1 蛇吃到食物后 随机一个新的食物
    // 2 插入蛇头
    if (location.left === food.left &&
      location.top === food.top) {
        food.random();
        insertHead.call(this);
        return false;

    }

    // ------------------- 蛇移动 --------------
    // 1 获取当前蛇头
    var currentHead = this.body[0];
    // 2 当前蛇头通过类样式设置为蛇身体
    currentHead.className = 'snake-body';
    // 3 获取蛇的最后一节(新蛇头)，通过类样式设置为新蛇头
    var newHead = this.body.pop();
    newHead.className = 'snake-head';
    // 4 设置新蛇头的坐标
    newHead.style.left = location.left + 'px';
    newHead.style.top = location.top + 'px';
    // 5 把新蛇头，放到body数组的第一个元素之前
    this.body.unshift(newHead);

    return false;
  };


  // 把构造函数，通过window暴露给外部
  window.Snake = Snake;
})(window);