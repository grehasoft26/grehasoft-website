'use client';

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { Search, X } from 'lucide-react';
import ServiceDeck from './ServiceDeck';
import { TONE_CLASSES, themeFor, toDeckServices, type DeckService, type ServiceCategory } from './serviceTheme';

/**
 * Services directory: search, six category tabs and a 3D flick-card deck of the active
 * category's services (or of the search results across all categories).
 *
 * Search matches a service when its name, its description or its category's name contains
 * the query (case-insensitive). Results from every category form one deck.
 */

interface ServiceExplorerProps {
  id: string;
  categories: ServiceCategory[];
}

const SEARCH_DELAY = 220;

/** Reduced-motion preference read after mount, so server and client render the same markup. */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export default function ServiceExplorer({ id, categories }: ServiceExplorerProps) {
  const baseId = useId();
  const panelId = `${baseId}-deck`;
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');
  const [query, setQuery] = useState('');
  const [deckQuery, setDeckQuery] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const reducedMotion = usePrefersReducedMotion();
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Debounce the deck so typing doesn't re-deal on every keystroke.
  useEffect(() => {
    const timer = window.setTimeout(() => setDeckQuery(query.trim()), SEARCH_DELAY);
    return () => window.clearTimeout(timer);
  }, [query]);

  const allServices = useMemo(() => categories.flatMap(toDeckServices), [categories]);
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];
  const needle = deckQuery.toLowerCase();
  const results = needle
    ? allServices.filter((service) => [service.name, service.desc, service.categoryName].some((text) => text.toLowerCase().includes(needle)))
    : null;

  const deckServices = useMemo(() => results ?? toDeckServices(activeCategory), [results, activeCategory]);
  const deckKey = results ? `search:${needle}` : activeCategory.id;
  const deckTone = themeFor(results ? (results[0]?.categoryId ?? activeCategory.id) : activeCategory.id).tone;

  useEffect(() => {
    if (results) setAnnouncement(`${results.length} ${results.length === 1 ? 'service matches' : 'services match'} “${deckQuery}”.`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deckQuery]);

  const selectCategory = (categoryId: string) => {
    setActiveId(categoryId);
    if (query) {
      setQuery('');
      setDeckQuery('');
    }
  };

  const clearSearch = () => {
    setQuery('');
    setDeckQuery('');
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const current = categories.findIndex((category) => category.id === activeId);
    const last = categories.length - 1;
    const next =
      event.key === 'Home' ? 0 : event.key === 'End' ? last : event.key === 'ArrowRight' || event.key === 'ArrowDown' ? (current + 1) % categories.length : (current - 1 + categories.length) % categories.length;
    const target = categories[next];
    selectCategory(target.id);
    tabRefs.current[target.id]?.focus();
  };

  const onIndexChange = (service: DeckService, position: number, total: number, automatic: boolean) => {
    // Autoplay advances stay silent; announcing every 4 s would talk over screen-reader users.
    if (automatic) return;
    setAnnouncement(`${service.name}, ${position} of ${total}.`);
  };

  const deckLabel = results ? `Search results for ${deckQuery}` : `${activeCategory.name} services`;

  return (
    <MotionConfig reducedMotion="user">
      <section id={id} aria-labelledby={`${baseId}-title`} className="relative isolate scroll-mt-16 overflow-hidden py-14 text-[#05044a] sm:py-16 lg:py-16">
        {/* Light editorial backdrop: white to cool grey, with soft blue light behind the deck */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(42% 36% at 72% 46%, rgba(7,83,246,0.07), transparent 72%), radial-gradient(30% 26% at 10% 72%, rgba(26,183,40,0.05), transparent 70%), linear-gradient(180deg, #FFFFFF 0%, #F7F8FC 38%, #F1F4FC 100%)',
          }}
        />
        {/* Soft hand-off from the dark hero: a faint navy shadow fading into the light section */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(5,4,74,0.10)_0%,rgba(5,4,74,0.03)_45%,transparent_100%)]" />

        <div className="container-custom">
          <div className="mx-auto w-full lg:w-fit lg:max-w-full">
            <header className="text-center">
              <span className="mb-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#13861f]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Service Hub Directory
              </span>
              <h2
                id={`${baseId}-title`}
                className="mx-auto w-fit max-w-full bg-clip-text pb-1 text-[1.85rem] font-bold leading-[1.12] tracking-[-0.02em] text-transparent sm:text-4xl lg:whitespace-nowrap lg:text-[clamp(2.25rem,3.6vw,3rem)]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Explore Our Absolute Service Landscape
              </h2>
            </header>

            <div role="search" className="relative mt-5 w-full lg:mt-6">
              <label htmlFor={`${baseId}-search`} className="sr-only">
                Search services
              </label>
              <Search className="pointer-events-none absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-[#05044a]/40" aria-hidden="true" />
              <input
                id={`${baseId}-search`}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services, technologies, or solutions..."
                autoComplete="off"
                className="h-14 w-full rounded-full border border-[#05044a]/10 bg-white pr-14 pl-13 text-[15px] text-[#05044a] shadow-[0_10px_30px_-18px_rgba(5,4,74,0.35)] placeholder:text-[#05044a]/45 transition-[border-color,box-shadow] focus:border-primary/50 focus:shadow-[0_10px_30px_-18px_rgba(5,4,74,0.35),0_0_0_4px_rgba(7,83,246,0.12)] focus:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[#05044a]/55 transition-colors hover:bg-[#05044a]/[0.06] hover:text-[#05044a] focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-7 grid gap-7 lg:mt-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-14">
            {/* ------------------------------ explorer panel ------------------------------ */}
            <div className="min-w-0">
              <div
                role="tablist"
                aria-label="Service categories"
                onKeyDown={onTabKeyDown}
                className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
              >
                {categories.map((category) => {
                  const { icon: Icon, tone } = themeFor(category.id);
                  const selected = category.id === activeCategory.id;
                  const count = results ? results.filter((service) => service.categoryId === category.id).length : category.items.length;
                  const dimmed = results !== null && count === 0;
                  const highlighted = selected && !results;
                  return (
                    <button
                      key={category.id}
                      ref={(element) => {
                        tabRefs.current[category.id] = element;
                      }}
                      type="button"
                      role="tab"
                      id={`${baseId}-tab-${category.id}`}
                      aria-selected={selected}
                      aria-controls={panelId}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => selectCategory(category.id)}
                      className={`group relative flex min-h-12 shrink-0 snap-start items-center gap-3 rounded-2xl border px-3 py-2.5 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:w-full ${
                        highlighted
                          ? 'border-primary/20 bg-[#EAF0FF] shadow-[0_8px_24px_-16px_rgba(7,83,246,0.45)]'
                          : 'border-[#05044a]/[0.07] bg-white/70 hover:border-[#05044a]/15 hover:bg-white lg:border-transparent lg:bg-transparent'
                      } ${dimmed ? 'opacity-40' : ''}`}
                    >
                      {highlighted && (
                        <motion.span
                          layoutId={`${baseId}-tab-indicator`}
                          className="absolute top-3 bottom-3 left-0 hidden w-[3px] rounded-full bg-primary lg:block"
                          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                        />
                      )}
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${TONE_CLASSES[tone].chipLight}`}>
                        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span className={`text-sm font-semibold whitespace-nowrap lg:flex-1 lg:whitespace-normal ${highlighted ? 'text-primary' : 'text-[#05044a]'}`}>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ------------------------------ deck ------------------------------ */}
            <div id={panelId} role="tabpanel" aria-labelledby={`${baseId}-tab-${activeCategory.id}`} className="min-w-0">
              {/* Active category description, or search summary: directly above the active service card */}
              <div className="mx-auto mb-2 flex min-h-[4.25rem] max-w-2xl items-start justify-center text-center" aria-live="off">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={results ? 'search' : activeCategory.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: reducedMotion ? 0 : 0.25 }}
                  >
                    {results ? (
                      <>
                        <p className="text-base font-bold text-[#05044a] md:text-lg">
                          {results.length} {results.length === 1 ? 'result' : 'results'} for “{deckQuery}”
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#05044a]/70 md:text-[15px]">
                          Matching services from every category, shown in one deck.
                        </p>
                        <button
                          type="button"
                          onClick={clearSearch}
                          className="mt-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                        >
                          Clear search
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="text-base font-bold text-[#05044a] md:text-lg">{activeCategory.name}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#05044a]/70 md:text-[15px]">{activeCategory.description}</p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <ServiceDeck
                deckKey={deckKey}
                services={deckServices}
                tone={deckTone}
                label={deckLabel}
                reducedMotion={reducedMotion}
                onIndexChange={onIndexChange}
                emptyState={
                  <div className="max-w-sm text-center">
                    <p className="text-lg font-semibold text-[#05044a]">No services match “{deckQuery}”</p>
                    <p className="mt-2 text-sm text-[#05044a]/65">Try another keyword, or browse a category.</p>
                    <button type="button" onClick={clearSearch} className="btn-primary mt-6">
                      Clear search
                    </button>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </p>
      </section>
    </MotionConfig>
  );
}
