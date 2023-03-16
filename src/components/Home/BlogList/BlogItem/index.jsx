import React from 'react'
import Chip from '../../../common/Chip/chip';
import { Link } from 'react-router-dom';
import './styles.css'

const BlogItem = ({blog: {id,description,title,authorName,authorAvatar,category,cover,createdAt}}) =>  (
    <div className='blogItem-wrap'>
        <img src={cover} alt="cover" className='blogItem-cover' />
        <br/><br/>
        <Chip lable={category}/>
        <br/><br/>
        <h3>{title}</h3>
        <p className='blogitem-desc'>{description}</p>
        <br/> <br/>
        <footer>
           <div className="blogItem-author">
              <img src={authorAvatar} alt="avatar" />
              <div>
                <h6>{authorName}</h6>
                <p>{createdAt}</p>
              </div>

           </div>
           <Link to={'/blog/$id'}>Read More</Link>

          </footer>
        

    </div>
  
);

export default BlogItem
