import './index.scss'

type PostProps = {
  img: string
  date: string
  title: string
}

const Post = ({ img, date, title }: PostProps) => {
  return (
    <div className='post' key={date}>
      <img className='post__img' src={img} alt='blog-post' />
      <p className='post__date'>{date}</p>
      <p className='post__title'>{title}</p>
    </div>
  )
}

export default Post
