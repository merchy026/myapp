import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Alert } from 'reactstrap';


function HomePage() {
    return (
        <div>
            <Jumbotron>
                <body background="img/b2.jpg"></body>

                <Alert color="primary">
                    <marque>
                        <h1 className="display-3">Selamat Datang di Website Donor Darah</h1>
                    </marque>
                </Alert>

                <div className="imageatas">
                    <img src="https://cdn.idntimes.com/content-images/post/20160213/sziv-vilagnapja-727e2cfd7bcda634b69beee3a51ba4fa.jpg" alt="" />
                </div>

                <Alert color="warning">
                    <p>PMI PURWOKERTO, Angela Marici  Uba Langobelen</p> 
                </Alert>




                <p className="lead">Mereka Selamat Kita Sehat.</p>
                <hr className="my-2" />
                <p>Memberikan Informasi Donor Darah.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>

    )
}



export default HomePage