const resizableContainer = document.querySelector('.panel');
const resizeHandle = document.querySelector('.draggable');
let isResizing = false;
let initialWidth, initialHeight;

resizeHandle.addEventListener('mousedown', (e) => {
	e.preventDefault();

    isResizing = true;
	initialWidth = resizableContainer.offsetWidth;
    initialHeight = resizableContainer.offsetHeight;
	document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', () => {
            isResizing = false;
            document.removeEventListener('mousemove', handleMouseMove);
        });
    });

    function handleMouseMove(e) {
        if (isResizing) {
            const newWidth = initialWidth + e.clientX - resizeHandle.getBoundingClientRect().right;
            resizableContainer.style.width = `${newWidth}px`;
        }
    }