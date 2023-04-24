import imageOne from "../../../assets/Posts/1.png";
import imageTwo from "../../../assets/Posts/2.png";
import imageThree from "../../../assets/Posts/3.png";
import imageFour from "../../../assets/Posts/4.png";
import imageFive from "../../../assets/Posts/5.png";
import imageSix from "../../../assets/Posts/6.png";

export default function Posts({ urlOne, urlTwo, index }) {
    const images = [[imageSix, imageFive], [imageFour, imageThree], [imageTwo, imageOne]];
    let postClass = "";

    switch (index) {
    case 0:

        postClass = "High-Edge";
        break;

    case 2:

        postClass = "Low-Edge";
        break;

    default:

        postClass = "Mid";
        break;
    }

    return (
        <div className={postClass}>
            <div>
                <img src={images[index][0]} alt="" />
                <a href={urlOne} target="_blank" rel="noreferrer"/>
            </div>
            <div>
                <img src={images[index][1]} alt="" />
                <a href={urlTwo} target="_blank" rel="noreferrer"/>
            </div>
        </div>
    );
}
