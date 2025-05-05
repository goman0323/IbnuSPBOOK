  <script>
    // Efek Ketik Berulang
    const text = "Hallo, selamat datang kawan";
    const typedText = document.getElementById("typedText");
    let i = 0;
    let deleting = false;

    function typeWriter() {
      if (!deleting) {
        if (i < text.length) {
          typedText.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100); // Delay antar karakter saat mengetik
        } else {
          deleting = true;
          setTimeout(typeWriter, 1000); // Tunggu sebentar sebelum menghapus
        }
      } else {
        if (i > 0) {
          typedText.textContent = text.substring(0, i - 1);
          i--;
          setTimeout(typeWriter, 50); // Delay antar karakter saat menghapus
        } else {
          deleting = false;
          setTimeout(typeWriter, 1000); // Tunggu sebentar sebelum mengetik lagi
        }
      }
    }

    typeWriter();

    // Modal delay tampil
    setTimeout(function() {
      document.getElementById("myModal").style.display = "block";
    }, 500);

    function closeModal() {
      document.getElementById("myModal").style.display = "none";
    }
  </script>