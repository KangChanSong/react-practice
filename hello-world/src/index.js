import React from 'react';
import ReactDOM from 'react-dom';

function Blog(props){

    const sidebar = (
        <ul>
            {props.posts.map((post) => 
            
            <li key={post.id}>{post.title}</li>
            
            )}
        </ul>
    )

    const content = (
        <ul>
            {props.posts.map((post) => 
            <li key={post.id}>{post.content}</li>
            )}
        </ul>
    )

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    {id: 1, title: '제목1' , content: '내용1'},
    {id: 2, title: '제목2' , content: '내용2'}
]

ReactDOM.render(
    <Blog posts = {posts} />,
    document.getElementById('root')
)