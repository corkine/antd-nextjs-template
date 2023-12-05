'use client';

import { BellOutlined, QuestionCircleOutlined, FolderOutlined } from "@ant-design/icons";
import { theme, Layout, Row, Col, Space, Avatar, Menu, Breadcrumb, Typography, Button, Card, Table } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function ManageMenuBar({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
    const path = pathname.split('/manage/')[1] ?? '';
    const { replace } = useRouter();

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
                        <Link href="/manage" style={{ color: "black" }}>
                            MVST Manage System - 管理端
                        </Link>
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
                        defaultSelectedKeys={[path]}
                        defaultOpenKeys={['manage']}
                        items={[
                            {
                                icon: <FolderOutlined />,
                                key: 'manage',
                                label: '管理端',
                                title: 'manage',
                                children: [
                                    {
                                        key: 'company',
                                        label: '公司管理',
                                        title: 'company',
                                        onClick: () => {
                                            replace('/manage/company');
                                        }
                                    },
                                    {
                                        key: 'user',
                                        label: '用户管理',
                                        title: 'user',
                                        onClick: () => {
                                            replace('/manage/user');
                                        }
                                    },
                                    {
                                        key: 'table',
                                        label: '表格管理',
                                        title: 'table',
                                        onClick: () => {
                                            replace('/manage/table');
                                        }
                                    },
                                    {
                                        key: 'data',
                                        label: '填报管理',
                                        title: 'data',
                                        onClick: () => {
                                            replace('/manage/data');
                                        }
                                    },
                                ],
                            }
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
                        {children}
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    );
}