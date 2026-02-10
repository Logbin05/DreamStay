import type { RegisterFormData } from "@type/user_auth";

export interface AuthPopUp {
  onAction?: () => void;
  onRegister?: () => void;
}

export interface RegisterPopUpProps {
  onClose: () => void;
  onSubmit?: (data: RegisterFormData) => void;
}