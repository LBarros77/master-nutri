export type SettingsProps = {
  icon: string;
  title: string;
  content: string[];
  type: string
};

type Settings = SettingsProps[];

export const settings: Settings = [
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