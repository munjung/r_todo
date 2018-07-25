import React, { Component } from 'react';
import TodoInfo from './TodoInfo';


class TodoInfoList extends Component {  
    static defaultProps = {
        data:[]
    }
    render() {
        const{data, onRemove} = this.props;
        const list = data.map(
            info => (<TodoInfo info={info} key={info.id} onRemove={onRemove}/>)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TodoInfoList;