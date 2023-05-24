import styled from "styled-components";
import NewsLetter from "./newsletter";
import UserContact from "./userContact";
import OurContact from "./ourContact";
import SocialMedia from "./socialMedia";

export default function Footer() {
    return (
        <PageFooter>
            <NewsLetter />

            <div className="moreInformations">
                <UserContact />

                <div>
                    <OurContact />
                    
                    <SocialMedia />
                    
                    <div id="Iniciativa">
                        <p>© 2022 por Guilherme Cintra.</p>
                    </div>
                </div>
            </div>
        </PageFooter>
    );
}

const PageFooter = styled.div`
    width: auto;
    display: block;
    padding-bottom: 4%;
    background: var(--soft-grey);

    .moreInformations{
        display: flex;
        margin-top: 9%;
    }

    #Iniciativa{
        font-weight: 300;
        font-size: 80%;
        position: absolute;
        margin-top: 3%;
        margin-left: 23vw;
        font-size: clamp(.5em, .3em + .6vw, 2vw);
    } 
`;
