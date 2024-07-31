import type { IconProps } from './types';

const Icon:React.FC<IconProps> = ({ name, size, color, className }) => {
  let fontSize;
  if (size) {
    fontSize = typeof size === "number" ? `${size}px` : size;
  }

  return (
    <i
      className={`icon icon-${name} ${className || ""}`}
      style={{
        fontSize,
        color: color || undefined,
      }}
    />
  );
};

export default Icon;
