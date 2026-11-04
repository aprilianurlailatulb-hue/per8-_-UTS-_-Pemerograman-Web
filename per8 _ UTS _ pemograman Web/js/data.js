// Data Dummy Katalog Buku Initial
const bukuData = [
  {
    id: "BK-001",
    judul: "Pemrograman Web Modern dengan HTML, CSS & JS",
    penulis: "Budi Santoso",
    kategori: "Teknologi",
    harga: 85000,
    stok: 15,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "BK-002",
    judul: "Struktur Data & Algoritma Python",
    penulis: "Siti Rahma",
    kategori: "Teknologi",
    harga: 95000,
    stok: 8,
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "BK-003",
    judul: "Desain UI/UX & Information Architecture",
    penulis: "Andi Wijaya",
    kategori: "Desain",
    harga: 110000,
    stok: 12,
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "BK-004",
    judul: "Basis Data Relasional & MySQL",
    penulis: "Eko Prasetyo",
    kategori: "Teknologi",
    harga: 90000,
    stok: 5,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "BK-005",
    judul: "Jaringan Komputer & Cyber Security",
    penulis: "Rian Hidayat",
    kategori: "Jaringan",
    harga: 105000,
    stok: 20,
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&auto=format&fit=crop&q=80"
  }
];

// Initial Data Delivery Tracking
const trackingData = {
  "DO-20261104-001": {
    pemesan: "Aprilia NurLailaTul Badriyah",
    ekspedisi: "JNE Reguler (3-5 Hari)",
    tanggalKirim: "04 November 2026",
    jenisPaket: "Standard Packaging",
    totalPembayaran: 180000,
    statusStep: 3, // 1: Diproses, 2: Dikirim, 3: Dalam Perjalanan, 4: Selesai
    riwayat: [
      { waktu: "04 Nov 2026 08:30", ket: "Pesanan dikonfirmasi & dikemas oleh penjual" },
      { waktu: "04 Nov 2026 11:15", ket: "Paket diserahkan ke kurir ekspedisi" },
      { waktu: "04 Nov 2026 14:00", ket: "Paket tiba di Hub Sortir Cikarang" }
    ]
  }
};