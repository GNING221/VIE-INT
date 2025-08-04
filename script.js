// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});




// THIAGA

document.addEventListener('DOMContentLoaded', function() {
    // Effet de survol doux sur les cartes
    const profileCards = document.querySelectorAll('.profile-card');
    
    profileCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Animation des boutons
    const profileBtns = document.querySelectorAll('.profile-btn');
    
    profileBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
});




// APPEL VIDEO

// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Effet de survol doux sur les cartes
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Animation des boutons
    const callBtns = document.querySelectorAll('.call-btn');
    
    callBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
});




// SECTION RENCONTRE

// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Effet de survol doux sur les cartes
    const meetCards = document.querySelectorAll('.meet-card');
    
    meetCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Animation des boutons
    const matchBtns = document.querySelectorAll('.match-btn');
    
    matchBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
});




// SECTION CONTACT

// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Animation du bouton d'envoi
    const submitBtn = document.querySelector('.submit-btn');
    
    if(submitBtn) {
        submitBtn.addEventListener('mouseenter', () => {
            submitBtn.style.transform = 'translateY(-3px)';
        });
        
        submitBtn.addEventListener('mouseleave', () => {
            submitBtn.style.transform = 'translateY(0)';
        });
    }
    
    // Validation basique du formulaire
    const contactForm = document.querySelector('.contact-form');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Vérification des champs requis
            const fullname = document.getElementById('fullname');
            const whatsapp = document.getElementById('whatsapp');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            if(!fullname.value.trim()) {
                isValid = false;
                highlightError(fullname);
            }
            
            if(!whatsapp.value.trim()) {
                isValid = false;
                highlightError(whatsapp);
            }
            
            if(!subject.value.trim()) {
                isValid = false;
                highlightError(subject);
            }
            
            if(!message.value.trim()) {
                isValid = false;
                highlightError(message);
            }
            
            if(!isValid) {
                e.preventDefault();
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    }
    
    function highlightError(input) {
        input.style.borderColor = '#ff3860';
        input.style.backgroundColor = 'rgba(255, 56, 96, 0.1)';
        
        setTimeout(() => {
            input.style.borderColor = '';
            input.style.backgroundColor = '';
        }, 3000);
    }
});




// PAIEMENT ABONNEMENT

// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Animation du bouton d'envoi
    const submitBtn = document.querySelector('.submit-btn');
    
    if(submitBtn) {
        submitBtn.addEventListener('mouseenter', () => {
            submitBtn.style.transform = 'translateY(-3px)';
        });
        
        submitBtn.addEventListener('mouseleave', () => {
            submitBtn.style.transform = 'translateY(0)';
        });
    }
    
    // Sélection des méthodes de paiement
    const paymentMethods = document.querySelectorAll('.method');
    
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Validation du formulaire
    const paymentForm = document.querySelector('.payment-form');
    
    if(paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            // Vérification des champs requis
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if(!field.value.trim()) {
                    isValid = false;
                    highlightError(field);
                }
                
                // Validation spécifique pour les champs de carte
                if(field.id === 'card-number' && !validateCardNumber(field.value)) {
                    isValid = false;
                    highlightError(field);
                }
                
                if(field.id === 'expiry' && !validateExpiry(field.value)) {
                    isValid = false;
                    highlightError(field);
                }
                
                if(field.id === 'cvv' && !validateCVV(field.value)) {
                    isValid = false;
                    highlightError(field);
                }
            });
            
            if(!isValid) {
                e.preventDefault();
                alert('Veuillez remplir tous les champs obligatoires correctement.');
            } else {
                // Simulation de chargement
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Traitement en cours...';
                submitBtn.disabled = true;
            }
        });
    }
    
    function highlightError(input) {
        input.style.borderColor = '#ff3860';
        input.style.backgroundColor = 'rgba(255, 56, 96, 0.1)';
        
        setTimeout(() => {
            input.style.borderColor = '';
            input.style.backgroundColor = '';
        }, 3000);
    }
    
    // Fonctions de validation
    function validateCardNumber(number) {
        // Supprimer les espaces
        const cleaned = number.replace(/\s+/g, '');
        // Vérifier que c'est un nombre et qu'il a entre 13 et 16 chiffres
        return /^\d{13,16}$/.test(cleaned);
    }
    
    function validateExpiry(expiry) {
        return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiry);
    }
    
    function validateCVV(cvv) {
        return /^\d{3,4}$/.test(cvv);
    }
});




// FOOTER

// js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Animation des éléments au survol
    const socialLinks = document.querySelectorAll('.footer-social a');
    const appButtons = document.querySelectorAll('.app-btn');
    
    // Animation des icônes sociales
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
    
    // Animation des boutons d'application
    appButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
    
    // Animation du bouton de newsletter
    const newsletterBtn = document.querySelector('.footer-form button');
    
    if(newsletterBtn) {
        newsletterBtn.addEventListener('mouseenter', () => {
            newsletterBtn.style.transform = 'scale(1.1)';
        });
        
        newsletterBtn.addEventListener('mouseleave', () => {
            newsletterBtn.style.transform = 'scale(1)';
        });
    }
    
    // Validation du formulaire de newsletter
    const newsletterForm = document.querySelector('.footer-form');
    
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if(emailInput.value && validateEmail(emailInput.value)) {
                // Animation de succès
                emailInput.value = '';
                const originalHtml = newsletterBtn.innerHTML;
                newsletterBtn.innerHTML = '<i class="fas fa-check"></i>';
                newsletterBtn.style.background = 'var(--success)';
                
                setTimeout(() => {
                    newsletterBtn.innerHTML = originalHtml;
                    newsletterBtn.style.background = '';
                }, 2000);
            } else {
                // Animation d'erreur
                emailInput.style.border = '1px solid var(--primary)';
                emailInput.style.backgroundColor = 'rgba(255, 107, 139, 0.1)';
                
                setTimeout(() => {
                    emailInput.style.border = '';
                    emailInput.style.backgroundColor = '';
                }, 3000);
            }
        });
    }
    
    // Fonction de validation d'email
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
});