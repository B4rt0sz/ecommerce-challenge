import './index.scss'
import Post from './components/Post'
import postImg3 from './components/images/blog3.png'
import postImg2 from './components/images/blog2.png'
import postImg1 from './components/images/blog1.png'

const blogPostsList = [
  { img: postImg3, date: '2022-06-07', title: 'Jak uzyskać dobry smak wody?' },
  { img: postImg2, date: '2022-06-08', title: 'Jaka woda najlepsza do kawy i herbaty?' },
  { img: postImg1, date: '2022-06-09', title: 'Jaki filtr wybrać do ekspresu do kawy?' },
]

const BlogPosts = () => {
  return (
    <div className='blogPosts'>
      <p className='blogPosts__title'>Poznaj nasze aktualności</p>
      <p className='blogPosts__subtitle'>Zobacz wszystkie wpisy</p>
      <div className='blogPosts__container'>
        {blogPostsList.map((item) => (
          <Post key={item.date} img={item.img} date={item.date} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default BlogPosts
