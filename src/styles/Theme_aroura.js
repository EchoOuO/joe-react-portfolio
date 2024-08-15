import { createGlobalStyle } from "styled-components";

const Theme_aroura = createGlobalStyle`
    :root{
        --bg-1: #223060;
        --bg-2: #324175;
        --border: #363636;
        --text-1: #e185e6; // common words
        --text-2: #35be78; // big words
        --text-3: #91dcb5; // highlight 
        --btn-text: #e0e0e0;
        --btn-bg: #435585;
        --white : #e0e0e0;
        --black: black; 

        background: linear-gradient(#30a0e6,#afd0f2,#0a1e32);                                    
    }

    
`;

export default Theme_aroura;
