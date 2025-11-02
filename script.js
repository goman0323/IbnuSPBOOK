    // Efek ketik
    const text = "Pahami • Ingat • Coba.";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typedText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      }
    }

    // Modal auto tampil
    window.onload = function() {
      setTimeout(() => {
        document.getElementById("myModal").style.display = "block";
      }, 1200);
      typeWriter();
    }

    function closeModal() {
      document.getElementById("myModal").style.display = "none";
    }
