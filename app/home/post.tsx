'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, MessageCircle, Send } from "lucide-react";
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
            <CardContent className="pb-2">
                <img className="w-full" src="https://github.com/shadcn.png" alt="@shadcn" />
            </CardContent>
            <CardFooter>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        {like ? <Heart className="cursor-pointer" onClick={changeLike} fill="red"  strokeWidth={2} stroke="red"/> : <Heart className="cursor-pointer" onClick={changeLike} strokeWidth={2}/>}
                        <span className="font-semibold ml-[-5px]">20</span>
                        <MessageCircle className="cursor-pointer" strokeWidth={2} />
                        <Send className="mt-[1px] cursor-pointer" strokeWidth={2} />
                    </div>
                    <span><strong>User123</strong> La vida es waos</span>
                </div>
            </CardFooter>
        </Card>
    );
}