#文档流

圣杯布局  优先显示中间内容 
middle部分首先要放在content的最前部分。然后是left,right 
middle（width：100%）填满整个content 
left 和 right float：left 脱离文档流
left： margin-left:-100%;移动回来到content position:relative 以自身为单位定位 ；left：-*px；移向左边预留的padding
right： margin-left：-200px 移动回来 content position:relative 以自身为单位定位；left：*px；移向右边边预留的padding



#清除浮动

5种方法：1. 在父容器（content)底部加一个空div <div style="clear:left（&both）"></div>
        2. 在父容器的css上加一个清除浮动的样式 .content{float:left;}
        3. 在父容器里面添加一个overflow: hidden（auto，scroll）；利用BFC简称（块级格式化上下文）来弥补父容器的高度坍塌；
        4. 添加一个父元素添加一个伪类 .clearFix::after{content:'';clear:both;display:block;height:0;visibility:hidden;}
        5. 尼古拉斯大师方法  把父容器的display设置为table，可以创建一个匿名表格单元，直接出发BFC效果 .content{display:table;}(不建议使用)