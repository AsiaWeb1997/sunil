import React from 'react';
import { blog } from "../data/blog"; 
import SinglePost from './single-post';

const Blog = () => {
    return (
        <div>
<main id="main">
    <section className="breadcrumbs">
      <div className="container">

        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Blog</li>
        </ol>
        <h2>Blog</h2>

      </div>
    </section>
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-8 entries">
            {blog.map((bloglist,index)=>{
                return <SinglePost bloglist={bloglist}/>
            })}

            <div className="blog-pagination">
              <ul className="justify-content-center">
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </div>

          </div>

          <div className="col-lg-4">

            <div className="sidebar">

              <h3 className="sidebar-title">Search</h3>
              <div className="sidebar-item search-form">
                <form action="">
                  <input type="text"/>
                  <button type="submit"><i className="bi bi-search"></i></button>
                </form>
              </div>

              <h3 className="sidebar-title">Categories</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li><a href="#">General <span>(30)</span></a></li>
                  <li><a href="#">Lifestyle <span>(12)</span></a></li>
                  <li><a href="#">Travel <span>(5)</span></a></li>
                  <li><a href="#">Design <span>(22)</span></a></li>
                  <li><a href="#">Creative <span>(8)</span></a></li>
                  <li><a href="#">Educaion <span>(14)</span></a></li>
                </ul>
              </div>

              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-1.jpg" alt=""/>
                  <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-2.jpg" alt=""/>
                  <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-3.jpg" alt=""/>
                  <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-4.jpg" alt=""/>
                  <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-5.jpg" alt=""/>
                  <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

              </div>

              <h3 className="sidebar-title">Tags</h3>
              <div className="sidebar-item tags">
                <ul>
                  <li><a href="#">App</a></li>
                  <li><a href="#">IT</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Office</a></li>
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">Smart</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div>

            </div>

          </div>    

        </div>

      </div>
    </section>
  </main>
        </div>
    );
}

export default Blog;
