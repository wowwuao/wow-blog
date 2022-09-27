---
title: LinkButton 按钮
---

## LinkButton

### 参数

```ts
text:string 按钮文本
url:string 路由
queryList:{param:string,value:string}[] 查询字符串参数
```

```tsx
import React from 'react';
import LinkButton from '../../../src/components/Button/LinkButton';

const url = '//cn.bing.com/search';
const queryList = [{ param: 'q', value: 'wowwuao-blog' }];
function App() {
  return (
    <div>
      <LinkButton text={'搜索wow-blog'} url={url} queryList={queryList} />
    </div>
  );
}

export default () => <App />;
```
