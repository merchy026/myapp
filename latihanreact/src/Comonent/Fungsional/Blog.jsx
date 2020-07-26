import React from 'react'
import './CSS/Blog.css';

const Blog = (props) => {
    return <div className="blog-wrap">
        <img src="https://assets-a1.kompasiana.com/items/album/2019/02/08/donor-darah-5c5d55acc112fe5e867901e2.jpg" alt=""/>
        <p>{props.tanggal}</p>
        <h2>{props.judul}</h2>
        <p>{props.summary}</p>
    </div>
}

export default Blog;