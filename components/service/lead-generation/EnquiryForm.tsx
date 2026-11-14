'use client';

import { useId, useRef, useState, type FormEvent } from 'react';
import { CircleCheck, LoaderCircle } from 'lucide-react';
import { submitContactForm } from '@/lib/backend-api';
import type { EnquiryFormContent } from '@/types/lead-generation';
import RichText from './RichText';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type RequiredField = 'name' | 'phone' | 'email';
type Errors = Partial<Record<RequiredField, string>>;

interface Values {
  name: string;
  company: string;
  phone: string;
  email: string;
  market: string;
  goal: string;
  details: string;
}

const EMPTY_VALUES: Values = {
  name: '',
  company: '',
  phone: '',
  email: '',
  market: '',
  goal: '',
  details: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED_ORDER: RequiredField[] = ['name', 'phone', 'email'];

const INPUT_CLASS =
  'block w-full rounded-box-sm border border-gray-200 bg-white px-4 py-3 text-base text-dark placeholder:text-gray-400 transition-colors focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 aria-[invalid=true]:border-red-500';
const LABEL_CLASS = 'mb-2 block self-end text-sm font-semibold text-dark';
// Each paired field is a 3-row subgrid (label, control, error) sharing row tracks with
// its neighbour, so controls line up even when one label wraps onto two lines.
const FIELD_CLASS = 'row-span-3 grid grid-rows-subgrid gap-y-0';

function validate(values: Values, messages: EnquiryFormContent['validation']): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = messages.nameRequired;

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (!values.phone.trim()) errors.phone = messages.phoneRequired;
  else if (phoneDigits.length < 7) errors.phone = messages.phoneInvalid;

  if (!values.email.trim()) errors.email = messages.emailRequired;
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = messages.emailInvalid;

  return errors;
}

interface Props {
  content: EnquiryFormContent;
}

export default function EnquiryForm({ content }: Props) {
  const id = useId();
  const [values, setValues] = useState<Values>(EMPTY_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const fieldId = (name: keyof Values) => `${id}-${name}`;

  function update(name: keyof Values, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    if (name in errors) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Honeypot: real visitors never see or fill this field.
    const trap = new FormData(event.currentTarget).get('website');
    if (typeof trap === 'string' && trap.trim()) {
      setStatus('success');
      return;
    }

    const nextErrors = validate(values, content.validation);
    setErrors(nextErrors);

    const firstInvalid = REQUIRED_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstInvalid))}`)?.focus();
      return;
    }

    setStatus('submitting');

    const notProvided = 'Not provided';
    const message = [
      `${content.company.label}: ${values.company.trim() || notProvided}`,
      `${content.market.label}: ${values.market || notProvided}`,
      `${content.goal.label}: ${values.goal || notProvided}`,
      '',
      `${content.details.label}:`,
      values.details.trim() || notProvided,
      '',
      `Source: ${content.sourceLabel}`,
    ].join('\n');

    try {
      // fetchBackend throws on any non-2xx or unsuccessful envelope, so reaching
      // the next line means the enquiry was accepted.
      await submitContactForm({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        subject: values.goal ? `${content.subjectPrefix}: ${values.goal}` : content.subjectPrefix,
        message,
      });
      setStatus('success');
      setValues(EMPTY_VALUES);
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="flex flex-col items-start gap-4 py-6 focus:outline-none"
      >
        <CircleCheck
          aria-hidden="true"
          className="h-10 w-10 text-[color-mix(in_oklab,var(--color-accent),black_32%)]"
        />
        <p className="text-lg font-medium leading-relaxed text-dark">{content.successMessage}</p>
      </div>
    );
  }

  const isSubmitting = status === 'submitting';

  const errorProps = (name: RequiredField) =>
    errors[name]
      ? { 'aria-invalid': true as const, 'aria-describedby': `${fieldId(name)}-error` }
      : {};

  const fieldError = (name: RequiredField) =>
    errors[name] ? (
      <p id={`${fieldId(name)}-error`} className="mt-1.5 text-sm text-red-600">
        {errors[name]}
      </p>
    ) : null;

  const optional = <span className="font-normal text-gray-500"> ({content.optionalLabel})</span>;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className={FIELD_CLASS}>
          <label htmlFor={fieldId('name')} className={LABEL_CLASS}>
            {content.name.label}
          </label>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            className={INPUT_CLASS}
            {...errorProps('name')}
          />
          {fieldError('name')}
        </div>

        <div className={FIELD_CLASS}>
          <label htmlFor={fieldId('company')} className={LABEL_CLASS}>
            {content.company.label}
            {optional}
          </label>
          <input
            id={fieldId('company')}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            className={INPUT_CLASS}
          />
        </div>

        <div className={FIELD_CLASS}>
          <label htmlFor={fieldId('phone')} className={LABEL_CLASS}>
            {content.phone.label}
          </label>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={INPUT_CLASS}
            {...errorProps('phone')}
          />
          {fieldError('phone')}
        </div>

        <div className={FIELD_CLASS}>
          <label htmlFor={fieldId('email')} className={LABEL_CLASS}>
            {content.email.label}
          </label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            required
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            className={INPUT_CLASS}
            {...errorProps('email')}
          />
          {fieldError('email')}
        </div>

        <div className={FIELD_CLASS}>
          <label htmlFor={fieldId('market')} className={LABEL_CLASS}>
            {content.market.label}
            {optional}
          </label>
          <select
            id={fieldId('market')}
            name="market"
            value={values.market}
            onChange={(e) => update('market', e.target.value)}
            className={INPUT_CLASS}
          >
            <option value="">{content.market.placeholder}</option>
            {content.market.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={FIELD_CLASS}>
          <label htmlFor={fieldId('goal')} className={LABEL_CLASS}>
            {content.goal.label}
            {optional}
          </label>
          <select
            id={fieldId('goal')}
            name="goal"
            value={values.goal}
            onChange={(e) => update('goal', e.target.value)}
            className={INPUT_CLASS}
          >
            <option value="">{content.goal.placeholder}</option>
            {content.goal.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={fieldId('details')} className={LABEL_CLASS}>
          {content.details.label}
          {optional}
        </label>
        <textarea
          id={fieldId('details')}
          name="details"
          rows={4}
          maxLength={1000}
          value={values.details}
          onChange={(e) => update('details', e.target.value)}
          className={`${INPUT_CLASS} resize-y`}
        />
      </div>

      {/* Honeypot field, hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' ? (
        <p role="alert" className="rounded-box-sm bg-red-50 p-4 text-sm text-red-700">
          {content.errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full gap-2 py-4 text-base disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle aria-hidden="true" className="h-5 w-5 motion-safe:animate-spin" />
            {content.submittingLabel}
          </>
        ) : (
          content.submitLabel
        )}
      </button>

      <p className="text-xs leading-relaxed text-gray-500">
        <RichText value={content.privacy} />
      </p>
    </form>
  );
}
