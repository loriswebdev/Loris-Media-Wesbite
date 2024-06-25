"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ControllerRenderProps, useForm } from "react-hook-form"
import { ZodString, z } from "zod"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Loader from "./Loader"
type FieldsProps = {
    label?: string,
    name: string, 
    z: ZodString,
    default: string | undefined,
    type: string
}
const fields: Array<FieldsProps> = [
    {
        label: '*Name',
        name:'name',
        z: z.string().min(1),
        default: '',
        type: 'input'
    },
    {
        label: ' Company Name',
        name:'company name',
        z: z.string(),
        default: '',
         type: 'input'
    },
    {
        label: '*Email',
        name:'email',
        z: z.string().email().min(1),
        default: '',
         type: 'input'
    },
    {
        label: '*Phone',
        name:'phone',
        z: z.string().min(10, { message: 'Must be a valid mobile number' })
        .max(14, { message: 'Must be a valid mobile number' }),
        default: '',
         type: 'input'
    },
    {
        label:'*Your Message',
        name:'message',
        z: z.string().min(1),
        default: '', 
        type: 'textarea'
    }
]
const zFeilds = fields.reduce((prev, cur)=>(
    {...prev, [cur.name]: cur.z}
),{})
const defaults = fields.reduce((prev, cur)=>(
    {...prev, [cur.name]: cur.default}
),{})
const formSchema = z.object(zFeilds)

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaults,
      })
      const [status, setStatus] = useState<{status: 'idle'|'loading'|'subscribed'|"existing"| "failed"| 'success', message: string}>({
        status: 'idle',
        message: ''
      })
      // 2. Define a submit handler.
      async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        
        setStatus((prev)=>({...prev, status: 'loading'}));
        const response = await fetch('./api/email', {
            method: 'post',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
           }).then(async(res)=>{
            const responseNewsletter = await fetch('./api/newsletter', {
              method: 'post',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
             });
             
             const newsletterData:any = await responseNewsletter.json().then((res)=> {setStatus(res.code === 200 ? {message: res.message, status: 'success' }: {message: res.error, status: 'failed'}); return res})
             
           })
           
      }

  return (
    <>
   {status.status === 'idle' || status.status === 'loading' ?  <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[275px] md:w-1/3 mt-[30px] md:mt-[100px]">
       {fields.map((input)=>{
       const getInput = (field: ControllerRenderProps<{
        [x: string]: any;
    }, never>): any =>{ switch (input.type) {
            case 'input':
                return <Input disabled={status.status === 'idle'? false: true} className={cn('bg-transparent placeholder:text-white border-b-[1px] placeholder:text-[1.5rem]')}placeholder={input.label} {...field} />
                
            default:
               return <Textarea disabled={status.status === 'idle'? false: true}
               placeholder={input.label}
               {...field}
               className="bg-transparent placeholder:text-white border-b-[1px] placeholder:text-[1.5rem]"
             />
        }
        }
        return(
        <FormField
        key={input.name}
        control={form.control}
        name={input.name as never}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="sr-only">{input.label}</FormLabel>
            <FormControl>
            {getInput(field)}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       )})}   
       { status.status === 'idle' ? 
        <Button className='h-[3.75rem] mr-[.145rem] w-[10rem] bg-green-1 hover:bg-white rounded-none uppercase text-purple-2 m-6' >
            Send Message
        </Button>: <Loader/>}
      </form>
    </Form>:<h3 className="w-1/2 mt-6 md:w-1/4 md:text-[1.2rem]">{status.message}</h3>}
    </>
  )
}
