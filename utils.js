// utils.js - Pilaris Utility Functions

// ── Toast notifications ──
export function showToast(msg, duration = 2600) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ── Modal helpers ──
export function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

export function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

// ── Format date YYYY-MM-DD to DD/MM/YYYY ──
export function formatDate(dateStr) {
  if (!dateStr) return null;
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

// ── Format timestamp to relative time ──
export function getRelativeTime(date) {
  const now = Date.now();
  const timestamp = date?.toDate ? date.toDate() : new Date(date);
  const diffMs = now - timestamp;
  const diffHours = Math.round(diffMs / 3.6e6);
  
  if (diffHours < 1) return 'agora';
  if (diffHours < 24) return diffHours + 'h';
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return diffDays + 'd';
  if (diffDays < 30) return Math.floor(diffDays / 7) + 'sem';
  return Math.floor(diffDays / 30) + 'mês';
}

// ── Phone mask ──
export function maskTelefone(value) {
  let v = value.replace(/\D/g, '');
  if (v.length <= 2) return v;
  if (v.length <= 6) return '(' + v.slice(0,2) + ') ' + v.slice(2);
  if (v.length <= 10) return '(' + v.slice(0,2) + ') ' + v.slice(2,6) + '-' + v.slice(6);
  return '(' + v.slice(0,2) + ') ' + v.slice(2,7) + '-' + v.slice(7,11);
}

// ── Upload image to ImgBB ──
// NOTE: This helper still calls ImgBB directly. For production, move
// the API key to a secure backend endpoint and call that endpoint from the client.
export async function uploadToImgBB(file) {
  const apiKey = '609de06a58faae929e0c98224957cc60';
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  if (data.success) return data.data.url;
  throw new Error('Falha ao enviar imagem');
}

// ── Escape HTML to prevent XSS ──
export function escapeHTML(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}