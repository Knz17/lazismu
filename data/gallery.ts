
import type { GalleryImage } from '../types';

/*
  ========================================================================
  == EDIT THIS FILE to add, remove, or change photos in the gallery.    ==
  ========================================================================

  Instructions:
  1. To add a new photo, copy an existing image object (from `{` to `},`)
     and paste it as a new item in the `galleryImages` array.
  2. Change the `id` to a new unique number.
  3. IMPORTANT: The `src` is a URL to the image. You can use a service like
     picsum.photos for placeholders. To use your own photos, you would
     typically place them in a public folder in your project (e.g., `public/gallery/`)
     and set the `src` to `/gallery/your-image-name.jpg`.
  4. Fill in the `alt` (alternative text for accessibility) and `caption`
     for all three languages ('id', 'tr', 'en').
*/


export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/gallery1/800/600',
    alt: { id: 'Relawan membagikan makanan', tr: 'Gönüllüler yemek dağıtıyor', en: 'Volunteers distributing food' },
    caption: { id: 'Kegiatan berbagi makanan hangat', tr: 'Sıcak yemek paylaşım etkinliği', en: 'Warm meal sharing event' },
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/gallery2/800/600',
    alt: { id: 'Anak-anak menerima buku', tr: 'Çocuklar kitap alıyor', en: 'Children receiving books' },
    caption: { id: 'Program donasi buku untuk sekolah', tr: 'Okullar için kitap bağış programı', en: 'Book donation program for schools' },
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/gallery3/800/600',
    alt: { id: 'Pemeriksaan kesehatan gratis', tr: 'Ücretsiz sağlık taraması', en: 'Free health check-up' },
    caption: { id: 'Layanan kesehatan untuk masyarakat', tr: 'Toplum için sağlık hizmetleri', en: 'Health services for the community' },
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/gallery4/800/600',
    alt: { id: 'Diskusi bersama mahasiswa', tr: 'Öğrencilerle tartışma', en: 'Discussion with students' },
    caption: { id: 'Program beasiswa dan bimbingan', tr: 'Burs ve mentorluk programı', en: 'Scholarship and mentoring program' },
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/gallery5/800/600',
    alt: { id: 'Tim relawan Lazismu Turki', tr: 'Lazismu Türkiye gönüllü ekibi', en: 'Lazismu Turkey volunteer team' },
    caption: { id: 'Semangat kebersamaan para relawan', tr: 'Gönüllülerin birlik ruhu', en: 'The spirit of togetherness of volunteers' },
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/gallery6/800/600',
    alt: { id: 'Pembangunan fasilitas umum', tr: 'Kamu tesisi inşaatı', en: 'Construction of public facilities' },
    caption: { id: 'Membangun untuk masa depan', tr: 'Gelecek için inşa etmek', en: 'Building for the future' },
  },
];
