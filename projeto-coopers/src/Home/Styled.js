import styled from 'styled-components';
const pixelMobile = 24

export const Principal_Container = styled.div`
    width: 100vw;
    height: 100vw;
    margin-top: 1.666vw;
    display: grid;
    grid-template-rows: 10.833vw 33.439vw 29.1666vw 60.76388vw 2fr 2fr;

    @media (min-width: 481px) and (max-width: 768px) {
        margin-top: 1.666vw;

}
`
export const SecondBlock = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 406px;
    height: 481.52px;
    width: 1280px;
    /* top: 9.1666vw; */
    left: 5.55vw;
`

export const InternBlock = styled.div`
    display: grid;
    height: 33.439vw;
    grid-template-rows: 1fr 1fr 1fr;
    /* row-gap: 3.75vw; */
`

export const Organize_Img = styled.img`
    position: relative;
    margin-top: 3.75vw;
    /* top: 12.777vw;*/
    /* left: 5.55vw;  */
`
export const Daily_Img = styled.img`
    position: relative;
    margin-top: 3.75vw;
    /* top: 20.9375vw;
    left: 5.55vw; */
`

export const PhotoBlock_Img = styled.img`
    position: relative;
    width: 30.7638vw;
    height: 33.4388vw;
    /* top: 9.1666vw;
    left: 63.6805vw; */
`
export const Only_P = styled.p`
    margin: 0;
    margin-block-start: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 24px;
`

export const ThirdBlock_div = styled.div`
    position: relative;
    height: 420px;
`