 import React from 'react'

 const NewsItem =(props)=> {
  
  
    let {title,description,imgUrl,newsUrl,date,author,source}=props;
    return (
      <div>
        <div className=" card" style={{width:" 18rem", margin:14}}>
          <img src={imgUrl}className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{title}<span className='badge rounded-pill bg-success'>{source}</span></h5>
            <p className="card-text">{description}....</p>
            <p className='card-text'><small className='text-muted'>By {author?<strong>{author}</strong>:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer"href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
