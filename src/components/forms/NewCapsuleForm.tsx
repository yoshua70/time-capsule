import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

type Inputs = {
  content: string;
};

const schema = z.object({
  content: z.string(),
});

export const NewCapsuleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center"
    >
      <h1>New capsule</h1>
      <input {...register("content")} type="text" />
      <button
        type="submit"
        className="bg-gray-300 px-4 py-2 font-bold transition-all duration-100 ease-in-out hover:bg-slate-200"
      >
        Create
      </button>
    </form>
  );
};
