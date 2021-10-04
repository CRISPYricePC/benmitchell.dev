document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".spoiler").forEach(item => {
        item.addEventListener("click", function() {
            if (this.classList.contains("spoiler-shown")) 
                this.classList.remove("spoiler-shown")
            else
                this.classList.add("spoiler-shown")
        })
    })
}, false)