import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../redux/postsSlice'

function Post() {
    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");
    const posts= useSelector((state)=>state.posts.items);

    console.log(title,description);

    const dispatch= useDispatch();
    return (
        <div>
            <div className='form flex-center'>
                <input 
                    type="text" 
                    placeholder='Enter Post title'
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
                <input 
                    type="text" 
                    placeholder='Enter Post description'
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
                <button onClick={()=>{
                    dispatch(addPost({id:1,title,description},))
                }}>Add Post</button>
            </div>

            <div className='posts flex-center'>
                {posts.length > 0 ? posts.map( post=> <div className='post'>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <div className='space-between'>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>):'There is no posts'}
            </div>
        </div>
    )
    }
export default Post;
