'use client';

import {
  BellOutlined,
  FolderOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  Layout,
  Menu,
  Row,
  Space,
  Table,
  Typography,
  theme,
} from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  phoneNumber: string;
  position: string;
  jurisdiction: string;
}

const data: DataType[] = [];

for (let index = 0; index < 100; index++) {
  data.push({
    key: index,
    name: index.toString(),
    email: index.toString(),
    phoneNumber: index.toString(),
    position: index.toString(),
    jurisdiction: index.toString(),
  });
}

export default function Home() {
  const {
    token: { colorBgLayout, paddingMD, fontSizeXL, colorFill, padding },
  } = theme.useToken();

  return (
    <Layout>
      <Layout.Header style={{
        backgroundColor: colorBgLayout,
        padding: "0 25px"
      }}>
        <Row justify="space-between">
          <Col style={{ margin: 'auto 0' }}>
            MVST Manage System - 上报端
          </Col>
          <Col>
            <Space size="large">
              <BellOutlined />
              <QuestionCircleOutlined />
              <Avatar />
            </Space>
          </Col>
        </Row>
      </Layout.Header>
      <Layout>
        <Layout.Sider
          style={{
            backgroundColor: colorBgLayout,
            position: 'sticky',
            top: 0,
            minHeight: '100vh',
            maxHeight: '100vh',
          }}
        >
          <Menu
            defaultSelectedKeys={['User management']}
            defaultOpenKeys={['Dashboard']}
            items={[
              {
                icon: <FolderOutlined />,
                key: 'Dashboard',
                label: '管理端',
                title: 'Dashboard',
                children: [
                  {
                    key: 'Form',
                    label: '公司管理',
                    title: 'Form',
                  },
                  {
                    key: 'List',
                    label: '用户管理',
                    title: 'List',
                  },
                  {
                    key: 'User management',
                    label: '表格管理',
                    title: 'User management',
                  },
                  {
                    key: 'Result',
                    label: '填报管理',
                    title: 'Result',
                  },
                ],
              },
              {
                icon: <FolderOutlined />,
                key: 'Exception',
                label: 'Exception',
                title: 'Exception',
                children: [],
              },
              {
                icon: <FolderOutlined />,
                key: 'Account',
                label: 'Account',
                title: 'Account',
                children: [],
              },
              {
                icon: <FolderOutlined />,
                key: 'Editor',
                label: 'Editor',
                title: 'Editor',
                children: [],
              },
            ]}
            mode="inline"
            style={{
              backgroundColor: colorBgLayout,
              height: '100%',
              position: 'sticky',
              top: 0,
            }}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Content style={{ padding: paddingMD }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Breadcrumb
                items={[
                  { title: '主页' },
                  { title: '管理端' },
                  { title: '用户管理' },
                ]}
              />
              <Row justify="space-between">
                <Col>
                  <Typography.Text style={{ fontSize: fontSizeXL }}>
                    管理系统中注册的用户
                  </Typography.Text>
                </Col>
                <Col>
                  <Space>
                    <Button type="primary">新建用户</Button>
                  </Space>
                </Col>
              </Row>
              <Card bodyStyle={{ padding: 0 }}>
                <Table
                  columns={[
                    { dataIndex: 'name', title: 'Name' },
                    { dataIndex: 'email', title: 'E-mail' },
                    { dataIndex: 'phoneNumber', title: 'Phone number' },
                    { dataIndex: 'position', title: 'Position' },
                    { dataIndex: 'jurisdiction', title: 'Jurisdiction' },
                    {
                      key: 'operation',
                      title: '操作',
                      render: () => (
                        <>
                          <Button type="link">修改</Button>
                          <Button type="link" danger>删除</Button>
                        </>
                      ),
                    },
                  ]}
                  dataSource={data}
                  pagination={{
                    showSizeChanger: false,
                    style: { paddingRight: padding },
                  }}
                />
              </Card>
            </Space>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
