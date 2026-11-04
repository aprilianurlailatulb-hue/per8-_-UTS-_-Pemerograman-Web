
if (!localStorage.getItem('katalogBuku')) {
  localStorage.setItem('katalogBuku', JSON.stringify(bukuData));
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function checkAuth() {
  const isLogged = localStorage.getItem('isLoggedIn');
  if (!isLogged && !window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
    window.location.href = 'index.html';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;

  if (email === "aprilianurlailatulbadriyah@gmail.com" && pass === "password123") {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = 'dashboard.html';
  } else {
    showToast("Email/Password yang Anda masukkan salah!");
  }
}

function quickFillLogin() {
  document.getElementById('loginEmail').value = "aprilianurlailatulbadriyah@gmail.com";
  document.getElementById('loginPass').value = "password123";
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'index.html';
}

function openModal(id) {
  document.getElementById(id).classList.add('show');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.innerText = msg;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3500);
  } else {
    alert(msg);
  }
}

function updateGreeting() {
  const elem = document.getElementById('greetingText');
  if (!elem) return;
  const hour = new Date().getHours();
  let timeStr = "Selamat Pagi";
  if (hour >= 11 && hour < 15) timeStr = "Selamat Siang";
  else if (hour >= 15 && hour < 18) timeStr = "Selamat Sore";
  else if (hour >= 18 || hour < 5) timeStr = "Selamat Malam";

  elem.innerText = `${timeStr}, Aprilia NurLailaTul Badriyah!`;
}

function renderStokTable() {
  const tbody = document.getElementById('stokTableBody');
  if (!tbody) return;
  const data = JSON.parse(localStorage.getItem('katalogBuku')) || [];
  
  tbody.innerHTML = data.map((buku, index) => `
    <tr>
      <td>${buku.id}</td>
      <td><strong>${buku.judul}</strong></td>
      <td>${buku.penulis}</td>
      <td><span class="badge">${buku.kategori}</span></td>
      <td>Rp ${buku.harga.toLocaleString('id-ID')}</td>
      <td>${buku.stok} unit</td>
      <td>
        <button class="btn btn-secondary" onclick="tambahKeKeranjang(${index})">+ Beli</button>
      </td>
    </tr>
  `).join('');
}

function tambahStokBaru(e) {
  e.preventDefault();
  const data = JSON.parse(localStorage.getItem('katalogBuku')) || [];
  const newBuku = {
    id: `BK-00${data.length + 1}`,
    judul: document.getElementById('inputJudul').value,
    penulis: document.getElementById('inputPenulis').value,
    kategori: document.getElementById('inputKategori').value,
    harga: parseInt(document.getElementById('inputHarga').value),
    stok: parseInt(document.getElementById('inputStok').value),
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80"
  };

  data.push(newBuku);
  localStorage.setItem('katalogBuku', JSON.stringify(data));
  renderStokTable();
  closeModal('modalTambahStok');
  showToast("Stok buku baru berhasil ditambahkan!");
}

function tambahKeKeranjang(index) {
  const data = JSON.parse(localStorage.getItem('katalogBuku'));
  const item = data[index];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  showToast(`"${item.judul}" dimasukkan ke keranjang!`);
}

function cariTracking() {
  const noDO = document.getElementById('inputDO').value.trim();
  const res = document.getElementById('trackingResult');
  const track = trackingData[noDO];

  if (track) {
    res.style.display = 'block';
    document.getElementById('trackPemesan').innerText = track.pemesan;
    document.getElementById('trackEkspedisi').innerText = track.ekspedisi;
    document.getElementById('trackTanggal').innerText = track.tanggalKirim;
    document.getElementById('trackTotal').innerText = "Rp " + track.totalPembayaran.toLocaleString('id-ID');
    
    const progressPerc = (track.statusStep / 4) * 100;
    document.getElementById('trackProgress').style.width = progressPerc + '%';
  } else {
    showToast("Nomor Delivery Order tidak ditemukan!");
    res.style.display = 'none';
  }
}