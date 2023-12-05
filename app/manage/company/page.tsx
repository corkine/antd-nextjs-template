'use client';

import { Button, Input, Modal, Space, message } from "antd";
import Table from "antd/es/table/Table";
import { useRouter } from "next/navigation";
import { useState } from "react";

let dataSource = [
    {
        key: '1',
        name: '公司1号',
        id: 32,
    },
    {
        key: '2',
        name: '公司2号',
        id: 42,
    },
    {
        key: '3',
        name: '公司3号',
        id: 52,
    },
    {
        key: '4',
        name: '公司4号',
        id: 62,
    },
    {
        key: '5',
        name: '公司5号',
        id: 72,
    },
    {
        key: '6',
        name: '公司6号',
        id: 82,
    }

];

const columns = [
    {
        title: '公司名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '唯一 ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '操作',
        key: 'action',
        render: (_: any, rec: any) => (
            <Space size="middle">
                <EditBtn
                    title={rec.name}
                    id={rec.id} />
                <DeleteBtn
                    title={rec.name}
                    id={rec.id} />
            </Space>
        ),
    },
];

const DeleteBtn = ({ title, id }: { title?: any, id?: any }) => {
    const { refresh } = useRouter();
    const handleDelete = () => {
        dataSource = dataSource.filter((item) => item.id !== id);
        refresh();
    }
    return <a onClick={handleDelete} style={{ color: 'red' }}>删除</a>;
}

const EditBtn = ({ title, id }: { title?: any, id?: any }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(title);
    const [messageApi, contextHolder] = message.useMessage();

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        console.log("company name is " + name);
        if (name === '') {
            messageApi.info('公司名称不能为空');
            return;
        } else if (name === title) {
            messageApi.info('公司名称未修改');
            setOpen(false);
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        dataSource = dataSource.filter((item) => item.id !== id);
        setOpen(false);
    };

    return (
        <>
            {contextHolder}
            <a href="#" onClick={showModal}>
                修改
            </a>
            <Modal
                open={open}
                title='修改公司名称'
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        取消
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        确定
                    </Button>
                ]}
            >
                <p>{id}</p>
                <Input placeholder="公司名称"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)} />
            </Modal>
        </>
    );
};


export default function Page() {
    return (
        <Table dataSource={dataSource} columns={columns} />
    );
}