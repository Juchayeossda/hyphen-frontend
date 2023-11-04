import styled from "styled-components";

export const EnjoyDrawingMainLayout = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0 1vw;
`

export const SecondRow = styled.div`
    margin: 1vw 0 1.4vw 0;
    padding: 0 0.6vw;

    width: 100%;
    height: 3.1vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    //overflow: scroll;
    //scrollbar-width: none;
    overflow-x: hidden;
    overflow-y: hidden;
    ::-webkit-scrollbar{
        display: none;
    }
`

export const TagSettingBox = styled.div`
    width: 3.1vh;
    height: 100%; // =3.1vh
    border-radius: 50%;
    background-color: #E8E8EB;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const TagSettingIconImg = styled.img`
    height: 33%;
`

export const TagBox = styled.div`
    margin: 0 0.5%;

    width: 5vw;
    height: 100%;
    background-color: #B0EDD0;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    font-size: 0.7vw;
`

/* export const ContentWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
` */

export const DrawingsBox = styled.div`
    //width: 100%;

    //display: flex;
    //justify-content: space-between;
    //flex-wrap: wrap;

    //max-width: 100rem;
    //margin: 0 auto;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: 0.5rem;
    // grid-template-rows: masonry;
    // grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
`

export const DrawingContainer = styled.div<{he:number|undefined}>`
    width: 11vw;
    //height: ${(props)=>props.he != undefined ? props.he+"px" : "50px"};

    grid-row-end: span ${(props)=>props.he};
`

export const DrawingImg = styled.img`
    width: 100%;

    border-radius: 1.25rem;
    display: inline-block;
    object-fit: cover;
    // object-fit: contain;
`