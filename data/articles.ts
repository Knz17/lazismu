import type { Article } from '../types';

/*
  =============================================================================
  == EDIT THIS FILE to add, remove, or change news articles on the website. ==
  =============================================================================
  
  Instructions for Managing Article Images:
  1. Create a `public` folder in the root of your project if it doesn't exist.
  2. Inside `public`, create an `assets` folder.
  3. Inside `assets`, create an `images` folder.
  4. Place your article images (e.g., `my-article-photo.jpg`) inside the `public/assets/images/` directory.
  5. In the `articles` array below, update the `image` property to the correct path, 
     like `image: '/assets/images/my-article-photo.jpg'`.

  Instructions for Editing Article Content:
  1. To add a new article, copy an existing article object (from `{` to `},`) 
     and paste it as a new item in the `articles` array.
  2. Change the `id` to a new unique number.
  3. Fill in the `date`, `title`, `summary`, and `content` for all three languages 
     ('id', 'tr', 'en').
  4. The `content` can include HTML tags like <p>, <strong>, and <ul> for formatting.
*/

export const articles: Article[] = [
  {
    id: 1,
    image: '/assets/images/news-education-assistance.jpg',
    date: {
      id: '15 Juli 2024',
      tr: '15 Temmuz 2024',
      en: 'July 15, 2024',
    },
    title: {
      id: 'Program Bantuan Pendidikan untuk Pelajar di Istanbul',
      tr: 'İstanbul\'daki Öğrencilere Eğitim Yardımı Programı',
      en: 'Educational Assistance Program for Students in Istanbul',
    },
    summary: {
      id: 'Lazismu Turki meluncurkan program beasiswa baru untuk mendukung pelajar berprestasi dari keluarga kurang mampu.',
      tr: 'Lazismu Türkiye, düşük gelirli ailelerden gelen başarılı öğrencileri desteklemek için yeni bir burs programı başlattı.',
      en: 'Lazismu Turkey launches a new scholarship program to support talented students from low-income families.',
    },
    content: {
      id: '<p>Program ini bertujuan untuk memberikan bantuan biaya pendidikan, buku, dan perlengkapan sekolah kepada 100 siswa di wilayah Istanbul. Kami percaya bahwa pendidikan adalah kunci untuk memutus rantai kemiskinan dan membangun masa depan yang lebih cerah.</p><p>Penerima beasiswa akan dipilih berdasarkan prestasi akademik dan kebutuhan finansial. Selain bantuan materi, kami juga akan memberikan program bimbingan dan pengembangan diri.</p>',
      tr: '<p>Bu program, İstanbul bölgesindeki 100 öğrenciye eğitim ücretleri, kitaplar ve okul malzemeleri konusunda yardım sağlamayı amaçlamaktadır. Eğitimin yoksulluk zincirini kırmanın ve daha parlak bir gelecek inşa etmenin anahtarı olduğuna inanıyoruz.</p><p>Bursiyerler, akademik başarılarına ve finansal ihtiyaçlarına göre seçilecektir. Maddi yardımın yanı sıra, mentorluk ve kişisel gelişim programları da sunacağız.</p>',
      en: '<p>This program aims to provide assistance with tuition fees, books, and school supplies for 100 students in the Istanbul region. We believe that education is the key to breaking the cycle of poverty and building a brighter future.</p><p>Scholarship recipients will be selected based on academic merit and financial need. In addition to material support, we will also provide mentoring and self-development programs.</p>',
    },
  },
  {
    id: 2,
    image: '/assets/images/news-winter-food.jpg',
    date: {
      id: '2 Agustus 2024',
      tr: '2 Ağustos 2024',
      en: 'August 2, 2024',
    },
    title: {
      id: 'Distribusi Paket Makanan Selama Musim Dingin',
      tr: 'Kış Mevsiminde Gıda Paketi Dağıtımı',
      en: 'Winter Food Package Distribution',
    },
    summary: {
      id: 'Menghadapi musim dingin, Lazismu Turki membagikan ratusan paket makanan kepada keluarga yang membutuhkan di Ankarra.',
      tr: 'Kış mevsimine girerken, Lazismu Türkiye Ankara\'da ihtiyaç sahibi yüzlerce aileye gıda paketi dağıttı.',
      en: 'Facing the winter season, Lazismu Turkey distributed hundreds of food packages to families in need in Ankara.',
    },
    content: {
      id: '<p>Setiap paket berisi bahan makanan pokok seperti beras, minyak, gula, dan makanan kaleng. Inisiatif ini merupakan bagian dari komitmen kami untuk memastikan tidak ada yang kelaparan, terutama selama bulan-bulan musim dingin yang keras.</p><p>Terima kasih kepada para donatur dan relawan yang telah memungkinkan program ini berjalan dengan sukses.</p>',
      tr: '<p>Her pakette pirinç, yağ, şeker ve konserve gibi temel gıda maddeleri bulunmaktadır. Bu girişim, özellikle zorlu kış aylarında kimsenin aç kalmamasını sağlama taahhüdümüzün bir parçasıdır.</p><p>Bu programın başarılı bir şekilde yürütülmesini sağlayan bağışçılarımıza ve gönüllülerimize teşekkür ederiz.</p>',
      en: '<p>Each package contains essential food items such as rice, oil, sugar, and canned goods. This initiative is part of our commitment to ensure that no one goes hungry, especially during the harsh winter months.</p><p>Thank you to our donors and volunteers who have made this program a success.</p>',
    },
  },
];