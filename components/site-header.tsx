import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";

export function SiteHeader() {
    return (
    <header className="sticky top-0 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
            <MainNav/>
            <div className="flex flex-1 items-center justify-end space-x-2">
                <Link href={siteConfig.link.github} target="_blank" rel="noreferrer">
                    <div className={cn(buttonVariants({variant: "ghost"}), "w-10 px-0")}>
                        <Icons.gitHub className="h-4 w-4"/>
                        <span className="sr-only">Github</span>
                    </div>
                </Link>
                <Link href={siteConfig.link.twitter} target="_blank" rel="noreferrer">
                    <div className={cn(buttonVariants({variant: "ghost"}), "w-10 px-0")}>
                        <Icons.twitter className="h-4 w-4"/>
                        <span className="sr-only">Twitter</span>
                    </div>
                </Link>
            </div>
        </div>
        </header>)
}