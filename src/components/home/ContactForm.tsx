// src/components/home/ContactForm.tsx
'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className='space-y-6' noValidate>
      {/* Honeypot: humanos não veem, bots preenchem. */}
      <input
        type='text'
        name='company'
        tabIndex={-1}
        autoComplete='off'
        className='hidden'
        aria-hidden='true'
      />

      <div className='grid gap-6 sm:grid-cols-2'>
        <label className='block'>
          <span className='eyebrow'>{t('name')}</span>
          <input
            name='name'
            required
            minLength={2}
            maxLength={100}
            className='field mt-1'
          />
        </label>
        <label className='block'>
          <span className='eyebrow'>{t('email')}</span>
          <input
            name='email'
            type='email'
            required
            maxLength={200}
            className='field mt-1'
          />
        </label>
      </div>
      <label className='block'>
        <span className='eyebrow'>{t('message')}</span>
        <textarea
          name='message'
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          placeholder={t('placeholderMessage')}
          className='field mt-1 resize-y'
        />
      </label>

      <div className='flex flex-wrap items-center gap-6'>
        <button
          type='submit'
          className='btn btn-solid'
          disabled={status === 'sending'}
        >
          {status === 'sending' ? t('sending') : t('send')}
        </button>
        {status === 'success' && (
          <p className='text-sm text-ink-2' role='status'>
            {t('success')}
          </p>
        )}
        {status === 'error' && (
          <p className='text-sm text-accent' role='alert'>
            {t('error')}
          </p>
        )}
      </div>
    </form>
  );
}
