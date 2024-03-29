import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';

const DefaultTable = ({
  className,
  columns,
  bordered,
  data,
  pagination,
  rowKey,
}) => {
  return (
    <Table
      className={className}
      columns={columns}
      bordered={bordered}
      dataSource={data}
      pagination={pagination}
      rowKey={rowKey}
    />
  );
};

export default DefaultTable;
