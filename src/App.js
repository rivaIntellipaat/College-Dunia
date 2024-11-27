import React, { useState } from 'react';
import './App.css';

const dummyColleges = [
  { id: 1, name: "IIT Madras", rating: 9.5, fees: 200000, userRating: 8.5, featured: true, averagePackage: 1200000, highestPackage: 2000000 },
  { id: 2, name: "IIT Delhi", rating: 9.0, fees: 180000, userRating: 9.0, featured: false, averagePackage: 1100000, highestPackage: 1900000 },
  { id: 3, name: "Purdue University", rating: 8.8, fees: 220000, userRating: 8.0, featured: true, averagePackage: 800000, highestPackage: 1500000 },
  { id: 4, name: "IIT Bombay", rating: 9.2, fees: 210000, userRating: 9.2, featured: false, averagePackage: 1300000, highestPackage: 2100000 },
  { id: 5, name: "Stanford University", rating: 9.8, fees: 300000, userRating: 9.5, featured: true, averagePackage: 1400000, highestPackage: 2500000 },
  { id: 6, name: "MIT", rating: 9.7, fees: 500000, userRating: 9.6, featured: true, averagePackage: 1600000, highestPackage: 3000000 },
  { id: 7, name: "Harvard University", rating: 9.6, fees: 480000, userRating: 9.4, featured: true, averagePackage: 1500000, highestPackage: 2800000 },
  { id: 8, name: "California Institute of Technology", rating: 9.4, fees: 490000, userRating: 9.3, featured: false, averagePackage: 1550000, highestPackage: 2750000 },
  { id: 9, name: "University of Cambridge", rating: 9.3, fees: 450000, userRating: 9.1, featured: true, averagePackage: 1350000, highestPackage: 2400000 },
  { id: 10, name: "University of Oxford", rating: 9.5, fees: 470000, userRating: 9.2, featured: false, averagePackage: 1450000, highestPackage: 2600000 },
  { id: 11, name: "Columbia University", rating: 9.1, fees: 490000, userRating: 9.0, featured: true, averagePackage: 1250000, highestPackage: 2300000 },
  { id: 12, name: "University of Chicago", rating: 9.2, fees: 480000, userRating: 9.1, featured: false, averagePackage: 1300000, highestPackage: 2200000 },
  { id: 13, name: "Yale University", rating: 9.0, fees: 470000, userRating: 8.9, featured: true, averagePackage: 1150000, highestPackage: 2100000 },
  { id: 14, name: "University of California, Berkeley", rating: 8.9, fees: 450000, userRating: 8.8, featured: false, averagePackage: 1100000, highestPackage: 2000000 },
  { id: 15, name: "University of Michigan", rating: 8.7, fees: 420000, userRating: 8.7, featured: true, averagePackage: 1000000, highestPackage: 1900000 },
  { id: 16, name: "University of Toronto", rating: 8.6, fees: 400000, userRating: 8.5, featured: false, averagePackage: 950000, highestPackage: 1800000 },
  { id: 17, name: "National University of Singapore", rating: 8.8, fees: 380000, userRating: 8.6, featured: true, averagePackage: 970000, highestPackage: 1750000 },
  { id: 18, name: "ETH Zurich", rating: 9.4, fees: 350000, userRating: 9.0, featured: true, averagePackage: 1400000, highestPackage: 2300000 },
  { id: 19, name: "University of Edinburgh", rating: 8.4, fees: 370000, userRating: 8.3, featured: false, averagePackage: 900000, highestPackage: 1650000 },
  { id: 20, name: "University of Melbourne", rating: 8.5, fees: 360000, userRating: 8.4, featured: true, averagePackage: 980000, highestPackage: 1700000 },
  { id: 21, name: "University of Sydney", rating: 8.3, fees: 340000, userRating: 8.2, featured: false, averagePackage: 850000, highestPackage: 1600000 },
  { id: 22, name: "Tsinghua University", rating: 8.9, fees: 320000, userRating: 8.5, featured: true, averagePackage: 1100000, highestPackage: 1900000 },
  { id: 23, name: "Seoul National University", rating: 8.7, fees: 310000, userRating: 8.6, featured: false, averagePackage: 1020000, highestPackage: 1800000 },
  { id: 24, name: "University of Tokyo", rating: 8.6, fees: 330000, userRating: 8.4, featured: true, averagePackage: 1200000, highestPackage: 2000000 },
  { id: 25, name: "University of Hong Kong", rating: 8.5, fees: 300000, userRating: 8.3, featured: false, averagePackage: 880000, highestPackage: 1500000 },
  { id: 26, name: "Peking University", rating: 8.4, fees: 290000, userRating: 8.2, featured: true, averagePackage: 810000, highestPackage: 1450000 },
  { id: 27, name: "University of California, Los Angeles", rating: 8.8, fees: 310000, userRating: 8.7, featured: false, averagePackage: 930000, highestPackage: 1550000 },
  { id: 28, name: "McGill University", rating: 8.2, fees: 280000, userRating: 8.1, featured: true, averagePackage: 760000, highestPackage: 1400000 },
  { id: 29, name: "University of Alberta", rating: 8.0, fees: 270000, userRating: 8.0, featured: false, averagePackage: 700000, highestPackage: 1300000 },
  { id: 30, name: "University of Queensland", rating: 8.1, fees: 260000, userRating: 8.0, featured: true, averagePackage: 720000, highestPackage: 1350000 },
];

function App() {
  const [colleges, setColleges] = useState(dummyColleges);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('rating'); // Default sort by rating

  const getFilteredAndSortedColleges = () => {
    const filteredColleges = colleges.filter(college =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredColleges.sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
  };

  const filteredAndSortedColleges = getFilteredAndSortedColleges();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    const newSortOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(newSortOrder);
  };

  return (
    <div className="App">
      <h1>College Listing</h1>
      <input
        type="text"
        placeholder="Search by college name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => handleSort('name')}>Colleges</th>
            <th onClick={() => handleSort('rating')}>Collegedunia Rating {sortKey === 'rating' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('fees')}>Fees {sortKey === 'fees' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('userRating')}>User Reviews Rating {sortKey === 'userRating' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th>Placement</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedColleges.map((college, index) => (
            <tr key={college.id}>
              <td>{index + 1}</td>
              <td>{college.name} {college.featured && <span style={{color: 'red'}}>(Featured)</span>}</td>
              <td>{college.rating}</td>
              <td>${college.fees}</td>
              <td>{college.userRating}</td>
              <td>
                Avg: ${college.averagePackage.toLocaleString()} <br />
                High: ${college.highestPackage.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;