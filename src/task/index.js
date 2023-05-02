// import { useState } from 'react';
import { Affix, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const { TextArea } = Input

const Task = (props) => {
    const {activeItemId, itemdData, updateItemData} = props

    const [query, setQuery] = useState('')

    const onChange = (e) => {
        updateItemData(activeItemId, e.target.value)
    }

    const OnSubmit = () => {
        
        console.log(itemdData)
        let json_submit = JSON.stringify({query: itemdData.data})
        console.log(json_submit)

        axios.post('http://localhost:8567/query', json_submit, {
                headers: {
                    'Content-Type': 'application/json'
                }
             })
            .then((response) => {
                console.log('response', response)
                setQuery(response.data.response[0].message.content)
            }).catch(error => {
                console.error(error);
        })
    }

    return (
        <div>
            <h1>Task {props.activeItemId}</h1>
            <TextArea
                showCount
                maxLength={2000}
                style={{
                    height: 200,
                    resize: 'none',
                }}
                onChange={onChange}
                placeholder="Input content"
                onPressEnter={OnSubmit}
            />
            <div style={{
                height: '30px'

            }}></div>
            <div 
                style={{
                    height: '40vh',
                    width: '100%',
                    // background: 'pink'
                }}
            >
                {query}
            </div>
        </div>
    )
}

export default Task