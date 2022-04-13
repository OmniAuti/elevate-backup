import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carouselInt: true, idx:0 };
    this.handleCarouselMove = this.handleCarouselMove.bind(this);
    // this.handleIntervalCarouselMove = this.handleIntervalCarouselMove.bind(this);
    // this.handleCarouselInterval = this.handleCarouselInterval.bind(this);
  }

//   componentDidMount() {
//     this.handleCarouselInterval(this.state.idx, this.state.carouselInt);
//   }

//   componentDidUpdate(prevState) {
//     if (this.state.carouselInt !== prevState.carouselInt) {
      
//       this.handleCarouselInterval(this.state.idx,this.state.carouselInt);
//     }
//   }

//   componentWillUnmount() {
//     this.setState({ carouselInt: false });
//   }

//   handleCarouselInterval(idx, state) {
//     let carouselInt = setInterval(() => {
//       this.handleIntervalCarouselMove();
//     }, 3000);
//   }

  handleCarouselMove(e) {
    this.setState({ carouselInt: false });
    const selectorArr = Array.from(
      document.querySelectorAll(".carousel-selector")
    );
    let idx = selectorArr.indexOf(e.target);
    selectorArr.forEach((each) => {
      each.classList.remove("active-selector");
    });
    e.target.classList.add("active-selector");
    document.querySelector(
      ".home-carousel-content"
    ).style.transform = `translateX(${idx * -25}%)`;
  }

//   handleIntervalCarouselMove(idxIn) {
//     const selectorArr = Array.from(
//       document.querySelectorAll(".carousel-selector")
//     );
//     document.querySelector(
//       ".home-carousel-content"
//     ).style.transform = `translateX(${idxIn * -25}%)`;
//     selectorArr.forEach((each) => each.classList.remove("active-selector"));
//     selectorArr[idxIn].classList.add("active-selector");
//     this++;
//     if (idxIn > selectorArr.length - 1) {
//       idxIn = 0;
//     }
//   }

  render() {
    return (
      <section className="home">
        <div className="home-container">
          <div className="home-carousel-container">
            <div className="home-carousel-content">
              <img src="../carousel-imgs/slide-a.png" alt="" />
              <img src="../carousel-imgs/slide-b.jpeg" alt="" />
              <img src="../carousel-imgs/slide-c.jpeg" alt="" />
              <img src="../carousel-imgs/slide-d.jpeg" alt="" />
              <img src="../carousel-imgs/slide-e.jpeg" alt="" />
            </div>
            <div className="carousel-controls">
              <button
                onClick={(e) => this.handleCarouselMove(e)}
                className="carousel-selector active-selector"
              ></button>
              <button
                onClick={(e) => this.handleCarouselMove(e)}
                className="carousel-selector"
              ></button>
              <button
                onClick={(e) => this.handleCarouselMove(e)}
                className="carousel-selector"
              ></button>
              <button
                onClick={(e) => this.handleCarouselMove(e)}
                className="carousel-selector"
              ></button>
            </div>
          </div>
        </div>

        <div className="products-home">
          <div>
            <Link to="/AdvantageArrest/5mLBottle">
              <div className="">
                <img
                  src="../imgs/products/SilverDiamineFluoride5ml.png"
                  alt="Advantage Arrest Silver Diamine Fluoride 38% - 5 mL Bottle Image"
                />
                <h3>
                  Advantage Arrest Silver Diamine Fluoride 38% - 5 mL Bottle
                </h3>
              </div>
            </Link>
            <Link to="/AdvantageArrest/Ampule">
              <div className="">
                <img
                  src="../imgs/products/SilverDiamineFluorideCap.png"
                  alt="Advantage Arrest Silver Diamine Fluoride 38% - 50 Unit-Dose Ampules Image"
                />
                <h3>
                  Advantage Arrest Silver Diamine Fluoride 38% - 50 Unit-Dose
                  Ampules
                </h3>
              </div>
            </Link>

            <Link to="/FluoriMax/Bottle">
              <div className="">
                <img
                  src="../imgs/products/FlouriMax-BubbleGum-Bottle.png"
                  alt="FluoriMax™ Varnish - 1 Bottle - Bubble Gum"
                />

                <h3>FluoriMax™ Varnish - 1 Bottle - Bubble Gum</h3>
              </div>
            </Link>
            <Link to="/FluoriMax/Ampule">
              <div className="">
                <img
                  src="../imgs/products/FluoriMax-Varnish-Flow-Through.jpg"
                  alt="FluoriMax™ Varnish - Flow-Through Unit-Dose Ampule - Bubble Gum "
                />

                <h3>
                  FluoriMax™ Varnish - Flow-Through Unit-Dose Ampule - Bubble
                  Gum
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
