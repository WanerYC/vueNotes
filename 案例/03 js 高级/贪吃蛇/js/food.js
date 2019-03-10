// 自调用函数，开启局部作用域
(function (window) {
  // 食物的构造函数
  function Food(map) {
    // 属性
    this.top = 0;
    this.left = 0;

    this._div = document.createElement('div');
    this._div.className = 'food';
    map.appendChild(this._div);

    // 随机位置
    this.random();
  }

  // 随机生成食物的位置
  Food.prototype.random = function () {
    var size = 20;
    // 1 最大索引
    var maxXIndex = 800 / size - 1;
    var maxYIndex = 600 / size - 1;
    // 2 随机生成最大索引  * 大小  - 坐标
    this.left = getRandom(0, maxXIndex) * size;
    this.top = getRandom(0, maxYIndex) * size;
    // 3 设置div的位置
    this._div.style.left = this.left + 'px';
    this._div.style.top = this.top + 'px';
    // 4 在构造函数中调用random()方法
  };

  // 生成min - max之间的随机整数
  function getRandom(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
  }
  
  // 通过window把Food构造函数，暴露给外部
  window.Food = Food;
})(window);