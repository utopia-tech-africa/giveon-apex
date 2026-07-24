"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  waitlistCountries,
  waitlistPriceRanges,
} from "@/lib/waitlist-options";
import {
  waitlistSchema,
  type WaitlistFormValues,
} from "@/lib/waitlist-schema";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const inputClassName = cn(
  "w-full rounded-lg border border-[#d9dbdb] bg-transparent px-3 py-3",
  "font-chillax text-sm text-white placeholder:text-[#617677]",
  "outline-none transition-colors focus:border-[#e38837]",
);

const selectTriggerClassName = cn(
  "h-auto w-full min-w-0 rounded-lg border border-[#d9dbdb] bg-transparent px-3 py-3",
  "font-chillax text-sm text-white shadow-none",
  "focus-visible:border-[#e38837] focus-visible:ring-3 focus-visible:ring-[#e38837]/40",
  "data-placeholder:text-[#617677] dark:bg-transparent dark:hover:bg-transparent",
  "[&_svg]:text-white/70",
);

const selectContentClassName = cn(
  "rounded-lg border border-[#d9dbdb]/40 bg-[#013030] text-white shadow-lg ring-0",
  "font-chillax",
);

const selectItemClassName = cn(
  "rounded-md text-white focus:bg-[#f38213]/20 focus:text-white",
  "data-[highlighted]:bg-[#f38213]/20 data-[highlighted]:text-white",
);

const defaultValues: WaitlistFormValues = {
  fullName: "",
  country: "",
  email: "",
  priceRange: "",
};

export function WaitlistForm() {
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues,
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (values: WaitlistFormValues) => {
    setFormError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        const message = data.error || "Failed to join waitlist.";
        setFormError(message);
        toast.error(message);
        return;
      }

      reset(defaultValues);
      clearErrors();
      toast.success("You're on the waitlist — we'll be in touch soon.");
    } catch {
      const message = "Something went wrong. Please try again.";
      setFormError(message);
      toast.error(message);
    }
  };

  return (
    <form
      className="flex w-full max-w-[536px] flex-col items-center gap-6 rounded-xl bg-[#013030] p-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate>
      <h2 className="max-w-[404px] text-center font-zodiak text-[32px] italic leading-[1.2] text-white capitalize md:text-[44px]">
        Join the waitlist
      </h2>

      <div className="flex w-full flex-col gap-4">
        <label className="flex w-full flex-col gap-2">
          <span className="font-chillax text-sm leading-[1.3] text-white">
            Full name <span className="text-[#f38213]">*</span>
          </span>
          <input
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            className={cn(
              inputClassName,
              errors.fullName && "border-red-400 focus:border-red-400",
            )}
            {...register("fullName")}
          />
          {errors.fullName && (
            <span className="font-chillax text-xs text-red-300">
              {errors.fullName.message}
            </span>
          )}
        </label>

        <div className="flex w-full flex-col gap-2">
          <span className="font-chillax text-sm leading-[1.3] text-white">
            Country <span className="text-[#f38213]">*</span>
          </span>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value || null}
                onValueChange={(value) => field.onChange(value ?? "")}>
                <SelectTrigger
                  aria-invalid={Boolean(errors.country)}
                  className={cn(
                    selectTriggerClassName,
                    errors.country &&
                      "border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/30",
                  )}>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent
                  align="start"
                  alignItemWithTrigger={false}
                  className={selectContentClassName}>
                  {waitlistCountries.map((country) => (
                    <SelectItem
                      key={country}
                      value={country}
                      className={selectItemClassName}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.country && (
            <span className="font-chillax text-xs text-red-300">
              {errors.country.message}
            </span>
          )}
        </div>

        <label className="flex w-full flex-col gap-2">
          <span className="font-chillax text-sm leading-[1.3] text-white">
            Email <span className="text-[#f38213]">*</span>
          </span>
          <input
            type="email"
            placeholder="example@email.com"
            autoComplete="email"
            className={cn(
              inputClassName,
              errors.email && "border-red-400 focus:border-red-400",
            )}
            {...register("email")}
          />
          {errors.email && (
            <span className="font-chillax text-xs text-red-300">
              {errors.email.message}
            </span>
          )}
        </label>

        <div className="flex w-full flex-col gap-2">
          <span className="font-chillax text-sm leading-[1.3] text-white">
            Cabin budget <span className="text-[#f38213]">*</span>
          </span>
          <Controller
            name="priceRange"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value || null}
                onValueChange={(value) => field.onChange(value ?? "")}>
                <SelectTrigger
                  aria-invalid={Boolean(errors.priceRange)}
                  className={cn(
                    selectTriggerClassName,
                    errors.priceRange &&
                      "border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/30",
                  )}>
                  <SelectValue placeholder="How much would you pay?" />
                </SelectTrigger>
                <SelectContent
                  align="start"
                  alignItemWithTrigger={false}
                  className={selectContentClassName}>
                  {waitlistPriceRanges.map((range) => (
                    <SelectItem
                      key={range.value}
                      value={range.value}
                      className={selectItemClassName}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.priceRange && (
            <span className="font-chillax text-xs text-red-300">
              {errors.priceRange.message}
            </span>
          )}
        </div>

        {formError && (
          <p className="font-chillax text-sm text-red-300">{formError}</p>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Joining..." : "Join waitlist"}
        </Button>
      </div>
    </form>
  );
}
