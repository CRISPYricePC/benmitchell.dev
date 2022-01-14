document.addEventListener("DOMContentLoaded", () => { // When DOM is ready
  document.querySelectorAll(".spoiler")               // Select all .spoiler elements
    .forEach(item => {                                // For each .spoiler element
      item.onclick = () => {                          // When clicked
        if (item.classList.contains("spoiler-shown")) // If the spoiler is shown
          item.classList.remove("spoiler-shown");     // Hide it
        else                                          // Otherwise
          item.classList.add("spoiler-shown");        // Show it
      };
    });
}, false);