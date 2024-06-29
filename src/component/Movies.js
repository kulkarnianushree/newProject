import MovieItem from "./MovieItem"

const Movies = (props)=>{
    return(
        <div>
            {props.movie.map(items => (
                <li key={items.id}>
                    <MovieItem
                        title={items.title}
                        releaseDate = {items.releaseDate}
                    />
                </li>
            ))}
        </div>
    )
}
export default Movies