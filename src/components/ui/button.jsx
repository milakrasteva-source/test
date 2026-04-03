export function Button({ children, disabled, className = "", ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}
