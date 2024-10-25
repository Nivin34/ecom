import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import '../styles/Productitem.css'
// import bgImage from '/images/bg.jpeg';
const categories = [
  { title: 'New Born Hospital Essentials', image: '/images/products/product1.jpeg', slug: '../toy' },
  { title: 'Bedding Sets', image: '/images/products/product2.jpeg', slug: 'bedding-sets' },
  { title: 'Baby Sleeping Beds', image: '/images/products/product3.jpeg', slug: 'baby-sleeping-beds' },
  { title: 'Baby Beds With Mosquito Net', image: '/images/products/product4.jpeg', slug: 'baby-beds-mosquito-net' },
  { title: 'Born Baby Accessories', image: '/images/products/product5.jpeg', slug: 'born-baby-accessories' },
  { title: 'Toys', image: '/images/products/product6.jpeg', slug: 'toys' },
  { title: 'baby jewels', image: '/images/img7.png', slug: 'baby-jewels' },
  { title: 'Baby Bath Towel', image: '/images/bg.jpeg', slug: 'baby-bath-towel' }
];
// const style = {
//   backgroundImage: `url(${bgImage})`,
// };

const Productitem = () => {
  const navigate = useNavigate();

  // Function to handle image click
  const handleImageClick = (slug) => {
    navigate(`/category/${slug}`);  // Redirect to the corresponding category page
  };

  return (
   < div className='bg' >
    <div className="container text-center">
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <span>New Arrivals</span>
          <span>best Selling</span>
          <span>Help</span>
        </div>
      </div>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-6 col-md-3 my-3" key={index}>
            <div className="category-card">
              {/* On image click, navigate to the specific category page */}
              <img
                src={category.image}
                alt={category.title}
                className="img-fluid rounded-circle"
                style={{ cursor: 'pointer' }}  // Change cursor to pointer
                onClick={() => handleImageClick(category.slug)}  // Handle click on image
              />
              <p>{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Productitem;
