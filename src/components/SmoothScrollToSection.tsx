export function smoothScrollToSection(
    event: React.MouseEvent,
    sectionId: string,
    offset: 0,
) {
    if (window.location.pathname === '/') {
        event.preventDefault();
        const targetElement = document.getElementById(sectionId.toLowerCase());
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }
}