import './article.css';
import { articles } from '../../constants/articles';
import { OutlineButton } from '../../components';
import pattern from '../../assets/images/back2.png';
import pattern2 from '../../assets/images/pattern.png';


const Article = () => {
    return (
        <section className='article-section'>
            <div className='article-section--header'>
               <h3>Check out our latest articles</h3>
            </div>
            <div className='article-section--items'>
                {articles.map((item:any,idx:number) => (
                     <div key={idx} className='item'>
                        <img src={item.image} alt={item.title}/>
                        <div className='item-description'>
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                            <button>Read more <i className="ri-arrow-right-fill"></i></button>
                        </div>
                     </div>
                ))}
            </div>
            <img src={pattern} alt="pattern image" id="article-pattern-img"/>
            <img src={pattern2} alt="pattern image 2" id="article-pattern-img2"/>
            <div className='more-button'>
                <OutlineButton title="Check more article"/>
            </div>
        </section>
    )
}

export default Article;