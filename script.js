// Fungsi untuk menambahkan kelas 'scrolled' pada navbar saat digulir
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const logo2 = document.getElementById('logo2');
    const scrollPosition = window.scrollY;

    // Jika posisi scroll lebih dari 50, tambahkan kelas 'scrolled' ke navbar dan tampilkan logo kedua
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
        logo2.style.display = 'none';
        logo.style.display = 'inline';
    } else {
        // Jika posisi scroll kurang dari atau sama dengan 50, hapus kelas 'scrolled' dari navbar dan tampilkan logo pertama
        navbar.classList.remove('scrolled');
        logo2.style.display = 'inline';
        logo.style.display = 'none';
    }
});


// Fungsi untuk menangani klik pada tautan navbar
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah tautan dari navigasi standar

        const targetId = this.getAttribute('href'); // Dapatkan id target dari tautan

        // Cari elemen target berdasarkan id
        const targetElement = document.querySelector(targetId);

        // Gulir ke elemen target dengan animasi scroll, mengatur untuk menampilkan elemen di bagian atas jendela tampilan
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
