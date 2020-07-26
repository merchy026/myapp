import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';

function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">About Us!</h1>
                <p className="lead">Donor Darah.</p>
                <hr className="my-2" />
                <p>Wesite ini hadir untuk memberikan layanan donor darah, untuk membantu kekurangan darah bagi masyrakat umum yang membutuhkan.
                Mengapa harus donor darah ?
                Karena Donor darah adalah kegiatan yang positif dan mulia dan kita bisa menolong sesama. Donor darah bisa membantu mereka yang membutuhkan darah dalam situasi mendesak. Karena seringkali saat pasien dalam kondisi kritis, pihak PMI atau rumah sakit tak memiliki stok darah yang cukup. Nyatanya, donor darah tak hanya bermanfaat bagi penerima (resipien) saja, namun pendonor juga menerima manfaat yang luar biasa. Banyak penelitian yang berhasil membuktikan secara medis bahwa mendonorkan darah sebenarnya menguntungkan.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="Timbangan" tanggal="28/06/2020" /></Col>
                    <Col><CardComp id="2" judul="Kantong Darah" tanggal="29/06/2020" /></Col>
                    <Col><CardComp id="3" judul="Tensi" tanggal="30/06/2020" /></Col>
                </Row>
            </Container>


        </div>
    )

}

export default AboutComp