# Comandos úteis para rodar, subir e publicar o CondoHub

# Instalar dependências do frontend
npm install

# Rodar o frontend localmente
npm start

# Build de produção
npm run build

# Inicializar repositório git
# (Execute apenas se ainda não estiver versionado)
git init
git add .
git commit -m "Estrutura inicial CondoHub"

# Subir para o GitHub
# (Troque <url-do-repo> pelo seu repositório)
git remote add origin <url-do-repo>
git push -u origin main

# Instalar dependências do backend Firebase Functions
cd functions
npm install

# Deploy do backend Firebase
firebase deploy --only functions

# Deploy do frontend Firebase Hosting
firebase deploy --only hosting

# Rodar testes
npm test

# Outras dicas
# - Configure variáveis do Firebase em .env.local
# - Use o requirements.txt para instalar dependências do backend se usar Python
