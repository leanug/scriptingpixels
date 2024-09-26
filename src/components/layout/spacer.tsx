type SpacerProps = {
  size?: keyof typeof sizeMap; // Accept only keys from the sizeMap
}

const sizeMap = {
  small: 'h-4',    // 1rem
  medium: 'h-14',   // 2rem
  large: 'h-20',   // 3rem
};

export const Spacer: React.FC<SpacerProps> = ({ size = 'medium' }) => {
  return <div className={`${sizeMap[size]} md:${sizeMap[size]} lg:${sizeMap[size]}`} />;
};