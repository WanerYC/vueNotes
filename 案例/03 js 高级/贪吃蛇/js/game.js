// 自调用函数，开启局部作用域
(function (window) {
  // Game 构造函数
  function Game(map) {
    // 属性  snake  food
    this.food = new Food(map);
    this.snake = new Snake(map);
  }
  // 方法 start
  Game.prototype.start = function () {
    // 1. 定时器，调用蛇的move方法
    var timerId = setInterval(function () {
      var gameover = this.snake.move(this.food);
      if (gameover) {
        clearInterval(timerId);
        alert('结束')
      }
    }.bind(this), 300);
    // 2. 控制蛇移动的方向
    document.onkeydown = function (e) {
      // console.log(this); 
      // 左 37  上 38  右 39  下 40
      // console.log(e.keyCode);
      switch (e.keyCode) {
        case 37:
          // 如果按左，当前蛇是向右走的，不改变方向
          if (this.snake.direction === 'right') {
            return;
          }
          // 改变蛇对象的direction属性   左
          this.snake.direction = 'left';
          break;
        case 38:
          // 如果按上，当前蛇是向下走的，不改变方向
          if (this.snake.direction === 'bottom') {
            return;
          }
          // 改变蛇对象的direction属性   上
          this.snake.direction = 'top';
          break;
        case 39:
          // 如果按右，当前蛇是向左走的，不改变方向
          if (this.snake.direction === 'left') {
            return;
          }
          // 改变蛇对象的direction属性   右
          this.snake.direction = 'right';
          break;
        case 40:
          if (this.snake.direction === 'top') {
            return;
          }
          // 改变蛇对象的direction属性   下
          this.snake.direction = 'bottom';
          break;
      }
    }.bind(this);
  };

  window.Game = Game;
})(window);