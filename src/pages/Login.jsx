import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/buttons/MyButton";

const Logib = () => {
    return(
        <div>
            <h1>Login</h1>
            <form>
                <MyInput type='text' placeholder='login' />
                <MyInput type='password' placeholder='login' />
                <MyButton>Login in</MyButton>
            </form>
        </div>
    )
}