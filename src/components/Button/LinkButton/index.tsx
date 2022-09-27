import { Button } from 'antd';
import React from 'react';
import { ILinkButton } from './const';

const LinkButton = ({ text, url, queryList }: ILinkButton) => {
  let queryParams = '';
  if (Array.isArray(queryList) && queryList.length > 0) {
    queryParams = '?' + queryList.map((i) => i.param + '=' + i.value).join('&');
  }
  return (
    <a href={url + queryParams} target="_blank" rel="noreferrer">
      <Button type="link">{text}</Button>
    </a>
  );
};

export default LinkButton