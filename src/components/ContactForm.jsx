import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from './Button.astro';

export default function ContactForm({ children }) {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver() });

  const { label, input, container } = {
    label: 'mb-1 font-medium',
    container: 'flex flex-col mb-6',
    input:
      'p-2 rounded-md bg-glass/30 backdrop-blur-xl focus:outline-none hover:ring-2 focus-within:ring-2 ring-light text-lg',
  };

  return (
    <form onSubmit={null} className="w-2/5">
      <div className={container}>
        <label htmlFor="name" className={label}>
          Name
        </label>
        <input id="name" type="text" {...register('name')} className={input} />
      </div>
      <div className={container}>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={input}
        />
      </div>
      <div className={container}>
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          type="textarea"
          {...register('message')}
          className={`${input} resize-none h-60`}
        />
      </div>
      {children}
    </form>
  );
}
