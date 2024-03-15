import './CategoryList.css';

const CategoryList = ({ onSelect, value }) => {

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
    <select onChange={handleChange} value={value}>
      <option value='' disabled>Select a category</option>
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
