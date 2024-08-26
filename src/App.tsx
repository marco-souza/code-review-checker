import { type Component, createSignal, For, Show } from "solid-js";

import { Popover } from "@kobalte/core/popover";
import { Button } from "@kobalte/core/button";
import { classes } from "./utils";

import clippyCheck from "../static/clippy-check.gif";
import clippyJump from "../static/clippy-jump.gif";

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

const [checklist, setChecklist] = createSignal<Item[]>(
  itemsToReview.map((name) => ({ name, checked: false }) as Item),
);

const isAllChecked = () => checklist().every((item) => item.checked);

const App: Component = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <img
          src={!isAllChecked() ? clippyJump : clippyCheck}
          alt="Code Review"
          class="w-20 h-20"
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content class="popover__content">
          <Popover.Arrow />
          <div class="popover__header gap-2">
            <Popover.Title class="popover__title">
              Code Review Checker
            </Popover.Title>

            <Popover.CloseButton class="btn btn-ghost"> X </Popover.CloseButton>
          </div>

          <Popover.Description class="popover__description grid gap-2">
            <For each={checklist()}>
              {(item, idx) => (
                <div
                  class="popover__item flex gap-1"
                  onClick={() =>
                    setChecklist((list) =>
                      list.map((i, index) =>
                        index !== idx() ? i : { ...i, checked: !i.checked }
                      )
                    )}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                  />
                  <label>{item.name}</label>
                </div>
              )}
            </For>
          </Popover.Description>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  );
};

export default App;
