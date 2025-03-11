interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function FormButton({ children, className, ...props }: ButtonProps) {
    return (
        <button {...props} className={`bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition ${className}`}>
            {children}
        </button>
    );
}
