import React from 'react';
import { useNavigate } from "react-router-dom";

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages} = props;
    const navigate = useNavigate();
    const homePageHandler = () => {
        navigate('/page/0');
    }
    const goBackHandler = () => {
        navigate(-1);
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={homePageHandler}>Home</button>
            <button onClick={goBackHandler}>Back</button>
        </div>
    );
};

