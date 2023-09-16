import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/elements/Footer/Footer';
import Header from './components/elements/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import ContactsPage from './components/pages/ContactsPage/ContactsPage';
import ConfidentialPage from './components/pages/ConfidentialPage/ConfidentialPage';
import BlogPage from './components/pages/BlogPage/BlogPage';
import NotFound from './components/pages/NotFound/NotFound';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import ArticlePage from './components/pages/ArticlePage/ArticlePage';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCatalog } from './functions/getCatalog';
import { getCategories } from './functions/getCategories';
import { getBlogPosts } from './functions/getBlogPosts';
import { getProducts } from './functions/getProducts';
import ProductPage from './components/pages/ProductPage/ProductPage';
import SearchPage from './components/pages/SearchPage/SearchPage';
import { getOrder } from './functions/orderFunctions';
import OrderPage from './components/pages/OrderPage/OrderPage';

// function addProductToOrder(order, setOrder, product) {
//   let old_order = { ...order };
//   if (old_order[product.title]) {
//     old_order[product.title].quantity += 1;
//   } else {
//     old_order[product.title] = { quantity: 1, product: product };
//   }
//   setOrder(old_order);
// }

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalog());
    dispatch(getCategories());
    dispatch(getBlogPosts());
    dispatch(getProducts());
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <div>
      <div className='wrapper'>
        <div className={'header'}>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/confidential' element={<ConfidentialPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:slug' element={<ArticlePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/categories/:slug' element={<CategoryPage />} />
          <Route path='/products/:slug' element={<ProductPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
