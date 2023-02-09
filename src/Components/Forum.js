import React from "react";
import { Tabs } from 'antd';
import SingleConversation from "./SubComponents/SingleConversation";

const onChange = (key) => {
    console.log(key);
};

// Can be add to a map and parse data from the server side
const conversationContent = [
        <div>
            <SingleConversation />
            <SingleConversation />
            <SingleConversation />
        </div>
    ]

const items = [
    {
        key: '1',
        label: `Conversation`,
        children: conversationContent,
    },
    {
        key: '2',
        label: `Files`,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: `Notes`,
        children: `Content of Tab Pane 3`,
    },
];


function Forum(){
    return(
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}
export default Forum;