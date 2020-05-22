import React, {Component} from 'react';
import './App.css';



class  BlogItem  extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onEdit(){
        this.setState({isEdit: true});
    }

    onEditSubmit(event){
        event.preventDefault();

        this.props.onEditSubmit(this.nameInput.value, this.authorNameInput, this.contentInput.value, this.props.name);

        this.setState({isEdit: false});
    }

    onDelete(){
        const {onDelete, name} = this.props;

        onDelete(name);
    }


    render() {
        const {name, author, content} = this.props;

        return (

            <div>
                {
                    this.state.isEdit ?
                        (<form onSubmit={this.onEditSubmit}>
                            <input placeholder="Post Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                            <input placeholder="Author Name" ref={authorNameInput => this.authorNameInput = authorNameInput} defaultValue={author}/>
                            <textarea placeholder="Content" ref={contentInput => this.contentInput = contentInput} defaultValue={content}/>
                            <button>Save</button>
                        </form>)
                        : (
                            <div className="container">
                                <div className="divider"/>
                                <div className="section">
                                    <div>
                                        <h4 className="display-5">{name}
                                        <span>
                                            <i className="material-icons" onClick={this.onEdit}>edit</i>
                                            <i className="material-icons" onClick={this.onDelete}>delete</i>
                                         </span></h4>
                                    </div>
                                    <div>
                                        <p>By {author}</p>
                                    </div>
                                    <div>
                                        <p className="lead">{content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                }

            </div>
        );
    }

}

export default BlogItem;
