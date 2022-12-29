import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  content: string;
};

export const NewCapsuleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center"
    >
      <h1>New capsule</h1>
      <input {...register("content")} />
      <button
        type="submit"
        className="bg-gray-300 px-4 py-2 font-bold transition-all duration-100 ease-in-out hover:bg-slate-200"
      >
        Create
      </button>
    </form>
  );
};
