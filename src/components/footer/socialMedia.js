import styled from "styled-components";
import linkedinIcon from "../../assets/Icons/linkedin-black.png";
import instagramIcon from "../../assets/Icons/instagram-black.png";
import youtubeIcon from "../../assets/Icons/youtube-black.png";

export default function SocialMedia() {
    return (
        <SocialMediaBox>
            <div>
                <a href="https://www.linkedin.com/company/74498578/admin/" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Símbolo do Linkedin" />
                    <p>Linkedin</p>
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/iniciativairis/" target="_blank" rel="noreferrer">
                    <img src={instagramIcon} alt="Símbolo do Instagram" />
                    <p>Instagram</p>
                </a>
            </div>
            <div>
                <a href="https://www.youtube.com/channel/UCICrIfWH9PtZJhLHiIo09rw" target="_blank" rel="noreferrer">
                    <img src={youtubeIcon} alt="Símbolo do YouTube" />
                    <p>Youtube</p>
                </a>
            </div>
        </SocialMediaBox>
    );
}

const SocialMediaBox = styled.div`
    margin-left: 19.5vw;
    display: flex;
    gap: 3%;
    height: 6.8vw;
    width: 28.8vw;
    align-items: center;
    justify-content: center;
    margin-top: 7%;

    div{
        width: clamp(8rem, 6.7vw, 8.7vw);
        height: clamp(8rem, 6.7vw, 8.7vw);
        font-weight: 300;
        border: 3px solid black;
        border-radius: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div a{
        display: inline-block;
        font-size: clamp(.5em, .3em + .65vw, 2vw);
        width: clamp(6rem, 4.5vw, 6vw);
        height: clamp(6rem, 4.5vw, 6vw);
        color: var(--black);
    }

    img{
        max-width: 55%;
        min-width: 25%;
        max-height: 55%;
        min-width: 25%;
    }
`;
