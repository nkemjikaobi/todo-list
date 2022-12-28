import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import CustomSelect from "@components/atoms/CustomSelect/CustomSelect";
import AddTask from "@components/organisms/modals/AddTask/AddTask";

import { ButtonProperties, statusOptions } from "@shared/libs/helpers";

import SingleTodoItem from "../SingleTodoItem/SingleTodoItem";

export interface TaskProps {
  id: number;
  title: string;
  createdAt: string;
}

const TodoList = () => {
  const [status, setStatus] = useState<string>("");
  const [showTask, setShowTask] = useState<boolean>(false);

  const dummyTasks: TaskProps[] = [
    {
      id: 1,
      title: "Clean Room",
      createdAt: "3:09AM, 01/16/2022",
    },
    {
      id: 2,
      title: "Learn React Js",
      createdAt: "3:09AM, 01/16/2022",
    },
    {
      id: 3,
      title: "Watch Walking Dead",
      createdAt: "3:09AM, 01/16/2022",
    },
  ];

  return (
    <>
      <div className="mt-16">
        <div className="smallLaptop:w-[800px] mx-auto">
          <h2 className="uppercase font-bold text-todoGray-100 text-37 text-center">
            todolist
          </h2>
          <div className="flex items-center px-8 smallLaptop:px-0 justify-between mt-8">
            <CustomButton
              customClass="!h-[3.75rem] !w-[9.375rem] text-white"
              handleClick={() => setShowTask(true)}
              // isDisabled={true}
              // isSubmitting={true}
              size={ButtonProperties.SIZES.small}
              title="ADD TASK"
              variant={ButtonProperties.VARIANT.primary.name}
            />
            <CustomSelect
              className="rounded-md border h-[3.75rem]"
              onChange={(e) => setStatus(e.target.value)}
              options={statusOptions}
              parentContainer="my-4"
              value={status}
            />
          </div>
          <div className="bg-gray-200 mt-8 p-8">
            {dummyTasks.map((task) => (
              <SingleTodoItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
      <CustomModal toggleVisibility={setShowTask} visibility={showTask}>
        <AddTask setShowTask={setShowTask} />
      </CustomModal>
    </>
  );
};

export default TodoList;
