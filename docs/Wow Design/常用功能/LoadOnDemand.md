---
title: 按需加载列表 LoadOnDemandList
---
核心代码
```ts
//300 为视觉缓冲区，可视子元素的高度而定，做到提起加载
// 当前滚动条总长度 - 距离顶部的长度     容器的长度
if (scrollHeight - scrollTop - 300 <= clientHeight) {
  //更新数据
   data = data.concat(newData)
}
```

```tsx
import React from 'react'
import LoadOnDemandList from '../../../src/components/LoadOnDemandList'
const App = ()=> {
  return (
    <LoadOnDemandList />
  )
}

export default ()=> <App/>
```