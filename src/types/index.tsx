export type THeaderProps = {
  title: string;
  image?: string;
};

export type TPhraseProps = {
  value: string;
};

export type TButtonProps = {
  text: string;
};

export type TEventButtonProps = {
  onClick: () => void;
  title: string;
  value: string;
};
