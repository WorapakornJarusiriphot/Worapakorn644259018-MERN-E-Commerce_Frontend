import { useState, useEffect } from "react";
import Card from "../../components/Card";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();
        setProducts(data);
        setFilteredItems(data);
        //setCategories(["all", ...data.map((item) => item.category)]);
        setCategories(["all", ...new Set(data.map((item) => item.category))]); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    //setFilteredItems(filtered);
    handleSortChange(sortOption, filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  const handleSortChange = (option, products) => {
    setSortOption(option);
    let sortedItems = [...products];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedItems.sort((a, b) => a.price - b.price);
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  const indexOfLastItem = itemsPerPage * currentPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Product List Banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col justify-center items-center">
          <div className="text-center space-y-7 px-4">
            <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
              Unleash Your Inner <span className="text-red">Geek</span>: <br />{" "}
              Shop Our Exclusive Tech-themed Merchandises!
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              We offer a curated selection of high-quality products ranging from clothing and accessories to home decor and office essentials.
              Each item is carefully chosen to meet our standards of quality,
              functionality, and style.
            </p>
            <button className="btn bg-red px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>
      {/* Product List card */}
      <div className="section-container">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* Filter */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filterItems(category)}
                  className={`${selectedCategory === category ? "active" : ""
                    } px-4 py-2 rounded-full`}
                >
                  <p className="capitalize">{category}</p>
                </button>
              );
            })}
          </div>
          {/* Sort Option */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="flex bg-black p-2 items-center"> {/* ใช้ 'flex' แทน 'flex-row' และเพิ่ม 'items-center' */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 mr-2"> {/* เพิ่ม 'mr-2' เพื่อให้มีพื้นที่ระหว่างไอคอนกับ dropdown */}
                <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
              </svg>
              <select
                id="sort"
                className="bg-black text-white px-2 rounded-sm"
                onChange={(e) => handleSortChange(e.target.value, filteredItems)}
                value={sortOption}
              >
                <option value={"default"}>Default</option>
                <option value={"A-Z"}>A-Z</option>
                <option value={"Z-A"}>Z-A</option>
                <option value={"low-to-high"}>Low to High</option>
                <option value={"high-to-low"}>High to Low</option>
              </select>
            </div>
          </div>
          {/* Product Card  */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {currentItems.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center  my-8 flex-wrap gap-2">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => {
          return (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-red text-white" : "bg-gray-200"
                }`}
              onClick={() => {
                paginate(index + 1);
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;