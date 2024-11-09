import { useNavigate, useParams } from "react-router-dom"
import { ButtonReturn, Container, Description, Info, InfoContainer, Poster } from "./Details.styled"
import { useEffect, useState } from "react"
import { MovieDetails } from "../../@types/MovieDetails"
import noImagePlaceholder from '../../assets/img/noImagePlaceholder.png'

export const Details = () => {
    const { imdbID } = useParams()
    const [details, setDetails] = useState<Partial<MovieDetails>>({})
    const [poster, setPoster] = useState('')
    const [plot, setPlot] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://open-move-database-backend.onrender.com/api/movie?imdbID=${imdbID}`)
                const data: MovieDetails = await response.json()
                setPoster(data.Poster)
                setPlot(data.Plot)
                const toFilter = ['Ratings', 'Response', 'Plot', 'Poster']
                const filteredData = Object.entries(data).filter(item => !toFilter.some(word => item[0].includes(word)))
                setDetails(Object.fromEntries(filteredData))
            } catch (error) {
                console.log(`Não foi possivel fazer a requisição: ${error}`)
            }
        })()
    }, [])
    return (
        <Container>
            <Poster src={poster} onError={e => e.currentTarget.src = `${noImagePlaceholder}`} alt="Movie poster" />
            <Description>{plot}</Description>
            <InfoContainer>
                {
                    Object.entries(details).map(data => data[1] && (typeof data[1] === 'string') ? <Info key={Math.random()}>{data[0]}: {data[1]}</Info> : null)
                }
            </InfoContainer>
            <ButtonReturn onClick={ e => navigate(-1)} >Return</ButtonReturn>
        </Container>
    )
}