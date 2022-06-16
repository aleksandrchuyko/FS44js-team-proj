import { refs } from './refs';

export default async function clearGalleryContainer() {
  refs.galleryContainer.innerHTML = '';
}
