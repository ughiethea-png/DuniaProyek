//🔹 script.js
/*
// menampilkan isi dari elemen tertentu di file.html
async function loadDetail() {  // <button onclick="loadDetail('index')">Tampilkan Detail</button>
  // Ambil seluruh isi file html.html
  let res = await fetch("html.html"); // Mengambil isi file HTML
  let htmlText = await res.text(); // Mengubah hasil fetch jadi teks HTML

  // Ubah string HTML menjadi dokumen HTML
  let parser = new DOMParser(); // Mengubah teks HTML jadi dokumen DOM agar bisa diakses per elemen
  let doc = parser.parseFromString(htmlText, "text/html");

  // Ambil elemen tertentu dari html.html
  let bagian = doc.querySelector("#link"); // Mengambil elemen id="link" dari file.html

  // Tampilkan ke bagian tertentu di index.html
  document.getElementById("main").innerHTML = bagian.innerHTML;
}


// menampilkan isi dari elemen tertentu di file.html berdasarkan id
async function loadDetail(id) { // <button onclick="loadDetail('index')">Tampilkan Detail</button>
  let res = await fetch("index.html"); // Ambil isi file HTML
  let htmlText = await res.text(); // Mengubah hasil fetch jadi teks HTML

  let parser = new DOMParser();  // Mengubah teks HTML jadi dokumen DOM agar bisa diakses per elemen
  let doc = parser.parseFromString(htmlText, "text/html");

  let bagian = doc.querySelector("#" + id); // Mengambil elemen berdasarkan id dari file lain
 // Tampilkan ke bagian tertentu di index.html
  document.getElementById("main").innerHTML = bagian.innerHTML; //<div id="main"></div>
}
*/
//menampilkan beberapa elemen dari beberapa file HTML berbeda
async function loadFile(file, selector) { //<button onclick="loadFile('js.html', '#Info')">Info</button>
      try {
        // Ambil isi file HTML
        let res = await fetch(file);
        let html = await res.text();

        // Buat DOM sementara untuk parsing
        let temp = document.createElement("div");
        temp.innerHTML = html;

        // Cari elemen sesuai selector ( id / class elemen )
        let part = temp.querySelector(selector);

        // Jika ditemukan, tampilkan di index.html
        if (part) {
          document.getElementById("main").innerHTML = part.outerHTML; //  <div id="dasar"></div>
        } else {
          document.getElementById("main").innerHTML = "Elemen tidak ditemukan.";
        }
      } catch (err) {
        console.error(err);
        document.getElementById("main").innerHTML = "Gagal memuat file."; 
      }
    }
	
// Menampilkan modal berdasarkan id 
    function openModal(id) { //<button class="next-btn" onclick="openModal('modal4')">Ke Modal 4</button>
      document.getElementById(id).style.display = "block";
    }
// Menampilkan modal berdasarkan id	 
    function closeModal(id) { //<button class="close-btn" onclick="closeModal('modal4')">Tutup</button>
      document.getElementById(id).style.display = "none";
    }
	  
// Menampilkan detail berdasarkan id
function showDetail(detailId){ //<button onclick="showDetail('simpan-db')">Lihat Detail</button>
  const html = document.getElementById(detailId)?.innerHTML || "<p>Detail tidak ditemukan.</p>";
  document.getElementById('main').innerHTML = html;
}
// kembali ke halaman berikutnya berdasarkan id
function backToMenu(menuId){ //<button onclick="backToMenu('templates')">Kembali</button>
  const html = document.getElementById(menuId)?.innerHTML;
  document.getElementById('main').innerHTML = html;
} 