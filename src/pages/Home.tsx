import { Truck, Shield, Search, Package, User } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

export default function Home() {
  const featuredProducts = products.slice(0, 10);

  return (
    <div className="home" id="home-page">

      {/* Categories */}
      <section className='categories-section'>
        <div className='categories-wrapper'>
          {/* Left - Category List */}
          <div className='categories-list'>
            <ul>
              <li className='active'>Automobiles</li>
              <li>Clothes and wear</li>
              <li>Home interior</li>
              <li>Computer and tech</li>
              <li>Tools, equipments</li>
              <li>Sports and outdoor</li>
              <li>Animal and pets</li>
              <li>Machinery tools</li>
              <li>More categories</li>
            </ul>
          </div>

          {/* Middle - Trending */}
          <div className='categories-trending'>
            <img src="/src/assets/Image/backgrounds/6.png" alt="Trending" className="categories-trending-bg" />
            <div className='categories-trending-content'>
              <p>Latest trending</p>
              <h2>Electronic items</h2>
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>

          {/* Right - User and Promos */}
          <div className='categories-user-promo'>
            <div className='user-card'>
              <div className='user-card-header'>
                <div className='user-avatar'>
                    <User className='user-icon' />
                </div>
                <div className='user-greeting'>
                  <p>Hi, user</p>
                  <p>let's get started</p>
                </div>
              </div>
              <div className='user-actions'>
                <button className='btn btn-primary'>Join now</button>
                <button className='btn btn-outline'>Log in</button>
              </div>
            </div>

            <div className='promo-card new-supplier'>
              <p>Get US $10 off <br /> with a new <br /> supplier</p>
            </div>

            <div className='promo-card supplier-preferences'>
              <p>Send quotes with <br /> supplier <br /> preferences</p>
            </div>
          </div> 
        </div>
      </section>

      {/* Deals and Offers */}
      <section className='deals-and-offer-section'>
        <div className='deals-and-offer-header'>
          <h2>Deals and Offers</h2>
          <p>Hygeine equipments</p>
          <div className='countdown'>
            <div className='countdown-item'>
              <p>04</p>
              <p>Days</p>
            </div>
            <div className='countdown-item'>
              <p>13</p>
              <p>Hour</p>
            </div>
            <div className='countdown-item'>
              <p>45</p>
              <p>Mint</p>
            </div>
            <div className='countdown-item'>
              <p>32</p>
              <p>Sec</p>
            </div>
          </div>
        </div>
        <div className='deals-and-offer-grid'>
          <div className='deals-and-offer-item'>
            <img src="/src/assets/Image/tech/2.png" alt="1" className="deals-and-offer-img" />
            <div className='deals-and-offer-info'>
              <h4>Smart Watches</h4>
              <p>-25%</p>
            </div>
          </div>
          <div className='deals-and-offer-item'>
            <img src="/src/assets/Image/tech/7.png" alt="2" className="deals-and-offer-img" />
            <div className='deals-and-offer-info'>
              <h4>Laptops</h4>
              <p>-15%</p>
            </div>
          </div>
          <div className='deals-and-offer-item'>
            <img src="/src/assets/Image/tech/1.png" alt="3" className="deals-and-offer-img" />
            <div className='deals-and-offer-info'>
              <h4>Cameras</h4>
              <p>-40%</p>
            </div>
          </div>
          <div className='deals-and-offer-item'>
            <img src="/src/assets/Image/tech/4.png" alt="4" className="deals-and-offer-img" />
            <div className='deals-and-offer-info'>
              <h4>Headphones</h4>
              <p>-25%</p>
            </div>
          </div>
          <div className='deals-and-offer-item'>
            <img src="/src/assets/Image/tech/3.png" alt="5" className="deals-and-offer-img" />
            <div className='deals-and-offer-info'>
              <h4>Mobile Phones</h4>
              <p>-10%</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Home and outdoor */}
      <section className='home-and-outdoor-section'>
        <div className='home-and-outdoor-header'>
          <img src="/src/assets/Image/backgrounds/5.png" alt="1" className="home-and-outdoor-bg" />
          <h2>Home and outdoor</h2>
          <p>Source now</p>
        </div>
        <div className='home-and-outdoor-grid'>
          <div className='home-and-outdoor-item'>
            <div className='home-and-outdoor-info'>
              <h4>Soft Chairs</h4>
              <p>From <span>USD 19</span></p>
            </div>
            <img src="/src/assets/Image/interior/1.png" alt="1" className="home-and-outdoor-img" />
          </div>
          <div className='home-and-outdoor-item'>
            <div className='home-and-outdoor-info'>
              <h4>Lamps</h4>
              <p>From <span>USD 9</span></p>
            </div>
            <img src="/src/assets/Image/interior/3.png" alt="2" className="home-and-outdoor-img" />
          </div>
          <div className='home-and-outdoor-item'>
            <div className='home-and-outdoor-info'>
              <h4>Mattress</h4>
              <p>From <span>USD 15</span></p>
            </div>
            <img src="/src/assets/Image/interior/9.png" alt="3" className="home-and-outdoor-img" />
          </div>
          <div className='home-and-outdoor-item'>
            <div className='home-and-outdoor-info'>
              <h4>Utensils</h4>
              <p>From <span>USD 5</span></p>
            </div>
            <img src="/src/assets/Image/interior/2.png" alt="4" className="home-and-outdoor-img" />
          </div>
          <div className='home-and-outdoor-item'>
            <div className='home-and-outdoor-info'>
              <h4>Kitchen Mixers</h4>
              <p>From <span>USD 12</span></p>
            </div>
            <img src="/src/assets/Image/interior/6.png" alt="5" className="home-and-outdoor-img" />
          </div>
          <div className='home-and-outdoor-item'>
            <div className='home-and-outdoor-info'>
              <h4>Blenders</h4>
              <p>From <span>USD 10</span></p>
            </div>
            <img src="/src/assets/Image/interior/5.png" alt="6" className="home-and-outdoor-img" />
          </div>
          <div className='home-and-outdoor-item'>
            <div className='home-and-outdoor-info'>
              <h4>Home Appliances</h4>
              <p>From <span>USD 8</span></p>
            </div>
            <img src="/src/assets/Image/interior/4.png" alt="7" className="home-and-outdoor-img" />
          </div>
          <div className='home-and-outdoor-item'>
            <div className='home-and-outdoor-info'>
              <h4>Coffee Makers</h4>
              <p>From <span>USD 12</span></p>
            </div>
            <img src="/src/assets/Image/interior/8.png" alt="8" className="home-and-outdoor-img" />
          </div>         
        </div>
      </section>

      {/* Consumer Gadgets */}
      <section className='consumer-gadgets-section'>
        <div className='consumer-gadgets-header'>
          <img src="/src/assets/Image/backgrounds/8.png" alt="1" className="consumer-gadgets-bg" />
          <h2>Consumer electronics <span>and gadgets</span></h2>
          <p>Source now</p>
        </div>
        <div className='consumer-gadgets-grid'>
          <div className='consumer-gadgets-item'>
            <div className='consumer-gadgets-info'>
              <h4>Smart Watches</h4>
              <p>From <span>USD 19</span></p>
            </div>
            <img src="/src/assets/Image/tech/2.png" alt="1" className="consumer-gadgets-img" />
          </div>
          <div className='consumer-gadgets-item'>
            <div className='consumer-gadgets-info'>
              <h4>Cameras</h4>
              <p>From <span>USD 9</span></p>
            </div>
            <img src="/src/assets/Image/tech/1.png" alt="2" className="consumer-gadgets-img" />
          </div>
          <div className='consumer-gadgets-item'>
            <div className='consumer-gadgets-info'>
              <h4>Headphones</h4>
              <p>From <span>USD 15</span></p>
            </div>
            <img src="/src/assets/Image/tech/9.png" alt="3" className="consumer-gadgets-img" />
          </div>
          <div className='consumer-gadgets-item'>
            <div className='consumer-gadgets-info'>
              <h4>Tablets</h4>
              <p>From <span>USD 5</span></p>
            </div>
            <img src="/src/assets/Image/tech/5.png" alt="4" className="consumer-gadgets-img" />
          </div>
          <div className='consumer-gadgets-item'>
            <div className='consumer-gadgets-info'>
              <h4>Gaming Set</h4>
              <p>From <span>USD 12</span></p>
            </div>
            <img src="/src/assets/Image/tech/4.png" alt="5" className="consumer-gadgets-img" />
          </div>
          <div className='consumer-gadgets-item'>
            <div className='consumer-gadgets-info'>
              <h4>Laptops & PC</h4>
              <p>From <span>USD 340</span></p>
            </div>
            <img src="/src/assets/Image/tech/7.png" alt="6" className="consumer-gadgets-img" />
          </div>
          <div className='consumer-gadgets-item'>
            <div className='consumer-gadgets-info'>
              <h4>Smart Phones</h4>
              <p>From <span>USD 8</span></p>
            </div>
            <img src="/src/assets/Image/tech/3.png" alt="7" className="consumer-gadgets-img" />
          </div>
          <div className='consumer-gadgets-item'>
            <div className='consumer-gadgets-info'>
              <h4>Gaming Phones</h4>
              <p>From <span>USD 180</span></p>
            </div>
            <img src="/src/assets/Image/tech/6.png" alt="8" className="consumer-gadgets-img" />
          </div>         
        </div>
      </section>

      {/* Inquiry Section */}
      <section className='inquiry-section'>
        <div className='inquiry-header'>
          <img src="/src/assets/Image/backgrounds/7.png" alt="1" className="inquiry-bg" />
          <h2>An easy way to send <span>requests to all suppliers</span></h2>
          <p>We will send your request to all suppliers and get the best prices for you.</p>
        </div>
        <div className='inquiry-form'>
          <form>
            <h3>Send quote to suppliers</h3>
            <input type="text" placeholder="What item do you need?" />
            <textarea name="details" id="details" placeholder="Type more details"></textarea>
            <div className='inquiry-form-row'>
              <input type="text" placeholder="Quantity" />
              <input type="number" min="1" max="100" value="1" />
            </div>
            <button type="submit">Send inquiry</button>
          </form>
        </div>
      </section>

      {/* Recommended items */}
      <section className="recommendation-section" id="recommendation-section">
        <div className="section-header">
          <h2>Recommended items</h2>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Extra Services */}
      <section className='extra-services'>
        <div className='extra-services-header'>
          <h2>Our extra services</h2>
        </div>
        <div className='extra-services-grid'>
          <div className='extra-service'>
            <img src="/src/assets/Image/backgrounds/1.png" alt="1" className="extra-service-img" />
            <div className="extra-service-icon">
              <Search size={24} />
            </div>
            <div className='extra-service-info'>
              <h3>Source from Industry Leaders</h3>
            </div>
          </div>
          <div className='extra-service'>
            <img src="/src/assets/Image/backgrounds/2.png" alt="2" className="extra-service-img" />
            <div className="extra-service-icon">
              <Package size={24} />
            </div>
            <div className='extra-service-info'>
              <h3>Customize Your Products</h3>
            </div>
          </div>
          <div className='extra-service'>
            <img src="/src/assets/Image/backgrounds/3.png" alt="3" className="extra-service-img" />
            <div className="extra-service-icon">
              <Truck size={24} />
            </div>
            <div className='extra-service-info'>
              <h3>Fast, reliable shipping by ocean and air</h3>
            </div>
          </div>
          <div className='extra-service'>
            <img src="/src/assets/Image/backgrounds/4.png" alt="4" className="extra-service-img" />
            <div className="extra-service-icon">
              <Shield size={24} />
            </div>
            <div className='extra-service-info'>
              <h3>Product monitoring and inspection</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="suppliers-section">
        <div className="suppliers-header">
          <h2>Suppliers by region</h2>
        </div>
        <div className="suppliers-grid">
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/AE@2x.png" alt="AE" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Arabic Emirates</h3>
              <p>zubayrstore.ae</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/icon.png" alt="AU" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Australia</h3>
              <p>zubayrstore.com.au</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/US@2x.png" alt="US" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>United States</h3>
              <p>zubayrstore.com</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/RU@2x.png" alt="RU" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Russia</h3>
              <p>zubayrstore.ru</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/IT@2x.png" alt="IT" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Italy</h3>
              <p>zubayrstore.it</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/DK@2x.png" alt="DK" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Denmark</h3>
              <p>zubayrstore.dk</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/FR@2x.png" alt="FR" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>France</h3>
              <p>zubayrstore.fr</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/DE@2x.png" alt="DE" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Germany</h3>
              <p>zubayrstore.de</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/GB@2x.png" alt="GB" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>Great Britain</h3>
              <p>zubayrstore.co.uk</p>
            </div>
          </div>
          <div className="country-flag">
            <img src="/src/assets/Layout1/Image/flags/CN@2x.png" alt="CN" className="country-flag-icon" />
            <div className="country-flag-info">
              <h3>China</h3>
              <p>zubayrstore.cn</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" id="cta-section">
        <div className="cta-content">
          <h2>Subscribe to our newsletter</h2>
          <p>Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="cta-input-wrap">
            <input type="email" placeholder="Email" className="cta-input" id="cta-email-input" />
            <button className="btn btn-primary" id="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
