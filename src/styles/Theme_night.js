import { createGlobalStyle } from "styled-components";

const Theme_night = createGlobalStyle`
    :root{
        --bg-1: #0F1C2E;
        --bg-2: #2b3c57;
        --border: #363636;
        --text-1: #acc2ef; // common words
        --text-2: #FFD700; // big words
        --text-3: #70b9cc; // highlight 
        --btn-text: black; 
        --btn-bg: #e0e0e0;
        --white : #e0e0e0;
        --black: black; 

        --primary-100:#1F3A5F;
        --primary-200:#4d648d;
        --primary-300:#acc2ef;
        --accent-100:#3D5A80;
        --accent-200:#cee8ff;
        --text-100:#FFFFFF;
        --text-200:#e0e0e0;
        --bg-100:#0F1C2E;
        --bg-200:#1f2b3e;
        --bg-300:#374357;
    }
`;

export default Theme_night;
