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
                    <div className="imageatas">
                        <img src="https://cdn.idntimes.com/content-images/post/20160213/sziv-vilagnapja-727e2cfd7bcda634b69beee3a51ba4fa.jpg" alt="" />
                    </div>
                    <CardTitle><h4>Apa syarat-syarat untuk mendonorkan darah?</h4></CardTitle>
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

                    <CardTitle><h4>Apa Manfaat Donor Darah?</h4></CardTitle>
                    <Alert color="danger">
                        <CardText> Pernahkah Anda melakukan donor darah? Beruntunglah jika pernah atau bahkan rutin melakukannya berikut ini manfaat dari donor darah :

                        Bentuk kepedulian terhadap sesama
                        Memperpanjang hidup oran lain
                        Membantu hidup orang lain
                        Satu kantong darah dapat menyelamatkan 3 nyawa
                        Membantu menurunkan berat badan
                        Membantu membakar kalori
                        Deteksi dini resiko kesehatan
                        Melindungi jantung
                        Mencegah stroke
                        Mengatur kontrol kesehatan
                        Meningkatkan sel darah merah
                        Meningkatkan kapasitas paru-paru dan ginjal
                        Meningkatkan kesehatan psikologis
                        Membantu sirkulasi darah
                        Memaksimalkan darah dalam paru-paru
                        Menurunkan zat seng dalam darah
                        Memperbaharui sel darah baru
                        Mencegah resiko kesehatan
                        Mencegah penyakit langka
                        Menghilangkan kaku di pundak
                        Mengalahkan kelebihan zat besi
                        Mengetahui lebih lanjut tentang tipe darah individu

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
