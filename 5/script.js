fetch("http://10.110.1.211:5000/mahasiswa/")
  .then((response) => response.json()) // Mengonversi response ke JSON
  .then((data) => displayMahasiswa(data)) // Menampilkan data JSON
  .catch((error) => console.error("Error:", error));

// Fungsi untuk menampilkan data mahasiswa
function displayMahasiswa(mahasiswa) {
  const mahasiswaList = document.getElementById("mahasiswa-list");
  const modalList = document.getElementById("modal-list");
  //   mahasiswaList.innerHTML = ""; // Mengosongkan daftar sebelumnya

  mahasiswa.forEach((mhs) => {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdNpm = document.createElement("td");
    const tdNama = document.createElement("td");
    const tdJurusan = document.createElement("td");
    const tdTahunMasuk = document.createElement("td");
    const tdKelas = document.createElement("td");
    const tdAction = document.createElement("td");

    tdId.textContent = `${mhs.id}`;
    tr.appendChild(tdId);
    tdNpm.textContent = `${mhs.npm}`;
    tr.appendChild(tdNpm);
    tdNama.textContent = `${mhs.nama}`;
    tr.appendChild(tdNama);
    tdJurusan.textContent = `${mhs.jurusan}`;
    tr.appendChild(tdJurusan);
    tdTahunMasuk.textContent = `${mhs.tahun_masuk}`;
    tr.appendChild(tdTahunMasuk);
    tdKelas.textContent = `${mhs.kelas}`;
    tr.appendChild(tdKelas);
    tdAction.innerHTML = `<button type="button" class="btn btn-danger" onclick="deleteMahasiswa(${mhs.id})">Delete</button><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#data${mhs.id}">Edit</button>`;
    tr.appendChild(tdAction);
    mahasiswaList.appendChild(tr);

    modalList.innerHTML += `
    <div class="modal fade" id="data${mhs.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <div class="mb-3">
            <label for="npm" class="form-label">NPM</label>
            <input type="text" class="form-control" id="${mhs.id}editnpm" value="${mhs.npm}" required>
          </div>
          <div class="mb-3">
            <label for="nama" class="form-label">Nama</label>
            <input type="text" class="form-control" id="${mhs.id}editnama" value="${mhs.nama}" required>
          </div>
          <div class="mb-3">
            <label for="jurusan" class="form-label">Jurusan</label>
            <input type="text" class="form-control" id="${mhs.id}editjurusan" value="${mhs.jurusan}" required>
          </div>
          <div class="mb-3">
            <label for="tahun_masuk" class="form-label">Tahun Masuk</label>
            <input type="date" class="form-control" id="${mhs.id}edittahun_masuk" value="${mhs.tahun_masuk}" required>
          </div>
          <div class="mb-3">
            <label for="kelas" class="form-label">Kelas</label>
            <input type="text" class="form-control" id="${mhs.id}editkelas" value="${mhs.kelas}" required>
          </div>
          <button type="submit" class="btn btn-primary" onclick="editMahasiswa(${mhs.id})">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>`;
  });
}

function deleteMahasiswa(id) {
  fetch(`http://10.110.1.211:5000/mahasiswa/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        alert("Data berhasil dihapus!");
        location.reload(); // Reload halaman setelah menghapus data
      } else {
        alert("Gagal menghapus data!");
      }
    })
    .catch((error) => console.error("Error:", error));
}

function editMahasiswa(id) {
  const npm = document.getElementById(`${id}editnpm`).value;
  const nama = document.getElementById(`${id}editnama`).value;
  const jurusan = document.getElementById(`${id}editjurusan`).value;
  const tahun_masuk = document.getElementById(`${id}edittahun_masuk`).value;
  const kelas = document.getElementById(`${id}editkelas`).value;

  fetch(`http://10.110.1.211:5000/mahasiswa/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      npm: npm,
      nama: nama,
      jurusan: jurusan,
      tahun_masuk: tahun_masuk,
      kelas: kelas,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Data berhasil diubah!");
        location.reload(); // Reload halaman setelah mengubah data
      } else {
        console.log(
          JSON.stringify({
            npm: npm,
            nama: nama,
            jurusan: jurusan,
            tahun_masuk: tahun_masuk,
            kelas: kelas,
          })
        );
        alert("Gagal mengubah data!");
      }
    })
    .catch((error) => console.error("Error:", error));
}

function addMahasiswa() {
  const npm = document.getElementById("npm").value;
  const nama = document.getElementById("nama").value;
  const jurusan = document.getElementById("jurusan").value;
  const tahun_masuk = document.getElementById("tahun_masuk").value;
  const kelas = document.getElementById("kelas").value;

  fetch("http://10.110.1.211:5000/mahasiswa/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      npm: npm,
      nama: nama,
      jurusan: jurusan,
      tahun_masuk: tahun_masuk,
      kelas: kelas,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Data berhasil ditambahkan!");
        location.reload(); // Reload
      } else {
        alert("Gagal menambahkan data!");
      }
    })
    .catch((error) => console.error("Error:", error));
}
