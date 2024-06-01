import { createGlobalStyle } from "styled-components";

const Theme_day = createGlobalStyle`
    :root{
        --bg-1: #F5F5F5;
        --bg-2: #ebebeb;
        --border: #363636;
        --text-1: #5c5c5c; // common words
        --text-2: #e9aa2b; // big words
        --text-3: #005B99; // highlight 
        --btn-text: #e0e0e0;
        --btn-bg: #4C3645;
        --white : #e0e0e0;
        --black: black; 
        
        --primary-100:#005B99;
        --primary-200:#4e88ca;
        --primary-300:#b7e9ff;
        --accent-100:#FFD700;
        --accent-200:#e9aa2b;
        --text-100:#333333;
        --text-200:#5c5c5c;
        --bg-100:#F5F5F5;
        --bg-200:#ebebeb;
        --bg-300:#c2c2c2;
    }
`

export default Theme_day