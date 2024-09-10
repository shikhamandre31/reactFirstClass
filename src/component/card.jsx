import React from "react";

export default function Card({ content }) {
  const [numbers, setNumbers] = useState([1, 2, 5, 7, 8, 13]);
  const [target, setTarget] = useState([1, 2, 5, 7, 8, 13]);
  const [filterNumbers, setFilterNumbers] = useState([]);
  const FilterGraterThanTarget = (arr, target) => {
    return arr.filter((num) => num > target);
  };
  const handleFilter = () => {
    const result = FilterGraterThanTarget(numbers, target);
    setFilterNumbers(result);
  };

  return (
    <div>
      {/* <h1><form>{content.title}</form></h1>
        <p>{content.desc}</p>
        <p>{content.age}
              
              {content.age>=18?"you are an adult":"you are a minor"}</p>
        
        
        <footer> 
          {content.author}
        </footer> */}
    </div>
  );
}
