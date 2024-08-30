import { type Component, For } from "solid-js";

import { Popover } from "@kobalte/core/popover";

import { SettingsDialog } from "@/components/SettingsDialog";
import {
  checklist,
  getItem,
  isAllChecked,
  toggleCheck,
} from "@/domain/checklist";
import clippyCheck from "@/static/clippy-check.gif";
import clippyJump from "@/static/clippy-jump.gif";

const PopoverBody: Component = () => {
  return (
    <For each={checklist()}>
      {(_, idx) => (
        <div
          class="flex gap-1"
          onClick={() => toggleCheck(idx())}
          onKeyPress={() => toggleCheck(idx())}
        >
          <input
            type="checkbox"
            class="checkbox"
            checked={getItem(idx()).checked}
          />

          <label>{getItem(idx()).name}</label>
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
