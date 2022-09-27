---
title: SlideList 滑动条
---
适用于移动端（打开F12观看）

点击卡片会有弹窗

退出后，1.5秒后重新滚动

实现了向右的无限循环虚拟

容器宽度 + 当前滑动距离 >= 滑动总距离的一半

当前滑动距离 = 当前滑动距离 % 滑动总距离的一半
```ts
  if (wrapper.current.offsetWidth + wrapper.current.scrollLeft >= wrapper.current.scrollWidth / 2) {
    wrapper.current.scrollLeft %= wrapper.current.scrollWidth / 2;
  }
```
展示
```tsx
import React from 'react'
import SlideList from '../../../src/components/SlideList'
import list_Data from '../../../src/components/SlideList/data.ts'
const ShowModel = () => {
    return(
    <div>
      <SlideList data={list_Data}/>
    </div>
    )
}

export default ()=><ShowModel />
```
