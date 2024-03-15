import './CategoryList.css';

const CategoryList = ({ onSelect }) => {

  const categories = [
    'Food',
    'Housing',
    'Transportation',
    'Entertainment',
    'Health',
    'Education',
    'Miscellanious',
  ];

  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value='' disabled selected>Select a category</option>
      {categories.map((cat) => {
        return (
          <option key={cat} value={cat} required>
            {cat}
          </option>
        );
      })}
    </select>
  );
};

export default CategoryList;
