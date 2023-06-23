import './index.scss'
import categoryImg1 from './images/category1.png'
import categoryImg2 from './images/category2.png'
import categoryImg3 from './images/category3.png'

const categoryImgList = [categoryImg1, categoryImg2, categoryImg3]

const ProductCategories = () => {
  return (
    <div className='productCategories'>
      <div className='productCategories__images'>
        {categoryImgList.map((img, index) => (
          <img key={index} src={img} alt='category-img' />
        ))}
      </div>
      <div className='productCategories__choose'>
        <p>Lub wybierz coś specjalnego</p>
        <button>Kawa</button>
        <button>Tabletki czyszczące do ekspresu</button>
      </div>
    </div>
  )
}

export default ProductCategories
