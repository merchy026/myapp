import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            nama: '',
            alamat: '',
            telepon: '',
            jenis_kelamin: '',
            berat_badan: '',
            tekanan_darah: '',
            golongan_darah: '',
            display:'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addanggota = () => {
        axios.post(api + '/tambah', {
            nama: this.state.nama,
            alamat: this.state.alamat,
            telepon: this.state.telepon,
            jenis_kelamin: this.state.jenis_kelamin,
            berat_badan: this.state.berat_badan,
            tekanan_darah: this.state.tekanan_darah,
            golongan_darah: this.state.golongan_darah
        }).then(json =>{
            if(json.data.state === 200) {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }



    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response }
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Nama</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukan Nama" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Alamat</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} placeholder="Masukan Alamat" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Telepon</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="telepon" value={this.state.telepon} onChange={this.handleChange} placeholder="Masukan Telepon" />
                                </Col>
                            </Row>
                        </FormGroup>
                        
                        <Label>Jenis Kelamin</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange} placeholder="Masukan Jenis Kelmain" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Berat Badan</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="berat_badan" value={this.state.berat_badan} onChange={this.handleChange} placeholder="Berat Badan" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Tekanan Darah</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="tekanan_darah" value={this.state.tekanan_darah} onChange={this.handleChange} placeholder="Tekanan Darah"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Golongan Darah</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="golongan_darah" value={this.state.golongan_darah} onChange={this.handleChange} placeholder="Masukan Golongan Darah" />
                                </Col>
                            </Row>
                        </FormGroup>
                
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={this.Addanggota}>Submit</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>

        )
    }
}

export default TambahComp