import React from 'react'
import BlogItem from './BlogItem'
import './styles.css'

const BlogList = ({blogs}) => (
    <div className='blogList-wrap'>
        {blogs.map(blog => <BlogItem key={blog.id} blog={blog} />)}
    </div>
  );
    

export default BlogList
