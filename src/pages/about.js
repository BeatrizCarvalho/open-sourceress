import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o blog de tecnologia Open Sourceress e afins."
    />
    <MainContent>
      <h1>Sobre o blog Open Sourceress</h1>
      <p>
        Olá sou Beatriz Carvalho Sou Engenheira de Computação pela{" "}
        <a href="http://novoportal.unipampa.edu.br/novoportal/">Unipampa</a> no
        campus Bagé/Rio Grande do Sul. Gosto de algumas poções (vinhos), brincar
        de alquimia (drinks) e gatos.
      </p>
      <p>
        Trabalho com C/C++, Python e estou aprendendo JavaScript, CSS e afins
        para criar esse site.... Também gosto Harry Potter, Senhor dos Anéis,
        One Piece, The Witcher...
      </p>
      <p>
        Depois de muitos estudos e desafios que tive enquanto estava tentando
        fazer o mestrado com a orientação da professora{" "}
        <a href="http://www.ic.unicamp.br/~islene/">Islene Garcia</a>. Como eu
        queria tentar juntar o melhor dos dois mundos, acadêmico e comunidade do
        Software Livre, pensamos em trabalhar com o Linux Kernel.
      </p>
      <p>
        Na época surgiu a ideia de criar o blog com o intuito ajudar outras
        meninas (e não somente elas, é claro!) a se aventurarem nesse mundo da
        tecnologia!!!! Assim nasceu o Open Sourceress, por enquanto começarei a
        postar a minha caminhada no universo do Linux kernel, o que tenho
        estudado, o que tenho aprendido, também apresentar outros projetos
        relacionados ao Software Livre e qualquer outra coisa que surgir no meio
        do caminho será colocado aqui... e talvez em um futuro, tenhamos outras
        pessoas colaborando com o blog.
      </p>
      <h2>Contato</h2>

      <p>
        Se tiveres interesse em colabora com o blog ou quiseres entrar em
        contato comigo, fique a vontade. Você pode entrar em contato comigo
        através de qualquer uma das minhas redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
