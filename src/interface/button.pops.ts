export interface ButtonProps{
    text: string;
    backgroundColor: string;
    onPress?: () => void;
    setLoading?: boolean
}