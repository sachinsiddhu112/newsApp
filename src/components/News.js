import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {


 const[articles,setArticles]=useState([]);
 const [loading,setLoading]=useState(false);//it value was true now update to check.
 const[page,setPage]=useState(1);
 const [totalResults,setTotalResults]=useState(0);

 const capitalizer = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  
  const updateNews=async()=> {
   props.setProgress(5);
    const url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
   props.setProgress(30);
    let data = await fetch(url)
    let parseData = await data.json();
    // console.log(parseData);

   props.setProgress(60);
   setArticles(parseData.articles)
   setTotalResults(parseData.totalResults)
   setLoading(false)
    
   props.setProgress(100);

  }
  useEffect(()=>{
     document.title = `News Feeder:-${capitalizer(props.category)}`
   updateNews();
   // eslint-disable-next-line
  },[])
  
 
  const fetchMoreData = async() => {
   
   
   setLoading(true);
   
   const url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
   setPage(page + 1);
   let data = await fetch(url);
   let parseData = await data.json();
   setArticles(articles.concat(parseData.articles));
   setTotalResults( parseData.totalResults)
   setLoading(false)
   
  };

  
    return (
      <>
        <h2 style={{marginTop:'60px' ,marginLeft:'30px'}}>NewsFeeder:-Top {capitalizer(props.category)} Headlines</h2>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={loading?<Spinner/>:""}
        > <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
              return <div className="col md-4">
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://www.usatoday.com/gcdn/presto/2022/05/03/USAT/2b798e91-113a-43f6-a9e1-eba5329690b4-AP_2022_MET_Museum_Costume_Institute_Benefit_Gala_5.jpg?crop=2999,1687,x0,y151&width=2999&height=1687&format=pjpg&auto=webp"}
                  newsUrl={element.url ? element.url : "Loading"} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
       

      </>
    )
  }

News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general',
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}
export default News;