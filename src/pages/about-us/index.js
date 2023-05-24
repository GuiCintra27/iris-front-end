import { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Background from "../../components/sectionBackground";
import { backgroundsImg } from "../../components/backgroundsImg";
import Guide from "../../components/guide";
import globalPartner from "../../assets/Parceiros/global.png";
import uspPartner from "../../assets/Parceiros/usp.jpg";
import SectionText from "../../components/section-texts";
import { images } from "../../components/founders";

export default function AboutUs({ page }) {
    const [background, setBackground] = useState({});
    const [onSection, setOnSection] = useState(0);
    const guideSections = [
        { name: "Nossa História", background: backgroundsImg.historyBg, position: "0rem 60%" },
        { name: "Missão e Valores", background: backgroundsImg.missionBg, position: "0rem 60%" },
        { name: "Parceiros", background: backgroundsImg.partnersBg, position: "0rem 70%" },
        { name: "Fundadores", background: backgroundsImg.foundersBg, position: "50% 60%" }
    ];
    const sections = [
        {
            title: "Nossa História", paragraphs: [
                { text: "Ser uma pessoa LGBTQIA+ no Brasil não é fácil. Segundo o Grupo Gay Bahia, o Brasil é o país que mais mata pessoas LGBTQIA+ do mundo. De acordo com o levantamento do coletivo #VoteLGBT, a taxa de depressão entre pessoas da comunidade é quatro vezes maior do que a do público geral e, ainda pelo mesmo mapeamento, a taxa de desemprego entre pessoas LGTBQIA+ é quase o dobro que o índice geral do Brasil. Além de tudo isso, o preconceito enraizado faz com que as pessoas queer sejam negligenciadas por políticas públicas e vivam em ambientes hostis." },
                { text: "Foi pensando nisso que cinco jovens do ensino médio, Cauã Rodrigues, Francisco Azar, Luís Gustavo Moreira, Luma Rios e Luiza Brant, decidiram iniciar um projeto que fosse fazer a diferença no presente. Assim, a Iniciativa Íris surgiu para diminuir as lacunas sociais que marginalizam a população LGBTQIA+ brasileira." },
                { text: "Na iniciativa busca-se capacitar jovens em todas as vertentes úteis para seu desenvolvimento intrapessoal, acadêmico e profissional, buscando oferecer o conhecimento e os meios necessários para que esses jovens explorem seus interesses e sucedam nos seus objetivos. Assim, em março de 2021, a Iniciativa começou a ser idealizada e, um mês depois, outros 22 integrantes se uniram ao time para a criação do primeiro ciclo de mentoria. " },
                { text: "Hoje mais de 50 voluntários e 46 estudantes já passaram pela iniciativa. A organização já contou com presenças de convidados ilustres como Rita Von Hunty e Dimitra Vulcana. O impacto do programa de mentoria é visto pela grande quantidade de histórias de transformação e desenvolvimento de habilidades, levando a números como 10 milhões de reais acumulados em bolsas de estudo. Embora a luta esteja longe do fim, a Iniciativa lidera um importante movimento para tornar o Brasil um lugar mais acolhedor para pessoas LGBTQIA+." }
            ]
        },
        {
            title: "Missão e valores", paragraphs: [
                { subtitle: "Nossa missão", text: "Construir espaços que valorizam e estimulam o diálogo, a inclusão e o senso crítico para potencializar pessoas LGBTQIA+." },
                { subtitle: "Nossa visão", text: "Tornar-se referência de acolhimento, conexão e desenvolvimento de pessoas LGBTQIA +, promovendo a pluralidade de identidades em espaços diversos." },
            ]
        },
        {
            title: "Parceiros", paragraphs: [
                { subtitle: "Global Changemakers", image: globalPartner, text: "A Global Changemakers é uma ONG internacional que auxilia projetos liderados pelos jovens mais promissores ao redor do planeta. No mês do orgulho LGBTQIA+, em junho de 2022, a iniciativa se juntou a Global para promover conteúdos educativos sobre a comunidade LGBTQIA+ em escala global. Além disso, a iniciativa ainda recebeu o auxílio para a “Gestão de Projetos e Pessoas” provido pela Yasmin, uma das coordenadoras da Global.”" },
                { subtitle: "Universidade de São Paulo — USP", image: uspPartner, text: "A parceria acontece através de um convênio firmado com o Instituto de Psicologia Escolar da USP. O objetivo é avaliar o impacto de um ambiente educacional não-tradicional nos jovens mentorados. Para isso, uma estagiária acompanha todo o processo de formação do currículo educacional, processos internos da Íris e depoimentos de jovens orientandos do ciclo da Comunidade Íris 2021." }
            ]
        },
        {
            title: "Fundadores", founders: [
                { name: "Cauã Rodrigues", image: images.caua, function: "Fundador", text: "Cauã, de São Gonçalo - Rio de Janeiro, foi o primeiro de sua família a ingressar numa universidade. Hoje, ele estuda Ciências Políticas e Desenvolvimento Humano e Organizacional em Vanderbilt University, nos Estados Unidos. Antes de fundar a Íris, participou de outras oportunidades como a Academia de Liderança Latino-Americana, onde decidiu que deveria fazer mais para ajudar a sua comunidade. Assim, Cauã busca se capacitar academicamente e acumular experiências para trazer uma mudança estrutural na forma que a população brasileira trata pessoas negras e LGBTQIA+." },
                { name: "Luiza Brant", image: images.luiza, function: "Fundadora", text: "Natural de Belo Horizonte, Luiza tem 17 anos e é a fundadora mais jovem da Iniciativa Íris. Atualmente viaja o mundo com a sua escola THINK Global School, na qual desenvolve habilidades do século 21 por meio de um currículo escolar 100% baseado no aprendizado através de projetos práticos. Na Íris, Luiza também coordena a equipe de recursos humanos e em sua trajetória acumula uma série de atividades na área de impacto social na América Latina." },
                { name: "Francisco Azar", image: images.francisco, function: "Fundador", text: "Francisco foi um dos fundadores originais da Íris em 2021. Hoje em dia, é estudante em Dartmouth College com a intenção de se formar tanto Governo como Estudos de Mídias e Filme. Depois de fundar a Íris, se afastou por conta de sua mudança para a Índia por dois anos, onde estudou no programa do Bacharelado Internacional. No futuro planeja atuar na área de conquista de direitos humanos, mais especificamente direitos queer, em países em desenvolvimento." },
                { name: "Luma Rios", image: images.luma, function: "Fundadora", text: "Tendo migrado para várias regiões do Brasil, sua ultima estadia antes de embarcar para Noruega estudar em um dos colégios da United World College , foi Natal - RN. Ativista política e extremamente engajada na participação da sociedade civil como forma de transformar o presente em um lugar melhor, Luma Rios, é responsável por coordenar os designs e time de redes sociais em conjunto com Luis." },
                { name: "Luis Gustavo", image: images.luis, function: "Fundador", text: "Estudante de jornalismo pela Universidade Federal do Rio de Janeiro, Luis vem de Albertina — uma cidade de apenas três mil habitantes no sul de Minas Gerais. Antes de fundar a Íris, atuou no mundo do voluntariado em projetos voltados à educação e capacitação de jovens. Nos veículos jornalísticos em que trabalha atualmente, cobre temas voltados à diversidade, direitos humanos, cultura e segurança pública." },
            ]
        }
    ];

    return (
        <>
            <Header page={page} />

            <Background name={background.name} background={background.background} position={background.position} />

            <MainSection>
                <Guide setBackground={setBackground} sections={guideSections} onSection={onSection} setOnSection={setOnSection} />

                <div id="Container">
                    {sections.map((item, index) => <SectionText key={index} title={item.title} paragraphs={item.paragraphs} founders={item.founders} onSection={onSection} index={index} />)}
                </div>
            </MainSection>

            <Footer />
        </>
    );
}

const MainSection = styled.div`
    display: flex;    
    margin-bottom: 8rem;
`;
