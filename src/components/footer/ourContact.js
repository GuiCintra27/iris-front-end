import styled from "styled-components";

export default function OurContact() {
    return (
        <OurContactBox>
            <div>
            </div>

            <div>
                <h3>TELEFONE</h3>
                <p>
                    (22) 9902-5191
                </p>
            </div>
            <div>
                <h3>EMAIL</h3>
                <p>
                    iniciativa.iris@gmail.com
                </p>
            </div>
        </OurContactBox>
    );
}

const OurContactBox = styled.div`
    margin-top: 10%;
    margin-left: 25.5%;
    display: flex;
    width: 36vw;
    font-weight: 300;
    align-items: center;
    gap: 1rem;

    div{
        width: 15vw;
        height: 17vh;
    }

    div h3{
        font-weight: 300;
        font-size: clamp(.9em, .3em + 1vw, 2vw);
    }

    div p{
        margin-top: 7.5%;
        font-size: clamp(.5em, .3em + .55vw, 2vw);
    }
`;
