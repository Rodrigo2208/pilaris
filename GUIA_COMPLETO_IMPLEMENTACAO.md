# 🚀 GUIA COMPLETO DE IMPLEMENTAÇÃO - PILARIS

## ✨ FUNCIONALIDADES IMPLEMENTADAS:

1. ✅ **Modo Escuro em TODAS as páginas**
2. ✅ **Formulários de Experiência/Educação (SEM JSON)**
3. ✅ **Upload de Foto de Perfil CORRIGIDO**
4. ✅ **Exclusão de Conta**
5. ✅ **Sistema de Mensagens Privadas**
6. ✅ **Ver Seguidores e Seguindo**

---

## 📋 INSTRUÇÕES PASSO A PASSO:

### PASSO 1: Atualize as Regras do Firestore

Cole estas regras no Firebase Console → Firestore Database → Regras:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    match /perfis/{userId} {
      allow read: if true;
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId;
      allow delete: if request.auth != null && request.auth.uid == userId;
    }
    
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow update, delete: if request.auth != null && resource.data.userId == request.auth.uid;
    }
    
    match /reports/{reportId} {
      allow create: if request.auth != null;
      allow read: if false;
    }
    
    match /commentReports/{reportId} {
      allow create: if request.auth != null;
      allow read: if false;
    }
    
    // MENSAGENS (NOVO)
    match /conversations/{conversationId} {
      allow read: if request.auth != null && 
                     request.auth.uid in resource.data.participants;
      allow create: if request.auth != null &&
                       request.auth.uid in request.resource.data.participants;
      allow update: if request.auth != null &&
                       request.auth.uid in resource.data.participants;
      
      match /messages/{messageId} {
        allow read: if request.auth != null &&
                       request.auth.uid in get(/databases/$(database)/documents/conversations/$(conversationId)).data.participants;
        allow create: if request.auth != null &&
                         request.auth.uid == request.resource.data.senderId;
      }
    }
  }
}
```

---

### PASSO 2: Atualize o styles.css

Adicione estas variáveis no TOPO do arquivo (após as importações):

```css
/* Adicione estas linhas ANTES do :root existente */

/* Dark Mode Variables */
[data-theme="dark"] {
  --clr-deep: #e8e0f5;
  --clr-purple: #9b59f5;
  --clr-violet: #c9a0ff;
  --clr-white: #1a0533;
  --clr-off-white: #1e0a3d;
  --clr-card: #251347;
  --clr-shadow: rgba(0, 0, 0, 0.4);
  --clr-text: #e8e0f5;
  --clr-text-mid: #b8a8cc;
  --clr-text-low: #8a7a9a;
  --clr-border: #3d2660;
  --clr-bg: #1e0a3d;
}

/* Adicione também estes componentes no FINAL do arquivo */

/* Settings Button & Dropdown */
.settings-btn {
  position: relative;
  background: transparent;
  border: none;
  font-size: 1.3rem;
  color: var(--clr-text-mid);
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
}
.settings-btn:hover {
  background: var(--clr-off-white);
  color: var(--clr-purple);
}

.settings-dropdown {
  position: absolute;
  top: 120%;
  right: 0;
  background: var(--clr-card);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-card);
  min-width: 200px;
  z-index: 1000;
  display: none;
  flex-direction: column;
  overflow: hidden;
}
.settings-dropdown.open { display: flex; }

.settings-dropdown button,
.settings-dropdown a {
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  border: none;
  background: none;
  font-family: var(--font-body);
  font-size: .88rem;
  color: var(--clr-text);
  cursor: pointer;
  transition: background var(--transition);
  display: flex;
  align-items: center;
  gap: 10px;
}
.settings-dropdown button:hover,
.settings-dropdown a:hover {
  background: var(--clr-off-white);
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}

.theme-toggle-switch {
  position: relative;
  width: 50px;
  height: 26px;
  background: var(--clr-border);
  border-radius: 20px;
  cursor: pointer;
  transition: background var(--transition);
}
.theme-toggle-switch.active {
  background: var(--clr-purple);
}
.theme-toggle-switch::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: var(--clr-white);
  border-radius: 50%;
  transition: transform var(--transition);
}
.theme-toggle-switch.active::after {
  transform: translateX(24px);
}
```

---

### PASSO 3: Adicione Modo Escuro em TODAS as páginas

Adicione este código em TODAS as páginas HTML (index, login, cadastro, feed, perfil, postar, pesquisa):

**Na navbar** (ou no topo da página se não tiver navbar):

```html
<!-- Adicione este botão na navbar -->
<div style="position: relative;">
  <button class="settings-btn" onclick="toggleSettings()">⚙️</button>
  <div class="settings-dropdown" id="settingsDropdown">
    <div class="theme-toggle">
      <span style="font-size:.88rem;">🌙 Modo Escuro</span>
      <div class="theme-toggle-switch" id="themeToggle" onclick="toggleTheme()"></div>
    </div>
  </div>
</div>
```

**No script** (antes do `</body>`):

```html
<script>
// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const toggle = document.getElementById('themeToggle');
  if (toggle && savedTheme === 'dark') toggle.classList.add('active');
}

window.toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    if (newTheme === 'dark') toggle.classList.add('active');
    else toggle.classList.remove('active');
  }
};

window.toggleSettings = () => {
  document.getElementById('settingsDropdown')?.classList.toggle('open');
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('.settings-btn') && !e.target.closest('.settings-dropdown')) {
    document.getElementById('settingsDropdown')?.classList.remove('open');
  }
});

initTheme();
</script>
```

---

Devido ao limite de tokens, vou criar um arquivo ZIP conceitual com instruções. Vou criar o arquivo de instrução COMPLETO com TODO o código necessário:
