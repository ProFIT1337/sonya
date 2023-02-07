import data from '../testData/categories';
export async function getCategory(slug) {
  return data.find((category) => category.slug === slug);
}
