import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    position: relative;
`

export const Header = styled.header`
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    position: fixed;
    background-color: ${({theme}) => theme.colors.dark_gray};
`

export const SearchContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    display: flex;
    column-gap: 1rem;
`

export const MovieName = styled.input`
    padding: 1rem;
    flex-grow: 1;
    font-weight: bold;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.light_gray};
    color: ${({ theme }) => theme.colors.default_gray};
`

export const MovieSearch = styled.button`
    padding: 1rem 1.5rem;
    font-weight: bold;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.light_gray};
    color: ${({ theme }) => theme.colors.default_gray};
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 5rem;
    gap: 1rem;
    padding: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.light_gray};

    @media (min-width: 800px) {
        flex-direction: row;
    }
`

export const Card = styled.div`
    max-width: 340px;
    min-width: 332px;
    height: 570px;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    padding: 1rem;
    row-gap: 1rem;
    background-color: ${({theme}) => theme.colors.dark_gray};
`

export const Title = styled.h2`
    font-size: 1rem;
    color: ${({theme}) => theme.colors.light_yellow};
    background-color: ${({theme}) => theme.colors.dark_gray};
`

export const Banner = styled.img`
    width: 100%;
    max-height: 450px;
`

export const InfoContainer = styled.div`
    display: flex;
    column-gap: 1rem;
    padding-left: 1rem;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    margin: auto 0;
    margin-bottom: 0;
    color: ${({theme}) => theme.colors.highlight_blue};
`

export const Info = styled.span`
`

export const Details = styled.button`
    margin: auto;
    margin-right: 0;
    font-weight: bold;
    padding: .5rem 1rem;
    border-radius: 5px;
    color: white;
    background-color: ${({theme}) => theme.colors.highlight_orange};
`