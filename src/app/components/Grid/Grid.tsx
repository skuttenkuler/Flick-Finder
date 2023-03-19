import React from "react"
import { Container,Row,Col } from "react-bootstrap";

import { IMovie } from "../../models/movie";
import MovieCard from "../MovieCard/MovieCard";



const Grid: React.FunctionComponent<any> = (data: any) => {
    //map through returned data and pass to Movie Card
    //console.log(data)
    return (
        <Container fluid>
            <Row>
                
                    {data.data.map((movie: IMovie) => {

                            return <Col> <MovieCard key={movie.imdbID} {...movie}/> </Col>
                    }
                    )}
                
            </Row>
        </Container>
        )
};

export default Grid;
