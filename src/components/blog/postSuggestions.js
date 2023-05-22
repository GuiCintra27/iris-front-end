import axios from "axios";
import { useEffect, useState } from "react";
import IrisLogo from "../../assets/Icons/logo.png";
import whiteLogo from "../../assets/Icons/logoWhite.png";
import styled from "styled-components";
import useTopics from "../../hooks/api/useTopics";

export default function PostSuggestions({ postId, topicId, topicName }) {
    const [suggestions, setSuggestions] = useState([]);
    const [otherTopics, setOtherTopics] = useState([]);
    const { topicsData } = useTopics();

    useEffect(() => {
        async function getSuggestions() {
            try {
                const promisse = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/posts/list/suggestions?postId=${postId}&topicId=${topicId}`);
                setSuggestions(promisse.data);
            } catch (error) {}
        }

        if (topicId) { 
            getSuggestions();
            setOtherTopics(topicsData.filter((t) => t.id !== topicId).sort(() => Math.random() - 0.5).slice(0, 3));
        }        
    }, [topicId, topicsData]);

    return (
        <Container>
            <Title> Veja mais de <span> #{topicName} </span> </Title>

            <FirstSession>
                {
                    suggestions?.map((s, idx) => {
                        return (
                            <Suggestions key={idx}>
                                <h1>
                                    {idx + 1}.
                                </h1>

                                <div>
                                    <span> <img src={IrisLogo} alt="logo iniciativa iris"/> {s.topics.name} </span>
                                    <h2>{s.title}</h2>
                                </div>
                            </Suggestions>
                        );
                    })
                }
            </FirstSession>

            <SecondSession>
                <div>
                    <img src={whiteLogo} alt="logo iniciativa íris versão branca"/>
                </div>

                <h1> Outros Tópicos </h1>

                <OtherTopicsList>
                    {
                        otherTopics.map((ot, idx) => {
                            return (
                                <li key={idx}>
                                    {ot.name}
                                </li>);
                        })
                    }
                </OtherTopicsList>
            </SecondSession>

        </Container>
    );
}

//Styled Components
const Container = styled.div`
    position: sticky;
    top: 20px;
    width: fit-content;
    height: fit-content;
`;

const Title = styled.div`
    color: #000000;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 36px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    span {
        color: #FF408E;
        margin-left: 6px;
    }
`;

const Suggestions = styled.li`
    display: flex;
    gap: 20px;

    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        background: #E6E6E6;
        border-radius: 3px;
    }

    
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #000000;

        span {
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 16px;

            img {
                width: 30px;
            }
        }

        h2 {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            width: fit-content;
            display: flex;
            align-items: center;

            &:hover {
                color: #FF408E;
                cursor: pointer
            }
        }

    }
`;

const OtherTopicsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 21px;
    width: 100%;
    padding-left: 10%;

    li {
        width: fit-content;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
`;

const FirstSession = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 378px;
    margin-bottom: 80px;
`;

const SecondSession = styled.div`
    background: #0081CC;
    width: 210px;
    height: 265px;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    div {
        position: absolute;
        width: 75px;
        height: 75px;
        left: 71px;
        top: -37px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;

        img {
            width: 55px;
            height: 55px;
        }
    }

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 36px;
        display: flex;
        align-items: center;
        margin-top: 55px;
        margin-bottom: 30px;
    }
`;

