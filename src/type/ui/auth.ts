import type { RegisterFormData } from "@type/user_auth";

export interface AuthPopUp {
  onAction?: () => void;
}

export interface RegisterPopUpProps {
  onClose: () => void;
  onSubmit?: (data: RegisterFormData) => void;
}