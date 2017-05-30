import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        const { post } = this.props;
        
        if(!post) {
            return <div>Loading.....</div>
        }
        
        return (
            <div>
                <Link to="/">Back to index</Link>
                <h1> { post.title } </h1>
                <h6> Category: { post.categories } </h6>
                <p> { post.content } </p>
            </div>
        )
    }
}

function mapsStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] }; // ownprops means prop of postsshow component then pass to posts state
}

export default connect(mapsStateToProps, { fetchPost })(PostsShow);