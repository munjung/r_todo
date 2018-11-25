import React, { Component } from 'react';
import './IdFinder.css'

class IdFinder extends Component {
    
    state = {
        userid: '',
        id: '',
        url: '',
        avatar_url: ''
    }

    getUser(userId){
        return fetch(`https://api.github.com/users/${userId}`)
        .then(response => response.json())
        .then(response => {
            return response;
        })
    }


    async handleSubmit(e){
        e.preventDefault();
        if(this.refs.userid.value===''){
            this.setState({
                id : ''
            })
            return false;
        }

        let user = await this.getUser(this.refs.userid.value);
        this.setState({
            userid: user.login,
            id : user.id,
            url : user.url,
            avatar_url :  user.avatar_url
        });
    }

    render() {
        let contents;
        if(this.state.id===undefined){
            contents =
            <div className="userinfo">
                <p>ID 없음</p>
            </div>
        }else if(this.state.id===''){
            contents =
            <div className="userinfo">
                <p>ID를 입력해주세요</p>
            </div>
        }else{
            contents =
            <div className="userinfo">
                <p>username : {this.state.userid}</p>
                <p>id : {this.state.id}</p>
                <p>url: {this.state.url}</p>
                <img src={this.state.avatar_url} alt=''/>
            </div>
        }
        
        return (
            <div>
                <form className="title" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form">
                        <input 
                            type='text' 
                            ref='userid' 
                            placeholder='ID를 입력하세요'  
                        />
                        <button className="create-button" type="submit">검색</button>
                    </div>
                </form>
                {contents}
            </div>
        );
    }
}

export default IdFinder;
