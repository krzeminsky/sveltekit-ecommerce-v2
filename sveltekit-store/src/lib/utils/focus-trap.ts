export function focusTrap(node: Node) {
    const firstChild = node.firstChild as HTMLElement;
    const lastChild = node.lastChild as HTMLElement;

    const handleLastChildKeyDown = (event: Event) => {
        const e = event as KeyboardEvent;

        if (e.key == "Tab" && !e.shiftKey) {
            e.preventDefault();
            firstChild.focus();
        }
    }

    const handleFirstChildKeyDown = (event: Event) => {
        const e = event as KeyboardEvent;

        if (e.key == "Tab" && e.shiftKey) {
            e.preventDefault();
            lastChild.focus();
        }
    }
    
    lastChild.addEventListener('keydown', handleLastChildKeyDown);
    firstChild.addEventListener('keydown', handleFirstChildKeyDown);

    return {
        destroy() {
            lastChild.removeEventListener('keydown', handleLastChildKeyDown);
            firstChild.removeEventListener('keydown', handleFirstChildKeyDown);
        }
    }
}