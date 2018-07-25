import React, { Component } from 'react'; //메모 정보를 보여주는 컴포넌트
import './TodoListForm.css'

class TodoInfo extends Component {

    state = {
        check: false,
    }
    handleRemove = () => {
        const{info, onRemove} = this.props;
        onRemove(info.id)
    }

    handleComplete = () => {
        this.setState({
            check: !this.state.check,
        })       
    }

    render() {
        const { memo } = this.props.info;
        const { check  }  = this.state;
        return (
            <div className="todo-item">
                <div className={check? 'complete' : 'not'} onClick={this.handleComplete}>
                    <span>{memo}</span>
                    <div className="btn-remove" onClick={this.handleRemove}>삭제</div> 
                    <div className="btn-complete" onClick={this.handleComplete}>완료</div>
                </div>        
            </div>
        );
    }
}

export default TodoInfo;