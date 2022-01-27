import "./homeStyle.css"
import DeepLinkTest from "../DeepLinkingTest/deepLinkGeolocate";

function Home() {

    return (
    <div className="container-fluid">
        <section className="hero" id="desktopHeroView">
        
        
            <div className="heroCol yumaBorder" id="desktopHeroView">

                <div className="col-6" id="logoCol">
                    
                    <div className="logo">
                        
                            <a href="/locations"><img className="displayLogo" src="/images/homeImages/yumawayLogoHome.png" alt="YumaWay Logo" />
                            </a>
                            <a className="storeFinderButton" 
                                href="/locations"
                                // onClick={submitSearch}
                            >
                                Find Store
                            </a>
                    </div>
                </div>
                <div className="col-6" id="imageCol">
                    <img className="displayImage" src="/images/homeImages/homeHero.png" alt="YumaWay Shopping Bag" />
                </div>                      
            </div>
            
        </section>

        <section className="hero" id="mobileHeroView">
      
            <div className="heroCol yumaBorder" id="mobileTabletContentHolder">
                
                <div className="tabletContainer">
                    <div className="row">
                        <div className="displayLogoContainer">
                            <a href="/locations"><img className="displayLogo" src="/images/homeImages/yumawayLogoHome.png" alt="YumaWay Logo"/></a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="displayImageContainer">
                            <a href="/locations"><img className="displayImage" src="/images/homeImages/homeHero.png" alt="YumaWay Shopping Bag"/></a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="displayButtonContainer">
                            <a className="storeFinderButton" href="/locations">Find Store</a>
                        </div>
                    </div> 
                </div>
            </div>
            
                
        </section>

        <section className="QuoteBanner left">
            <div className="row">
        
                <div className="col-6 non-mobile-only">
                <img src="/images/homeImages/MassiveSelectionSection.jpg" alt="Marijuana Grow House" />
                </div>
        
                <div className="col-sm-6">
                    <article>
        
                    <h2>A Massive Product Selection </h2>
                    <p>Our vast selection includes products lovingly cultivated in-house along with other top brands and lesser known quality labels.</p>
                    
                    <p>Need help making a selection? Our  budtenders are highly trained and friendly cannabis experts who can educate you on the best strands, brands, and products for your specific needs. Stop by your nearest Yuma Way location for a memorable and fun shopping experience.</p>
        
                </article>
                </div>
            </div>
        </section>

        <section className="ShopNow">
            <div className="yumaBorder">
            <div className="row">

                <div className="image-col">
                <img alt="Cannabis Products on Display - Left" className="non-mobile-only lazyloaded" role="presentation" src="/images/homeImages/newProductsSection-Left-TINY.png" />
                </div>
            
                <div className="col">
                <article>
                    <h2>THC Products? </h2>
                    <h2>We Have it All </h2>
                    <p className="non-mobile-only">Our shelves are stocked with products from Lucky Turtle, Double Black Extracts, Shift Cannabis, Harmony Extracts, Pyramid, Viola, Smokiez, The Flower Collective and so much more! Visit your nearest Yuma Way location for access to the largest selection of cannabis products. </p>
                    <p className="mobile-only">Our shelves are stocked with products from Lucky Turtle, Double Black Extracts, Shift Cannabis, Harmony Extracts, Pyramid, Viola, Smokiez, The Flower Collective and so much more! Visit your nearest Yuma Way location for access to the largest selection of cannabis products. 
                    </p>
            
                    <a className="storeFinderButton" href="/locations">Find Store</a>
                </article>
                </div>
    
                <div className="image-col" id="hideOnMobile">
                <img alt="Cannabis Products on Display - Right" id="hideOnMobile" className="non-mobile-only lazyloaded" role="presentation" src="/images/homeImages/newProductsSection-Right-TINY.png" />
                </div>     

            </div>
            </div>   
        </section>

        <section className="threeMainProducts">
            <div className="row">                          
                    <div className="col-sm-4 productSquareColumn">
                        <div className="flowerBox">
                            <img id="flowerImage" className="threeProductCategoryImages" src="/images/homeImages/flower-pattern.png" alt="Cannabis Flowers" />
                                <a href="/locations/">
                                    <div className="overlay">
                                        <img id="flowerImageHover" className="threeProductCategoryImages" src="/images/homeImages/flower-flip.jpg" alt="Marijuana Flower" />
                                    </div>
                                </a>
                            
                            <a href="/locations/">
                                <div className="threeProductCategoryHeadline">
                                    Flower
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-4 productSquareColumn">
                        <div className="edibleBox">
                            <img id="edibleImage" className="threeProductCategoryImages" src="/images/homeImages/edible-pattern.png" alt="Cannabis Edibles" />
                            <a href="/edibles/">
                                <div className="overlay">
                                    <img id="edibleImageHover" className="threeProductCategoryImages" src="/images/homeImages/edible-flip.jpg" alt="Marijuana Edibles" />
                                </div>
                            </a>
                            <a href="/edibles/">
                                <div className="threeProductCategoryHeadline">
                                    Edibles
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-4 productSquareColumn">
                        <div className="concentrateBox">
                            <img id="concentrateImage" className="threeProductCategoryImages" src="/images/homeImages/concentrate-pattern.png" alt="Cannabis Concentrates" />
                                <a href="/concentrates/">
                                    <div className="overlay">
                                        <img id="concentrateImageHover" className="threeProductCategoryImages" src="/images/homeImages/concentrate-flip.jpg" alt="Marijuana Concentrates" />
                                    </div>
                                </a>
                            <a href="/concentrates/">
                                <div className="threeProductCategoryHeadline">
                                    Concentrates
                                </div>
                            </a>
                        </div>
                    </div>
            </div>      
        </section>

        <section className="Categories" aria-label="Categories of products to search for">
  
            <div className="yumaBorder">
            <div className="article-container">
                <article id="list-items"> 
                    <input aria-label="expand category menu" className="mobile-only" type="checkbox"/>
                    <header aria-label="Flower category.">
                    <span className="yellowText">Flower</span>
                    <i role="presentation"></i>
                    </header>
            
                    <ul className="lightText">
                        <li>
                        <a aria-label="Platinum." href="/locations">
                            Yuma Way 
                        </a>
                        </li>
                        <li>
                        <a aria-label="Top-Shelf." href="/locations">
                            Veritas 
                        </a>
                        </li>
                        <li>
                        <a aria-label="Select." href="/locations">
                            Natty Rems 
                        </a>
                        </li>
                        <li>
                        <a aria-label="Shake." href="/locations">
                            Cookies 
                        </a>
                        </li>
                        <li>
                        <a aria-label="Discount." href="/locations">
                            Locol Love
                        </a>
                        </li>   
                    </ul>
            
                </article>
                    {/* <div className="verticalLineSeperator"></div> */}
                <div id="svgCategorySeparator">
                    <svg id="lineBox" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="40,30 40,70"></polyline>
                            <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="60,30, 60,70 "></polyline>
                            <polyline stroke="#d9ab73" fill="none" points="40,30, 60,30 "></polyline>
                            <polyline stroke="#d9ab73" fill="none" points="40,70, 60,70 "></polyline>
                            <line stroke="#d9ab73" fill="none" x1="50" y1="10" x2="50" y2="90"></line>
                    </svg>
                </div>
                <article id="list-items"> 
                <input aria-label="expand category menu" className="mobile-only" type="checkbox"/>
                <header aria-label="Topical category.">
                    <span className="yellowText">Topicals</span>
                    <i role="presentation"></i>
                </header>
                    <ul className="lightText">
                    <li>
                        <a aria-label="White Wine." href="/locations">
                        Escape Artists
                        </a>
                    </li>
                    <li>
                        <a aria-label="Red Wine." href="/locations">
                            Sirona Cultivated
                        </a>
                    </li>
                    <li>
                        <a aria-label="Champagne." href="/locations">
                            Mary Jane’s Medicinals 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Rosé Wine." href="/locations">
                        Coda Signature
                        </a>
                    </li>
                    <li>
                        <a aria-label="Sake." href="/locations">
                            Incredible Wellness 
                        </a>
                    </li>
                    </ul>
        
                </article>
                {/* <div className="verticalLineSeperator"></div> */}
                <div id="svgCategorySeparator">
                    <svg id="lineBox" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="40,30 40,70"></polyline>
                        <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="60,30, 60,70 "></polyline>
                        <polyline stroke="#d9ab73" fill="none" points="40,30, 60,30 "></polyline>
                        <polyline stroke="#d9ab73" fill="none" points="40,70, 60,70 "></polyline>
                        <line stroke="#d9ab73" fill="none" x1="50" y1="10" x2="50" y2="90"></line>
                    </svg>
                </div>
                <article id="list-items">
                <input aria-label="expand category menu" className="mobile-only" type="checkbox"/>
                <header aria-label="Edibles category.">
                    <span className="yellowText">Edibles</span>
                    <i role="presentation"></i>
                </header>
        
                    <ul className="lightText">
                    <li>
                        <a aria-label="Vodka." href="/locations">
                            Wana
                        </a>
                    </li>
                    <li>
                        <a aria-label="Bourbon Whiskey." href="/locations">
                            BlueKudu 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Tequila." href="/locations">
                            NFuzed
                        </a>
                    </li>
                    <li>
                        <a aria-label="Gin." href="/locations">
                            Wyld
                        </a>
                    </li>
                    <li>
                        <a aria-label="Rum." href="/locations">
                            Keef
                        </a>
                    </li>
                    </ul>
        
                </article>
                {/* <div className="verticalLineSeperator"></div> */}
                <div id="svgCategorySeparator">
                <svg id="lineBox" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="40,30 40,70"></polyline>
                    <polyline strokewidth="0.05" stroke="#d9ab73" fill="none" points="60,30, 60,70 "></polyline>
                    <polyline stroke="#d9ab73" fill="none" points="40,30, 60,30 "></polyline>
                    <polyline stroke="#d9ab73" fill="none" points="40,70, 60,70 "></polyline>
                    <line stroke="#d9ab73" fill="none" x1="50" y1="10" x2="50" y2="90"></line>
                </svg>
                </div>
                <article id="list-items">
                <input aria-label="expand category menu" className="mobile-only" type="checkbox"/>
                <header aria-label="Extract category.">
                    <span className="yellowText">Extract</span>
                    <i role="presentation"></i>
                </header>
        
                    <ul className="lightText">
                    <li>
                        <a aria-label="Mixers." href="/locations">
                            Eureka Vapor 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Soda." href="/locations">
                            Kush Masters 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Ice &amp; Party Supplies." href="/locations">
                            AiroPro
                        </a>
                    </li>
                    <li>
                        <a aria-label="Fruit &amp; Garnishes." href="/locations">
                        The Clear 
                        </a>
                    </li>
                    <li>
                        <a aria-label="Bitters &amp; Syrups." href="/locations">
                            Binske 
                        </a>
                    </li>
                    </ul>
        
                </article>
            </div>
            </div>
  </section>
  
  <section className="app-download">
      <div className="content">
        <h2 className="desktop-only">Join Our Rewards </h2>
        <h2 className="non-desktop-only">Join Our Rewards</h2>
  
          <p>Come join our awesome rewards program. Access exclusive deals and earn points with your purchases to get free products.</p>
  
          <a className="get-app-link" role="button" rel="noopener noreferrer" href="https://enrollnow.vip/login/2966">Join Now</a>
  
      </div>
  
      <svg className="rotated non-mobile-only" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#181818" opacity="100%" points="0,100 0,0 100,0, 100,10, 39.5,100"></polygon>
        <line stroke="#d9ab73" x1="39" y1="100" x2="100" y2="9"></line>
        <line stroke="#d9ab73" x1="38" y1="100" x2="100" y2="8"></line>
      </svg>
       
      <svg className="rotated mobile-only" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#181818" opacity="100%" points="0,0 0,92 100,59, 100,0 0,0"></polygon>
        <polyline stroke="#d9ab73" fill="none" points="5,1 5,88 95,59, 95,1 5,1 "></polyline>
        <polyline stroke="#d9ab73" fill="none" points="3,2.5 3,87 97,57 97,2.5 3,2.5"></polyline>
   
      </svg>
  
    </section>
    </div>
    )
    
}
    
    
export default Home;