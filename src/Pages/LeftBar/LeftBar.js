import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const LeftBar = () => {
  // const [categories, setCategories] = useState([]);
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/brands");
      const data = await res.json();
      return data;
    },
  });
  // useEffect(() => {
  //   fetch("http://localhost:5000/brands")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);
  return (
    <div>
      <div className="">
        <button className=" font-bold  text-center px-2 text-lg">
          SEE USED CAR
        </button>
        {categories.map((category) => (
          <p key={category.category_id}>
            <Link
              className="block border border-purple-900 bg-teal-400 lg:text-xl md:text-sm text-white hover:bg-black py-2 px-2 "
              to={`/categories/${category.category_id}`}
            >
              {category.category_name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
