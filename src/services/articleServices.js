import axios from "axios";
import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

//make an authenticated call to retrieve and return all articles from the server
const articleService = async ()=> {
   const resp = await axiosWithAuth()
      .get("/articles")
         return resp.data
           
    }

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
