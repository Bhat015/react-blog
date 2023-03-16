import React from 'react'
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
  return (
    <div>
      <Header/>
      <br />
      <SearchBar/>
      <br />
      <br />
      <BlogList blogs={blogList} />
    </div>
  );
}

export default Home
