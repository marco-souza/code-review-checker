import { type Component, For } from "solid-js";

import { Popover } from "@kobalte/core/popover";

import clippyCheck from "../static/clippy-check.gif";
import clippyJump from "../static/clippy-jump.gif";
import { checklist, isAllChecked, setChecklist } from "./domain/checklist";
import { SettingsDialog } from "./components/SettingsDialog";

const App: Component = () => {
  return (
    <Popover data-theme="dark">
      <Popover.Trigger>
        <PopoverIcon />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content class="z-50 rounded-md p-4 flex flex-col gap-3 dark:bg-gray-700 bg-gray-100 shadow-xl">
          <Popover.Arrow />

          <PopoverHeader />

          <Popover.Description class="grid gap-2">
            <PopoverBody />
          </Popover.Description>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  );
};

export default App;

const PopoverBody: Component = () => {
  return (
    <For each={checklist()}>
      {(item, idx) => (
        <div
          class="flex gap-1"
          onClick={() =>
            setChecklist((list) =>
              list.map((i, index) =>
                index !== idx() ? i : { ...i, checked: !i.checked }
              )
            )}
        >
          <input
            type="checkbox"
            class="checkbox"
            checked={item.checked}
          />

          <label>{item.name}</label>
        </div>
      )}
    </For>
  );
};

const PopoverHeader: Component = () => {
  return (
    <div class="flex gap-4 align-middle justify-center">
      <Popover.Title class="text-base font-medium text-gray-900">
        Code Review Checker
      </Popover.Title>

      <div>
        <SettingsDialog />

        <Popover.CloseButton class="btn btn-ghost btn-xs" title="Close">X</Popover.CloseButton>
      </div>
    </div>
  );
};

const PopoverIcon: Component = () => {
  return (
    <img
      src={!isAllChecked() ? clippyJump : clippyCheck}
      alt="Code Review"
      class="h-16"
    />
  );
};
