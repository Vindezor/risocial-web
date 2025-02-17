'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [like, setLike] = useState(false);

    const changeLike = () => {
        setLike(!like);
    }

    return (
        <Card className="h-fit max-w-[550px] w-full">
            <CardHeader>
                <CardTitle>
                    <div className="flex flex-row items-center gap-4">
                        <Avatar >
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span>User123</span>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <img className="w-full" src="https://github.com/shadcn.png" alt="@shadcn" />
            </CardContent>
            <CardFooter>
                <div>
                    {like ? <Heart onClick={changeLike} fill="red"  strokeWidth={2} stroke="red"/> : <Heart onClick={changeLike} strokeWidth={2}/>}
                </div>
            </CardFooter>
        </Card>
    );
}