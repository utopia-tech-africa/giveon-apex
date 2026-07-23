"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="top-center"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "#013030",
          "--normal-text": "#ffffff",
          "--normal-border": "#e38837",
          "--success-bg": "#013030",
          "--success-text": "#ffffff",
          "--success-border": "#e38837",
          "--error-bg": "#013030",
          "--error-text": "#ffffff",
          "--error-border": "#f87171",
          "--border-radius": "0.5rem",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "font-chillax",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
