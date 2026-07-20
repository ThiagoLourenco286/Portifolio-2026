/** biome-ignore-all lint/performance/noImgElement: <Imagens> */
import { Plus } from "lucide-react";
import Link from "next/link";
import ImageLightbox from "../../../components/image-light-box";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:flex md:flex-row">
      <div className="flex flex-col gap-8">
        <div className=" flex flex-col gap-6 py-5 items-center px-5 relative bg-tech-card border border-tech-border rounded-2xl md:w-242.5 md:h-72 md:flex md:flex-row">
          <img src={'/assets/FotoPerfil.jpeg'} alt="Foto Perfil" className="h-46 w-46 rounded-full object-cover border border-tech-border" />

          <div className="flex flex-col gap-5 font-mono md:w-162.5">
            <h1 className="text-3xl uppercase">Thiago Lourenço de Oliveira</h1>
            <p className="text-tech-secundary">Olá, prazer eu sou o Thiago, tenho 23 anos e atualmente estudo Analise e Desenvolvimento de Sistemas.
              Estou em busca da minha primeira oportunidade como desenvolvedor, estudo sobre a area a dois anos. <br />
              Trabalho com logistica e quero fazer essa transição de carreira.<br />
              Espero que esse portifolio possa mostrar um pouco sobre mim e minhas compentencias!
            </p>
          </div>

          <Link href='/assets/curriculo.pdf' target="_blank" rel="noopener noreferrer" className="h-10 w-fit bg-tech-accent-blue/40 uppercase text-sm absolute md:bottom-3 right-5 flex items-center px-3 rounded-md ">currículo</Link>
        </div>

        <div className="flex flex-col gap-8 md:flex md:flex-row">
          <div className="bg-tech-card border border-tech-border rounded-2xl py-5 flex flex-col items-center gap-8 md:w-117.5 md:h-103">
            <h2 className="text-2xl font-mono">Competências</h2>

            <div className=" grid grid-cols-3 gap-10">
              <Icons src="/assets/logos/react.svg" alt="react" />
              <Icons src="/assets/logos/github-dark.svg" alt="github" />
              <Icons src="/assets/logos/nodedotjs.svg" alt="nodejs" />
              <Icons src="/assets/logos/nextdotjs.svg" alt="nextjs" />
              <Icons src="/assets/logos/postgresql.svg" alt="postgres" />
              <Icons src="/assets/logos/database.svg" alt="database" />
            </div>

            <Link href={'/Competencias'} className="flex items-center text-tech-accent-blue/40 underline">
              Veja Mais
              <Plus className="h-4" />
            </Link>
          </div>

          <div className="bg-tech-card border border-tech-border rounded-2xl flex flex-col items-center py-5 gap-10 md:gap-3 md:w-117.5 md:h-103">
            <h2 className="text-2xl font-mono">Projetos em Destaque</h2>

            <div className="w-11/12 h-40 flex items-center gap-3">

              <ImageLightbox src="/assets/projetos/ironpulse.png" alt="Ironpulse" layoutId="Ironpulse" className="md:w-175 md:h-36" />

              <div className="flex flex-col gap-3">
                <h4 className="uppercase">IronPulse</h4>
                <p className="text-xs">Sistema para gerenciamento de uma Academia.</p>

                <Link href={'https://github.com/ThiagoLourenco286/Sitema-Academia-Front-end'} target="_blank" className="text-xs text-tech-accent-blue/50 underline ">
                  Ver codigo
                </Link>
              </div>

            </div>

            <div className="w-11/12 h-40 flex items-center gap-3">
              <ImageLightbox src="/assets/projetos/urbancut.png" alt="" layoutId="Urbancut" className="md:w-175 md:h-36" />

              <div className="flex flex-col gap-3">
                <h4 className="uppercase">Urbancut</h4>
                <p className="text-xs">Sistema para gerenciamento de uma Barbearia.</p>

                <Link href={'https://github.com/ThiagoLourenco286/Sitema-Barbearia-Front-end'} target="_blank" className="text-xs text-tech-accent-blue/50 underline">
                  Ver codigo
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className=" bg-tech-card border border-tech-border rounded-2xl flex flex-col items-center gap-5 py-5 md:w-76 md:h-125" >
          <h2 className="text-[20px] font-mono">Certificados mais recentes</h2>
          <div className="flex flex-col gap-5 px-5">
            <ImageLightbox src="/assets/certificados/postgres.png" alt="" layoutId="CleanCode" className="rounded-lg md:w-160 md:h-45" />
            <ImageLightbox src="/assets/certificados/next.png" alt="" layoutId="NextJs" className="rounded-lg md:w-160 md:h-45" />
          </div>
          <Link href={'/Certificados'} className="text-sm text-tech-accent-blue/50 underline">
            Veja mais
          </Link>
        </div>

        <div className=" bg-tech-card border border-tech-border rounded-2xl p-5 flex flex-col gap-5 md:w-76 md:h-50">

          <h2 className="text-2xl font-mono">Contatos</h2>
          <div className="flex flex-col gap-2">
            <Link href={'https://www.linkedin.com/in/thiago-louren%C3%A7o-291b8b29b/'} target="_blanck" className="flex items-center gap-3">
              <img src={'/assets/logos/linkedin.svg'} alt="" className="h-5" />
              Linkedin
            </Link>
            <Link href={'https://wa.me/5531994366704'} target="_blanck" className="flex items-center gap-3">
              <img src={'/assets/logos/whatsapp.svg'} alt="" className="h-5" />
              Whatsapp
            </Link>

            <Link href={'https://github.com/ThiagoLourenco286'} target="_blanck" className="flex items-center gap-3">
              <img src={'/assets/logos/githubcodespaces.svg'} alt="" className="h-5" />
              GitHub
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
