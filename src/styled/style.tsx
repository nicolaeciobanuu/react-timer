import styled from "styled-components";

const Content = styled.div`
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
`
const Controls = styled.div`
    background-color: red;
`
const Button = styled.button`
    color: red;
`
export { Content, Controls, Button };