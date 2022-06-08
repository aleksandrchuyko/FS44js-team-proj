import { refs } from './refs';

export async function clearGalleryContainer() {
  refs.galleryContainer.innerHTML = '';
}
