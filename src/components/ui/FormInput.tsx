interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }
export default function FormInput(props: InputProps) {

    return (
        <div className="text-sm">
            <label>  {props.placeholder}</label>
            <input {...props} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500" />
        </div>

    );
}
