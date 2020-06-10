import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
  .text-color {
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    
}
.bkg-color {
    background: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
}
h3 {
    color: ${({ theme }) => theme.text};
    text-align: center;
    padding: 2em 0em;
  }
.ui.container{
  background: ${({ theme }) => theme.container};
  padding: 20px;
  border-radius: 5px;
}
.item {
    background-color: ${({ theme }) => theme.item};
}

.ui.toggle.checkbox input:checked~.box, .ui.toggle.checkbox input:checked~label {
  color: ${({ theme }) => theme.text} !important;
}
.ui.items>.item>.content>a.header {
  color: ${({ theme }) => theme.text} !important;
}
.ui.items>.item .meta {
  color: ${({ theme }) => theme.text} !important;
}
.ui.divided.items>.item {
  border-top: 1px solid ${({ theme }) => theme.border};
}
.ui.items>.item>.content>.description {
  color: ${({ theme }) => theme.text} !important;
}
  `;
