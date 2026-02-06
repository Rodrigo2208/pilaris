# 🌟 Pilaris

**A rede profissional do futuro**

Pilaris é uma plataforma que conecta profissionais CLT e PJ com empresas que crescem. Mostre seu talento, encontre seu caminho.

## 🚀 Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+ Modules)
- **Backend**: Firebase (Authentication + Firestore)
- **Hospedagem de Imagens**: ImgBB
- **Fontes**: Google Fonts (Outfit + DM Sans)

## ✨ Funcionalidades

### Para Usuários (CLT/PJ)
- ✅ Cadastro e login simplificado
- ✅ Perfil personalizável com foto, bio, skills
- ✅ Experiência profissional e formação
- ✅ Status de busca de emprego
- ✅ Feed de posts com fotos
- ✅ Curtir e comentar posts
- ✅ Seguir outros profissionais
- ✅ Busca com filtros avançados

### Para Empresas
- ✅ Perfil corporativo
- ✅ Área de atuação customizável
- ✅ Posts sobre cultura da empresa
- ✅ Busca de profissionais
- ✅ Sistema de contato

### Sistema Social
- ✅ Feed em tempo real
- ✅ Curtidas instantâneas (sem reload)
- ✅ Comentários com respostas
- ✅ Badge "Autor" nos comentários
- ✅ Denunciar posts/comentários
- ✅ Editar e excluir posts próprios
- ✅ Compartilhar posts

## 📦 Estrutura do Projeto

```
pilaris/
├── index.html           # Landing page
├── login.html          # Login (CORRIGIDO)
├── cadastro.html       # Registro
├── feed.html           # Feed principal
├── perfil.html         # Página de perfil
├── postar.html         # Criar post
├── pesquisa.html       # Busca
├── styles.css          # Estilos globais
├── firebaseConfig.js   # Config Firebase
├── utils.js            # Funções utilitárias
└── README.md           # Este arquivo
```

## 🎨 Design System

### Cores
- **Roxo Principal**: `#6c2bd9`
- **Roxo Claro**: `#9b59f5`
- **Lilás**: `#c9a0ff`
- **Branco**: `#ffffff`
- **Off-white**: `#f5f0fa`

### Tipografia
- **Display**: Outfit (700-800)
- **Body**: DM Sans (300-500)

## 🔧 Como Usar Localmente

### 1. Baixe os arquivos
```bash
git clone https://github.com/seu-usuario/pilaris.git
cd pilaris
```

### 2. Inicie um servidor local

**Opção A - Python:**
```bash
python -m http.server 3000
```

**Opção B - Node.js:**
```bash
npx http-server -p 3000
```

**Opção C - VS Code:**
Use a extensão "Live Server"

### 3. Acesse
Abra `http://localhost:3000` no navegador

## 🌐 Deploy para Produção

Veja instruções detalhadas em: [`DEPLOY_INSTRUCTIONS.md`](DEPLOY_INSTRUCTIONS.md)

Opções gratuitas:
- **GitHub Pages** (recomendado)
- **Netlify**
- **Vercel**
- **Firebase Hosting**

## 🐛 Correções Aplicadas

### ✅ Login Corrigido (Crítico)
**Problema**: `onAuthStateChanged` bloqueava login
**Solução**: Removido auto-redirect durante login

### ✅ Outras Melhorias
- Likes em tempo real (sem reload)
- Sistema de comentários aninhados
- Badge de autor em comentários
- Denúncia de comentários
- Vídeos removidos (apenas fotos)

## 📱 Responsividade

O site é 100% responsivo:
- **Desktop**: Layout com sidebar
- **Tablet**: Layout adaptativo
- **Mobile**: Menu hambúrguer, cards empilhados

## 🔐 Segurança

- Autenticação via Firebase Auth
- Validação frontend e backend
- Proteção contra XSS
- Rate limiting no Firebase

## 📊 Estrutura de Dados (Firestore)

### Collection: `perfis`
```javascript
{
  uid, nome, email, telefone, role,
  fotoURL, bio, skills: [],
  experience: [], education: [],
  jobStatus, seguidores: [], seguindo: [],
  criadoEm
}
```

### Collection: `posts`
```javascript
{
  userId, texto, mediaURL, mediaType,
  likes: 0, likedBy: [],
  comments: [{
    autorId, autorNome, texto,
    likes: 0, likedBy: [],
    replies: [], criadoEm
  }],
  criadoEm
}
```

## 🤝 Contribuindo

Pull requests são bem-vindos! Para mudanças importantes:
1. Abra uma issue primeiro
2. Fork o projeto
3. Crie sua branch (`git checkout -b feature/NovaFuncionalidade`)
4. Commit suas mudanças
5. Push para a branch
6. Abra um Pull Request

## 📝 Licença

MIT License - veja LICENSE para detalhes

## 👨‍💻 Autor

Desenvolvido com 💜 para conectar talentos e oportunidades

---

**Pilaris** - Conecte. Cresça. Conquiste. 🚀
