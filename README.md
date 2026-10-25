# O Conselho — Periódico de Intimidade Contemporânea

Implementação visual v0.3, baseada no protótipo v0.2 aprovado.

## Estrutura
- `dist/index.html`: home e seções da edição.
- `dist/caso-001.html`: caso, correspondência, sessão e deliberação.
- `dist/assets/styles.css`: identidade e estilos responsivos.
- `dist/assets/app.js`: menu, prévia local de correspondência e copiar link.
- `dist/assets/*.png`: gravuras do protótipo aprovado.

## Desenvolvimento
Node não é necessário para executar o site. Rode `python3 -m http.server 8080 --directory dist` e abra http://localhost:8080.

## GitHub e Vercel
O projeto está pronto para versionamento. Importe o repositório no Vercel como Other, sem comando de build, com Output Directory `dist`. O `vercel.json` acompanha esta configuração. Não há integração criada com contas GitHub ou Vercel nesta etapa.

## Limites editoriais
Curadoria, coordenação e direção editorial provisórias. Textos de demonstração e falas originais ficcionais, não citações históricas. As cartas não são transmitidas nem persistidas. Não há IA, autenticação ou backend nesta etapa. Fontes Google possuem fallback Georgia/Arial; gravuras são locais.

## Próximas integrações
Separar conteúdo em coleção editorial quando houver CMS; substituir a prévia por endpoint apenas com contrato de privacidade e persistência definidos. Preservar HTML semântico e URLs dos casos.
