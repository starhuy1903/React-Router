import React from 'react';
import {Route, useParams} from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams();

    return (
        <>
            <h1>Quote Detail page</h1>
            <p>{params.quoteId}</p>
            <Route path="/quotes/:quoteId/comments">
                <Comments />
            </Route>
        </>

    );
};

export default QuoteDetail;