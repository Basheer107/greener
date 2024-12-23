import interior1 from '../img/interior-home-plant-in-pot-png.webp'
import interior2 from '../img/pngtree-indoor-plant-png-image_6129530.png'
import interior3 from '../img/monstera-plant-in-ceramic-pot-illustration-ai-generative-png.webp'
import indoor from "../img/pngtree-indoor-plant-png-image_6129530.png";
import bradly from "../img/bradley.jpg";
import savannah from "../img/SAVANNAH.jpg";
import sarah from "../img/sarah.jpg";
import BestSellingCard from "../components/BestSellingCard"

function Home() {

    const BestSellingCards  =[
        {
            name:"plant 1",
            img:interior1,
            decs:"Lorem Ispum Dolor Sit Amet",
            price:"$15,00"
        },

        {
            name:"plant 2",
            img:interior2,
            decs:"Lorem Ispum Dolor Sit Amet",
            price:"$ 20,00"
        },

        {
            name:"plant 3",
            img:interior3,
            decs:"Lorem Ispum Dolor Sit Amet",
            price:"$ 30,00"
        }
    ]

  return (
    
    <>
    
      <div class="container">
        <div class="heading">
          <h1>
            make your space
            <br />
            <div>
              <span>Greener</span>
              <img src="" alt="" />
            </div>
            with
            <span>plants</span>
          </h1>
          <p>
            Lorem ispum dolor sit amet, consectetur adipiscing elit .In
            <br />
            orci ligula,
          </p>
          <div class="buttons">
            <a href="#" class="firstChild">
              Shop Plant
              {/* <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 376.83"><path fill-rule="nonzero" d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"/></svg> */}
            </a>
            <a href="#" class="secondChild">
              About us
              {/* <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.881px" height="9.737px" viewBox="0 0 122.881 9.737" enable-background="new 0 0 122.881 9.737" xml:space="preserve"><g><path d="M117.922,0.006C117.951,0.002,117.982,0,118.012,0c0.656,0,1.285,0.132,1.861,0.371c0.014,0.005,0.025,0.011,0.037,0.017 c0.584,0.248,1.107,0.603,1.543,1.039c0.881,0.88,1.428,2.098,1.428,3.441c0,0.654-0.133,1.283-0.371,1.859 c-0.248,0.6-0.609,1.137-1.057,1.583c-0.445,0.445-0.98,0.806-1.58,1.055v0.001c-0.576,0.238-1.205,0.37-1.861,0.37 c-0.029,0-0.061-0.002-0.09-0.006c-37.654,0-75.309,0.001-112.964,0.001c-0.029,0.004-0.059,0.006-0.09,0.006 c-0.654,0-1.283-0.132-1.859-0.371c-0.6-0.248-1.137-0.609-1.583-1.056C0.981,7.865,0.621,7.33,0.372,6.73H0.371 C0.132,6.154,0,5.525,0,4.869C0,4.215,0.132,3.586,0.371,3.01c0.249-0.6,0.61-1.137,1.056-1.583 c0.881-0.881,2.098-1.426,3.442-1.426c0.031,0,0.061,0.002,0.09,0.006C42.613,0.006,80.268,0.006,117.922,0.006L117.922,0.006z"/></g></svg> */}
            </a>
          </div>
        </div>
        <div class="rightBoxes">
          <div class="gridBox">
            <div sec1>
              <h2>Section 1</h2>
              <p>
                Lorem ispum dolor sit amet, consectetur adipiscing
                <br />
                elit .In orci ligula. consectetur sit amet
              </p>
              <img src="" alt="" />
            </div>
            <div class="sec2">
              <h2>Section 2</h2>
              <p>Lorem ispum dolor sit amet.</p>
              <img src="" alt="" />
            </div>
            <div class="sec3">
              <h2>Section 3</h2>
              <p>Lorem ispum dolor sit amet.</p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <section class="greenSec">
        <div class="wrapper">
          <h2>
            BEST SELLING
            <br />
            Plant Collection
          </h2>
          <p>
            Check out our collection, we got every plant you need here!
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Let's grow it together{" "}
          </p>
          <div class="container">
            {
                BestSellingCards.map((card)=>{

                    return <BestSellingCard cards={card}/>

                })
            }
            
          </div>
        </div>
      </section>
      <section class="imgPara">
        <div class="img">
          <img src={indoor} alt="tree" />
        </div>
        <div class="info">
          <div class="about">
            <h2>
              What's Best From
              <br />
              Our
              <span>Plants</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <br />
              Quam cum repudiandae sed similique ipsam
              <br />
              doloremque iste praesentium est debitis
              <br />
              sapientesit atque,libero explicabo impedit
              <br />
              quibusdam molestiae commodi ut obcaecati
              <br />
              totam sequi earum non ipsa.
            </p>
          </div>
          <div class="buttons">
            <a href="" class="firstChild">
              Shop Plant
              {/* <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 376.83"><path fill-rule="nonzero" d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"/></svg> */}
            </a>
            <a href="" class="secondChild">
              Read More
              {/* <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.881px" height="9.737px" viewBox="0 0 122.881 9.737" enable-background="new 0 0 122.881 9.737" xml:space="preserve"><g><path d="M117.922,0.006C117.951,0.002,117.982,0,118.012,0c0.656,0,1.285,0.132,1.861,0.371c0.014,0.005,0.025,0.011,0.037,0.017 c0.584,0.248,1.107,0.603,1.543,1.039c0.881,0.88,1.428,2.098,1.428,3.441c0,0.654-0.133,1.283-0.371,1.859 c-0.248,0.6-0.609,1.137-1.057,1.583c-0.445,0.445-0.98,0.806-1.58,1.055v0.001c-0.576,0.238-1.205,0.37-1.861,0.37 c-0.029,0-0.061-0.002-0.09-0.006c-37.654,0-75.309,0.001-112.964,0.001c-0.029,0.004-0.059,0.006-0.09,0.006 c-0.654,0-1.283-0.132-1.859-0.371c-0.6-0.248-1.137-0.609-1.583-1.056C0.981,7.865,0.621,7.33,0.372,6.73H0.371 C0.132,6.154,0,5.525,0,4.869C0,4.215,0.132,3.586,0.371,3.01c0.249-0.6,0.61-1.137,1.056-1.583 c0.881-0.881,2.098-1.426,3.442-1.426c0.031,0,0.061,0.002,0.09,0.006C42.613,0.006,80.268,0.006,117.922,0.006L117.922,0.006z"/></g></svg> */}
            </a>
          </div>
        </div>
      </section>
      <section class="fourthSec">
        <div class="proverb">
          <h2>
            start gardening
            <br />
            and grow your
            <br />
            own plant!
          </h2>
          <img src="../Website 3/img/sand pots.jpg" alt="" />
          <div class="paraButton">
            <p>
              Lorem ispum dolor sit amet,
              <br />
              consectetur adipiscing elit
            </p>
            <a href="">
              {" "}
              Read More
              {/* <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.881px" height="9.737px" viewBox="0 0 122.881 9.737" enable-background="new 0 0 122.881 9.737" xml:space="preserve"><g><path d="M117.922,0.006C117.951,0.002,117.982,0,118.012,0c0.656,0,1.285,0.132,1.861,0.371c0.014,0.005,0.025,0.011,0.037,0.017 c0.584,0.248,1.107,0.603,1.543,1.039c0.881,0.88,1.428,2.098,1.428,3.441c0,0.654-0.133,1.283-0.371,1.859 c-0.248,0.6-0.609,1.137-1.057,1.583c-0.445,0.445-0.98,0.806-1.58,1.055v0.001c-0.576,0.238-1.205,0.37-1.861,0.37 c-0.029,0-0.061-0.002-0.09-0.006c-37.654,0-75.309,0.001-112.964,0.001c-0.029,0.004-0.059,0.006-0.09,0.006 c-0.654,0-1.283-0.132-1.859-0.371c-0.6-0.248-1.137-0.609-1.583-1.056C0.981,7.865,0.621,7.33,0.372,6.73H0.371 C0.132,6.154,0,5.525,0,4.869C0,4.215,0.132,3.586,0.371,3.01c0.249-0.6,0.61-1.137,1.056-1.583 c0.881-0.881,2.098-1.426,3.442-1.426c0.031,0,0.061,0.002,0.09,0.006C42.613,0.006,80.268,0.006,117.922,0.006L117.922,0.006z"/></g></svg> */}
            </a>
          </div>
        </div>
      </section>
      <section class="fifthSec">
        <div class="aboutHouseplnt">
          <h2>
            know more about
            <br />
            houseplant
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Placeat numquam temporibus quaerat ipsum doloribus
            <br />
            facere deserunt,autem consequatur ullam ipsam.
            <br />
            Donate vulputateorci utmi sodales finibes
          </p>
          <div class="buttons">
            <a href="" class="firstChild">
              Our Blog
              {/* <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 376.83"><path fill-rule="nonzero" d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"/></svg> */}
            </a>
            <a href="" class="secondChild">
              Read More
              {/* <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.881px" height="9.737px" viewBox="0 0 122.881 9.737" enable-background="new 0 0 122.881 9.737" xml:space="preserve"><g><path d="M117.922,0.006C117.951,0.002,117.982,0,118.012,0c0.656,0,1.285,0.132,1.861,0.371c0.014,0.005,0.025,0.011,0.037,0.017 c0.584,0.248,1.107,0.603,1.543,1.039c0.881,0.88,1.428,2.098,1.428,3.441c0,0.654-0.133,1.283-0.371,1.859 c-0.248,0.6-0.609,1.137-1.057,1.583c-0.445,0.445-0.98,0.806-1.58,1.055v0.001c-0.576,0.238-1.205,0.37-1.861,0.37 c-0.029,0-0.061-0.002-0.09-0.006c-37.654,0-75.309,0.001-112.964,0.001c-0.029,0.004-0.059,0.006-0.09,0.006 c-0.654,0-1.283-0.132-1.859-0.371c-0.6-0.248-1.137-0.609-1.583-1.056C0.981,7.865,0.621,7.33,0.372,6.73H0.371 C0.132,6.154,0,5.525,0,4.869C0,4.215,0.132,3.586,0.371,3.01c0.249-0.6,0.61-1.137,1.056-1.583 c0.881-0.881,2.098-1.426,3.442-1.426c0.031,0,0.061,0.002,0.09,0.006C42.613,0.006,80.268,0.006,117.922,0.006L117.922,0.006z"/></g></svg> */}
            </a>
          </div>
        </div>
        <div class="img">
          <img src={indoor} alt="" />
        </div>
      </section>
      <section class="greenSec2">
        <div class="wrapper">
          <h2>
            {" "}
            what they say
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reviews
          </h2>
          <p>
            Check out our collection, we got every plant you need here!
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Let's grow it together{" "}
          </p>
          <div class="container">
            <div class="plantCard">
              <div class="thumbnail">
                <img src={bradly} alt="" />
                <h3>Bradley</h3>
                <div class="bttm"></div>
              </div>
              <div class="info">
                <p>
                  Lorem ispum dolor sit amet,
                  <br />
                  consectetur adipiscing elit.
                  <br />
                  Nam nem eroc ut nunc luctus
                  <br />
                  consecteturvel ac justo
                </p>
              </div>
            </div>
            <div class="plantCard">
              <div class="thumbnail">
                <img src={savannah} alt="" />
                <h3>Savannah</h3>
                <div class="bttm"></div>
              </div>
              <div class="info">
                <p>
                  Lorem ispum dolor sit amet,
                  <br />
                  consectetur adipiscing elit.
                  <br />
                  Nam nem eroc ut nunc luctus
                  <br />
                  consecteturvel ac justo
                </p>
              </div>
            </div>
            <div class="plantCard">
              <div class="thumbnail">
                <img src={sarah} alt="" />
                <h3>Sarah</h3>
                <div class="bttm"></div>
              </div>
              <div class="info">
                <p>
                  Lorem ispum dolor sit amet,
                  <br />
                  consectetur adipiscing elit.
                  <br />
                  Nam nem eroc ut nunc luctus
                  <br />
                  consecteturvel ac justo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
