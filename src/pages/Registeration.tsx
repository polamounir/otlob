import { useState } from "react";
import FormInput from "../components/ui/FormInput";
import { FormButton } from "../components/ui/Buttons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface FormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export default function RegistrationPage() {
    const [formData, setFormData] = useState<FormValues>({
        firstName: "",
        lastName: "",
        phoneNumber: "",
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
            method: "POST",
            url: "/api/api/register",
            data: formData,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
            },
        }
        const registrationPromise = axios.request(options)
        toast.promise(registrationPromise, {
            loading: "Loading...",
            success: "Registration successful!",
            error: "Registration failed.",
        })
        try {
            const response = await registrationPromise;
            console.log("Registration successful:", response);

            if (response.status === 200) {
                navigate("/login")
            }
        } catch (error: any) {
            if (error.response && error.response.data.errors) {
                const errorsObj = error.response.data.errors;
                const errorMessages = Object.entries(errorsObj).flatMap(([_, messages]) =>
                    Array.isArray(messages) ? messages : [messages]
                );
                setErrors(errorMessages);
            } else {
                setErrors(["An unexpected error occurred."]);
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-50dvh bg-gray-100 py-20">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white">
                <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
                <div className="flex flex-col gap-4">
                    <FormInput name="firstName" type="text" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
                    <FormInput name="lastName" type="text" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
                    <FormInput name="phoneNumber" type="text" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} />
                    <FormInput name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                    <FormInput name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                    <FormButton type="submit" className="w-full">Register</FormButton>
                </div>

                <div>
                    <p className="text-sm text-gray-600">Already have an account? <Link to="/login">Login</Link></p>
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
