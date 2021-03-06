import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
      --gray-50: #f8f8f8;
      --gray-100: #e1e1e6;
      --gray-300: #a8a8b3;
      --gray-700: #323238;
      --gray-800: #29292e;
      --gray-850: #1f2729;
      --gray-900: #121214;

      --cyan-500: #61dafb;
      --yellow-500: #eba417;
      --red-500: #E62E4D;
      --pink-500: #FF57B2;
      --green-500: #33CC95;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
    body {
        background: var(--gray-900);
        color: var(--gray-50);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight:400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight:700;
    }
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
    `;
