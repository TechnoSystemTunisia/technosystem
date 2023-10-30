"use client";

import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ScrollAnimation from "../ScrollAnimation";
import axios from "axios"
import { API_URL } from "@/lib/constants";
import { useToast } from "../ui/use-toast";


//USE ZOD FOR FORM DATA VALIDATION
const validationSchema = z.object({
  firstName: z.string().min(1, { message: "Prénom est obligatoire" }),
  email: z
  .string()
  .min(1, { message: "Addresse Mail est obligatoire" })
  .email({
    message: "Doit être un e-mail valide",
  }),
  phone: z.string().min(8, {
    message: "Numéro de téléphone doit comporter au moins 8 caractères",
  }),
  subject: z.string().min(1, { message: "Sujet est obligatoire" }),
  message: z.string().min(1, { message: "Sujet est obligatoire" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const Contacts= () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ValidationSchema>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const { toast } = useToast()

  //HANDLE EMAIL SENDING AND NOTIFICATION
  const onSubmit: SubmitHandler<ValidationSchema> = async (email) => {
     try {
      const {data} = await axios.post(`${API_URL}/api/sendEmail`, { emailData:email }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      toast({
        title: "E-mail envoyé avec succès",
        description: "Notre agent vous contactera bientôt",
      })
      setValue("firstName", "");
      setValue("email", "");
      setValue("phone", "");
      setValue("subject", "");
      setValue("message", ""); 
    } catch (error) {
      toast({
        title: "Erreur Envoi Email ",
        description: `Une erreur s'est produite ${error}`,
      })
    }
  };

  const styles = {
    title:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black dark:text-white capitalize",
    subTitle:"mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
  }

  return (
    <section id='contacts' className='flex flex-col items-center justify-center w-full p-4 h-full border-b-2 border-gray-400'>
    <div className='flex w-full h-full justify-center items-center'>
      <ScrollAnimation/>
      <form
        className="flex w-full flex-col gap-4 m-4 max-w-[1460px] lg:px-16 h-full justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
          <div className='flex flex-col items-center justify-center w-full p-4 gap-4'>
            <div className='flex flex-col items-center w-full text-center'>
              <h1 className={styles.title}>contactez-nous</h1>
            </div>
            <p className={styles.subTitle}>Nous sommes prêts à répondre à toutes vos demandes</p>
          </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
          <div className="mb-4 w-full md:mb-0 md:mr-2">
            <input
              className={`w-full border bg-transparent px-3 py-2 text-sm leading-tight text-black dark:text-white  placeholder-black dark:placeholder-white  ${
                errors.firstName ? "border-red-500" : "border-black dark:border-white "
              } focus:shadow-outline appearance-none rounded-lg focus:border-blue-500 focus:outline-none`}
              id="firstName"
              type="text"
              placeholder="Prénom"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className="mb-4 w-full md:mb-0 md:mr-2">
            <input
              className={`w-full border bg-transparent px-3 py-2 text-sm leading-tight text-black dark:text-white  placeholder-black dark:placeholder-white  ${
                errors.email ? "border-red-500" : "border-black dark:border-white "
              } focus:shadow-outline appearance-none rounded-lg focus:border-blue-500 focus:outline-none`}
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="mb-4 w-full md:mb-0 md:mr-2">
            <input
              className={`w-full border bg-transparent px-3 py-2 text-sm leading-tight text-black dark:text-white  placeholder-black dark:placeholder-white  ${
                errors.firstName ? "border-red-500" : "border-black dark:border-white "
              } focus:shadow-outline appearance-none rounded-lg focus:border-blue-500 focus:outline-none`}
              id="phone"
              type="text"
              placeholder="Téléphone"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.phone?.message}
              </p>
            )}
          </div>
          <div className="mb-4 w-full md:mb-0 md:mr-2">
            <input
              className={`w-full border bg-transparent px-3 py-2 text-sm leading-tight text-black dark:text-white  placeholder-black dark:placeholder-white  ${
                errors.firstName ? "border-red-500" : "border-black dark:border-white "
              } focus:shadow-outline appearance-none rounded-lg focus:border-blue-500 focus:outline-none`}
              id="subject"
              type="text"
              placeholder="Sujet"
              {...register("subject")}
            />
            {errors.subject && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.subject?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row"></div>
        <div className="mb-4 w-full md:mb-0 md:mr-2">
          <textarea
            className={`h-[150px] w-full border bg-transparent px-3 py-2 text-sm text-black dark:text-white  placeholder-black dark:placeholder-white  ${
              errors.firstName ? "border-red-500" : "border-black dark:border-white "
            } focus:shadow-outline appearance-none rounded-lg focus:border-blue-500 focus:outline-none`}
            id="message"
            placeholder="Message"
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-2 text-xs italic text-red-500">
              {errors.message?.message}
            </p>
          )}
        </div>

        <button
          className="dark:focus:ring-[#4285F4]/55 items-center rounded-full bg-[#121212] dark:bg-white text-white dark:text-[#121212] px-8 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 hover:text-blue-500 hover:bg-blue-200"
          type="submit"
        >
          <span>Envoyer</span>
        </button>
      </form>
    </div>
    </section>
  );
};

export default Contacts;
