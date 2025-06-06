import { Link } from "react-router-dom";
export const categoryImage = [
  {
    id: "1",
    category: "Men",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240129/BECS/65b6bf0a16fd2c6e6ac45b86/-473Wx593H-467014777-tan-MODEL7.jpg",
  },
  {
    id: "2",
    category: "Women",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/12/365430631/LB/YJ/FA/6215968/casual-women-shoes.jpg",
  },
  {
    id: "3",
    category: "Boys",
    image:
      "https://cartnear.s3.us-east-2.amazonaws.com/ng/e6fe4b4baf2fbd0d96dc0b481e1b9317.jpg",
  },
  {
    id: "4",
    category: "Girls",
    image:
      "https://i.pinimg.com/736x/8e/be/af/8ebeafd83b7beaf0dbd1ed90b683027f.jpg",
  },
];
const Category = () => { 

  return (
    <div className="container">
      
      <div className="row mt-3">
        {categoryImage.map((image) => (
          <div className="col-md-3 text-center  " key={image.id}>
          <Link to={`/products/${image.category}`}  className="link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-black" >
              <img
                style={{ height: "150px", width: "150px" }}
                className="img-fluid rounded-circle "
                src={image.image}
                alt={image.category}
              />
              <p>{image.category}</p>
            </Link>
          </div>
        ))}
       
      </div>
    </div>
  );
};
export default Category;
