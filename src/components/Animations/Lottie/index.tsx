import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';


export function Lottie({ ...props }: AnimatedLottieViewProps) {
  return (
    <LottieView
      style={{
        width: 220,
        height: 220,
        alignSelf: 'center',
        marginTop: 20
      }}
      autoPlay
      loop
      autoSize
      resizeMode="cover"
      {...props}
    />
  );
}