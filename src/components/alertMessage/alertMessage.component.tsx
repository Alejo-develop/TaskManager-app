import Toast from "react-native-toast-message";

interface MessageProps {
  type: 'success' | 'error' | 'info';
  text1: string;
  text2?: string;
  position?: 'top' | 'bottom';
  visibilityTime?: number;
  autoHide?: boolean;
}

const AlertMessageComponent = ({
  text1,
  text2,
  position = 'bottom',
  visibilityTime = 3000,
  autoHide = true,
}: MessageProps) => {
  Toast.show({
    type: 'tomatoToast',
    position,
    text1,
    text2,
    visibilityTime,
    autoHide,
  });
};

export default AlertMessageComponent;