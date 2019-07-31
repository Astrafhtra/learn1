1. 三个容器,背后一个100%的宽度,可以拖拽的圆点,一个可以拖动的进度条
2. touchStart,touchMove,touchEnd
3. 改变 width left

```js
  new Progress('selector',{
    onDrag:()=>{},
    onDragStart:()=>{},
    onDragEnd:()=>{},
    progress:0.5,
    disableDrag:false
  })
```
