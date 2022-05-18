import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/home.module.scss";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

import Image from "next/image";
import techsImage from "../../public/images/techs.svg";
import { WhatsappButton } from "../Components/WhatsappButton";

type Content ={
  titlePart1: string;
  textPart1: string;
  buttonPart1: string;
  imagePart1: string;
  titlePart2: string;
  textPart2: string;
  imagePart2: string;
  titlePart3: string;
  textPart3: string;
  imagePart3: string;
  whatsappNumber: string;
}

interface ContentProps{
  content: Content
}

export default function Home({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>Home | Tekizon</title> 
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.titlePart1}</h1>
            <span>{content.textPart1}</span>
            <a href={content.buttonPart1}>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
          </section>
          <img src={content.imagePart1} alt="Conteúdos da sua empresa" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}> 
          <section>
            <h2>{content.titlePart2}</h2>
            <span>{content.textPart2}</span>
          </section>
          <img src={content.imagePart2} alt="Conteúdos desenvolvimento de Apps" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}> 
          <img src={content.imagePart3} alt="Conteúdos desenvolvimento de aplicações Web" />
          <section>
            <h2 className={styles.secondImage}>{content.titlePart3}</h2>
            <span>{content.textPart3}</span>
          </section>
        </div>

        <hr className={styles.divisor} />

        <div className={styles.nextLevelContent}>
          <Image src={techsImage} alt="Tecnologias" />
          <h2><span className={styles.alunos}>Milhares</span> de empresas já elevaram seu negócio ao próximo nivel.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a>
            <button>COMEÇAR AGORA!</button>
          </a>
        </div>
        <WhatsappButton link={content.whatsappNumber} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at("document.type", "home")
  ]);

  const responseTwo = await prismic.query([
    Prismic.Predicates.at("document.type", "whatsapp")
  ]);
  
  const {
    parte1_titulo, parte1_texto, parte1_botao, parte1_imagem,
    parte2_titulo, parte2_texto, parte2_imagem,
    parte3_titulo, parte3_texto, parte3_imagem,
  } = response.results[0].data;

  const { whatsapp_number } = responseTwo.results[0].data;

  const content = {
    titlePart1: RichText.asText(parte1_titulo),
    textPart1: RichText.asText(parte1_texto),
    buttonPart1: parte1_botao.url,
    imagePart1: parte1_imagem.url,
    titlePart2: RichText.asText(parte2_titulo),
    textPart2: RichText.asText(parte2_texto),
    imagePart2: parte2_imagem.url,
    titlePart3: RichText.asText(parte3_titulo),
    textPart3: RichText.asText(parte3_texto),
    imagePart3: parte3_imagem.url,
    whatsappNumber: RichText.asText(whatsapp_number),
  }

  return{
    props:{
      content
    },
    revalidate: 60 * 5
  }
}