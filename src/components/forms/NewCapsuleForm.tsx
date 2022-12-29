import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Script from "next/script";

interface IFormInputs {
  content: string;
  availableIn: string;
}

const schema = z.object({
  content: z.string(),
  availableIn: z.string(),
});

export const NewCapsuleForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: zodResolver(schema) });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-8"
    >
      <h1>New capsule</h1>
      <div className="flex flex-1 flex-col">
        <textarea {...register("content")} className="bg-gray-300 px-4 py-4" />
        <p className="text-red-500">{errors.content?.message}</p>
      </div>
      <div className="flex w-full flex-1 flex-col">
        <select {...register("availableIn")} className="bg-gray-300 px-4 py-4">
          <option>1 hour</option>
        </select>
        <p className="text-red-500">{errors.availableIn?.message}</p>
      </div>
      <button
        type="submit"
        className="bg-gray-300 px-4 py-2 font-bold transition-all duration-100 ease-in-out hover:bg-slate-200"
      >
        Create
      </button>
      <>
        <Script src="https://unpkg.com/flowbite@1.5.5/dist/datepicker.js" />
      </>
    </form>
  );
};
