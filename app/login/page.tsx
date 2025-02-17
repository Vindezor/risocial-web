'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

export default async function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Aquí puedes agregar lógica de autenticación si es necesario
    // Luego redirige a /home
    router.push('/home');
  };

    return (
      <div className="flex justify-center min-h-screen items-center">
        <Card className="max-w-[200px] h-fit">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            Campos
          </CardContent>
          <CardFooter className="flex justify-between">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button onClick={handleLogin}>Iniciar Sesión</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }