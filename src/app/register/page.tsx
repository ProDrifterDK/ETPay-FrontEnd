'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../store/userSlice';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BackgroundSVG from '@/app/components/utils/BackgroundSVG';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [isRegistered, setIsRegistered] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const registeredName = useSelector((state: RootState) => state.user.userInfo?.name);

    const validate = () => {
        const newErrors: { name?: string; email?: string } = {};

        if (!name) {
            newErrors.name = 'Name is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            dispatch(register({ name, email }));
            setIsRegistered(true);
        }
    };

    useEffect(() => {
        if (isRegistered) {
            const timer = setTimeout(() => {
                router.push('/');
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [isRegistered, router]);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
            <BackgroundSVG />
            <div className="relative p-8 bg-white shadow-md rounded-lg max-w-xl w-full z-10">
                {isRegistered ? (
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold mb-4 text-black">Congratulations, {registeredName}!</h1>
                        <p className="text-lg text-neutral-700">You have successfully registered.</p>
                        <p className="text-lg mb-10 text-neutral-700">We will be contacting you by email to let you know of our latest updates.</p>
                        <p className="text-xs text-neutral-700">You will be redirected to the homepage in 10 seconds.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <div className="flex flex-col items-center mb-6">
                            <Image src='/assets/images/logos/LogoRegiM.svg' alt="RegiM Logo" width={150} height={150} />
                            <h3 className="text-xl font-medium text-gray-700 mt-4">Registration</h3>
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full px-3 py-2 border rounded text-gray-800 ${errors.name ? 'border-red-500' : ''}`}
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-3 py-2 border rounded text-gray-800 ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <button type="submit" className="w-1/4 py-2 bg-primary-600 text-white rounded">
                            Register
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
