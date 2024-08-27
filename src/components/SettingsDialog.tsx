import { Dialog } from "@kobalte/core/dialog";

export function SettingsDialog() {
  return (
    <Dialog>
      <Dialog.Trigger class="btn btn-ghost btn-xs">
        ⚙️
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-gray-900 bg-opacity-80 animate-fade-in" />

        <Dialog.Content>
          <div class="modal-box">
            <Dialog.CloseButton>Close</Dialog.CloseButton>
            <Dialog.Title>Code Review Settings</Dialog.Title>
            <Dialog.Description>
              Configure your code review checklist
            </Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
