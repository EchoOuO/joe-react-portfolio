import { createGlobalStyle } from "styled-components";

const Theme_sunset = createGlobalStyle`
    :root{
        --bg-1: #305893;
        --bg-2: #264675;
        --border: #244370;
        --text-1: #d9d1d3; // common words
        --text-2: #b3362a; // big words
        --text-3: #d58565; // highlight 
        --btn-text: #e0e0e0;
        --btn-bg: #4090c8;
        --white : #e0e0e0;
        --black: black; 

        background: linear-gradient(#30a0e6,#afd0f2,#0a1e32);                                    
    }

    
`

export default Theme_sunset