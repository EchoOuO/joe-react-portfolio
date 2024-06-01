import { createGlobalStyle } from "styled-components";

const Theme_snow_mountain = createGlobalStyle`
    :root{
        --bg-1: #77c8fa;
        --bg-2: #a0d9fc;
        --border: #363636;
        --text-1: #26475b; // common words
        --text-2: #f1faff; // big words
        --text-3: #0842cd; // highlight 
        --btn-text: #e0e0e0;
        --btn-bg: #0a1e32;
        --white : #e0e0e0;
        --black: black; 

        background: linear-gradient(#30a0e6,#afd0f2,#0a1e32);                                    
    }

    
`

export default Theme_snow_mountain