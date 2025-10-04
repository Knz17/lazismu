import type { GalleryImage } from '../types';

/*
  ========================================================================
  == EDIT THIS FILE to add, remove, or change photos in the gallery.    ==
  ========================================================================

  Instructions for Managing Gallery Images:
  1. Create a `public` folder in the root of your project if it doesn't exist.
  2. Inside `public`, create an `assets` folder.
  3. Inside `assets`, create an `images` folder.
  4. Place your gallery images (e.g., `my-gallery-photo.jpg`) inside the `public/assets/images/` directory.
  5. In the `galleryImages` array below, update the `src` property to the correct path,
     like `src: '/assets/images/my-gallery-photo.jpg'`.

  Instructions for Editing Captions:
  1. To add a new photo, copy an existing image object (from `{` to `},`)
     and paste it as a new item in the `galleryImages` array.
  2. Change the `id` to a new unique number.
  3. Fill in the `alt` (alternative text for accessibility) and `caption`
     for all three languages ('id', 'tr', 'en').
*/


export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/assets/images/gallery-food-distribution.jpg',
    alt: { id: 'Relawan membagikan makanan', tr: 'Gönüllüler yemek dağıtıyor', en: 'Volunteers distributing food' },
    caption: { id: 'Kegiatan berbagi makanan hangat', tr: 'Sıcak yemek paylaşım etkinliği', en: 'Warm meal sharing event' },
  },
  {
    id: 2,
    src: '/assets/images/gallery-book-donation.jpg',
    alt: { id: 'Anak-anak menerima buku', tr: 'Çocuklar kitap alıyor', en: 'Children receiving books' },
    caption: { id: 'Program donasi buku untuk sekolah', tr: 'Okullar için kitap bağış programı', en: 'Book donation program for schools' },
  },
  {
    id: 3,
    src: '/assets/images/gallery-health-checkup.jpg',
    alt: { id: 'Pemeriksaan kesehatan gratis', tr: 'Ücretsiz sağlık taraması', en: 'Free health check-up' },
    caption: { id: 'Layanan kesehatan untuk masyarakat', tr: 'Toplum için sağlık hizmetleri', en: 'Health services for the community' },
  },
  {
    id: 4,
    src: '/assets/images/gallery-student-discussion.jpg',
    alt: { id: 'Diskusi bersama mahasiswa', tr: 'Öğrencilerle tartışma', en: 'Discussion with students' },
    caption: { id: 'Program beasiswa dan bimbingan', tr: 'Burs ve mentorluk programı', en: 'Scholarship and mentoring program' },
  },
  {
    id: 5,
    src: '/assets/images/gallery-volunteer-team.jpg',
    alt: { id: 'Tim relawan Lazismu Turki', tr: 'Lazismu Türkiye gönüllü ekibi', en: 'Lazismu Turkey volunteer team' },
    caption: { id: 'Semangat kebersamaan para relawan', tr: 'Gönüllülerin birlik ruhu', en: 'The spirit of togetherness of volunteers' },
  },
  {
    id: 6,
    src: '/assets/images/gallery-facility-construction.jpg',
    alt: { id: 'Pembangunan fasilitas umum', tr: 'Kamu tesisi inşaatı', en: 'Construction of public facilities' },
    caption: { id: 'Membangun untuk masa depan', tr: 'Gelecek için inşa etmek', en: 'Building for the future' },
  },
];