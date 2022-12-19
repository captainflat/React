import React from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useState, useEffect } from "react";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>Вы открыли страницу поста c ID = {params.id}</div>
            {isLoading
            ? <Loader/>
            : <div style={{fontSize: 30}}> {post.title} </div>
            }
            <h1>Коментарии</h1>
            {isComLoading
            ? <Loader />
            : <div>
                {comments.map(comm => 
                    <div style={{marginTop: 15}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                    )}
            </div>
            }
        </div>
    )
}

export default PostIdPage;