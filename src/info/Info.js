import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import icone from "../img/letter-m.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Márleo",
    lastName: "Piber",
    // initials: "MPR",
    initials: <img src={icone} />, // the example uses first and last, but feel free to use three or more if you like.
    position: " Desenvolvedor Frontend",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👩‍💻',
            text: 'Trabalho com tecnologia há mais de 15 anos'
        },
        {
            emoji: '🌎',
            text: 'Moro no Rio Grande do Sul, Brasil'
        },
        {
            emoji: "💼",
            text: "Determinado a alcançar novas oportunidades e desafios como desenvolvedor."
        },
        {
            emoji: "📧",
            text: "marleopr@hotmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/marleopr",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/marleopiber/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://whats.link/marleopr",
            icon: "fa fa-whatsapp",
            label: 'whatsapp'
        },
        {
            link: "https://www.youtube.com/c/marleopr",
            icon: 'fa fa-youtube',
            label: 'youtube'
        },
        {
            link: "https://www.instagram.com/marleopr/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Olá! Eu sou o Márleo Piber da Rosa, sou um desenvolvedor frontend com formação em Análise e Desenvolvimento de Sistemas e experiência como desenvolvedor na empresa GestãoDS. Com uma sólida base técnica e um background de 15 anos em manutenção de hardwares e softwares, fiz uma transição de carreira para seguir minha paixão pelo desenvolvimento. Sou proativo, comprometido e estou sempre atualizado com as últimas tendências tecnológicas. Busco novas oportunidades para aplicar meus conhecimentos, colaborar em projetos desafiadores e impulsionar a inovação.",
    skills:
    {
        proficientWith: ['GIT', 'Github', 'GitLab', 'JavaScript', 'React', "NextJS", 'HTML5', 'CSS3', 'TypeScript', 'Node', 'MySQL', 'AWS', 'express', 'knex'],
        exposedTo: ['Adobe Photoshop', 'Adobe Premiere', 'Adobe Ligthroom', 'Adobe Illustrator', 'Figma', 'Material UI', 'Chakra UI']
    }
    ,
    hobbies: [
        {
            label: 'Novas habilidades como desenvolvedor',
            emoji: '💻'
        },
        {
            label: 'Drones',
            emoji: '🚁'
        },
        {
            label: 'Fotografia',
            emoji: '📷'
        },
        {
            label: 'Astronomia',
            emoji: '🌠'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Filmes Populares - Case Frontend Promobit",
            live: "http://filmes-marleo.surge.sh/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/marleopr/rodada-cases-1-frontend-filmes-populares-promobit", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Pizza Delivery - Case Full Stack Ambulnz",
            live: "http://ec2-3-88-84-198.compute-1.amazonaws.com:3000/",
            source: "https://github.com/marleopr/ambulnz-front",
            image: mock2
        },
        {
            title: "LabeFoods - Projeto Frontend",
            live: "https://labefoods-alves5.surge.sh/",
            source: "https://github.com/marleopr/LabeFoods",
            image: mock3
        },
        {
            title: "Pokedex - Projeto Frontend",
            live: "https://pokedex-alves1.surge.sh/",
            source: "https://github.com/marleopr/Pokedex",
            image: mock4
        },
        {
            title: "Veja mais em meu Github!",
            live: "https://github.com/marleopr",
            source: "https://github.com/marleopr",
            image: mock5
        }
    ],
    experiences: [
        {
            empresa4: "GestãoDS",
            cargo4: "Desenvolvedor FrontEnd",
            funcao4: "Atuando como desenvolvedor em um squad especializado em Bugs N3 e desenvolvimento de melhorias no sistema da empresa, utilizando metodologias ágeis.",
            tecnologias4: "Vivenciado tecnologias como JavaScript, React, Node, Git e Gitlab.",
            periodo4: "Dez/2022 - JUL/2023"
        },
        {
            empresa3: "Microempreendedor individual",
            cargo3: "SUPORTE DE TI",
            funcao3: "Experiência autônoma (MEI) em suporte e manutenção de computadores, bem como gerenciamento de redes. Além disso, tenho habilidades em publicidade, produzindo imagens institucionais e eventos de destaque.",
            tecnologias3: "Utilizando ferramentas como Adobe Photoshop, Lightroom, Premiere Pro e possuo conhecimento na operação de drones profissionais.",
            periodo3: "Mar/2019 - Dez/2022"
        },
        {
            empresa2: "Base Aérea de Santa Maria - Força Aérea Brasileira",
            cargo2: "Militar",
            funcao2: "Atuei nos setores de informática, relações públicas e saúde, desempenhando funções de suporte de TI, edições na página da guarnição e auxiliar administrativo. bem como realizar atendimento ao público interno e externo.",
            periodo2: "Mar/2011 - Mar/2019"
        },
        {
            empresa1: "JaguariNet",
            cargo1: "Técnico",
            funcao1: "Atuei no suporte técnico de redes de internet e gerenciamento do sistema do provedor de internet.",
            periodo1: "Jan/2010 - Fev/2011"
        },
    ]
}