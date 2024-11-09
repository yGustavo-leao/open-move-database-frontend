import { useContext, useRef } from "react"
import { Banner, Card, CardContainer, Container, Details, Header, Info, InfoContainer, MovieName, MovieSearch, SearchContainer, Title } from "./Movies.styled"
import { useNavigate } from "react-router-dom"
import noImagePlaceholder from '../../assets/img/noImagePlaceholder.png'
import { MovieListContext } from "../../context/MovieListContext"

export const Movies = () => {
    const { movieList, setMovieList } = useContext(MovieListContext)
    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    return (
        <Container>
            <Header>
                <SearchContainer>
                    <MovieName type="text" placeholder="Movie name" ref={inputRef} />
                    <MovieSearch onClick={async e => {
                        try {
                            const movie = inputRef.current?.value
                            const response = await fetch(`https://open-move-database-backend.onrender.com/api/search?movie=${movie}`)
                            const data = await response.json()
                            setMovieList(data)
                        } catch (error) {
                            console.log(`Não foi possível fazer a requisição: ${error}`)
                        }
                    }} >Search</MovieSearch>
                </SearchContainer>
            </Header>

            <CardContainer>
                {
                    movieList.map(currentMovie =>
                        <Card key={Math.random()}>
                            <Title>{currentMovie.Title}</Title>
                            <Banner src={currentMovie.Poster} onError={e => e.currentTarget.src = `${noImagePlaceholder}`} alt="Movie poster" />
                            <InfoContainer>
                                <Info>{currentMovie.Type}</Info>
                                <Info>{currentMovie.Year}</Info>
                                <Details onClick={e => navigate(`/details/${currentMovie.imdbID}`)} >Details</Details>
                            </InfoContainer>
                        </Card>
                    )
                }
            </CardContainer>
        </Container>
    )
}