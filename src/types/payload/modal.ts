interface ButtonOption {
  confirmText?: string;
  cancelText?: string;
}

interface ModalData {
  title: string;
  message: string;

  buttonOptions?: ButtonOption;
}

interface ConfirmModalPayload extends ModalData {
  buttonOptions?: Pick<ButtonOption, "confirmText" | "cancelText">;
}

interface AlertModalPayload extends ModalData {
  buttonOptions?: Pick<ButtonOption, "confirmText">;
}

export type { ConfirmModalPayload, AlertModalPayload };
