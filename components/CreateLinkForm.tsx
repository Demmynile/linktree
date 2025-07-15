"use client"

import z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import {  useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const formSchema = z.object({
  title: z
   .string()
   .min(1, "Title is required")
   .max(100, "Title must be less than 100 characters"),
    url: z.string().url("Please enter a valid URL")

})

function CreateLinkForm() {
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, startTransition] = useTransition();
    const router = useRouter();
    const createLink = useMutation(api.lib.links.createLink); 
    // handle error
    // const handleError = (error: unknown) => {
    //     if (error instanceof Error) {
    //         setError(error.message);
    //     } else {
    //         setError("An unexpected error occurred");
    //     }
    // }
// define a form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            url: "",    
        }
    });

// submit handler
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      setError(null); // Reset error state

      if(!values.url.startsWith("https://") && !values.url.startsWith("http://")) {
        values.url = `https://${values.url}`;
      }

      startTransition(async() => {
        try {
            await createLink({
                title: values.title,
                url: values.url,
            })
            router.push("/dashboard");
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unexpected error occurred");
        }

        
      });
    }
  return(
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" >
        <FormField
        control={form.control}
        name = "title"
        render={({ field }) => (
           <FormItem>
            <FormLabel>Link Title</FormLabel>
            <FormControl>
              <Input 
              placeholder="My Awesome Link"
              {...field}
              />
            </FormControl>
            <FormDescription>
                This will be display as the button to create your link.
            </FormDescription>
            <FormMessage /> 
           </FormItem> 
           

        )} />
        <FormField
        control={form.control}
        name = "url"
        render={({ field }) => (
           <FormItem>
            <FormLabel>URL</FormLabel>
            <FormControl>
              <Input 
              placeholder="https://example.com"
              {...field}
              />
            </FormControl>
            <FormDescription>
                The destination URL where users will be redirected.
            </FormDescription>
            <FormMessage /> 
           </FormItem> 
           

        )} />

        {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
                { error }
            </div>
        )}
        <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Creating..." : "Create Link"}
        </Button>


    </form>
    
  </Form>
  )
}

export default CreateLinkForm