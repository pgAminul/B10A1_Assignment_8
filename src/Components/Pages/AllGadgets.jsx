import { NavLink } from "react-router-dom";
import "../../App.css";
function AllGadgets({ data }) {
  return (
    <div className=" ">
      <div className="flex flex-col justify-center items-center">
        <button className=" HomeActiceButton ">
          <NavLink className={`btn w-56`} to={"/"}>
            {" "}
            All Porducts
          </NavLink>
        </button>
        {data.map((category, index) => {
          return (
            <div key={index}>
              <button className="categoryBtn my-3 ">
                <NavLink
                  className={`btn w-56`}
                  to={`/category/${category.category_name}`}
                >
                  {category.category_name}
                </NavLink>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllGadgets;
