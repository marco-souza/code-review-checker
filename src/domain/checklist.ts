import { createSignal } from "solid-js";

type Item = {
  checked: boolean;
  name: string;
};

// list of important things to check in a code review
const itemsToReview: string[] = [
  "Tests",
  "Security",
  "Correctness",
  "Error Handling",
  "Scalability",
  "Readability",
  "Maintainability",
];

export const [checklist, setChecklist] = createSignal<Item[]>(
  itemsToReview.map((name) => ({ name, checked: false }) as Item),
);

export const isAllChecked = () => checklist().every((item) => item.checked);

