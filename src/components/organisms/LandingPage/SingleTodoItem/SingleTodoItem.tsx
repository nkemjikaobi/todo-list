import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

import CustomCheckBox from "@components/atoms/CustomCheckBox/CustomCheckBox";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import EditTask from "@components/organisms/modals/EditTask/EditTask";

import { TaskProps } from "../TodoList/TodoList";

interface SingleTodoItemProps {
  task: TaskProps;
}
const SingleTodoItem: React.FC<SingleTodoItemProps> = ({ task }) => {
  const [showTask, setShowTask] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white flex items-center justify-between p-4 mb-4 cursor-pointer">
        <div className="flex items-center">
          <CustomCheckBox
            className="mt-[1.813rem] "
            labelClassName="text-14 ml-[0.313rem] font-medium whitespace-nowrap"
            shape="square"
          />
          <div className="ml-4">
            <h5 className="font-bold mb-1">{task.title}</h5>
            <p>{task.createdAt}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center p-4 cursor-pointer">
            <BsTrash className="h-6 w-12" />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <MdEdit className="w-12 h-6" onClick={() => setShowTask(true)} />
          </div>
        </div>
      </div>
      <CustomModal toggleVisibility={setShowTask} visibility={showTask}>
        <EditTask setShowTask={setShowTask} />
      </CustomModal>
    </>
  );
};

export default SingleTodoItem;
