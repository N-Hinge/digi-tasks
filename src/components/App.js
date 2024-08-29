import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header'; // Updated path
import CategoryCard from '../components/CategoryCard'; // Updated path
import Pagination from '../components/Pagination'; // Updated path
import { setCurrentPage } from '../redux/slice'; // Updated path
import '../App.css'; // Updated path

const categories = Array.from({ length: 20 }, (_, index) => `Category ${index + 1}`);

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const categoriesPerPage = 4;
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  const currentCategories = categories.slice(
    (currentPage - 1) * categoriesPerPage,
    currentPage * categoriesPerPage
  );

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div>
      <Header />
      <main className="pt-16 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentCategories.map((category, index) => (
            <CategoryCard key={index} title={category} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}

export default App;
