import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const LeftBar = () => {
  // const [categories, setCategories] = useState([]);
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://carbazar-server.vercel.app/brands");
      const data = await res.json();
      return data;
    },
  });
  // useEffect(() => {
  //   fetch("https://carbazar-server.vercel.app/brands")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);
  return (
    <div>
      <div className="">
        <button className=" font-bold text-accent text-uppercase text-xl text-center justify-center items-center px-2 py-2">
          CAR CATEGORY
        </button>
        {categories.map((category) => (
          <p key={category.category_id}>
            <Link
              className="block border border-purple-900 btn btn-ghost gap-2  bg-gradient-to-r from-primary to-secondary  lg:text-xl md:text-sm text-white  py-2 px-2 "
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
