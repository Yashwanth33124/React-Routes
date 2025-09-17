import React from 'react';
import usefetch from '../../hooks/usehooks';
import './comments.css';

const Comments = () => {
  const { data, loading } = usefetch('https://dummyjson.com/comments');

  if (loading) return <h1>Fetching comments, please wait!!</h1>;

  return (
    <div className="comments-container">
      <h2>Comment List Page</h2>
      <ul className="comments-list">
        {data?.comments?.length > 0
          ? data.comments.map(commentItem => (
              <li className="comment-card" key={commentItem.id}>
                <label>{commentItem.body}</label>
                <p>Likes: {commentItem.likes}</p>
              </li>
            ))
          : <p>No comments found.</p>}
      </ul>
    </div>
  );
};

export default Comments;
