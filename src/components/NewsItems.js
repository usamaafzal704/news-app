import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, date, author, url, source} = this.props;
    return (
      <div>
        
            <div className="card my-5">
            <span className="badge rounded-pill text-bg-danger" style={{display: 'flex',position:'absolute', right:'0', justifyItems:'flex-end'}}>{source}</span>
                <img src={imageUrl?imageUrl:"https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvNTkyZWM5NWItNTNmMy00ZmRjLTg3MDItNzFiYWQyODY0NWZiLmpwZw==.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'>Last Updated <strong>{new Date(date).toUTCString()}</strong> ago By <strong>{author?author:'Unknown'}.</strong> </p>
                    <a href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>

      </div>

    )
  }
}
