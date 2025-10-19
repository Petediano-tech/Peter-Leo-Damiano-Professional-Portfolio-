// Remove the problematic typewriter animation from hero section
// In the initAnimations function, remove or comment out the typewriter code

function initAnimations() {
    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 2}s`;
    });
    
    // Remove typewriter animation as it was causing issues
    // const typewriter = document.querySelector('.typewriter');
    // if (typewriter) {
    //     typewriter.style.animation = 'none';
    // }
}