document.addEventListener('DOMContentLoaded', function() {
    const kenanganButton = document.getElementById('kenangan-button');
    const kenanganImages = document.getElementById('kenangan-images');
    const mulaiButton = document.getElementById('mulai-button');
    const featuresSection = document.getElementById('features');
    const images = kenanganImages.querySelectorAll('img');

    kenanganButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (kenanganImages.classList.contains('hidden')) {
            kenanganImages.classList.remove('hidden');
            mulaiButton.classList.add('hidden'); // Sembunyikan tombol "Mulai Sekarang"
            featuresSection.classList.add('hidden'); // Sembunyikan seluruh bagian "Fitur Kami"
            images.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.remove('hidden');
                }, index * 500); // Menampilkan gambar satu per satu dengan jeda 500ms
            });
        } else {
            images.forEach((img) => {
                img.classList.add('hidden');
            });
            setTimeout(() => {
                kenanganImages.classList.add('hidden');
                mulaiButton.classList.remove('hidden'); // Tampilkan kembali tombol "Mulai Sekarang"
                featuresSection.classList.remove('hidden'); // Tampilkan kembali seluruh bagian "Fitur Kami"
            }, images.length * 500); // Menyembunyikan container setelah semua gambar disembunyikan
        }
    });
});