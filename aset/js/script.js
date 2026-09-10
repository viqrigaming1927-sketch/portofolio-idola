/**
 * Script - Portofolio Fajrul Falah (Fajrul Fx)
 * Handles Theme Toggling, Mobile Navigation, and Contact Form Submissions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Update Copyright Year automatically
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Dark Mode Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlEl = document.documentElement;

    // Check system preference or stored theme preference
    if (localStorage.getItem('theme') === 'dark' || 
       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlEl.classList.add('dark');
        if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        htmlEl.classList.remove('dark');
        if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    // Toggle Theme Click Event
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (htmlEl.classList.contains('dark')) {
                htmlEl.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                htmlEl.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }

    // Mobile Navigation Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a navigation link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Contact Form Handler & Toast Notification
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value : 'Pengunjung';
            
            if (toastMessage) {
                toastMessage.textContent = `Terima kasih, ${name}! Pesan/undangan Anda berhasil terkirim ke Fajrul Falah (Fajrul Fx).`;
            }
            
            if (toast) {
                toast.classList.remove('translate-y-20', 'opacity-0');
                toast.classList.add('translate-y-0', 'opacity-100');
            }

            contactForm.reset();

            // Hide toast after 4.5 seconds
            setTimeout(() => {
                if (toast) {
                    toast.classList.remove('translate-y-0', 'opacity-100');
                    toast.classList.add('translate-y-20', 'opacity-0');
                }
            }, 4500);
        });
    }
});