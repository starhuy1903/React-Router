import React from 'react';
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Huy',
        text: 'Learn React is fun'
    },
    {
        id: 'q2',
        author: 'Hai',
        text: 'Learn English is very helpful'
    }
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;