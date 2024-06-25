import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import Loader from "./Loader";

const EmailInput = () => {
  const formSchema = z.object({ email: z.string().email().min(1) });

  const [status, setStatus] = useState<{
    status: "idle" | "loading" | "failed" | "success";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setStatus((prev) => ({ ...prev, status: "loading" }));
    const response = await fetch("./api/newsletter", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const responseData: any = await response.json().then((res) => {
      setStatus((prev) =>
        res.code === 200
          ? { message: res.message, status: "success" }
          : { message: res.error, status: "failed" }
      );
      return res;
    });
    console.log(responseData);
  }

  return (
    <div className="h-fit md:h-[160px] bg-purple-2 text-white relative flex md:justify-between justify-center items-center md:items-center md:flex-row flex-col">
      <div className="relative flex items-center justify-center w-1/2 h-full ">
        <h3 className="text-[1rem] text-center mt-5 mb-5 md:mt-0 md:mb-0 md:text-left md:text-[1.75rem] md:ml-10 lg:text-[2rem] w-[350px] h-fit lato tracking-wider">
          <span className="font-extrabold">Sign Up</span> and Get Connected With
          Us
        </h3>
      </div>
      <div className=" md:w-1/2 h-fit flex md:items-center">
        {status.status === "idle" ? (
          <div className="flex items-center w-fit border relative mb-5 md:mb-0">
            <Form {...form}>
              <form
                className="w-fit flex"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email sign up</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Email Here"
                          className={cn(
                            "md:w-[250px] lg:w-[300px] !mt-0 !mb-0 bg-transparent border-none h-[4rem] focus:border-none placeholder:text-center pl-5 placeholder-white"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="h-[3.75rem] mr-[.145rem] w-[7rem] bg-green-1 hover:bg-white rounded-none uppercase text-purple-2 self-center">
                  Sign Up
                </Button>
              </form>
            </Form>
            <div className="absolute w-10 h-10 bg-green-1 top-0 clip-triangle border-transparent object-center"></div>
            <div className="absolute w-8 h-8 ml-[2px] mt-[2px] bg-purple-2 top-0 clip-triangle border-transparent object-center"></div>
          </div>
        ) : status.status === "loading" ? (
          <Loader />
        ) : (
          <h1 className="mr-24">{status.message}</h1>
        )}
      </div>
    </div>
  );
};

export default EmailInput;
