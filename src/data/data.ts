import { Ionicons } from "@expo/vector-icons";

export type SettingsProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  content: string[];
  type: string
};

export const settings: SettingsProps[] = [
  {
    icon: "person",
    title: "Editar Perfil",
    content: [""],
    type: "no-regular",
  },
  {
    icon: "star",
    title: "Plano",
    content: ["Intermediário", "Premium"],
    type: "regular",
  },
  {
    icon: "settings",
    title: "Configurações",
    content: ["Idioma", "Outros"],
    type: "regular",
  },
  {
    icon: "document",
    title: "Termos & Serviços",
    content: [""],
    type: "no-regular",
  },
  {
    icon: "log-out",
    title: "Sair",
    content: [""],
    type: "no-regular",
  },
];