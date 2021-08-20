import React from 'react';
import ReactDOM from 'react-dom';

function Post(props){
    const post = props.post;
    
    const title = (<td>{post.title}</td>)
    const content = (<td>{post.content}</td>)
    const writer = (<td>{post.writer}</td>)

    return (
        <tr>
            {title}
            {content}
            {writer}
        </tr>
    )
}

function Board(props){
    const posts = props.posts.map((post) => 
                    <Post key={post.id} post={post}/>)

    return (
        <table>
            <th>
                <td>제목</td>
                <td>내용</td>
                <td>작성자</td>
            </th>
            {posts}
        </table>
    )
}

const posts = [
    {id:1 , title: '0213', content: '아주좋앗다.', writer:'송강찬'},
    {id:2 , title: '오늘일기', content: '오늘은 뭘햇지.', writer:'송우리'},
    {id:3 , title: '좋은하루', content: '재밋엇다.', writer:'송아지'}
]

ReactDOM.render(
    <Board posts = {posts}/>,
    document.getElementById('root')
)