import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class LisComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            calonanggota: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                calonanggota: res.data.values
            })
        })
    }

    Deleteanggota = (idanggota) => {
        const { calonanggota } = this.state
        const data = qs.stringify({
            id: idanggota
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    calonanggota: calonanggota.filter(calonanggota => calonanggota.id !== idanggota),
                    display: 'block'
                })
                //this.props.history.push('/calonanggota')
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
                //this.props.history.push('/mahasiswa')

            }
        })
    }

    render() {
        return (
            <Container>
                <h2>Data Anggota</h2>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/calonanggota/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Telepon</th>
                            <th>Jenis Kelamin</th>
                            <th>Berat Badan</th>
                            <th>Tekanan Darah</th>
                            <th>Golongan Darah</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.calonanggota.map(calonanggota =>
                            <tr key={calonanggota.id}>
                                <td>{calonanggota.nama}</td>
                                <td>{calonanggota.alamat}</td>
                                <td>{calonanggota.telepon}</td>
                                <td>{calonanggota.jenis_kelamin}</td>
                                <td>{calonanggota.berat_badan}</td>
                                <td>{calonanggota.tekanan_darah}</td>
                                <td>{calonanggota.golongan_darah}</td>

                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: `/calonanggota/edit`,
                                                state: {
                                                    id: calonanggota.id,
                                                    nama: calonanggota.nama,
                                                    alamat: calonanggota.alamat,
                                                    telepon: calonanggota.telepon,
                                                    jenis_kelamin: calonanggota.jenis_kelamin,
                                                    berat_badan: calonanggota.berat_badan,
                                                    tekanan_darah: calonanggota.tekanan_darah,
                                                    golongan_darah: calonanggota.golongan_darah
                                                }
                                            }
                                        }>
                                        <Button>Edit</Button>

                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deleteanggota(calonanggota.id)} color="danger">Hapus</Button>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default LisComp