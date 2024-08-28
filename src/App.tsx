import type { Component } from "solid-js";

import { Popover } from "@kobalte/core/popover";
import {
  PopoverBody,
  PopoverHeader,
  PopoverIcon,
} from "./components/ChecklistPopover";

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
