import React from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { updateCardPosition } from "../lib/api";
import type { Card as CardType, Column as ColumnType } from "../lib/api";
import { Column } from "./Column";
import { Card } from "./Card";

interface KanbanBoardProps {
  initialCards: CardType[];
  initialColumns: ColumnType[];
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  initialCards,
  initialColumns,
}) => {
  // TODO: Set up state here to manage cards and columns.
  // The state should be initialized with the props.
  // You'll need to use React.useState.

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    console.log("Drag end event:", event);
    // TODO: Implement the logic to handle the end of a drag event.
    // This is the most important part of the challenge.
    //
    // The handler should:
    // 1. Identify the card that was dragged and the column it was dropped into.
    // 2. Perform an "optimistic update" of the local state to reflect the change immediately.
    // 3. Call the `updateCardPosition` API function to persist the change.
    // 4. If the API call fails, revert the local state to its previous state
    //    and show an error notification to the user.
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex justify-center p-6 h-screen box-border bg-gray-50 overflow-x-auto">
        {/* TODO: Render the columns and the cards within them.
            - You should map over the `initialColumns` to render each `<Column>` component.
            - Inside each column, you should filter and map over the cards from state
              to render the `<Card>` components.
            - Don't forget to wrap the cards in a `<SortableContext>` provider.
        */}
      </div>
    </DndContext>
  );
};
