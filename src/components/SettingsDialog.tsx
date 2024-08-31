import { Dialog } from "@kobalte/core/dialog";

export function SettingsDialog() {
  return (
    <Dialog>
      <Dialog.Trigger class="btn btn-ghost btn-xs">⚙️</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-gray-900 bg-opacity-80 animate-fade-in" />

        <div class="fixed inset-0 z-50 flex items-center justify-center">
          <Dialog.Content class="modal-box grid gap-4">
            <div class="flex flex-row justify-between">
              <Dialog.Title class="h1 text-lg">
                Code Review Settings
              </Dialog.Title>
              <Dialog.CloseButton class="left">X</Dialog.CloseButton>
            </div>

            <Dialog.Description>
              Configure your code review checklist
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog>
  );
}
