/**
 * K8s Labs - Application JavaScript
 * ==================================
 */

// Navigation entre sections
function showSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    
    // Désactiver tous les liens de nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    // Afficher la section demandée
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Activer le lien de nav correspondant
    const navLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (navLink) navLink.classList.add('active');
    
    // Fermer la sidebar mobile
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.overlay').classList.remove('active');
    
    // Mettre à jour l'URL
    history.pushState(null, '', `#${sectionId}`);
}

// Toggle sidebar mobile
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('.overlay').classList.toggle('active');
}

// Copier le code
function copyCode(btn) {
    const codeBlock = btn.closest('.code-block');
    const code = codeBlock.querySelector('pre code').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        btn.classList.add('copied');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            Copié !
        `;
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Erreur de copie:', err);
        // Fallback pour les navigateurs plus anciens
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        btn.classList.add('copied');
        btn.textContent = 'Copié !';
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.textContent = 'Copier';
        }, 2000);
    });
}

// Toggle checklist item
function toggleCheck(item) {
    item.classList.toggle('completed');
    saveProgress();
}

// Sauvegarder la progression
function saveProgress() {
    const completed = [];
    document.querySelectorAll('.checklist-item.completed').forEach(item => {
        const text = item.querySelector('.checklist-text').textContent;
        completed.push(text);
    });
    localStorage.setItem('k8s-labs-progress', JSON.stringify(completed));
}

// Charger la progression
function loadProgress() {
    const saved = localStorage.getItem('k8s-labs-progress');
    if (saved) {
        try {
            const completed = JSON.parse(saved);
            document.querySelectorAll('.checklist-item').forEach(item => {
                const text = item.querySelector('.checklist-text').textContent;
                if (completed.includes(text)) {
                    item.classList.add('completed');
                }
            });
        } catch (e) {
            console.error('Erreur de chargement de la progression:', e);
        }
    }
}

// Recherche dans les TPs
function searchTPs() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    document.querySelectorAll('.nav-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
}

// Gérer la navigation par hash
function handleHash() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        showSection(hash);
    } else {
        showSection('home');
    }
}

// Raccourcis clavier
function handleKeyboard(e) {
    // Ctrl/Cmd + K pour focus recherche
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    
    // Escape pour fermer la sidebar mobile
    if (e.key === 'Escape') {
        document.querySelector('.sidebar').classList.remove('open');
        document.querySelector('.overlay').classList.remove('active');
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    handleHash();
    
    // Event listeners
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('keydown', handleKeyboard);
    
    // Recherche en temps réel
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchTPs);
    }
});

// Export pour utilisation dans le HTML
window.showSection = showSection;
window.toggleSidebar = toggleSidebar;
window.copyCode = copyCode;
window.toggleCheck = toggleCheck;
window.searchTPs = searchTPs;
