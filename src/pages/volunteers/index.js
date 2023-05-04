import { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Background from "../../components/sectionBackground";
import { backgroundsImg } from "../../components/backgroundsImg";
import Guide from "../../components/guide";
import SectionText from "../../components/section-texts";

export default function Volunteers({ page }) {
    const [background, setBackground] = useState({});
    const [onSection, setOnSection] = useState(0);
    const guideSections = [
        { name: "Etapas", background: backgroundsImg.stagesBg, position: "0rem 50%" },
        { name: "Requisitos", background: backgroundsImg.requirementsBg, position: "0rem 95%" },
        { name: "Cronogramas", background: backgroundsImg.timelineBg, position: "0rem 70%" },
        { name: "Dúvidas", background: backgroundsImg.doubtsBg, position: "0rem 40%" }
    ];
    const sections = [
        {
            title: "Etapas", paragraphs: [
                { text: "Se você se interessou pelo trabalho da iniciativa e quer nos ajudar a continuar nossas atividades, saiba que abrimos o processo seletivo para os voluntários todo o ano e as etapas são as seguintes:" },
                {
                    textBox: {
                        title: "1ª Etapa", text: [
                            "O candidato precisar ler o edital do processo seletivo vigente e preencher o formulário de inscrição completo, caso cumpra todos os requisitos. Os dois ficarão disponíveis nessa página. Todas as inscrições são revisadas.",
                            "O objetivo deste formulário é mapear os possíveis voluntários, suas motivações, paixões e dados demográficos. Tudo isso para que possamos os conhecer melhor e avaliar se a Iniciativa pode ou não ser um lugar benéfico para o candidato, assim como para entender como eles nos ajudariam a continuar as nossas atividades.",
                            "É nessa etapa que os portfólios são enviados, caso o candidato esteja se candidatando para um dos cargos que os exigem."
                        ], height: "30rem"
                    }
                }, {
                    textBox: {
                        title: "2ª Etapa", text: [
                            "A etapa de entrevistas, também conhecida como conversa de alinhamento é fundamental para darmos voz e rosto para as pessoas mais engajadas com o projeto e que melhor demonstraram suas paixões e motivação no formulário de inscrição.",
                            "Assim, nessa etapa os presidentes e coordenadores selecionam os participantes que apresentaram um ótimo desempenho na etapa do formulário para uma conversa de alinhamento. O principal propósito é analisar os valores do candidato e entender onde a Íris se encaixa nos seus planos.",
                        ], height: "22rem"
                    }
                }, {
                    textBox: {
                        title: "3ª Etapa", text: [
                            "Os entrevistadores, presidentes e coordenadores se unem para uma avaliação final sobre aqueles selecionados para a etapa de entrevista. Em algumas reuniões todos os entrevistados são introduzidos por seu avaliador para a banca final, destacando os pontos fortes, focos de melhoria e dissonâncias com o objetivo da Iniciativa Íris.",
                            "Nessa avaliação interna as decisões de atribuição de cargos é feita e o resultado enviado logo depois.",
                            "Assim, a última etapa para os selecionados é aceitar o cargo e se comprometer com as responsabilidades deste. Depois do aceite, basta aguardar a reunião de boas vindas com todo o time da Iniciativa Íris."
                        ], height: "27rem"
                    }
                },
                { text: "O formulário abaixo é mantido aberto o ano inteiro como um banco de talentos. Algumas carências são identificadas conforme as atividades vão acontecendo, e quando isso ocorre, recorremos ao banco de talentos para encontrar a pessoa certa para suprir aquela necessidade. Por isso encorajamos a preenchê-lo mesmo que o processo seletivo do ano já tenha acabado." },
                { text: "Venha fazer parte da mudança conosco!" },
                { button: { title: "Participe", link: "/volunteers/form" } }
            ]
        },
        {
            title: "Requisitos", paragraphs: [
                {
                    subtitle: "Podem  participar do nosso processo seletivo as pessoas que:", list: [
                        "Tenham 16 anos ou mais;",
                        "Disponham de disponibilidade de 3 a 5 horas semanais;",
                        "Sejam LGBTQIA+;",
                        "Possuam bom conhecimento na área de atuação escolhida ou facilidade de aprender;",
                        "Demonstrem engajamento para cumprir as tarefas designadas pelo coordenador e participar das reuniões da equipe;",
                        "Compromentam-se para cumprir um período de atividades, com duração de 8 meses, na Iniciativa Íris."
                    ]
                },
            ]
        },
        {
            title: "Cronogramas", paragraphs: [
                { subtitle: "Inscrições fechadas", text: "As inscrições para voluntariado no processo seletivo de 2022 já acabaram, mas voltarão a acontecer em 2023. O cronograma será divulgado conjuntamente com o edital." },
                { text: "Caso queira ajudar a Iniciativa com o seu trabalho mesmo nesse período, preencha o formulário do banco de talentos." }
            ]
        },
        {
            title: "Dúvidas", paragraphs: [
                { subtitle: "Para participar é preciso ser uma pessoa assumida?", text: "Não. Entendemos que isso se trata de um assunto muito pessoal e que varia de caso a caso. Não queremos colocar nossa equipe e comunidade em risco, por isso não é necessário que os participantes sejam assumidos." },
                { subtitle: "Existe limite máximo de idade?", text: "Não. O único limite de faixa etária que colocamos é o de ter pelo menos 16 anos de idade." },
                { subtitle: "Não tenho 16 anos, vocês aceitam exceções?", text: "Os casos são avaliados individualmente, mas em regra pessoas abaixo de 16 anos não são aceitas, com exceção daqueles que vem diretamente de um ciclo da Comunidade Íris. Isso acontece porque acreditamos que muitas vezes o programa oferecido na Comunidade Íris seja mais adequado para alguém de idade inferior ao limite. Dessa forma, após passar pela nossa formação, acreditamos que o jovem estará mais apto para desenvolver a função anteriormente desejada." },
                { subtitle: "Para dúvidas mais específicas contate iniciativa.iris@gmail.com ou nos mande mensagem no Instagram @iniciativairis" },
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
