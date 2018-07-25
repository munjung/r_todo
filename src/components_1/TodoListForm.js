import React, { Component } from 'react';
import './TodoListForm.css'

class TodoListForm extends Component {

    state = {
        memo: '',
    }

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            memo: e.target.value
         })
    }

    handleSubmit(e){
        console.log(this)
        e.preventDefault();
         if(this.state.memo !== ''){
            this.props.onCreate(this.state);
            this.setState({
                memo:'',
            })    
          }  
    }
    // handleKeyPress = (e) => {
    //     e.preventDefault()
    //     //if(e.key === 'Enter') {
    //         if(this.state.memo !== ''){
    //             this.props.onCreate(this.state);
    //             this.setState({
    //                 memo:'',
    //             })  
    //         }
    //     //  }
    // }
 
    render() {
        const{children} = this.props;
        return (
            <div className="todo-main">
              {/*div>form , onKeyPress={this.handleKeyPress} onSubmit={this.handleKeyPress}*/}
                <form className="title"> 
                    ToDoList
                    <div className="form" >
                        <input 
                        name='memo'
                        type='text' 
                        placeholder='오늘의 할 일' 
                        onChange={this.handleChange} 
                        value={this.state.memo}
                        />
                        <button className="create-button" onClick={this.handleSubmit}>
                            추가
                        </button>
                     </div>          
                </form>  
                <section className="todos-wrapper"> 
                    {children}
                </section>         
            </div>  
        );
    }
}

export default TodoListForm;