'use client';

// Bancada do hero. A mecânica vem do Forge (escolher um trabalho, as peças
// sobem, o kit conta, o rato pré-visualiza). O resto — loja, carrinho,
// fotografia, luz WebGL — não entra: o site é papel, um acento, sem glow.
import { useId, useRef, useState, useSyncExternalStore } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from 'framer-motion';
import {
  ArrowRight,
  Box,
  CalendarClock,
  LayoutGrid,
  ListChecks,
  RotateCcw,
  Store,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { bench, type BenchIcon, type BenchJob } from '@/content/home';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const ICONS: Record<BenchIcon, LucideIcon> = {
  all: LayoutGrid,
  product: Box,
  shop: Store,
  ops: CalendarClock,
  practice: ListChecks,
};

const EASE = [0.25, 1, 0.5, 1] as const;
const PIECE = new Map(bench.pieces.map(piece => [piece.id, piece]));
const INITIAL =
  bench.jobs.find(job => job.id === bench.defaultJob) ?? bench.jobs[0];

const sameKit = (a: string[], b: string[]) =>
  a.length === b.length && a.every(id => b.includes(id));

function useFinePointer() {
  return useSyncExternalStore(
    onStoreChange => {
      const query = window.matchMedia('(hover: hover) and (pointer: fine)');
      query.addEventListener('change', onStoreChange);
      return () => query.removeEventListener('change', onStoreChange);
    },
    () => window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    () => false,
  );
}

export default function Workbench({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion() ?? false;
  const fine = useFinePointer();
  const pickerId = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const [jobId, setJobId] = useState(INITIAL.id);
  const [kit, setKit] = useState<string[]>(() => [...INITIAL.pieces]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [peekId, setPeekId] = useState<string | null>(null);

  const job = bench.jobs.find(item => item.id === jobId) ?? INITIAL;
  const peek = peekId
    ? (bench.jobs.find(item => item.id === peekId) ?? null)
    : null;
  const shown = peek ? peek.pieces : kit;
  const customised = !sameKit(kit, job.pieces);
  const active = activeId ? PIECE.get(activeId) : undefined;
  const activeInShown = Boolean(activeId && shown.includes(activeId));

  const spring: Transition = reduce
    ? { duration: 0 }
    : { type: 'spring', stiffness: 320, damping: 28 };

  function pick(id: string) {
    if (id === jobId) {
      setPeekId(null);
      return;
    }
    const next = bench.jobs.find(item => item.id === id);
    if (!next) return;
    setJobId(id);
    setKit([...next.pieces]);
    setPeekId(null);
  }

  function toggle(id: string) {
    setPeekId(null);
    setKit(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id],
    );
  }

  function onPickerKey(event: KeyboardEvent<HTMLDivElement>) {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[
      event.key
    ];
    if (!step) return;
    event.preventDefault();
    const index = bench.jobs.findIndex(item => item.id === jobId);
    const next = (index + step + bench.jobs.length) % bench.jobs.length;
    pick(bench.jobs[next].id);
    buttons.current[next]?.focus();
  }

  function onTabEnter(event: PointerEvent<HTMLButtonElement>, id: string) {
    if (!fine || event.pointerType !== 'mouse') return;
    setPeekId(id === jobId ? null : id);
  }

  const countWord = kit.length === 1 ? bench.pieceOne[locale] : bench.pieceMany[locale];
  const kitName = customised
    ? bench.custom[locale]
    : job.id === 'all'
      ? bench.yours[locale]
      : job.proof[locale];

  const status = active
    ? `${active.name[locale]} · ${active.note[locale]} · ${
        activeInShown ? bench.inKit[locale] : bench.outKit[locale]
      }`
    : peek
      ? `${bench.preview[locale]} · ${peek.label[locale]}`
      : bench.hint[locale];

  return (
    <div className='border border-line bg-paper'>
      <div className='border-b border-line p-4 md:p-5'>
        <p id={pickerId} className='eyebrow mb-3'>
          {bench.picker[locale]}
        </p>
        <div
          role='radiogroup'
          aria-labelledby={pickerId}
          onKeyDown={onPickerKey}
          onPointerLeave={() => setPeekId(null)}
          className='flex gap-1 overflow-x-auto bg-paper-2 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        >
          {bench.jobs.map((item, index) => (
            <JobTab
              key={item.id}
              job={item}
              locale={locale}
              active={item.id === jobId}
              marked={
                Boolean(activeId) &&
                item.id !== 'all' &&
                item.pieces.includes(activeId as string)
              }
              reduce={reduce}
              buttonRef={node => {
                buttons.current[index] = node;
              }}
              onPick={() => pick(item.id)}
              onEnter={event => onTabEnter(event, item.id)}
            />
          ))}
        </div>
      </div>

      <div className='p-4 md:p-5'>
        <RollingTitle
          jobId={job.id}
          lines={job.title[locale]}
          reduce={reduce}
        />
        <p className='mt-4 min-h-[1.25rem] font-mono text-[0.7rem] tracking-[0.04em] text-ink-3 uppercase'>
          {status}
        </p>

        <div className='relative mt-4 bg-paper-2 p-2 pt-3.5 sm:p-3 sm:pt-4'>
          {!reduce && (
            <div className='pointer-events-none absolute inset-0 overflow-hidden'>
              <AnimatePresence initial={false}>
                <motion.span
                  key={job.id}
                  aria-hidden
                  initial={{ x: '-40%' }}
                  animate={{ x: '280%' }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className='absolute inset-y-0 left-0 w-8 bg-accent/15'
                />
              </AnimatePresence>
            </div>
          )}

          <ul className='relative grid grid-cols-2 gap-2 sm:grid-cols-4'>
            {bench.pieces.map(piece => {
              const inShown = shown.includes(piece.id);
              const hot = activeId === piece.id;
              const dim = shown.length > 0 && !inShown && !hot;
              const order = shown.indexOf(piece.id);

              return (
                <li key={piece.id}>
                  <motion.button
                    type='button'
                    aria-pressed={kit.includes(piece.id)}
                    aria-label={`${piece.name[locale]}. ${
                      kit.includes(piece.id)
                        ? bench.removeAria[locale]
                        : bench.addAria[locale]
                    }`}
                    onClick={() => toggle(piece.id)}
                    onPointerEnter={() => setActiveId(piece.id)}
                    onPointerLeave={() => setActiveId(null)}
                    onFocus={() => setActiveId(piece.id)}
                    onBlur={() => setActiveId(null)}
                    initial={false}
                    animate={{
                      y: inShown && !reduce ? -8 : 0,
                      scale: inShown && !reduce ? 1.02 : 1,
                      opacity: dim ? 0.38 : 1,
                    }}
                    transition={{
                      ...spring,
                      delay: inShown && !reduce ? Math.max(order, 0) * 0.045 : 0,
                    }}
                    className={cn(
                      'relative flex min-h-16 w-full cursor-pointer flex-col justify-between border bg-paper px-3 py-2.5 text-left',
                      inShown ? 'z-10 border-ink' : 'border-line',
                      inShown &&
                        !reduce &&
                        'shadow-[0_12px_22px_-16px_rgb(11_13_16/0.55)]',
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        'absolute top-2 right-2 size-1.5',
                        inShown ? 'bg-accent' : 'bg-transparent',
                      )}
                    />
                    <span className='display pr-3 text-[0.95rem] leading-tight'>
                      {piece.name[locale]}
                    </span>
                    <span className='mt-1 font-mono text-[0.65rem] tracking-[0.06em] text-ink-3 uppercase'>
                      {piece.note[locale]}
                    </span>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className='flex flex-col gap-4 border-t border-line p-4 sm:flex-row sm:items-center md:p-5'>
        <div className='shrink-0'>
          <p className='sr-only' aria-live='polite'>
            {kit.length} {countWord}. {kitName}
          </p>
          <p aria-hidden className='flex items-baseline gap-2 text-sm'>
            <span className='relative inline-flex h-[1.15em] overflow-hidden font-mono text-accent tabular-nums'>
              <AnimatePresence mode='popLayout' initial={false}>
                <motion.span
                  key={kit.length}
                  initial={reduce ? false : { y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={reduce ? undefined : { y: '-100%' }}
                  transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
                  className='block'
                >
                  {kit.length}
                </motion.span>
              </AnimatePresence>
            </span>
            <span>
              {countWord}
              <span className='text-ink-3'> · {kitName}</span>
            </span>
          </p>
        </div>

        <ul className='flex min-h-9 min-w-0 flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
          <AnimatePresence initial={false} mode='popLayout'>
            {kit.map(id => {
              const piece = PIECE.get(id);
              if (!piece) return null;
              return (
                <motion.li
                  key={id}
                  layout={reduce ? false : 'position'}
                  initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: reduce ? 0 : 0.25, ease: EASE }}
                  className='shrink-0'
                >
                  <button
                    type='button'
                    onClick={() => toggle(id)}
                    aria-label={`${piece.name[locale]}. ${bench.removeAria[locale]}`}
                    className='inline-flex cursor-pointer items-center gap-1.5 border border-line px-2 py-1 font-mono text-[0.68rem] tracking-[0.04em] text-ink uppercase hover:border-ink'
                  >
                    {piece.name[locale]}
                    <X aria-hidden size={12} />
                  </button>
                </motion.li>
              );
            })}
          </AnimatePresence>
          {kit.length === 0 && (
            <li className='text-sm text-ink-3'>{bench.empty[locale]}</li>
          )}
        </ul>

        <div className='flex shrink-0 items-center gap-2'>
          {customised && (
            <button
              type='button'
              onClick={() => setKit([...job.pieces])}
              aria-label={bench.reset[locale]}
              className='grid size-10 cursor-pointer place-items-center border border-line text-ink-2 hover:border-ink hover:text-ink'
            >
              <RotateCcw aria-hidden size={16} />
            </button>
          )}
          <Link href={job.href} className='btn btn-sm'>
            {job.cta[locale]} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function JobTab({
  job,
  locale,
  active,
  marked,
  reduce,
  buttonRef,
  onPick,
  onEnter,
}: {
  job: BenchJob;
  locale: Locale;
  active: boolean;
  marked: boolean;
  reduce: boolean;
  buttonRef: (node: HTMLButtonElement | null) => void;
  onPick: () => void;
  onEnter: (event: PointerEvent<HTMLButtonElement>) => void;
}) {
  const Icon = ICONS[job.icon];

  return (
    <button
      ref={buttonRef}
      type='button'
      role='radio'
      aria-checked={active}
      tabIndex={active ? 0 : -1}
      onClick={onPick}
      onPointerEnter={onEnter}
      className={cn(
        'relative flex h-10 shrink-0 cursor-pointer items-center gap-2 px-3 text-[13px] font-medium whitespace-nowrap',
        active ? 'text-accent-ink' : 'text-ink-2 hover:text-ink',
      )}
    >
      {active &&
        (reduce ? (
          <span className='absolute inset-0 bg-accent' />
        ) : (
          <motion.span
            layoutId='bench-pill'
            transition={{ type: 'spring', stiffness: 380, damping: 34 }}
            className='absolute inset-0 bg-accent'
          />
        ))}
      <Icon aria-hidden className='relative size-3.5' strokeWidth={1.75} />
      <span className='relative'>{job.label[locale]}</span>
      {marked && (
        <span
          aria-hidden
          className={cn(
            'absolute top-1.5 right-1.5 size-1.5',
            active ? 'bg-accent-ink' : 'bg-accent',
          )}
        />
      )}
    </button>
  );
}

function RollingTitle({
  jobId,
  lines,
  reduce,
}: {
  jobId: string;
  lines: [string, string, string];
  reduce: boolean;
}) {
  return (
    <div>
      <p className='sr-only' aria-live='polite'>
        {lines.join(' ')}
      </p>
      <p aria-hidden className='display text-[1.7rem] leading-[1.12] md:text-[2.05rem]'>
        {lines.map((line, index) => (
          <span key={index} className='relative block overflow-hidden'>
            <AnimatePresence mode='popLayout' initial={false}>
              <motion.span
                key={`${jobId}-${index}`}
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: '0%' }}
                exit={reduce ? undefined : { y: '-110%' }}
                transition={{
                  duration: reduce ? 0 : 0.45,
                  delay: reduce ? 0 : index * 0.04,
                  ease: EASE,
                }}
                className={cn('block', index === 2 && 'text-accent')}
              >
                {line}
              </motion.span>
            </AnimatePresence>
          </span>
        ))}
      </p>
    </div>
  );
}
