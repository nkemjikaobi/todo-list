import React from "react";

import TodoList from "@components/organisms/LandingPage/TodoList/TodoList";

const HomePage = () => {
  return (
    <div className="">
      <div className="max-w-[90rem] mx-auto">
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
