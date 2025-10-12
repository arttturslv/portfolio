/** @format */

import React from "react";

export default function PoliticaPrivacidade() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 className="text-2xl font-semibold">
        Política de Privacidade - Bolsa Visual
      </h1>

      <p>
        Esta Política de Privacidade descreve como a extensão Bolsa Visual
        coleta, armazena e utiliza informações, bem como as permissões
        necessárias para seu funcionamento. Nosso objetivo é garantir a
        transparência e a segurança dos usuários.
      </p>

      <h2 className="text-lg font-semibold mt-2">
        1. Informações que coletamos
      </h2>
      <p>
        A Bolsa Visual não coleta informações pessoais. A extensão apenas salva
        localmente no navegador os dados que o usuário adiciona nos inputs,
        permitindo que as preferências e critérios de análise sejam mantidos de
        forma prática.
      </p>

      <h2 className="text-lg font-semibold mt-2">
        2. Como utilizamos as informações
      </h2>
      <p>
        As informações armazenadas localmente são utilizadas exclusivamente
        para:
      </p>
      <ul>
        <li>
          Destacar visualmente as melhores ações na lista do site
          Investidor10.com.br;
        </li>
        <li>
          Manter os critérios de análise e preferências do usuário entre
          sessões;
        </li>
        <li>
          Melhorar a experiência de uso da extensão, tornando a visualização
          mais intuitiva.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-2">3. Permissões necessárias</h2>
      <p>
        Para funcionar corretamente, a extensão solicita apenas as permissões
        necessárias:
      </p>
      <ul>
        <li>
          <strong>storage:</strong> salva preferências e critérios do usuário;
        </li>
        <li>
          <strong>scripting:</strong> executa scripts que destacam visualmente
          ações com base nos critérios definidos;
        </li>
        <li>
          <strong>tabs:</strong> detecta se o usuário está no site
          investidor10.com.br e ativa ou desativa a extensão conforme o domínio;
        </li>
        <li>
          <strong>Host permissions:</strong> acesso necessário ao site
          investidor10.com.br para aplicar os destaques visuais.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-2">4. Segurança</h2>
      <p>
        Todos os dados ficam armazenados localmente no navegador do usuário. Não
        usamos servidores externos nem coletamos dados pessoais. Todo o código
        necessário está incluído na extensão; não utilizamos código remoto.
      </p>

      <h2 className="text-lg font-semibold mt-2">5. Uso responsável</h2>
      <p>
        A Bolsa Visual deve ser utilizada apenas para análise pessoal de
        investimentos. Não nos responsabilizamos por decisões financeiras
        tomadas com base na extensão.
      </p>

      <h2 className="text-lg font-semibold mt-2">
        6. Alterações nesta Política
      </h2>
      <p>
        Podemos atualizar esta política de tempos em tempos. Recomendamos que os
        usuários verifiquem periodicamente para estar cientes de quaisquer
        alterações.
      </p>

      <h2 className="text-lg font-semibold mt-2">7. Contato</h2>
      <p>
        Em caso de dúvidas sobre esta política ou sobre a extensão, entre em
        contato:{" "}
        <a className="hover:text-blue-700" href="mailto:artttur@gmail.com">
          contato
        </a>
        .
      </p>
    </main>
  );
}
