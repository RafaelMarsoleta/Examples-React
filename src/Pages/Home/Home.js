
import React from 'react';
import { Component } from 'react';
import { PostCard } from '../../Components/PostCard/PostCard';

import { Posts } from '../../Components/Posts/Posts';
import { TextInput } from '../../Components/TextInput/TextInput';
import { loadPosts } from '../../Utils/loadPosts';

import './Home.css'



export class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const photosANDpost = await loadPosts();

    this.setState({
      posts: photosANDpost.slice(page, postsPerPage),
      allPosts: photosANDpost,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPost = !!searchValue ? allPosts.filter(post => { return post.title.toLowerCase().includes(searchValue.toLowerCase()); }) : posts;

    return (
      <section className='container'>
        <div className='search-container'>
          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        </div>

        {filteredPost.length > 0 && (
          <Posts posts={filteredPost} /> /*não funciona por hora*/
        )}

        {filteredPost.length === 0 && (
          <p>Não existem post com esse nome</p>
        )}
        
        <div className='btn-container'>
          {!searchValue && ( //Se não estiver procurando é verdadeiro 
            <button className='btn' disabled={noMorePosts} onClick={this.loadMorePosts}>
              colocar icone
            </button>
          )}
        </div>

      </section>
    )
  }
}
/*
!! = se 
! = se não 
&& = verdadeiro 
|| = Ou 
? = for verdadeira
includes = contem 
*/