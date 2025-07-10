"use client";
import { Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "fnaticritesh2004@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <TooltipProvider>
      <Card className="w-full mx-auto shadow-lg rounded-2xl bg-white dark:bg-zinc-900">
        <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
          <span className="text-sm sm:text-lg font-medium text-zinc-800 dark:text-zinc-100 text-center sm:text-left truncate">
            {email}
          </span>
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  className={cn("flex gap-2 items-center")}
                  size="sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{copied ? "Email copied!" : "Copy email to clipboard"}</p>
              </TooltipContent>
            </Tooltip>
            <Link href={`mailto:${email}`}>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Send Email</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}
