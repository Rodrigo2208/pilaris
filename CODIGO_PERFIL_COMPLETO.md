# 🔧 CÓDIGO COMPLETO PARA PERFIL.HTML

## ADICIONE ESTES MODALS ANTES DO `</body>`:

```html
<!-- Modal Adicionar Experiência -->
<div class="modal-overlay" id="modalAddExperience">
  <div class="modal">
    <div class="modal-header">
      <h3>💼 Adicionar Experiência</h3>
      <button class="modal-close" onclick="closeModal('modalAddExperience')">×</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Cargo</label>
        <input type="text" id="expCargo" placeholder="Ex: Desenvolvedor Frontend" style="width:100%; padding:10px; border:1.5px solid var(--clr-border); border-radius:8px; background:var(--clr-card); color:var(--clr-text);" />
      </div>
      <div class="form-group">
        <label>Empresa</label>
        <input type="text" id="expEmpresa" placeholder="Ex: Tech Corp" style="width:100%; padding:10px; border:1.5px solid var(--clr-border); border-radius:8px; background:var(--clr-card); color:var(--clr-text);" />
      </div>
      <div class="form-group">
        <label>Período</label>
        <input type="text" id="expPeriodo" placeholder="Ex: 2020-2023" style="width:100%; padding:10px; border:1.5px solid var(--clr-border); border-radius:8px; background:var(--clr-card); color:var(--clr-text);" />
      </div>
      <div class="form-group">
        <label>Descrição (opcional)</label>
        <textarea id="expDescricao" placeholder="Descreva suas atividades..." style="width:100%; min-height:80px; padding:10px; border:1.5px solid var(--clr-border); border-radius:8px; resize:vertical; background:var(--clr-card); color:var(--clr-text);"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost btn-sm" onclick="closeModal('modalAddExperience')">Cancelar</button>
      <button class="btn btn-primary btn-sm" onclick="saveExperience()">Salvar</button>
    </div>
  </div>
</div>

<!-- Modal Adicionar Educação -->
<div class="modal-overlay" id="modalAddEducation">
  <div class="modal">
    <div class="modal-header">
      <h3>🎓 Adicionar Formação</h3>
      <button class="modal-close" onclick="closeModal('modalAddEducation')">×</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Curso</label>
        <input type="text" id="eduCurso" placeholder="Ex: Ciência da Computação" style="width:100%; padding:10px; border:1.5px solid var(--clr-border); border-radius:8px; background:var(--clr-card); color:var(--clr-text);" />
      </div>
      <div class="form-group">
        <label>Instituição</label>
        <input type="text" id="eduInstituicao" placeholder="Ex: USP" style="width:100%; padding:10px; border:1.5px solid var(--clr-border); border-radius:8px; background:var(--clr-card); color:var(--clr-text);" />
      </div>
      <div class="form-group">
        <label>Ano</label>
        <input type="text" id="eduAno" placeholder="Ex: 2023" style="width:100%; padding:10px; border:1.5px solid var(--clr-border); border-radius:8px; background:var(--clr-card); color:var(--clr-text);" />
      </div>
      <div class="form-group">
        <label>Status</label>
        <select id="eduStatus" style="width:100%; padding:10px; border:1.5px solid var(--clr-border); border-radius:8px; background:var(--clr-card); color:var(--clr-text);">
          <option value="Cursando">Cursando</option>
          <option value="Concluído">Concluído</option>
          <option value="Trancado">Trancado</option>
        </select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost btn-sm" onclick="closeModal('modalAddEducation')">Cancelar</button>
      <button class="btn btn-primary btn-sm" onclick="saveEducation()">Salvar</button>
    </div>
  </div>
</div>

<!-- Modal Seguidores -->
<div class="modal-overlay" id="modalSeguidores">
  <div class="modal">
    <div class="modal-header">
      <h3>👥 Seguidores</h3>
      <button class="modal-close" onclick="closeModal('modalSeguidores')">×</button>
    </div>
    <div class="modal-body">
      <div id="seguidoresList" style="max-height:400px; overflow-y:auto;"></div>
    </div>
  </div>
</div>

<!-- Modal Seguindo -->
<div class="modal-overlay" id="modalSeguindo">
  <div class="modal">
    <div class="modal-header">
      <h3>👤 Seguindo</h3>
      <button class="modal-close" onclick="closeModal('modalSeguindo')">×</button>
    </div>
    <div class="modal-body">
      <div id="seguindoList" style="max-height:400px; overflow-y:auto;"></div>
    </div>
  </div>
</div>

<!-- Modal Excluir Conta -->
<div class="modal-overlay" id="modalDeleteAccount">
  <div class="modal">
    <div class="modal-header">
      <h3>⚠️ Excluir Conta Permanentemente</h3>
      <button class="modal-close" onclick="closeModal('modalDeleteAccount')">×</button>
    </div>
    <div class="modal-body">
      <p style="color: var(--clr-danger); font-weight: 600; margin-bottom: 10px;">
        ATENÇÃO: Esta ação é IRREVERSÍVEL!
      </p>
      <p style="margin-bottom: 14px;">
        Todos os seus dados serão permanentemente deletados:
      </p>
      <ul style="margin-bottom: 14px; padding-left: 20px; color:var(--clr-text);">
        <li>Perfil e informações pessoais</li>
        <li>Todos os seus posts</li>
        <li>Comentários e curtidas</li>
        <li>Conexões e mensagens</li>
      </ul>
      <p style="margin-bottom: 10px;">
        Digite <strong>EXCLUIR</strong> para confirmar:
      </p>
      <input type="text" id="confirmDeleteInput" 
             style="width:100%; padding:10px; border:1.5px solid var(--clr-danger); border-radius:8px; background:var(--clr-card); color:var(--clr-text);" 
             placeholder="Digite EXCLUIR" />
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost btn-sm" onclick="closeModal('modalDeleteAccount')">Cancelar</button>
      <button class="btn btn-primary btn-sm" 
              style="background: var(--clr-danger); border-color: var(--clr-danger);" 
              onclick="deleteAccount()">
        Excluir Conta
      </button>
    </div>
  </div>
</div>
```

## MODIFIQUE A SEÇÃO DE STATS PARA SER CLICÁVEL:

Procure por `<div class="perfil-stats">` e substitua por:

```html
<div class="perfil-stats">
  <div class="stat"><strong id="statPosts">0</strong><span>Posts</span></div>
  <div class="stat cursor-pointer" onclick="showSeguidores()" style="cursor:pointer;">
    <strong id="statSeguidores">0</strong><span>Seguidores</span>
  </div>
  <div class="stat cursor-pointer" onclick="showSeguindo()" style="cursor:pointer;">
    <strong id="statSeguindo">0</strong><span>Seguindo</span>
  </div>
</div>
```

## MODIFIQUE O AVATAR PARA SER CLICÁVEL:

Procure por `<div class="avatar avatar-xl" id="avatarPerfil">` e substitua por:

```html
<div class="avatar avatar-xl" id="avatarPerfil" 
     onclick="if(isOwnProfile) uploadProfilePhoto()" 
     style="cursor: pointer;"
     title="Clique para alterar foto">
  U
</div>
```

## ADICIONE BOTÕES DE AÇÃO NO SEU PERFIL:

Procure por `<div id="ownProfileActions"` e modifique para incluir mais botões:

```html
<div id="ownProfileActions" style="text-align: center; margin-top: 24px; display:none; gap:10px; flex-wrap:wrap; justify-content:center;">
  <button class="btn btn-primary btn-sm" onclick="editarPerfil()">✏️ Editar Perfil</button>
  <button class="btn btn-outline btn-sm" onclick="openModal('modalAddExperience')">+ Experiência</button>
  <button class="btn btn-outline btn-sm" onclick="openModal('modalAddEducation')">+ Formação</button>
  <button class="btn btn-outline btn-sm" 
          style="color: var(--clr-danger); border-color: var(--clr-danger);" 
          onclick="openModal('modalDeleteAccount')">
    🗑️ Excluir Conta
  </button>
  <button class="btn btn-outline btn-sm" id="logoutBtn" 
          style="color: var(--clr-danger); border-color: var(--clr-danger);">
    🚪 Sair
  </button>
</div>
```

## ADICIONE BOTÃO DE MENSAGEM PARA OUTROS PERFIS:

Procure por `<div id="actionButtons"` e modifique:

```html
<div id="actionButtons" style="margin-top: 16px; display:none; gap: 10px; justify-content:center;">
  <button class="btn-follow" id="btnFollow" onclick="toggleFollow()">Seguir</button>
  <button class="btn btn-primary btn-sm" onclick="startConversation()">💬 Mensagem</button>
</div>
```

## ADICIONE ESTAS FUNÇÕES NO SCRIPT:

```javascript
// UPLOAD DE FOTO
window.uploadProfilePhoto = async function() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
      showToast('Imagem muito grande (máx 5MB)');
      return;
    }
    
    showToast('Enviando foto...');
    
    try {
      const apiKey = '609de06a58faae929e0c98224957cc60';
      const formData = new FormData();
      formData.append('image', file);
      
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData
      });
      
      const data = await res.json();
      if (!data.success) throw new Error('Upload falhou');
      
      await updateDoc(doc(db, 'perfis', currentUser.uid), {
        fotoURL: data.data.url
      });
      
      showToast('Foto atualizada!');
      setTimeout(() => location.reload(), 1000);
    } catch(err) {
      console.error(err);
      showToast('Erro ao enviar foto');
    }
  };
  
  input.click();
};

// ADICIONAR EXPERIÊNCIA
window.saveExperience = async function() {
  const cargo = document.getElementById('expCargo').value.trim();
  const empresa = document.getElementById('expEmpresa').value.trim();
  const periodo = document.getElementById('expPeriodo').value.trim();
  const descricao = document.getElementById('expDescricao').value.trim();
  
  if (!cargo || !empresa || !periodo) {
    showToast('Preencha cargo, empresa e período');
    return;
  }
  
  const newExp = { cargo, empresa, periodo, descricao };
  const currentExp = currentUserData.experience || [];
  currentExp.push(newExp);
  
  await updateDoc(doc(db, 'perfis', currentUser.uid), {
    experience: currentExp
  });
  
  closeModal('modalAddExperience');
  showToast('Experiência adicionada!');
  setTimeout(() => location.reload(), 800);
};

// ADICIONAR EDUCAÇÃO
window.saveEducation = async function() {
  const curso = document.getElementById('eduCurso').value.trim();
  const instituicao = document.getElementById('eduInstituicao').value.trim();
  const ano = document.getElementById('eduAno').value.trim();
  const status = document.getElementById('eduStatus').value;
  
  if (!curso || !instituicao || !ano) {
    showToast('Preencha todos os campos');
    return;
  }
  
  const newEdu = { curso, instituicao, ano, status };
  const currentEdu = currentUserData.education || [];
  currentEdu.push(newEdu);
  
  await updateDoc(doc(db, 'perfis', currentUser.uid), {
    education: currentEdu
  });
  
  closeModal('modalAddEducation');
  showToast('Formação adicionada!');
  setTimeout(() => location.reload(), 800);
};

// VER SEGUIDORES
window.showSeguidores = async function() {
  const seguidores = currentUserData.seguidores || [];
  
  if (!seguidores.length) {
    document.getElementById('seguidoresList').innerHTML = 
      '<p style="text-align:center; color:var(--clr-text-low); padding:20px;">Nenhum seguidor ainda</p>';
    openModal('modalSeguidores');
    return;
  }
  
  const container = document.getElementById('seguidoresList');
  container.innerHTML = '<p style="text-align:center; color:var(--clr-text-low);">Carregando...</p>';
  openModal('modalSeguidores');
  
  let html = '';
  
  for (const uid of seguidores) {
    try {
      const userSnap = await getDoc(doc(db, 'perfis', uid));
      if (!userSnap.exists()) continue;
      
      const user = userSnap.data();
      const inicial = (user.nome || 'U')[0].toUpperCase();
      const avatarHTML = user.fotoURL 
        ? `<img src="${user.fotoURL}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;" />`
        : inicial;
      
      html += `
        <div style="display:flex; gap:10px; align-items:center; padding:12px; border-bottom:1px solid var(--clr-border);">
          <div class="avatar avatar-sm cursor-pointer" onclick="window.location.href='perfil.html?uid=${uid}'" style="cursor:pointer;">${avatarHTML}</div>
          <div style="flex:1;">
            <div style="font-weight:600; font-size:.9rem; cursor:pointer; color:var(--clr-text);" onclick="window.location.href='perfil.html?uid=${uid}'">${user.nome}</div>
            <div style="font-size:.75rem; color:var(--clr-text-low);">${user.role}</div>
          </div>
        </div>
      `;
    } catch(e) {
      console.error(e);
    }
  }
  
  container.innerHTML = html || '<p style="text-align:center; padding:20px; color:var(--clr-text-low);">Nenhum resultado</p>';
};

// VER SEGUINDO
window.showSeguindo = async function() {
  const seguindo = currentUserData.seguindo || [];
  
  if (!seguindo.length) {
    document.getElementById('seguindoList').innerHTML = 
      '<p style="text-align:center; color:var(--clr-text-low); padding:20px;">Não está seguindo ninguém</p>';
    openModal('modalSeguindo');
    return;
  }
  
  const container = document.getElementById('seguindoList');
  container.innerHTML = '<p style="text-align:center; color:var(--clr-text-low);">Carregando...</p>';
  openModal('modalSeguindo');
  
  let html = '';
  
  for (const uid of seguindo) {
    try {
      const userSnap = await getDoc(doc(db, 'perfis', uid));
      if (!userSnap.exists()) continue;
      
      const user = userSnap.data();
      const inicial = (user.nome || 'U')[0].toUpperCase();
      const avatarHTML = user.fotoURL 
        ? `<img src="${user.fotoURL}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;" />`
        : inicial;
      
      html += `
        <div style="display:flex; gap:10px; align-items:center; padding:12px; border-bottom:1px solid var(--clr-border);">
          <div class="avatar avatar-sm cursor-pointer" onclick="window.location.href='perfil.html?uid=${uid}'" style="cursor:pointer;">${avatarHTML}</div>
          <div style="flex:1;">
            <div style="font-weight:600; font-size:.9rem; cursor:pointer; color:var(--clr-text);" onclick="window.location.href='perfil.html?uid=${uid}'">${user.nome}</div>
            <div style="font-size:.75rem; color:var(--clr-text-low);">${user.role}</div>
          </div>
          <button class="btn btn-outline btn-sm" onclick="toggleFollow('${uid}'); setTimeout(showSeguindo, 500);">Deixar de Seguir</button>
        </div>
      `;
    } catch(e) {
      console.error(e);
    }
  }
  
  container.innerHTML = html || '<p style="text-align:center; padding:20px; color:var(--clr-text-low);">Nenhum resultado</p>';
};

// EXCLUIR CONTA
import { deleteUser } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.deleteAccount = async function() {
  const confirmText = document.getElementById('confirmDeleteInput').value.trim();
  
  if (confirmText !== 'EXCLUIR') {
    showToast('Digite "EXCLUIR" em maiúsculas');
    return;
  }
  
  if (!confirm('Última chance! Tem certeza absoluta?')) {
    return;
  }
  
  try {
    showToast('Excluindo conta...');
    
    // 1. Deletar perfil
    await deleteDoc(doc(db, 'perfis', currentUser.uid));
    
    // 2. Deletar posts
    const postsQuery = query(
      collection(db, 'posts'),
      where('userId', '==', currentUser.uid)
    );
    const postsSnap = await getDocs(postsQuery);
    
    for (const postDoc of postsSnap.docs) {
      await deleteDoc(postDoc.ref);
    }
    
    // 3. Deletar conta Auth
    await deleteUser(currentUser);
    
    showToast('Conta excluída');
    setTimeout(() => window.location.href = 'index.html', 1000);
  } catch(err) {
    console.error(err);
    
    if (err.code === 'auth/requires-recent-login') {
      showToast('Faça login novamente e tente');
      setTimeout(() => window.location.href = 'login.html', 2000);
    } else {
      showToast('Erro: ' + err.message);
    }
  }
};

// INICIAR CONVERSA
window.startConversation = async function() {
  if (!currentUser) {
    showToast('Faça login para enviar mensagens');
    return;
  }
  
  const conversationId = [currentUser.uid, profileUid].sort().join('_');
  window.location.href = `mensagens.html?conversation=${conversationId}`;
};
```

## RENDERIZE EXPERIÊNCIA E EDUCAÇÃO:

Procure onde renderiza o perfil e adicione:

```javascript
// Renderizar Experiência
if (p.experience && p.experience.length) {
  let expHTML = '<div class="card" style="margin-top:18px;"><div class="card-body">';
  expHTML += '<h5 class="perfil-section-title">💼 Experiência Profissional</h5>';
  
  p.experience.forEach((exp, idx) => {
    expHTML += `
      <div class="perfil-item" style="margin-bottom:16px; padding-bottom:16px; border-bottom:1px solid var(--clr-border);">
        <div style="display:flex; justify-content:space-between; align-items:start;">
          <div style="flex:1;">
            <div style="font-weight:600; color:var(--clr-deep); margin-bottom:4px;">${exp.cargo}</div>
            <div style="color:var(--clr-text-mid); font-size:.85rem; margin-bottom:2px;">${exp.empresa}</div>
            <div style="color:var(--clr-text-low); font-size:.8rem; margin-bottom:6px;">${exp.periodo}</div>
            ${exp.descricao ? `<div style="color:var(--clr-text); font-size:.85rem; line-height:1.5;">${exp.descricao}</div>` : ''}
          </div>
          ${isOwnProfile ? `<button class="btn btn-ghost btn-sm" onclick="removeExperience(${idx})" style="color:var(--clr-danger);">×</button>` : ''}
        </div>
      </div>
    `;
  });
  
  expHTML += '</div></div>';
  document.getElementById('perfilContent').insertAdjacentHTML('beforeend', expHTML);
}

// Renderizar Educação
if (p.education && p.education.length) {
  let eduHTML = '<div class="card" style="margin-top:18px;"><div class="card-body">';
  eduHTML += '<h5 class="perfil-section-title">🎓 Formação</h5>';
  
  p.education.forEach((edu, idx) => {
    eduHTML += `
      <div class="perfil-item" style="margin-bottom:16px; padding-bottom:16px; border-bottom:1px solid var(--clr-border);">
        <div style="display:flex; justify-content:space-between; align-items:start;">
          <div style="flex:1;">
            <div style="font-weight:600; color:var(--clr-deep); margin-bottom:4px;">${edu.curso}</div>
            <div style="color:var(--clr-text-mid); font-size:.85rem; margin-bottom:2px;">${edu.instituicao}</div>
            <div style="color:var(--clr-text-low); font-size:.8rem;">${edu.ano} • ${edu.status}</div>
          </div>
          ${isOwnProfile ? `<button class="btn btn-ghost btn-sm" onclick="removeEducation(${idx})" style="color:var(--clr-danger);">×</button>` : ''}
        </div>
      </div>
    `;
  });
  
  eduHTML += '</div></div>';
  document.getElementById('perfilContent').insertAdjacentHTML('beforeend', eduHTML);
}
```

## FUNÇÕES PARA REMOVER:

```javascript
window.removeExperience = async function(index) {
  if (!confirm('Remover esta experiência?')) return;
  
  const currentExp = currentUserData.experience || [];
  currentExp.splice(index, 1);
  
  await updateDoc(doc(db, 'perfis', currentUser.uid), {
    experience: currentExp
  });
  
  showToast('Experiência removida');
  setTimeout(() => location.reload(), 800);
};

window.removeEducation = async function(index) {
  if (!confirm('Remover esta formação?')) return;
  
  const currentEdu = currentUserData.education || [];
  currentEdu.splice(index, 1);
  
  await updateDoc(doc(db, 'perfis', currentUser.uid), {
    education: currentEdu
  });
  
  showToast('Formação removida');
  setTimeout(() => location.reload(), 800);
};
```

---

✅ **PRONTO! Todas as funcionalidades do perfil implementadas!**
