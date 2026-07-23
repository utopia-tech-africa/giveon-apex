"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { PrefooterBg } from "@/assets";
import { enquirySchema, type EnquiryFormValues } from "@/lib/enquiry-schema";
import ComponentLayout from "./component-layout";
import PhoneInput from "./phone-input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const inputClassName = cn(
  "w-full rounded-lg border border-[#d9dbdb] bg-transparent px-3 py-3",
  "font-chillax text-sm text-white placeholder:text-[#617677]",
  "outline-none transition-colors focus:border-[#e38837]",
);

const defaultValues: EnquiryFormValues = {
  fullName: "",
  email: "",
  // Match react-international-phone's Ghana dial code so reset doesn't
  // leave a short value that re-triggers validation after submit.
  phone: "+233",
  message: "",
};

const Prefooter = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues,
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setFormError(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        const message = data.error || "Failed to send enquiry.";
        setFormError(message);
        toast.error(message);
        return;
      }

      reset(defaultValues);
      clearErrors();
      toast.success("Thanks — your enquiry has been sent.");
    } catch {
      const message = "Something went wrong. Please try again.";
      setFormError(message);
      toast.error(message);
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden mb-16">
      <Image
        src={PrefooterBg}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-[#000C04] via-[#000C04]/20 to-[#000C04]"
      />

      <ComponentLayout className="relative z-10 flex flex-col gap-10 pt-15.5 pb-16 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:py-17">
        <div className="flex max-w-86.5 flex-col gap-3 capitalize lg:max-w-131 lg:gap-4">
          <h2 className="font-zodiak text-xl italic leading-[1.2] text-white lg:text-[30px]">
            Discover The
            <br />
            Essence of Calm Living
          </h2>
          <p className="font-chillax text-sm leading-[1.2] text-white lg:text-lg">
            Experience the harmony of timeless design and wellness-centered
            living, from day one. Invest in Apex Cabins and own a stake in the
            development, or join the waitlist to be among the first to stay.
          </p>
        </div>

        <form
          className="flex w-full max-w-[536px] flex-col items-center gap-6 rounded-xl bg-[#013030] p-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate>
          <h3 className="max-w-[404px] text-center font-zodiak text-[32px] italic leading-[1.2] text-white capitalize md:text-[50px]">
            Envision your Future with Us
          </h3>

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
                Phone <span className="text-[#f38213]">*</span>
              </span>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    className={cn(
                      errors.phone &&
                        "[&_.react-international-phone-input]:border-red-400 [&_.react-international-phone-country-selector-button]:border-red-400",
                    )}
                  />
                )}
              />
              {errors.phone && (
                <span className="font-chillax text-xs text-red-300">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <label className="flex w-full flex-col gap-2">
              <span className="font-chillax text-sm leading-[1.3] text-white">
                Message <span className="text-[#f38213]">*</span>
              </span>
              <textarea
                rows={4}
                placeholder="Tell us what you’re looking for or ask a question..."
                className={cn(
                  inputClassName,
                  "min-h-28 resize-y",
                  errors.message && "border-red-400 focus:border-red-400",
                )}
                {...register("message")}
              />
              {errors.message && (
                <span className="font-chillax text-xs text-red-300">
                  {errors.message.message}
                </span>
              )}
            </label>

            {formError && (
              <p className="font-chillax text-sm text-red-300">{formError}</p>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send enquiry"}
            </Button>
          </div>
        </form>
      </ComponentLayout>
    </section>
  );
};

export default Prefooter;
