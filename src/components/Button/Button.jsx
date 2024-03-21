const Button = ({
  className,
  type = 'button',
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
