import { createSignal } from "solid-js";

export type Item = {
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

const [checklist, setChecklist] = createSignal<Item[]>(
  itemsToReview.map((name) => ({ name, checked: false }) as Item),
);

const isAllChecked = () => checklist().every((item) => item.checked);

const toggleCheck = (idx: number) => {
  setChecklist((list) => {
    list[idx].checked = !list[idx].checked;
    return [...list];
  });
};

export { checklist, isAllChecked, toggleCheck };
