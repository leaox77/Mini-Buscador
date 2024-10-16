import { useMovies } from '../hooks/useMovies';

const Categories = () => {
  const { categories } = useMovies();

  return (
    <div className="categories-grid">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
