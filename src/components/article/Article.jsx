import './Article.css';
import LazyLoad from 'react-lazyload';


const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className="gpt3__blog-container__article-image">
        <LazyLoad><img src={ imgUrl } alt="blog" /></LazyLoad>
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article