import React, { useState, useEffect } from 'react';
import '../assets/css/carousel.css';
import '../assets/css/page.css';
import FilterOptions from '../Components/FilterOptions';
import ProductGrid from '../Products/ProductGrid';


import soft01 from '../assets/images/softdrinks/soft1.jpg'
import soft02 from '../assets/images/softdrinks/soft2.jpg'
import soft03 from '../assets/images/softdrinks/soft3.jpg'
import soft04 from '../assets/images/softdrinks/soft4.jpg'
import soft05 from '../assets/images/softdrinks/soft5.jpg'

const items = [
  { id: 1, image: soft01, title: "Classic Earl Grey", price: "$4.99" },
  { id: 2, image: soft02, title: "Jasmine Green Tea", price: "$5.49" },
  { id: 3, image: soft03, title: "Chamomile Blend", price: "$4.79" },
  { id: 4, image: soft04, title: "English Breakfast", price: "$4.99" },
  { id: 5, image: soft05, title: "Peppermint Herbal", price: "$5.29" },
];

export default function Softdrinks() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="page-container">
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <div className="button-group">
                <button className="add-to-cart">Add to Cart</button>
                <button className="favorite">❤</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&lt;</button>
      <button className="carousel-control next" onClick={nextSlide}>&gt;</button>
    </div>
    <div className="content-section">
        <aside className="filter-sidebar">
          <FilterOptions />
        </aside>
        <main className="product-main">
          <ProductGrid items={items} />
        </main>
    </div>

    </div>
  );
}