import { Link } from "react-router-dom";
import Slider from "react-slick";
import {useGetProducts} from '../components/FatchingData'

const ProductsSlider = () => {  
  const { products, loadingProducts, errorProducts } = useGetProducts()

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div>
      <div className="slider-container py-2">
        <div className="row">
        {loadingProducts && (
          <p className="text-center p-3 mb-2 bg-primary-subtle text-info-emphasis fw-normal ">
            Loading...
          </p>
        )}
        {errorProducts && (
          <p className="text-center p-3 mb-2 bg-warning-subtle text-info-emphasis fw-normal">
            {errorProducts}
          </p>
        )}
          <Slider {...settings}>      
            {products && products?.map((product) => (
              <div className="col-md-3 mx-2" key={product._id}>
                <Link to={`/productDetails/${product._id}`} className="link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-black" >
                   <div className="card text-center border-0">
                    <img
                      style={{ height: "150px", width: "150px" }}
                      className="img-fluid rounded "
                      src={product.images}
                      alt={product.title}
                    />
                  </div>
                  <span>{product.title.substring(0, 20)}</span>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default ProductsSlider;
