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

    width: 4.1vw;
    height: 100%;
    background-color: #B0EDD0;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.7rem;
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
    grid-gap: 10px;
    grid-template-columns: repeat(8, 1fr);
    // grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    // grid-auto-rows: 0.5rem;
`

export const DrawingContainer = styled.div`
    width: 11vw;
`

export const DrawingImg = styled.img`
    width: 100%;

    border-radius: 1.25rem;
    display: inline-block;
    object-fit: cover;
    // object-fit: contain;
`