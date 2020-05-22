import React, {Component} from 'react';
import './App.css';



class  AddPost  extends Component{
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
       event.preventDefault();

       this.props.onAdd(this.nameInput.value, this.authorNameInput.value, this.contentInput.value);

       this.nameInput.value = '';
       this.contentInput.value = '';
    }

    render() {
        return (
            <div className="container">
            <form onSubmit={this.onSubmit}>
                <h5>Add new post</h5>

                    <input type="text" id="postName" placeholder="Post Name" ref={nameInput => this.nameInput = nameInput}/>
                    <input type="text" id="postName" placeholder="Auther Name" ref={authorNameInput => this.authorNameInput = authorNameInput}/>
                    <textarea placeholder="Content" ref={contentInput => this.contentInput = contentInput}/>
                    <button type="submit" >Add</button>

            </form>
            </div>
        );
    }

}

export default AddPost;
