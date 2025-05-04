// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle hover effects to the social links
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effects to project items
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            this.style.borderRadius = '5px';
            this.style.padding = '10px';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.padding = '0';
        });
    });
    
    // Add smooth scrolling for anchor links (if you add any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
