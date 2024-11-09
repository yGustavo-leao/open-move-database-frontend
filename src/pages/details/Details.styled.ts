import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    display: grid;
    justify-content: center;

    grid-template-areas:
    "poster"
    "description"
    "info"
    "return"
    ;

    @media (min-width: 800px) {
        grid-template-areas:
        "poster info"
        "poster info"
        "description description"
        "return return";
        grid-template-columns: 350px 350px;
        justify-content: center;
        grid-template-rows: max-content;
        height: max-content;
        width: max-content;
        margin: auto;
        align-self: center;
        padding: 2rem;
        border-radius: 10px;
    }
    background-color: ${({ theme }) => theme.colors.light_gray};
    color: ${({ theme }) => theme.colors.default_gray};
`

export const Poster = styled.img`
    grid-area: poster;
    width: 100%;
    max-width: 350px;
`

export const Description = styled.p`
    max-width: 350px;
    grid-area: description;

    @media (min-width: 800px) {
        max-width: none;
    }
`

export const InfoContainer = styled.ul`
    max-width: 350px;
    grid-area: info;
    align-self: flex-start;
    place-self: start;
    justify-self: start;

    @media (min-width: 800px) {
        background-color: ${({theme}) => theme.colors.dark_gray};
        padding: 1rem;
        height: 100%;
    }
`

export const Info = styled.li`
    list-style: none;
    word-wrap: break-word;
    font-weight: 300;
`

export const ButtonReturn = styled.button`
    grid-area: return;
    width: max-content;
    justify-self: end;
    padding: 1rem 2rem;
    font-weight: bold;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.highlight_blue};
    color: white;
`