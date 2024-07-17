import { useState } from "react";
import { getTodaysDate } from "./utiles/date_utile";
import { categories } from "./utiles/app_constant";

function App() {
  const [selectedCategories, setCategories] = useState("today_task");

  return (
    <>
      <div className="app">
        <div className="app_header">
          <div className="app_header_left_sec">
            <p className="app_header_left_title">Good Morning, Narnedra</p>
            <p className="app_header_left_sub_title">{getTodaysDate()}</p>
          </div>
          <button className="new_task_btn">New Task</button>
        </div>
        <div className="app_body">
          <div className="task_categories_list_row">
            {categories.map((e) => (
              <p
                key={e.id}
                className={
                  selectedCategories === e.id
                    ? `selected_categories`
                    : `unselected_categories`
                }
                onClick={() => setCategories(e.id)}
              >
                {e.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
