# 核心知识点

- 绘制矩形[api]
- 清除矩形[ 清除画布，实现动画效果]
- 绘制动画效果矩形
- 弧度制与角度制之间的关系
- 绘制圆弧【圆，椭圆】
- 绘制圆上任意一点
- 绘制扇形
- 绘制圆动画
- 绘制饼形统计图
- 文本绘制
- 图片绘制
- 平移转换
- 旋转转换
- 缩放转换

## 绘制矩形

```js
 ☞ 绘制描边矩形
 	 ctx.strokeRect(x, y, width, height);
	 备注：
     	 x==> 矩形开始的横坐标
	     y==> 矩形结束的纵坐标
	 width==> 矩形的宽度
	 height==>矩形的高度
 
 ☞ 绘制填充矩形
 	 ctx.fillRect(x, y, width, height);
	  备注：
     	 x==> 矩形开始的横坐标
	     y==> 矩形结束的纵坐标
	 width==> 矩形的宽度
	 height==>矩形的高度
 
 ☞ 绘制矩形
 	 ctx.rect(x, y, width, height);
	 ctx.stroke();
	 ctx.fill()
	 备注：
		1,使用该方法的时候，需要设置stroke或者fill

 ☞ 课堂练习：
 		1. 完成渐变方案矩形案例
```

## 清除矩形[清除画布]

```js
 ☞  ctx.clearRect( x, y, width, height )
 
 备注：
	1. 一般使用该方法清空画布
    2. 使用该方法配合定时器实现动画效果
    
 ☞  完成课堂案例： 移动矩形案例
```

## 弧度制与角度制

```js
  ☞  什么是弧度制
  	  弧度制：是一种角的计量单位，弧长等于半径的弧，其所对的圆心角为1弧度
  
  ☞  什么是弧线
  	  圆上任意两点间的部分叫做圆弧（弧线）
      
  ☞  弧度制与角度制之间的关系：
	  	  0度 = 0弧度
          30度 = π/6   (180度的六分之一)
          45度 = π/4   
          60度 = π/3
          90度 = π/2
          180度 = π
          360度 = 2π
          
  ☞ 弧度与角度之间的相互转化关系
  
  	    角度：弧度=180：PI	
```

## 绘制圆弧

```js
 ☞ content.arc(x,y,radius,startradian,endradian[,direct]);
   备注：
	  x, 圆心横坐标
	  y, 圆心纵坐标
	radius, 半径
   startradian， 开始弧度
   endradian,	结束弧度
   direct，  绘制圆弧的方向，默认false顺时针 | true逆时针

 ☞ 圆弧开始角度0度：
 	  以圆心为中心向右为0角 顺时针为正，逆时针为负

 ☞ 课堂案例：
		1. 绘制一个45度的圆弧
         2. 绘制一个-45度的圆弧
         3. 绘制一个圆
         4. 绘制一个动画效果的圆
```

## 绘制圆上任意点

```js
  ☞ 公式：
	 x=ox+r*cos( 弧度 )；
     y=oy+r*sin( 弧度 );

 备注：
	 1. x，y表示圆上任意一点的横纵坐标
     2. ox代表圆心横坐标，oy代表圆心纵坐标;
     3. r表示半径
  
 ☞ 课堂案例：
	 1.在圆弧上绘制12点钟方向，6点钟方向，3点钟方向，9点钟方向的点
     
     2. 完成动画时钟效果
	   ✔ 获取当前小时对应的角度
       ✔ 获取当前分钟对应的角度
       ✔ 获取当前秒对应的角度
```

## 绘制统计图

### 绘制3等分统计图

### 绘制任意角度统计图

### 绘制随机统计图

```
 ☞ 思路
	 1. 先确定要随机生成多少个区域
	 2. 得到每个区域所占多少份（比例）
	 3. 依据： 总份数：360度=每一份：每一份对应的角度
	 4. 获取对应的角度
	 5. 绘图
```

## 文本绘制

```js
 ☞ 描边文本
 	 ctx.strokeText("文本信息", 开始绘制文本的横坐标x, 开始绘制文本的纵坐标y);
	
 ☞ 填充文本
 	 ctx.fillText("文本信息", x, y)

 ☞ 文本样式设置
 	 1. 设置文字加粗，斜体，字体大小，字体
        ctx.font=" 斜体  加粗  字体大小  字体名称"；    ----> 设置方式与css font属性一致。
        
     2. 设置文字水平对齐方式
     	 ctx.textAlign="left | right | center";

     3. 设置文字垂直对齐方式
     	 ctx.textBaseline="alphabetic(默认值) | top | bottom | middle";

	 4. 设置阴影效果
     	 ctx.shadowColor="值";   阴影颜色
         ctx.shadowBlur="10";	 模糊度
         ctx.shadowOffsetX="1"   水平偏移量
         ctx.shadowOffsetY="1"   垂直偏移量
```

## 图片绘制

```js
 ☞ ctx.drawImage(image, dx, dy);
   ✔ image 图片对象
   ✔ dx 从画布开始绘制的横坐标
   ✔ dy 从画布开始绘制的纵坐标
   
   备注：
	 1. 绘制图片的时候，保证图片资源加载完成后才能绘制
     2. 图片加载完成触发onload事件
   例如：
	    var image=new Image();
	 	 	image.src="3.jpg";
	 	 image.onload=function () {
	 	 	ctx.drawImage(image, 100,100);
	 	 }	 
         
  ☞ctx.drawImage(image, dx, dy, dw, dh);
	✔ image 图片对象
    ✔ dx  从画布开始绘制的横坐标
    ✔ dy  从画布开始绘制的纵坐标
    ✔ dw  绘制到容器的宽度
    ✔ dh  绘制到容器的高度
    
   	
  ☞ctx.drawImage(image, sx, sy , sw , sh, dx,dy,dw,dh)；
    将图片的指定区域绘制到画布的指定区域
    sx  图片开始
    sy  图片结束
    sw  图片宽度
    sh  图片高度
    
    dx  容器横坐标
    dy  容器纵坐标
    dw  容器宽度
    dh  容器高度
    
    
  ☞ 解决图片失真效果
  
  ☞ 绘制精灵图案例
```



## 转换方式

### 平移

```js
  ☞ ctx.translate(x,y);
     将坐标系原点的位置改变
  
```

### 旋转

```js
 ☞ ctx.rotate(弧度)
   坐标系旋转
```

### 缩放

```js
 ☞  ctx.scale(x,y)
	坐标系缩放
```

