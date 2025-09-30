"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const HoverAccordion = ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root> & { children: React.ReactNode }) => {
    const [value, setValue] = React.useState<string | undefined>();

    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { 
                onMouseEnter: () => setValue((child.props as any).value),
             });
        }
        return child;
    });
    
    return (
        <div onMouseLeave={() => setValue(undefined)}>
            <AccordionPrimitive.Root 
                type="single"
                value={value} 
                onValueChange={setValue}
                className={cn(className)}
                collapsible
            >
                {childrenWithProps}
            </AccordionPrimitive.Root>
        </div>
    )
}

const HoverAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
HoverAccordionItem.displayName = "HoverAccordionItem"

const HoverAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
HoverAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const HoverAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

HoverAccordionContent.displayName = AccordionPrimitive.Content.displayName

export { HoverAccordion, HoverAccordionItem, HoverAccordionTrigger, HoverAccordionContent }

    