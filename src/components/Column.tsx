import React from "react";
import { useDroppable } from "@dnd-kit/core";
import type { Column as ColumnType } from "../lib/api";

interface ColumnProps {
  column: ColumnType;
  children: React.ReactNode;
}

export const Column: React.FC<ColumnProps> = ({ column, children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col w-80 rounded-lg p-2 mx-2 h-fit max-h-full transition-colors ${
        isOver ? "bg-gray-200" : "bg-gray-100"
      }`}
    >
      <div className="font-bold text-lg p-2 mb-2">{column.title}</div>
      <div className="flex-grow p-2 min-h-[100px] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
