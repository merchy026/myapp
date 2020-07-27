import React, {useState} from 'react'
import TampilComp from './TampilComp';
import { Jumbotron, Button } from 'reactstrap';
import { Alert } from 'reactstrap';

 const  HooksComp = () => {
    return (
        <div>
            <Jumbotron>
                <body background="img/b2.jpg"></body>

                <Alert color="primary">
                    <marque>
                        <h1 className="display-3">Galeri Kami</h1>
                    </marque>
                </Alert>

                <div className="imageatas">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJDGLk3OPUTx2K7BHo1oAKUygcblEcf7Bz6w&usqp=CAU" alt="" />
                </div>
                <div className="imageatas">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8STmjcqHY3URW1AVa70M6ABvQtMPcP3a95Q&usqp=CAU" alt="" />
                </div>
                <div className="imageatas">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMR6aAaYrLWzkDSBXWx5-iTNYKDI15iZ3E_w&usqp=CAU" alt="" />
                </div>
            
                <p className="lead">Mereka Selamat Kita Sehat.</p>
                
            </Jumbotron>
        </div>
    )





     /*
     const [jumlah, tambahJumlah] = useState(0)

     //login
     const [dataLogin, setDataLogin] = useState ({username: 'angela', token: '123abcd', isLogin: true})

     //cek kondisi sudah login / belum

     let tampil;

     if(dataLogin.isLogin) {
         tampil = <TampilComp
            username = {dataLogin.username}
            fungsi = {tambahJumlah.bind(this)}
            jumlah = {jumlah} />
     }else {
         tampil = <TampilComp username="Maaf anda belum login" disabled= {true}/>
     }


    return (
        <div>
           {tampil}
        </div>
    )*/
}

export default HooksComp