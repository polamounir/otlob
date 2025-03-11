import { useState } from "react";
import FormInput from "../components/ui/FormInput";
import { FormButton } from "../components/ui/Buttons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface FormValues {

    email: string;
    password: string;
}

export default function Login() {
    const [formData, setFormData] = useState<FormValues>({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<string[]>([]);
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors([]);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors([]);

        const options = {
            method: 'POST',
            url: '/api/api/login',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            },
            data: formData
        };

        const loginPromise = axios.request(options);

        toast.promise(loginPromise, {
            loading: 'Logging in...',
            success: (response) => {
                console.log(response.data);
                return 'Login successful! 🎉';
            },
            error: (error) => {
                console.error(error);
                return error.response?.data?.message || 'Invalid credentials!';
            },
        });
        
        try {
            const { data } = await loginPromise;
            console.log(data);
            navigate("/")
        } catch (error) {
            // Handle login failure
            console.log(error);
        }
    };


    return (
        <div className="flex items-center justify-center min-h-50dvh bg-gray-100 py-20">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <div className="flex flex-col gap-4">
                    <FormInput name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                    <FormInput name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                    <FormButton type="submit" className="w-full">Login</FormButton>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Already have an account? <Link to="/register">Register</Link></p>
                </div>
                {errors.length > 0 && (
                    <div className="mt-4 text-red-500 text-sm">
                        {errors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
}
