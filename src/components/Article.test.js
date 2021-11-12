import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';


const testArticle = {
    id: 'aMqwd', 
    headline: "headline", 
    author: "jorden",
    createdOn: '2021-08-09T18:02:38-04:00', 
    summary: "summary", 
      body: "Toorres"  
}

//Object with empty author
const testWithOutAuthor = {
    id: 'aMqwd', 
    headline: "headline", 
    author: "",
    createdOn: '2021-08-09T18:02:38-04:00', 
    summary: "summary", 
      body: "Toorres"  
}


test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)

    let author = screen.queryByTestId("author")
    let headline = screen.queryByTestId("headline")
    let summary = screen.queryByTestId("summary")
    let body = screen.queryByTestId("body")

    expect(author).toBeTruthy();
    expect(headline).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(body).toBeTruthy();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testWithOutAuthor}/>)

    let author = screen.queryByTestId("author")

    expect(/Associated Press/i).toBeTruthy();

});

 test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn();//make fake function to test handleDelete

    render(<Article article={testArticle} handleDelete={handleDelete}/>)
    
    let deleteButton = screen.queryByTestId("deleteButton")
    userEvent.click(deleteButton);

    expect(handleDelete).toBeCalled();
    
    
});

//Task List:
//1. Complete all above tests. Create test article data when needed.