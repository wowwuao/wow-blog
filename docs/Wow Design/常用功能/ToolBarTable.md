---
title: 工具箱表格 ToolBarTable
---
## 工具箱表格

基于 antd 的封装

### 实现功能
1. 表格列的筛选，
2. 实现筛选记忆化
3. 还在酝酿....，等以后业务场景需要（


### 参数Props
* columns，同antd
* dataSource， 同antd
* storeKey:`string`，存储当前筛选列状态的key
* tableProps，Table其他参数配置项的集合，同antd

展示：
```tsx
import React from 'react';
import ToolBarTable from '../../../src/components/ToolBarTable/index.tsx';

const columns = [
  {
    dataIndex: 'name',
    title: '姓名',
    align: 'center',
  },
  {
    dataIndex: 'age',
    title: '年龄',
    align: 'center',
  },
  {
    dataIndex: 'email',
    title: '邮箱',
    align: 'center',
  },
  {
    dataIndex: 'phone',
    title: '电话',
    align: 'center',
  },
];
const data = [
  { name: 'A', age: 21, email: 'a@pdd.com', phone: '11223344' },
  { name: 'B', age: 22, email: 'b@pdd.com', phone: '22334411' },
  { name: 'C', age: 23, email: 'c@pdd.com', phone: '33441122' },
  { name: 'D', age: 24, email: 'd@pdd.com', phone: '44112233' },
];
const App = () => {
  return (
    <ToolBarTable
      columns={columns}
      dataSource={data}
      tableProps={{ bordered: true, size: 'small' }}
      storeKey={'store1'}
    />
  );
};

export default () => <App />;
```
