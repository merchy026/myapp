import React, { PureComponent } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap';


//class KelasComp extends PureComponent {
/*constructor(props) {
    super(props)

    this.state = {
        jumlah: 0

    }*/
//}
const Example = (props) => {
    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle><h1>Apa syarat-syarat untuk mendonorkan darah?</h1></CardTitle>
                    <Alert color="danger">
                        <CardText>Usia 17-60 tahun (usia 17 tahun diperbolehkan menjadi donor bila mendapat izin tertulis dari orang tua)
                        Berat badan minimal 45 kg.
                        Temperatur tubuh 36,6 – 37,5 derajat Celcius.
                        Tekanan darah baik yaitu sistole = 110-160 mmHg, diastole = 70-100 mmHg.
                        Denyut nadi teratur yaitu sekitar 50-100 kali/menit.
                        Mempunyai penyakit jantung dan paru; menderita kanker;
                        menderita tekanan darah tinggi (hipertensi);
                        menderita kencing manis (diabetes militus);
                        memiliki kecenderungan perdarahan abnormal atau kelainan darah lainnya;
                        menderita epilepsi dan sering kejang;
                        menderita atau pernah menderita hepatitis B atau C;
                        mengidap sifilis; ketergantungan narkoba;
                        kecanduan minuman beralkohol;
                        mengidap atau beresiko tinggi terhadap HIV/AIDS;
                        dokter menyarankan untuk tidak menyubangkan darah karena alasan kesehatan;
                    </CardText><a href="#" className="alert-link"></a>
                    </Alert>

                    <Button><h2>Ayo Donor!!</h2></Button>
                </Card>
            </Col>
        </Row>
    );
};



export default Example;


/*
    tambahProduk = () => {
        this.setState({
            jumlah: this.state.jumlah + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.jumlah}</h1>
                <button onClick={this.tambahProduk}>Tambah Produk</button>
            </div>

        )
    }
}*/

/*export default KelasComp*/
