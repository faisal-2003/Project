import React from "react";
import axios from 'axios'
class MyList extends React.Component{
    I was here.
    state = {
        posts : []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
            const posts = response.data;
            this.setState({posts});
        })
    }
    
    render(){
        return(
            <div>
                <ul>
                    {this.state.posts.map(Post =>
                        <li key = {Post.id}><b>Title</b> : {Post.title} <br/>
                                              Body : {Post.body}
                                              </li>)}
                </ul>
            </div>
        )
    }
}
export default MyList;
