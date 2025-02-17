import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Post from "./post";

export default async function Home() {


    return (
        <div className="flex justify-center flex-col min-h-screen items-center gap-4 py-4">
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    );
}