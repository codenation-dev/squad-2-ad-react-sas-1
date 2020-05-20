import { slugify } from './slugify';
// contém todas as funçoes sobre URL
// receber URL
// tratar os caracteres
// pegar os produtos pela URL

export const urlParser = () => {
  const pathnameUrl = window.location.pathname;
  const searchUrl = window.location.search;
  const slug = pathnameUrl.replace('/products/', '');
  const color = searchUrl.replace('?color=', '');

  return { slug, color };
};
