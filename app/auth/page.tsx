"use client"

import { Input } from "@/components/Input"
import Image from "next/image"
import { useCallback, useState } from "react"

const Auth = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant(prev => prev === 'login' ? 'signup' : 'login')
    }, [])


    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover ">
            <div className="bg-black h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image src="/images/logo.png" width={150} height={50} alt="Netflix Logo" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="tex-white text-2xl font-semibold mb-8">
                            {variant === 'login' ? 'Sign In' : 'Create an account'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'signup' && (

                                <Input
                                    id="username"
                                    type="text"
                                    label="Username"
                                    value={username}
                                    onChange={(e: any) => setUsername(e.target.value)}
                                />



                            )}


                            <Input
                                id="email"
                                type="text"
                                label="Email Address"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                            <Input
                                id="password"
                                type="password"
                                label="Password"
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                            />


                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition-all ease-in-out">
                            {variant === 'login' ? 'Sign In' : 'Sign Up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'New to Netflix? ' : 'Already have an account? '}
                            <span
                                onClick={toggleVariant}
                                className="text-neutral-200 font-semibold cursor-pointer hover:underline">
                                {variant === 'login' ? 'Sign Up now.' : 'Sign In now.'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
