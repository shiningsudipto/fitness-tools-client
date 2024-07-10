import img1 from "../../../assets/images/h1.webp";
import img2 from "../../../assets/images/h2.webp";
import img3 from "../../../assets/images/h3.webp";
import img4 from "../../../assets/images/h4.webp";
import img5 from "../../../assets/images/h5.webp";
import img6 from "../../../assets/images/h6.webp";
import img7 from "../../../assets/images/h7.webp";
import img8 from "../../../assets/images/h8.webp";
import img9 from "../../../assets/images/h9.webp";
import img10 from "../../../assets/images/h10.webp";
import img11 from "../../../assets/images/h12.jpg";
import img13 from "../../../assets/images/h15.jpg";

const Gallery = () => {
  return (
    <div>
      <p>Hello, Gallery!</p>
      <div className="photo-gallery">
        <div className="column">
          <div className="photo">
            <img
              src={img1}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img8}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img3}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img
              src={img4}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img5}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img6}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img
              src={img7}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img2}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img9}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img
              src={img13}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img11}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img10}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
