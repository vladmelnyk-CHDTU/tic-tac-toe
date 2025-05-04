import { RootState } from '@/store/store';
import { login } from '@/store/user/userSlice';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';

type FormData = {
  name: string;
  email: string;
};

export default function Login() {
  const userName = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    dispatch(
      login({
        name: data.name,
        email: data.email
      })
    );
  };

  if (userName !== null) {
    return <Navigate replace to={'/'} />;
  }

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Вхід</h2>

        <div>
          <label className="block text-sm font-medium text-white">Ім’я</label>
          <input
            type="text"
            {...register('name', { required: 'Ім’я обов’язкове' })}
            className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm"
            placeholder="Введіть ім’я"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            {...register('email', {
              required: 'Email обов’язковий',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Невірний формат email'
              }
            })}
            className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm"
            placeholder="Введіть email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <button type="submit" className="w-full">
          Увійти
        </button>
      </form>
    </div>
  );
}
