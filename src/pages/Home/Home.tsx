import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
export const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Banner />
      <ProductsList title="promoções" background="gray" />
      <ProductsList title="Em breve" background="black" />
    </>
  )
}
