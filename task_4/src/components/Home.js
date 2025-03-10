import React, { useState, useEffect } from 'react';
import Search from './Search';
import PostList from './PostList';
import Pagination from './Pagination';
import data from '../data.json';

function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [sortOption, setSortOption] = useState('Most recent');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const [selectedCategory, setSelectedCategory] = useState(null); 

  useEffect(() => {
    setPosts(data);
  }, []);
 useEffect(() => {
    let results = [...posts]; 
    if (searchTerm) {
      results = results.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) { 
      results = results.filter(post => post.category === selectedCategory);
    }

    if (sortOption === 'Most recent') {
      results.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === 'Alphabetical') {
      results.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredPosts(results);
    setCurrentPage(1);
  }, [posts, searchTerm, sortOption, selectedCategory]); 


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryClick = (category) => { 
    setSelectedCategory(category);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const categories = [...new Set(posts.map(post => post.category))]; 

  return (
    <div className="home">
      <h1>Our blog</h1>
      <h2>The latest writings from our team</h2>
      <p>The latest industry news, interviews, technologies, and resources.</p>
      <Search handleSearch={handleSearch} />
      <div className="home-categories">
        <select
          className="sort-select"
          value={sortOption}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="Most recent">Most recent</option>
          <option value="Alphabetical">Alphabetical</option>
        </select>
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
          <button onClick={() => handleCategoryClick(null)}>All</button>
        </div>
      </div>
      <PostList posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        totalPosts={filteredPosts.length}
        postsPerPage={postsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;