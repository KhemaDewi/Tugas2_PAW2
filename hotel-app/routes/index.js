var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const data = {
    nama: "Sunrise Haven Hotel",
    img: "https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi:
      "Sunrise Haven Hotel adalah destinasi premium untuk liburan yang menyuguhkan pengalaman mewah dengan pemandangan alam yang memukau. Terletak di tepi pantai yang tenang, hotel ini menawarkan kamar-kamar elegan yang dilengkapi dengan fasilitas modern seperti Wi-Fi gratis, TV layar datar, dan balkon pribadi dengan pemandangan laut. Para tamu dapat menikmati berbagai fasilitas rekreasi, termasuk kolam renang infinity yang menghadap ke samudra, pusat kebugaran, dan spa kelas dunia yang menawarkan berbagai perawatan relaksasi. Restoran hotel menyajikan hidangan internasional dan lokal yang dibuat oleh koki berpengalaman. Dikenal dengan pelayanannya yang ramah dan profesional, Sunrise Haven Hotel memastikan setiap tamu merasa istimewa dengan perhatian terhadap detail dan suasana yang nyaman. Hotel ini ideal untuk pasangan yang mencari liburan romantis, keluarga yang ingin berlibur santai, ataupun pelancong bisnis yang menginginkan akomodasi berkualitas.",
    fasilitas: [
      {
        nama: "Wi-Fi",
        img: "https://images.unsplash.com/photo-1600238454024-bc8c1e49caba?q=80&w=1730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        deskripsi:
          "Menyediakan Wi-Fi gratis yang dapat diakses penuh hingga 24 jam",
      },
      {
        nama: "TV",
        img: "https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        deskripsi:
          "Menyediakan TV layar datar gratis yang dapat digunakan untuk hiburan",
      },
      {
        nama: "Balkon Pribadi",
        img: "https://images.unsplash.com/photo-1554780330-95c7fd3e7b44?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        deskripsi:
          "Menyediakan Balkon dengan pemandangan laut yang dapat dinikmati secara pribadi",
      },
    ],
  };

  res.render("index", { title: "Home", data, layout: "main" });
});

/* GET about page. */
router.get("/about", function (req, res, next) {
  const data = {
    visi: "Visi kami adalah menyediakan surga di mana para tamu dapat bersantai dan menyatu kembali dengan alam, menawarkan ketenangan dari hiruk pikuk kehidupan sehari-hari. Kami berusaha menciptakan suasana hangat dan ramah, memastikan bahwa setiap tamu merasa seperti di rumah sendiri selama menginap.",
    komitmen:
      "Di Sunrise Haven Hotel, kami berkomitmen untuk menjaga keindahan lingkungan sekitar. Kami menerapkan praktik berkelanjutan seperti mengurangi penggunaan plastik, menghemat air, dan menggunakan bahan-bahan lokal untuk restoran kami. Dengan memilih untuk menginap bersama kami, Anda berkontribusi untuk masa depan yang lebih hijau.",
    pengalaman_tamu:
      "Staf kami yang berdedikasi siap melayani setiap kebutuhan Anda, memastikan pengalaman yang personal dan luar biasa mulai dari check-in hingga check-out. Kami bangga dengan layanan penuh perhatian kami dan selalu siap membantu dengan rekomendasi, reservasi, dan apa pun yang mungkin Anda perlukan.",
    kontak: [
      {
        jenis: "Telepon",
        isi: "08xx-xxxx-xxxx",
      },
      {
        jenis: "Email",
        isi: "SunriseHaven@gmail.com",
      },
      {
        jenis: "Instagram",
        isi: "SunriseHaven",
      },
    ],
  };
  res.render("about", { title: "About", data, layout: "main" });
});

/* GET lokasi page. */
router.get("/lokasi", function (req, res, next) {
  const data = {
    nama: "Sunrise Haven Hotel",
    alamat: {
      jalan: "Jl. 123 Lautan",
      kota: "Bali",
      provinsi: "Bali",
      kode_pos: "80461",
      negara: "Indonesia",
    },
    peta: "https://developers.google.com/static/codelabs/maps-platform/full-stack-store-locator/img/58a6680e9c8e7396.png?hl=id",
  };
  res.render("lokasi", { title: "Lokasi", data, layout: "main" });
});

module.exports = router;
