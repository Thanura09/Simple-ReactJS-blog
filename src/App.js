import React, {Component} from 'react';
import './App.css';

import BlogItem from "./BlogItem";
import AddPost from "./AddPost";

const posts = [
    {
        name: 'Blog one',
        author: 'Robbie William',
        content: 'This is blog post one'
    }
];

localStorage.setItem('posts', JSON.stringify(posts));

class  App  extends Component{
    constructor(props) {
        super(props);

        this.state = {
          posts: JSON.parse(localStorage.getItem('posts'))
        };

        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }


    componentWillMount() {
        const posts = this.getPosts();
        this.setState({posts});
    }

    getPosts(){
        return this.state.posts;
        //console.log(posts);

    }

    onAdd(name, author, content){
        const posts = this.getPosts();

        posts.push({
            name,
            author,
            content
        });

        this.setState({posts});
    }

    onDelete(name){
        const posts = this.getPosts();

        const filteredPosts = posts.filter(posts => {
            return posts.name !== name;
        });

        this.setState({ posts: filteredPosts});
        //console.log(filteredPosts);
    }

    onEditSubmit(name, author, content, originalName){
        let posts = this.getPosts();

        posts = posts.map(posts => {
            if(posts.name === originalName) {
                posts.name = name;
                posts.author = author;
                posts.content = content;
            }
            return posts;
        });
        this.setState({posts});
    }

    render() {
      return (
          <div className='App'>
              <AddPost onAdd={this.onAdd}/>
              {
                  this.state.posts.map( posts => {
                      return(
                          <BlogItem
                              key={posts.name}
                              {...posts}
                              onDelete = {this.onDelete}
                              onEditSubmit = {this.onEditSubmit}/>

                      );

                  })
              }

          </div>

      );
  }

}

export default App;
