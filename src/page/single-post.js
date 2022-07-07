import React from 'react';
import { Link } from 'react-router-dom';
import SingleBlog from './single-blog';

const SinglePost = ({ bloglist }) => {


    return (
        <div>
            <article className="entry">

                <div className="entry-img">
                    <img src={bloglist.Image} alt="" className={bloglist.title} />
                </div>

                <h2 className="entry-title">
                    <a href={`/single-blog/${bloglist.id}`}>{bloglist.title}</a>
                </h2>

                <div className="entry-meta">
                    <ul>
                        <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">{bloglist.Name}</a></li>
                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                        <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p>{bloglist.description}</p>
                    <div className="read-more">
                        <Link to={`/single-blog/${bloglist.id}`}>Read More</Link>

                        {/* <Link to ={{
pathname: "/single-blog", 
state: { 
bucket_id: "dxvdfgg", 
new_id: "sdfsd", 
anotherValue: "sdfsfd" 
}
}} >Read more
</Link> */}
                    </div>
                </div>
            </article>

        </div>
    );
}

export default SinglePost;
