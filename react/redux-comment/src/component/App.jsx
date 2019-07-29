import React from 'react';


class App extends React.Component {
  componentDidMount() {
    const { addComment } = this.props;
    setTimeout(() => {
      addComment('usName1', 'content1')
      addComment('usName2', 'content2')
    }, 2000)
  }
  render() {
    const { commentList } = this.props;
    console.log(commentList,'+++')
   
    return (
      <div>
        {commentList.length === 0 ? '暂无评论' :
          <ul>
            {
              commentList.map((comment, i) => {
                return <li key={i}>
                  userName: {comment.userName}
                  content: {comment.content}
                </li>
              })
            }
          </ul>
        }
      </div>
    );
  }
}
export default App