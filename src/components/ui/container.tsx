type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const classes = className ? `container-shell ${className}` : "container-shell";
  return <div className={classes}>{children}</div>;
}
