export default function Button({ children, className = "", href, ...props }) {
  const content = href ? <a href={href}>{children}</a> : children;

  return (
    <button className={className} {...props}>
      {content}
    </button>
  );
}
