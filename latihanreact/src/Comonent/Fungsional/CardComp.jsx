import React from 'react';
import {Link} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardComp(props) {
    return (

        <div>
            <Card>
                <CardImg top width="100%" src="https://assets-a1.kompasiana.com/items/album/2019/02/08/donor-darah-5c5d55acc112fe5e867901e2.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>
                        <Link to = {
                            {
                                pathname : `/detail/${props.id}`,
                                state : {
                                    judul: props.judul,
                                    tanggal: props.tanggal
                                }
                            }
                        }>Detail</Link>
                    </Button>
                </CardBody>
            </Card>
        </div>

    )

}

export default CardComp;