import React, { useState } from 'react';
import { Checkbox, Row, Col, Table, Popover } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

import styles from './index.module.less';
import { IToolBarTable } from './const';

const ToolBarTable = ({
  columns,
  dataSource,
  storeKey,
  tableProps,
}:IToolBarTable) => {
  const checkedAllValueList = columns.map((i) => i.title);
  const getStoreCheckedList = (storeKey: string) => {
    const checkedListValue = sessionStorage.getItem(storeKey);
    return checkedListValue ? JSON.parse(checkedListValue) : checkedAllValueList;
  };

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(
    getStoreCheckedList(storeKey),
  );

  const indeterminate = !!checkedList.length && checkedList.length < checkedAllValueList.length;
  const isCheckedAll = checkedList.length === checkedAllValueList.length;
  const showColumn = columns.filter((i) => checkedList.includes(i.title));

  const onChange = (checkedList: CheckboxValueType[]) => {
    setCheckedList(checkedList);
    sessionStorage.setItem(storeKey, JSON.stringify(checkedList));
  };

  const onCheckedAllChange = (e: CheckboxChangeEvent) => {
    onChange(e.target.checked ? checkedAllValueList : []);
  };

  const popContent = (
    <div className={styles['check-column-box']}>
      <Checkbox indeterminate={indeterminate} onChange={onCheckedAllChange} checked={isCheckedAll}>
        全选
      </Checkbox>
      <hr />
      <Checkbox.Group value={checkedList} onChange={onChange}>
        {checkedAllValueList.map((item) => {
          return (
            <Row key={item} style={{ marginBottom: '5px' }}>
              <Col span={24}>
                <Checkbox value={item}>{item}</Checkbox>
              </Col>
            </Row>
          );
        })}
      </Checkbox.Group>
    </div>
  );

  return (
    <div className={styles['screening-table']}>
      <Popover placement="bottom" content={popContent} trigger="click">
        <div className={styles['setting-button']}>
          <SettingOutlined style={{ fontSize: 20 }} />
        </div>
      </Popover>
      <Table
        columns={showColumn}
        dataSource={dataSource}
        {...tableProps}
        rowKey={(record) => record.dataIndex}
      />
    </div>
  );
};

export default ToolBarTable;
