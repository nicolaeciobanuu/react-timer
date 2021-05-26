import styled from "styled-components";

export const Content = styled.div`
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
    .start{
        background: #D9534F;
        color: #fff;
        &:hover{
            background: #b64441;
        }   
    }
    .reset{
        background: transparent;
        flex: 0;
        margin-right: 25px;
        color: #888;
        &:hover{
            color: #666;
        }
    }
    .pause{
        background: #eea73c;
        color: #fff;
        &:hover{
            background: #d3912f;
        }
    }
    .resume{
        background: #91b62d;
        color: #fff;
        &:hover{
            background: #7d9e23;
        }
    }
`
export const Controls = styled.div`
    width: 250px;
    display: flex;
    justify-content: center;
`
export const ControlsButton = styled.button`
    height: 40px;
    border-radius: 40px;
    border: 0;
    flex: 1;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    position: relative;
    outline: 0;
    transition: all .3s;
    padding: 0;
`
export const Button = styled.button`
    flex: 1;
    border: 2px solid #ccc;
    border-right: 0;
    background: transparent;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 10px;
    color: #999;
    outline: 0;
    transition: all .3s;
    cursor: pointer;
`
export const Shortcuts = styled.div`
    position: absolute;
    width: 27px;
    height: 24px;
    right: 70px;
    top: 25px;
    @media screen and (max-width: 768px){
        display: none;
    }
    
`
export const ShortcutsBox = styled.div`
    position: absolute;
    top: 34px;
    right: 0;
    width: 300px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
    padding: 25px;
    opacity: 0;
    visibility: hidden;
    transition: opacity .3s;
    &:hover{
        opacity: 1;
        visibility: visible;
    }
`
export const Shortcut = styled.div`
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color: #666;
    &:first-child{
        padding-top: 0;
    }
    &:last-child{
        border-bottom: 0;
        padding-bottom: 0;
    }
    div{
        white-space: nowrap;
    }
    kbd{
        display: inline-block;
        font-family: monospace;
        background-color: #f4f4f4;
        border: 1px solid #ccc;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgba(0,0,0,.1), inset 0 0 0 1px #fff;
        color: #333;
        font-size: 11px;
        margin: 0 .15em;
        padding: .25em .7em;
        white-space: nowrap;
    }
`
export const Icon = styled.div`
    font-size: 24px;
    color: red;
    color: #666;
    opacity: .5;
    transition: all .3s;
    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`
export const TimeDisplay = styled.div`
    position: relative;
    svg{
        max-width: 300px;
    }
    circle{
        transition: stroke-dashoffset 1s;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
    div{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -32px);
        text-align: center;
    }

`
export const Time = styled.h1`
    font-size: 52px;
    font-weight: 300;
    color: #D9534F;
    letter-spacing: 2px;
    margin: 0;
`
export const Status = styled.p`
    font-size: 14px;
    text-transform: uppercase;
    color: #bbb;
    letter-spacing: 3px;
    margin: 10px 0 0;
`
export const ToggleSound = styled.div`
    position: absolute;
    width: 27px;
    height: 24px;
    right: 25px;
    top: 25px;
    border: 0;
    background: transparent;
    font-size: 24px;
    color: #666;
    opacity: .5;
    transition: all .3s;
    outline: 0;
    cursor: pointer;
    padding: 0;
    text-align: left;
    .active{
        opacity: 1;
    }
`
export const ButtonSound = styled.button`

`
export const VolumeIcon = styled.div`
`
export const TypeSelect = styled.div`
    width: 400px;
    display: flex;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`
