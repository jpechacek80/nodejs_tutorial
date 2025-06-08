//dragdrop.js
      const dragobj = document.getElementById("dragobj");

      function dragStart(event) {
        event.dataTransfer.setData("Text", event.target.id);
      }

      function dragging(event) {
        dragobj.style.color= "grey";
        dragobj.style.borderColor = "grey";
      }

      function allowDrop(event) {
        event.preventDefault();
      }

      function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById("demo").innerHTML = "The p element was dropped";
        dragobj.style.color= "black";
        dragobj.style.borderColor = "black";
      }
