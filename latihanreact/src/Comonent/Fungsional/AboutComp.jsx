import React from 'react'
import { Jumbotron, Button, Container, Row, Col, Alert } from 'reactstrap';
import CardComp from './CardComp';

function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">About Us!</h1>
                <div className="imageatas">
                    <img src="https://cdn.idntimes.com/content-images/post/20160213/sziv-vilagnapja-727e2cfd7bcda634b69beee3a51ba4fa.jpg" alt="" />
                </div>

                <Alert color="danger">
                    <p className="lead">Donor Darah.</p>
                    <hr className="my-2" />
                    <p>Wesite ini hadir untuk memberikan layanan donor darah, untuk membantu kekurangan darah bagi masyrakat umum yang membutuhkan.
                    Mengapa harus donor darah ?
                Karena Donor darah adalah kegiatan yang positif dan mulia dan kita bisa menolong sesama. Donor darah bisa membantu mereka yang membutuhkan darah dalam situasi mendesak. Karena seringkali saat pasien dalam kondisi kritis, pihak PMI atau rumah sakit tak memiliki stok darah yang cukup. Nyatanya, donor darah tak hanya bermanfaat bagi penerima (resipien) saja, namun pendonor juga menerima manfaat yang luar biasa. Banyak penelitian yang berhasil membuktikan secara medis bahwa mendonorkan darah sebenarnya menguntungkan.</p>
                </Alert>

            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="Jadwal Donor Darah" tanggal="28/06/2020" /></Col>
                    <Col><CardComp id="2" judul="Stok Darah" tanggal="29/06/2020" /></Col>
                    <Col><CardComp id="3" judul="Butuh Darah" tanggal="30/06/2020" /></Col>
                </Row>
            </Container>
            <br></br>
            <Alert color="success">
                <p>Alamat : Jl. Adhyaksa Nomor 8, Brubahan, Kranji, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53116</p>
                <p>Telepon : 082237585184</p>
            </Alert>

        </div>
    )

}

export default AboutComp