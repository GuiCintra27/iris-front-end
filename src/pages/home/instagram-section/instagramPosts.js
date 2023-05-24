import imageOne from "../../../assets/Posts/nao-binarios.png";
import imageTwo from "../../../assets/Posts/young-royals.png";
import imageThree from "../../../assets/Posts/homofobia-internalizada.png";
import imageFour from "../../../assets/Posts/safo-de-lesbos.png";
import imageFive from "../../../assets/Posts/comunidade-iris.png";
import imageSix from "../../../assets/Posts/meu-filho-se-assumiu.png";

export default function Posts({ urlOne, urlTwo, index }) {
    const images = [[imageOne, imageTwo], [imageThree, imageFour], [imageFive, imageSix]];
    let postClass = ["High-Edge", "Mid", "Low-Edge"];

    return (
        <div className={postClass[index]}>
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
