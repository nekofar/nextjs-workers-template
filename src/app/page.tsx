import { FileText, Globe, Grid3x3 } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20">
      <main className="flex max-w-5xl flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Badge variant="secondary" className="mt-4">
            Next.js + Cloudflare Workers
          </Badge>
        </div>

        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle role="heading" aria-level={2}>
              Get Started
            </CardTitle>
            <CardDescription>
              Begin your journey with Next.js and Shadcn UI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm">
                Get started by editing{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  src/app/page.tsx
                </code>
              </p>
              <p className="text-sm text-muted-foreground">
                Save and see your changes instantly with hot reload.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button asChild>
              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mr-2 dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={16}
                  height={16}
                />
                Deploy now
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our docs
              </a>
            </Button>
          </CardFooter>
        </Card>

        <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <FileText className="mb-2 h-4 w-4" />
              <CardTitle className="text-base">Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Explore Next.js tutorials and documentation
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" asChild className="w-full">
                <a
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Grid3x3 className="mb-2 h-4 w-4" />
              <CardTitle className="text-base">Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Browse templates and example projects
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" asChild className="w-full">
                <a
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View examples
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="mb-2 h-4 w-4" />
              <CardTitle className="text-base">Next.js</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Visit the official Next.js website
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" asChild className="w-full">
                <a
                  href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to nextjs.org
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
