import React from "react";
import { Steps, Radio, Button, Checkbox, Form, Input } from 'antd';

function OnBoardNewUsers(){
    return(
        <div>
            <h3>Onboard new user</h3>
            <div className="steps">
            <Steps
                current={1}
                items={[
                    {
                        title: 'Add user',
                    },
                    {
                        title: 'Assign roles',
                    },
                    {
                        title: 'Review & confirm',
                    },
                ]}
            />
            </div>
            <div className="form">
            
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                label="Role"
                name="role"
                
                >
                    <Radio.Group defaultValue="user">
                        <Radio.Button value="user">User</Radio.Button>
                        <Radio.Button value="editor">Editor</Radio.Button>
                        <Radio.Button value="admin">Admin</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                label="Name"
                name="name"
                >
                    <Input placeholder="Enter Name" />
                </Form.Item>
                <Form.Item
                label="Remarks"
                name="remarks"
                >
                    <Input placeholder="Add Remarks" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                    <Button type="primary" htmlType="submit">
                        Add User
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    )
}
export default OnBoardNewUsers;