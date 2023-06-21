import TopBanner from 'layout/TopBanner'
import Header from 'layout/Header'
import Menu from 'layout/Menu'
import ProductSlider from 'layout/ProductSlider'
import Highlights from 'layout/Highlights'
import ProductPromo from 'layout/ProductPromo'
import ProductCategories from 'layout/ProductCategories'
import BlogPosts from 'layout/BlogPosts'
import Newsletter from 'layout/Newsletter'
import Footer from 'layout/Footer'
import Hero from 'layout/Hero'

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <TopBanner />
        <Header />
        <Menu />
        <ProductSlider />
        <Highlights />
        <ProductPromo />
        <ProductCategories />
        <BlogPosts />
        <Newsletter />
        <Footer />
        <Hero />
      </div>
    </div>
  )
}

export default App
