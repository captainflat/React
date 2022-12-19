import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";


const AppRouter = () => {
    return (
        <Routes>
            <Route exact path='/posts/:id' element={<PostIdPage />} />
            <Route path='/about' element={<About />} />
            <Route exact path='/posts' element={<Posts />} />
        </Routes>
    )
}

export default AppRouter;