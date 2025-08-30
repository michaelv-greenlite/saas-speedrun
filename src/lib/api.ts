export type ColumnId = "todo" | "in-progress" | "done";

export interface Card {
  id: string;
  title: string;
  columnId: ColumnId;
}

export interface Column {
  id: ColumnId;
  title: string;
}

// We are deliberately keeping the data structures simple for this challenge.
// In a real-world scenario, we might have a more complex data structure,
// perhaps normalizing the data.
let cards: Card[] = [
  { id: "task-1", columnId: "todo", title: "Implement UI" },
  { id: "task-2", columnId: "todo", title: "Add tests" },
  { id: "task-3", columnId: "in-progress", title: "Code review" },
  { id: "task-4", columnId: "done", title: "Deploy to production" },
  { id: "task-5", columnId: "done", title: "Update documentation" },
  { id: "task-6", columnId: "todo", title: "Fix bug #123" },
];

const columns: Column[] = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

// --- API Functions ---

export const getBoardData = async (): Promise<{
  cards: Card[];
  columns: Column[];
}> => {
  console.log("API: Fetching board data...");
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  console.log("API: Fetched board data successfully.");
  // Return copies to prevent mutation of the original data
  return {
    cards: [...cards],
    columns: [...columns],
  };
};

export const updateCardPosition = async (
  cardId: string,
  newColumnId: ColumnId,
  newOrder: Card[]
): Promise<Card> => {
  console.log(`API: Updating card ${cardId} to column ${newColumnId}`);
  await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network delay

  // Simulate a potential error
  if (Math.random() > 0.8) {
    console.error("API: Failed to update card.");
    throw new Error("Failed to update card. Please try again.");
  }

  const cardToUpdate = cards.find((c) => c.id === cardId);
  if (!cardToUpdate) throw new Error("Card not found");

  // In a real backend, we'd have more sophisticated logic to handle ordering.
  // For this challenge, we'll just accept the new order from the client.
  cards = newOrder;
  cardToUpdate.columnId = newColumnId;

  console.log(`API: Updated card ${cardId} successfully.`);
  return { ...cardToUpdate };
};
