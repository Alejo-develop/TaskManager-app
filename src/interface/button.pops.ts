export interface ButtonProps {
  text: string;
  backgroundColor: string;
  onPress?: () => void;
  setLoading?: boolean;
}

export interface ButtonMenuProps {
  text: string;
  onPress?: () => void;
}
