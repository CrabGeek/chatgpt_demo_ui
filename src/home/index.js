import {PlusCircleOutlined, BulbOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Task from '../task';
import TaskData from '../model';

const { Header, Content, Footer, Sider } = Layout;

const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label
    };
  }

const items = [
    getItem('New Task', '1', <PlusCircleOutlined/>)
];


const Home = () => {
    const [activeItemId, setActiveItemId] = useState('1')
    const [collapsed, setCollapsed] = useState(false);
    const [menuItems, setMenuItems] = useState([...items])
    const [itemDataList, setItemDataList] = useState([])

    const addItemData = (data) => {
        if (!!data) {
            setItemDataList((preList) => {
                const newList = [...preList]
                newList.push(data)
                return newList
            })
        }
    }

    const updateItemData = (id, data) => {
        if (!!id) {
            let taskData = itemDataList.find(item => item.id === id)
            if (!!taskData) {
                taskData.data = data
            }
        }
    }

    const getItemData = (id) => {
        if (!!id) {
            return itemDataList.find(item => item.id === id)
        }
    }

    const { token: { colorBgContainer }, } = theme.useToken();

    const menuItemsOnClick = (props) => {
        if (props.key === '1') {
            // Add new Task
            setActiveItemId('1')
            items.push(getItem('Task ' + items.length, items.length + 1, <BulbOutlined />))
            setMenuItems([...items])
            addItemData(new TaskData(items.length - 1, ''))
        } else {
            setActiveItemId(props.key)
            console.log(itemDataList)
        }
    }

    return (
        <Layout
            style={{
                minHeight: '100vh',
                maxHeight: '100vh'
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div
                    style={{
                    height: 32,
                    margin: 16,
                    background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu theme="dark" mode="inline" items={menuItems} onClick={menuItemsOnClick} />
            </Sider>

            <Layout className="site-layout">
                <Header
                    style={{
                    padding: 0,
                    background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                    margin: '0 16px',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: '90%',
                            maxHeight: '90%',
                            background: colorBgContainer,
                        }}
                    >
                        { activeItemId !== '1' && <Task activeItemId={activeItemId - 1}
                                                        itemdData = {getItemData(activeItemId - 1)}
                                                        updateItemData={updateItemData}></Task> }
                    </div>
                </Content>
                <Footer
                    style={{
                    textAlign: 'center',
                    }}
                >
                    ChatGPT project demo
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Home