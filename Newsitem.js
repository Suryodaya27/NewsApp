import React, { Component } from 'react'

export class Newsitem extends Component {
    



  render() {

    let {title,description,imageUrl,newsUrl,author,date} = this.props;

    return (
        <div className="card  my-3" >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}...
          </p>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsUrl}  target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
      
    )
  }
}

export default Newsitem