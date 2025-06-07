import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Buket kupu2 biru',
    price: 'Rp.65.000',
    description: 'Isi 10pcs kupu2',
    image: '/images/buket-kupu2-biru.jpg',
    category: 'kupu2',
    variants: [
      { color: 'biru', price: 'Rp.65.000' },
      { color: 'ungu', price: 'Rp.65.000' },
      { color: 'pink', price: 'Rp.65.000' }
    ]
  },
  {
    id: '2',
    name: 'Buket kupu2 ungu',
    price: 'Rp.65.000',
    description: 'Isi 10pcs kupu2',
    image: '/images/buket-kupu2-ungu.jpg',
    category: 'kupu2',
    variants: [
      { color: 'biru', price: 'Rp.65.000' },
      { color: 'ungu', price: 'Rp.65.000' },
      { color: 'pink', price: 'Rp.65.000' }
    ]
  },
  {
    id: '3',
    name: 'Buket kupu2 pink',
    price: 'Rp.65.000',
    description: 'Isi 10pcs kupu2',
    image: '/images/buket-kupu2-pink.jpg',
    category: 'kupu2',
    variants: [
      { color: 'biru', price: 'Rp.65.000' },
      { color: 'ungu', price: 'Rp.65.000' },
      { color: 'pink', price: 'Rp.65.000' }
    ]
  },
  {
    id: '4',
    name: 'Buket boneka +kupu2 biru',
    price: 'Rp.80.000',
    description: 'Isi 5pcs kupu2 +boneka wisuda',
    image: '/images/buket-boneka-kupu2-biru.jpg',
    category: 'boneka',
    variants: [
      { color: 'biru', price: 'Rp.80.000' },
      { color: 'ungu', price: 'Rp.80.000' },
      { color: 'pink', price: 'Rp.80.000' }
    ]
  },
  {
    id: '5',
    name: 'Buket boneka +kupu2 ungu',
    price: 'Rp.80.000',
    description: 'Isi 5pcs kupu2 +boneka wisuda',
    image: '/images/buket-boneka-kupu2-ungu.jpg',
    category: 'boneka',
    variants: [
      { color: 'biru', price: 'Rp.80.000' },
      { color: 'ungu', price: 'Rp.80.000' },
      { color: 'pink', price: 'Rp.80.000' }
    ]
  },
  {
    id: '6',
    name: 'Buket boneka +kupu2 pink',
    price: 'Rp.80.000',
    description: 'Isi 5pcs kupu2 +boneka wisuda',
    image: '/images/buket-boneka-kupu2-pink.jpg',
    category: 'boneka',
    variants: [
      { color: 'biru', price: 'Rp.80.000' },
      { color: 'ungu', price: 'Rp.80.000' },
      { color: 'pink', price: 'Rp.80.000' }
    ]
  },
  // Tambahan produk untuk mengisi grid
  {
    id: '7',
    name: 'Buket Mawar Merah',
    price: 'Rp.75.000',
    description: 'Isi 12pcs mawar merah segar',
    image: '/images/buket-mawar-merah.jpg',
    category: 'mawar',
  },
  {
    id: '8',
    name: 'Buket Lily Putih',
    price: 'Rp.85.000',
    description: 'Isi 8pcs lily putih elegant',
    image: '/images/buket-lily-putih.jpg',
    category: 'lily',
  },
  {
    id: '9',
    name: 'Buket Tulip Kuning',
    price: 'Rp.70.000',
    description: 'Isi 15pcs tulip kuning cerah',
    image: '/images/buket-tulip-kuning.jpg',
    category: 'tulip',
  },
  {
    id: '10',
    name: 'Buket Mixed Flowers',
    price: 'Rp.90.000',
    description: 'Kombinasi berbagai bunga segar',
    image: '/images/buket-mixed.jpg',
    category: 'mixed',
  },
  {
    id: '11',
    name: 'Buket Sunflower',
    price: 'Rp.68.000',
    description: 'Isi 10pcs bunga matahari',
    image: '/images/buket-sunflower.jpg',
    category: 'sunflower',
  },
  {
    id: '12',
    name: 'Buket Baby Breath',
    price: 'Rp.55.000',
    description: 'Buket baby breath putih minimalis',
    image: '/images/buket-baby-breath.jpg',
    category: 'baby-breath',
  }
];
