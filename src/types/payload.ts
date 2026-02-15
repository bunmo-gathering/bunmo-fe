interface ModalData {
  title: string;
  message: string;

  buttonOptions?: ButtonOptions;
}

interface ButtonOptions {
  confirmText?: string;
  cancelText?: string;
}

interface ConfirmModalPayload extends ModalData {
  buttonOptions?: Pick<ButtonOptions, "confirmText" | "cancelText">;
}

interface AlertModalPayload extends ModalData {
  buttonOptions?: Pick<ButtonOptions, "confirmText">;
}

export type { ConfirmModalPayload, AlertModalPayload };
