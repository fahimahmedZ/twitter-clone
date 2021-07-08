import React, {useState,useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase.js'
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [posts, setPosts]= useState([]);

    // here Load the all posts from firestore 
    useEffect(()=> {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => doc.data()))
        });
    }, []);

    return (
    <div className="feed">
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <TweetBox />

    <FlipMove>
    {/*Here the single post from post array from state*/}
    {posts.map(post => (
        <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
        />
    ))}
    </FlipMove> 

    </div>
    )
}

export default Feed
