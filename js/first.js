
const kupolyAll = document.querySelectorAll(".Kupoly_all");


let isDragging = false;
let currentElement = null;
let startX = 0;
let startY = 0;
let offsetX = 0;
let offsetY = 0;


function dragElement(elmnt) {
    elmnt.addEventListener("mousedown", dragStart);

    function dragStart(e) {
        e.preventDefault();
        isDragging = true;
        currentElement = elmnt;
        startX = e.clientX - elmnt.getBoundingClientRect().left;
        startY = e.clientY - elmnt.getBoundingClientRect().top;
        offsetX = e.clientX - startX;
        offsetY = e.clientY - startY;

        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", dragEnd);
    }

    function drag(e) {
        if (isDragging) {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            elmnt.style.left = newX + "px";
            elmnt.style.top = newY + "px";
        }
    }

    function dragEnd() {
        isDragging = false;
        currentElement = null;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", dragEnd);
    }
}


kupolyAll.forEach(kupol => {
    dragElement(kupol);
});
