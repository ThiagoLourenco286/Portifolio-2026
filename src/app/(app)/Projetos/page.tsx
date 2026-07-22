/** biome-ignore-all lint/performance/noImgElement: <> */
import { Projetos } from "@/components/projetos";
import { LinkIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
    title: 'Projetos',
};

export default function ProjetosPage() {
    return (
        <div className="flex flex-col">
            <div className="grid gap-5 md:grid md:grid-cols-2">
                <Projetos src="/assets/projetos/ironpulse.png" alt="Ironpulse" title="Ironpulse"
                    descricao="Projeto se trata de um sistema voltado para gestão de uma academia, com todas as funções de GRUD.
                    Nesse sistema a pessoa tem um login unico, com todas as verificações necessarias.
                    É separada por ADMIN e outras funções, podemos assim criar cadastro para novos alunos, deletar, fazer atualizações, criar novas fichas de treino, criar novos planos e categorias para gestão"
                    href="https://github.com/ThiagoLourenco286/Sitema-Academia-Front-end"
                    techs={[
                        { src: "/assets/logos/react.svg", alt: "react" },
                        { src: "/assets/logos/tailwind-css.svg", alt: "tailwind" },
                        { src: "/assets/logos/typescript.svg", alt: "typscript" },
                        { src: "/assets/logos/nodedotjs.svg", alt: "node" },
                        { src: "/assets/logos/jwt.svg", alt: "jwt" },
                        { src: "/assets/logos/postgresql.svg", alt: "postgresql" },
                    ]} />


                <Projetos src="/assets/projetos/urbancut.png" alt="Urbancut" title="Urbancut"
                    descricao="Projeto se trata de um sistema voltado a gestão de uma barbearia, com todas as funções de GRUD.
                    Nesse sistema a pessoa pode administrar os agendamentos, cadastrar novos barbeiros, deletar e atualizar cadastros, agendamentos, criar novas modalidades para a barbearia.
                    Projeto muito bom para crescimento de novas"
                    href="https://github.com/ThiagoLourenco286/Sitema-Barbearia-Front-end"
                    techs={[
                        { src: "/assets/logos/react.svg", alt: "react" },
                        { src: "/assets/logos/tailwind-css.svg", alt: "tailwind" },
                        { src: "/assets/logos/typescript.svg", alt: "typscript" },
                        { src: "/assets/logos/nodedotjs.svg", alt: "node" },
                        { src: "/assets/logos/jwt.svg", alt: "jwt" },
                        { src: "/assets/logos/postgresql.svg", alt: "postgresql" },
                    ]} />

                <Projetos src="/assets/projetos/land.png" alt="Landing Page Urbancut" title="Landing Page Urbancut"
                    descricao="Uma landing page simples para ter um visual de entrada para os clientes. Focado para demonstrar sobre uma barbearia ficticia e chamar atenção dos clinentes."
                    href="https://github.com/ThiagoLourenco286/Landing-Page-Urbancut"
                    techs={[
                        { src: "/assets/logos/react.svg", alt: "react" },
                        { src: "/assets/logos/tailwind-css.svg", alt: "tailwind" },
                        { src: "/assets/logos/typescript.svg", alt: "typscript" },
                    ]} />
                <Projetos src="/assets/projetos/estiloShoes.png" alt="Estilo Shoes" title="Estilo Shoes"
                    descricao="Projeto se trata de uma landing page, para divulgação de tenis.
                        Projeto criado para ajudar um colega que tem uma loja de revenda
                        de tenis. Foi ultilizado react/next js para a criação dessa
                        landing page, também foi ultilizado tailwind css para a parte de
                        estilização e responsividade."
                    href="https://github.com/ThiagoLourenco286/Estilo-Shoes/tree/master"
                    techs={[
                        { src: "/assets/logos/react.svg", alt: "react" },
                        { src: "/assets/logos/tailwind-css.svg", alt: "tailwind" },
                        { src: "/assets/logos/typescript.svg", alt: "typscript" },
                    ]} />

                <Projetos src="/assets/projetos/memorygame.png" alt="Memory Game" title="Memory Game"
                    descricao="Jogo da memoria , projeto criado no curso do Programador Br, no
                            curso ja tinhamos criado esse jogo utilizando HTML, CSS e
                            JavaScript, mas migramos ele para o React.
                            Jogo muito divertido para passar o tempo."
                    href="https://github.com/ThiagoLourenco286/MemoryGame-React/tree/master"
                    techs={[
                        { src: "/assets/logos/react.svg", alt: "react" },
                        { src: "/assets/logos/javascript.svg", alt: "javascript" },
                        { src: "/assets/logos/css.svg", alt: "css" },
                    ]} />

                <Projetos src="/assets/projetos/tailwind.png" alt="Interface Dashboard" title="Interface Dashboard"
                    descricao=" Essa interface foi criada no curso da rocketseat, com intuito de
                            aprender sobre o framework Tailwind css. Nessa interface foi
                            utilizada React, Tailwind e Typescript. Projeto muito completo
                            para aprender os conceitos do tailwind e alem disso treinar nas
                            demais ferramentas."
                    href="https://github.com/ThiagoLourenco286/Estudo-Tailwind/tree/master"
                    techs={[
                        { src: "/assets/logos/react.svg", alt: "react" },
                        { src: "/assets/logos/tailwind-css.svg", alt: "tailwind" },
                        { src: "/assets/logos/typescript.svg", alt: "typscript" },
                    ]} />
                <Projetos src="/assets/projetos/login.png" alt="Login" title="Interface de Login"
                    descricao=" Esse projeto foi feito no curso Programador Br, com intuido de
                            criar a parte de login de um usuario. Foi utilizado NodeJs para o
                            back-end, juntamente com a parte de autenticação com o JWT.
                            E na parte de tela dinamica foi utilizado ejs com css."
                    href="https://github.com/ThiagoLourenco286/Projeto-Login-/tree/master"
                    techs={[
                        { src: "/assets/logos/nodedotjs.svg", alt: "node" },
                        { src: "/assets/logos/javascript.svg", alt: "javascript" },
                        { src: "/assets/logos/css.svg", alt: "css" },
                        { src: "/assets/logos/jwt.svg", alt: "jwt" },
                    ]} />

                <Projetos src="/assets/projetos/mural.png" alt="Mural de Avisos" title="Mural de Avisos"
                    descricao=" Esse projeto foi feito no curso Programador Br, com intuido de
                            criar um mural de avisos. Nesse projeto foi utilizado o nodejs
                            para as requisições http, e na parte front-end foi utilizado HTML,
                            CSS e Javascript para interação com o usuario."
                    href="https://github.com/ThiagoLourenco286/Mural-de-Aviso/tree/master/Novo%20Projeto%2027-10"
                    techs={[
                        { src: "/assets/logos/nodedotjs.svg", alt: "node" },
                        { src: "/assets/logos/html5.svg", alt: "html5" },
                        { src: "/assets/logos/javascript.svg", alt: "javascript" },
                        { src: "/assets/logos/css.svg", alt: "css" },
                    ]} />

                <Projetos src="/assets/projetos/links1.png" alt="Monitoramento de Links" title="Monitoramento de Links"
                    descricao=" Esse projeto foi feito no curso Programador Br, com intuido de
                            criar um site que conseguimos adicionar links de diversas
                            plataformas e fazer um monitoramentos de quantos clicks teve certo
                            site. Utilizamos NodeJs com Javascript e no front-end Ejs com Css."
                    href="https://github.com/ThiagoLourenco286/Links/tree/master/Links"
                    techs={[
                        { src: "/assets/logos/nodedotjs.svg", alt: "node" },
                        { src: "/assets/logos/javascript.svg", alt: "javascript" },
                        { src: "/assets/logos/css.svg", alt: "css" },
                    ]} />

                <Projetos src="/assets/projetos/churrasco.png" alt="Churrascometro" title="Churrascometro"
                    descricao=" Esse projeto foi um dos primeiros feitos no curso Programador Br,
                            com intuito de criar um simples site para calcular a quantidade
                            necessaria para um churrasco perfeito. Calculando por Homem,
                            Mulher, Criança e duração media. Utilizado HTML, CSS e
                            JavaScript."
                    href="https://github.com/ThiagoLourenco286/Churrascometro/tree/master/Churrascometro"
                    techs={[
                        { src: "/assets/logos/html5.svg", alt: "html5" },
                        { src: "/assets/logos/css.svg", alt: "css" },
                        { src: "/assets/logos/javascript.svg", alt: "javascript" },
                    ]} />

                <Projetos src="/assets/projetos/socialLinks.png" alt="Midia Social" title="Midia Social"
                    descricao=" Esse projeto foi o primeiro feito no curso Programador Br, com
                            intuito de criar uma Midia Social. 
                            Colocando todas as redes para contato e divulgação. Foi utilizado
                            apenas HTML e CSS."
                    href="https://github.com/ThiagoLourenco286/Social-Links/tree/master/Social%20Links"
                    techs={[
                        { src: "/assets/logos/html5.svg", alt: "html5" },
                        { src: "/assets/logos/css.svg", alt: "css" },
                    ]} />

            </div>
            <Link
                href={"https://github.com/ThiagoLourenco286?tab=repositories"}
                target="_blank"
                className="text-sm font-bold text-slate-100 flex justify-center 
                    pt-12 text-decoration-line: underline gap-2 items-center"
            >
                <LinkIcon className="h-4 w-4" /> Link para projetos sem interface,
                apenas o back-end
            </Link>
        </div>
    );
}
