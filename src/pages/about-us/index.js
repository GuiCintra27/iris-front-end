import { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Background from "../../components/sectionBackground";
import { backgroundsImg } from "../../components/backgroundsImg";
import Guide from "../../components/guide";
import pinheiroPartner from "../../assets/Parceiros/pinheiroNeto.png";
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
                { text: "Ser uma pessoa LGBTQIA+ no Brasil não é fácil. Segundo o Grupo Gay Bahia, moramos no país que mais mata pessoas LGBTQIA+ do mundo, de acordo com o levantamento do coletivo #VoteLGBT, a taxa de depressão entre pessoas da comunidade é quatro vezes maior do que a do público geral e, ainda pelo mesmo mapeamento, a taxa de desemprego entre pessoas LGTBQIA+ é quase o dobro que o índice geral do Brasil. Além de tudo isso, o preconceito enraizado faz com que sejamos negligenciados por políticas públicas e tenhamos afeto negado e a autodepreciação incentivada." },
                { text: "Foi pensando nisso que cinco jovens do ensino médio, Cauã Rodrigues, Francisco Azar, Luís Gustavo Moreira, Luma Rios e Luiza Brant, decidiram iniciar um projeto que fosse fazer a diferença no presente, surgindo assim a Iniciativa Íris." },
                { text: "Em nossa iniciativa, buscamos capacitar jovens em todas as vertentes úteis para seu desenvolvimento intrapessoal, acadêmico e profissional, buscando oferecer o conhecimento e os meios necessários para que esses jovens explorem seus interesses e sucedam nos seus objetivos. Assim, em março de 2021, a Iniciativa começou a ser idealizada e, um mês depois, outros 22 integrantes se uniram ao time para que o programa de mentoria, conteúdo do instagram e outras atividades começassem a ser organizadas e colocadas em prática." },
                { text: "Hoje já atingimos diretamente mais de 1800 pessoas, promovemos encontros com grandes lideranças políticas LGBTQIA+, realizamos nossa mentoria capacitando 30 jovens com instrumentos e conhecimento para perseguir oportunidades acadêmicas e profissionais, além de estimular o afeto, autoconhecimento e acolhimento consigo mesmos e para com outros. Ademais, ainda conectamos 43% dos jovens selecionados com psicólogos voluntários, e presenteamos um terço dos mentorados com uma vaga numa mentoria de idiomas gratuita, a  Wanderlust." }
            ]
        },
        {
            title: "Nossa Missão e valores", paragraphs: [
                { subtitle: "Nossa missão", text: "Construir espaços que valorizam e estimulam o diálogo, a inclusão e o senso crítico para potencializar pessoas LGBTQIA+." },
                { subtitle: "Nossa visão", text: "TTornar-se referência de acolhimento, conexão e desenvolvimento de pessoas LGBTQIA +, promovendo a pluralidade de identidades em espaços diversos." },
            ]
        },
        {
            title: "Parceiros", paragraphs: [
                { subtitle: "Pinheiro Neto", image: pinheiroPartner, text: "A Pinheiro Neto, o maior escritório de advocacia do Brasil, se uniu a Iniciativa Íris para prestar todo o apoio jurídico necessário para a formalização legal da organização como ONG. A parceria começou no início de 2021 e continua ativa até o momento." },
                { subtitle: "Global Changemakers", image: globalPartner, text: "A Global Changemakers é uma ONG internacional que auxilia projetos liderados pelos jovens mais promissores ao redor do planeta. No mês do orgulho LGBTQIA+, junho, nossa iniciativa se juntou a Global para promover conteúdos educativos sobre a comunidade LGBTQIA+ em escala global. Além disso, nossa iniciativa ainda recebe o auxílio para a gestão de projetos e pessoas provido pela Yasmin, uma das voluntárias da Global." },
                { subtitle: "Universidade de São Paulo — USP", image: uspPartner, text: "A parceria acontece através de um convênio firmado com o Instituto de Psicologia Escolar da USP. O objetivo é avaliar o impacto de um ambiente educacional não-tradicional nos jovens mentorados. Para isso, uma estagiária acompanha todo o processo de formação do currículo educacional, processos internos da Íris e depoimentos de jovens orientandos do ciclo da Comunidade Íris 2021." }
            ]
        },
        {
            title: "Fundadores", founders: [
                { name: "Cauã Rodrigues", image: images.caua, function: "Presidente e Coordenador de Relações Públicas", text: "Cauã Rodrigues nasceu em Niterói e migrou por diversas casas e cidades até se fixar em Cabo Frio - RJ, onde estuda no IFRJ. Na iniciativa tem o papel de coordenador de Relações Públicas. Tem na sua bagagem o vice-campeonato nacional do maior torneio de debate da história do Brasil, experiência como recrutador do Prep Change, pesquisa pela FAPERJ e  aprovação na Academia de Liderança Latino-Americana (LALA) e programa de debate de Yale." },
                { name: "Luiza Brant", image: images.luiza, function: "Presidente e Coordenadora de Recursos humanos", text: "Luiza Brant, a fundadora mais nova da Iniciativa, tem 16 anos, é natural de Belo Horizonte - MG e hoje estuda na Think Global School. Atualmente, coordena o departamento de Recursos Humanos. Durante sua vida acumula atividades de impacto social e reconhecimentos internacionais, destacam-se sua posição de recrutadora no Prep Change e aprovação na Academia de Liderança Latino-Americana (LALA), programa de verão de Stanford, UWC e EMIS." },
                { name: "Francisco Azar", image: images.francisco, function: "Ex-presidente", text: "Nascido e criado no Rio de Janeiro - RJ, Francisco Azar é o fundador responsável pela facilitação de eventos da iniciativa. Estudando na United World College, foi antes aluno do Colégio Pedro II, fundador da Modelo Intercolegial de Humaitá (Simulação da Onu) e aprovado para a Academia de Liderança Latino-Americana(LALA). Acumula reconhecimentos nacionais e internacionais pela Global Citizen, Brasa e Peace First." },
                { name: "Luma Rios", image: images.luma, function: "Presidente e Coordenadora de Redes Sociais", text: "Tendo migrado para várias regiões do Brasil, sua ultima estadia antes de embarcar para Noruega estudar em um dos colégios da United World College , foi Natal - RN. Ativista política e extremamente engajada na participação da sociedade civil como forma de transformar o presente em um lugar melhor, Luma Rios, é responsável por coordenar os designs e time de redes sociais em conjunto com Luis." },
                { name: "Luis Gustavo", image: images.luis, function: "Presidente e Coordenador de Redes Sociais", text: "Luis Gustavo Moreira nasceu e cresceu na pequena cidade do interior de Minas Gerais, Albertina. Tendo participado de projetos como o Apadrinhaê, Clube de Oportunidades Internacionais e Ciclo da Educação, hoje é responsável por coordenar a equipe de redes sociais com Luma. Seu foco maior é o conteúdo e gerência dos redatores da iniciativa." },
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
`;
