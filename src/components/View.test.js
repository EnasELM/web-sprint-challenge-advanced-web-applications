import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import View from './View';
import  mockGitArticle from '../services/articleServices';
jest.mock('../services/articleServices');




test("renders zero articles without errors", async () => {
        
    
});

test("renders three articles without errors", async ()=> {
    
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.