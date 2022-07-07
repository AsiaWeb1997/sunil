import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import { blog } from "../data/blog"; 
import { Link } from 'react-router-dom';


const SingleBlog = (props) => {
  const location = useLocation();
  const [id, setid] = useState(location.pathname.split('/')[2]);
  const f = blog.filter(b => b.id == id);
  console.log(f[0].title);
    return (
        <div>
<article className="entry">
<div className="entry-img">
    <img src={f[0].Image} alt="" className={SingleBlog.title} />
</div>

<h2 className="entry-title">
    <a href="/single-blog">{f[0].title}</a>
</h2>

<div className="entry-meta">
    <ul>
        <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">{f[0].title}</a></li>
        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
        <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
    </ul>
</div>
<div className="entry-content">
    <p>{f[0].description}</p>
    <div className="read-more">
        <Link to='single-blog' >Read More</Link> 
    </div>
</div>
</article>
        </div>
    );
}

export default SingleBlog;
