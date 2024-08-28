import { type Component, For } from "solid-js";

import { Popover } from "@kobalte/core/popover";

import { SettingsDialog } from "@/components/SettingsDialog";
import {
  type Item,
  checklist,
  isAllChecked,
  toggleCheck,
} from "@/domain/checklist";
import clippyCheck from "#/static/clippy-check.gif?base64";
import clippyJump from "#/static/clippy-jump.gif?base64";

const PopoverBody: Component = () => {
  return (
    <For each={checklist()}>
      {(item, idx) => <PopoverItem id={idx()} item={item} />}
    </For>
  );
};

const PopoverItem: Component<{ id: number; item: Item }> = ({ id, item }) => {
  return (
    <div
      class="flex gap-1"
      onClick={() => toggleCheck(id)}
      onKeyPress={() => toggleCheck(id)}
    >
      <input type="checkbox" class="checkbox" checked={item.checked} />

      <label>{item.name}</label>
    </div>
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

        <Popover.CloseButton class="btn btn-ghost btn-xs" title="Close">
          X
        </Popover.CloseButton>
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

export { PopoverBody, PopoverHeader, PopoverIcon };
