"use client"

import { Input } from "@/components/Input"
import Image from "next/image"

const Auth = () => {

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover ">
            <div className="bg-black h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image src="/images/logo.png" width={150} height={50} alt="Netflix Logo" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="tex-white text-2xl font-semibold mb-8">Sign in</h2>
                        <div className="flex flex-col gap-4">
                            <Input
                                id="email"
                                type="text"
                                label="Email Address"
                                value=""
                                onChange=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
