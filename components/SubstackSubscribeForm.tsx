"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Newspaper } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeToSubstack } from "@/services/substack";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const SubstackSubscribeForm: React.FC = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const { toast } = useToast();
  const { handleSubmit, control } = form;
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  /** Validates and submits the email to the newsletter subscription service. */
  async function onSubmit(values: z.infer<typeof schema>) {
    setIsSubmitting(true);

    try {
      await subscribeToSubstack(values.email);
      toast({
        variant: "default",
        title: "Subscribed!",
        description: "You've been subscribed to my newsletter. Check your email to confirm.",
      });
      form.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to subscribe. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Newspaper className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Subscribe to my newsletter</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Get occasional updates on tech, travel, and building things.
      </p>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-2"
          data-umami-event="Newsletter Subscribe Form"
        >
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="sr-only">Email address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your@email.com"
                    type="email"
                    {...field}
                    data-umami-event="Newsletter Email Focus"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            data-umami-event="Newsletter Subscribe Submit"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Subscribe
          </Button>
        </form>
      </Form>
    </div>
  );
};
