"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Apple, Chrome, Facebook, Github, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"



export default function LoginForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSocialLogin = (provider: string) => {
        setIsLoading(true)

        setTimeout(() => {
            console.log(`Logging in with ${provider}`)
            setIsLoading(false)
        }, 1000)
    } 

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">

            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                    <p className="mt-2 text-gray-600">Sign in to your Account</p>



        <Card className="w-full">
            <CardContent className="pt-6">
                <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2" onClick={() => handleSocialLogin("Google")}>

                        <Chrome className="h-5 w-5 text-[#4285F4]" />
                        Continue with Google
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2" onClick={() => handleSocialLogin("Google")}>

<Facebook className="h-5 w-5 text-[#4285F4]" />
Continue with Facebokk
</Button>

<Button variant="outline" className="w-full justify-start gap-2" onClick={() => handleSocialLogin("Google")}>

<Github className="h-5 w-5 text-[#4285F4]" />
Continue with Github
</Button>

<Button variant="outline" className="w-full justify-start gap-2" onClick={() => handleSocialLogin("Google")}>

<Apple className="h-5 w-5 text-[#4285F4]" />
Continue with Apple
</Button>

         <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <Separator />
            </div>
            <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">OR</span>
            </div>
         </div>

         <Button variant="outline" className="w-full justify-start gap-2" onClick={() => handleSocialLogin("Google")}>

<Mail className="h-5 w-5 text-[#4285F4]" />
Continue with Email
</Button>
                </div>
            </CardContent>
        </Card>

        </div>

        <div className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}

                        <Link href="#" className="font-medium text-primary hover:underline">
                        Sign Up</Link>
                    </div>

        </div>
        </div>
    )
}