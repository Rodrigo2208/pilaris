# 🚀 Pilaris - Instruções de Deploy

## Arquivos do Projeto

Todos os arquivos necessários estão incluídos:

### Páginas HTML:
- `index.html` - Página inicial
- `login.html` - Login (CORRIGIDO - agora funciona!)
- `cadastro.html` - Cadastro de usuários
- `feed.html` - Feed principal com posts
- `perfil.html` - Página de perfil
- `postar.html` - Criar novo post
- `pesquisa.html` - Busca de usuários/empresas

### Arquivos de Configuração:
- `firebaseConfig.js` - Configuração do Firebase
- `styles.css` - Estilos globais
- `utils.js` - Funções utilitárias

## 📦 Como Fazer Deploy

### Opção 1: GitHub Pages (Grátis)

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings > Pages
4. Selecione a branch `main` e pasta `/root`
5. Salve e aguarde o deploy

Seu site estará em: `https://seu-usuario.github.io/pilaris`

### Opção 2: Netlify (Grátis)

1. Acesse https://netlify.com
2. Arraste a pasta com todos os arquivos
3. Deploy automático em segundos!

### Opção 3: Vercel (Grátis)

1. Acesse https://vercel.com
2. Importe do GitHub ou arraste os arquivos
3. Deploy instantâneo!

### Opção 4: Firebase Hosting (Grátis)

```bash
# Instale o Firebase CLI
npm install -g firebase-tools

# Faça login
firebase login

# Inicialize o projeto
firebase init hosting

# Faça deploy
firebase deploy
```

## ✅ Correção Aplicada

### Problema de Login RESOLVIDO:
- **Antes**: `onAuthStateChanged` bloqueava o login redirecionando antes do processo completar
- **Agora**: Removido o auto-redirect, login funciona perfeitamente!

## 🔥 Firebase já Configurado

O projeto já está conectado ao Firebase:
- **Authentication**: Login/cadastro funcionando
- **Firestore**: Banco de dados para perfis e posts
- **Storage**: Upload de imagens via ImgBB

## 📋 Funcionalidades Implementadas

✅ Login simplificado (apenas email e senha)
✅ Cadastro com roles (CLT/PJ/Empresa)
✅ Feed com posts (fotos + texto)
✅ Curtidas em tempo real (sem reload)
✅ Comentários com respostas
✅ Badge "Autor" nos comentários
✅ Denunciar posts e comentários
✅ Editar/excluir próprios posts
✅ Perfil com foto, bio, skills, experiência
✅ Seguir/deixar de seguir usuários
✅ Busca integrada no feed
✅ Responsivo (mobile e desktop)

## 🎨 Paleta de Cores

- Roxo principal: #6c2bd9
- Roxo claro: #9b59f5
- Lilás: #c9a0ff
- Branco: #ffffff
- Off-white: #f5f0fa

## 🆘 Suporte

Se tiver problemas:
1. Verifique se todos os arquivos estão na mesma pasta
2. Certifique-se de usar HTTPS (não HTTP)
3. Limpe o cache do navegador
4. Teste em modo anônimo primeiro

Pronto para usar! 🎉
