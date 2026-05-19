export const SITE_NAME = 'Afriwood Studios';
export const SITE_TAGLINE = "Africa's First Superhero Universe";
export const SITE_DESCRIPTION =
  "Comics. Animation. Motion Pictures. Games. Culture. Afriwood Studios brings Africa's first superhero universe to life.";

export const CONTACT_EMAIL = 'info@afriwoodstudios.com';
export const CONTACT_ADDRESS = '322 Renner Ave, Newark, NJ';

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/afriwoodstudios',
  tiktok: 'https://tiktok.com/@afriwoodstudios',
  youtube: 'https://youtube.com/@afriwoodstudios',
  facebook: 'https://facebook.com/afriwoodstudios',
  discord: 'https://discord.gg/afriwood',
  twitter: 'https://twitter.com/afriwoodstudios',
};

/** Primary navbar row (desktop + mobile) */
export const NAV_MAIN = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Universe', href: '/universe' },
  { label: 'Shop', href: '/store' },
  { label: 'Our NGO', href: '/ngo' },
  { label: 'Movies', href: '/movies' },
  { label: 'News', href: '/news' },
  { label: 'Community', href: '/community' },
] as const;

/** “More” dropdown links */
export const NAV_MORE = [
  { label: 'Academy', href: '/academy' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Masterclass', href: '/masterclass' },
  { label: 'Shutterbird', href: '/universe?universe=shutterbird' },
] as const;

/** @deprecated Use NAV_MAIN */
export const NAV_LINKS = NAV_MAIN;

/** @deprecated Use NAV_MORE */
export const NAV_SECONDARY = NAV_MORE;

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/store' },
  { label: 'Our NGO', href: '/ngo' },
  { label: 'About Us', href: '/about' },
  { label: 'Universe', href: '/universe' },
  { label: 'Academy', href: '/academy' },
  { label: 'Internship', href: '/contact' },
  { label: 'News', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Movies', href: '/movies' },
  { label: 'Community', href: '/community' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Career', href: '/contact' },
  { label: 'Help / FAQ', href: '/contact' },
] as const;

export const FOOTER_POLICY_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'License', href: '/contact' },
  { label: 'Agreement', href: '/contact' },
  { label: 'Advertising', href: '/contact' },
] as const;

export const FOOTER_SOCIALS = [
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, icon: 'youtube' as const },
  { label: 'TikTok', href: SOCIAL_LINKS.tiktok, icon: 'tiktok' as const },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, icon: 'instagram' as const },
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, icon: 'facebook' as const },
  { label: 'Twitter', href: SOCIAL_LINKS.twitter, icon: 'twitter' as const },
  { label: 'Discord', href: SOCIAL_LINKS.discord, icon: 'discord' as const },
] as const;

export const SEARCH_QUICK_LINKS = [
  { label: 'Universe', href: '/universe', hint: 'Meet the heroes' },
  { label: 'Movies', href: '/movies', hint: 'Films & animation' },
  { label: 'Shop', href: '/store', hint: 'Comics & merch' },
  { label: 'Community', href: '/community', hint: 'Join fans worldwide' },
  { label: 'News', href: '/news', hint: 'Latest updates' },
] as const;

export type CharacterUniverse = 'Shutterbird' | 'Afriwood Universe';

export const CHARACTERS = [
  {
    slug: 'shutter-bird',
    name: 'Shutter-Bird',
    universe: 'Shutterbird' as CharacterUniverse,
    image: '/assets/heroes/shutter-bird.png',
    bio: 'A photojournalist who discovers a lens-powered gift and becomes AfriCity\'s most watched guardian.',
  },
  {
    slug: 'ije',
    name: 'Ije',
    universe: 'Afriwood Universe' as CharacterUniverse,
    image: '/assets/heroes/hero-2.png',
    bio: 'Rooted in forest lore, Ije bridges tradition and tomorrow when her homeland faces collapse.',
  },
  {
    slug: 'zazuu',
    name: 'Zazuu',
    universe: 'Afriwood Universe' as CharacterUniverse,
    image: '/assets/heroes/hero-3.png',
    bio: 'Forged in fire, Zazuu stands between chaos and community with relentless courage.',
  },
  {
    slug: 'udo',
    name: 'Udo',
    universe: 'Afriwood Universe' as CharacterUniverse,
    image: '/assets/heroes/hero-4.png',
    bio: 'Calm and strategic, Udo reads the storm before it breaks and moves when others hesitate.',
  },
  {
    slug: 'sandra',
    name: 'Sandra',
    universe: 'Afriwood Universe' as CharacterUniverse,
    image: '/assets/heroes/hero-6.png',
    bio: 'Sandra channels intellect and empathy to unite allies across the expanding Afriwood timeline.',
  },
  {
    slug: 'dragon',
    name: 'Dragon',
    universe: 'Afriwood Universe' as CharacterUniverse,
    image: '/assets/heroes/hero-5.png',
    bio: 'A shadow tactician whose legend grows with every battle fought for AfriCity.',
  },
  {
    slug: 'uncle-ben',
    name: 'Uncle Ben',
    universe: 'Afriwood Universe' as CharacterUniverse,
    image: '/assets/heroes/hero-7.png',
    bio: 'The mentor figure who reminds every hero that power must serve people, not ego.',
  },
];

export const HOME_HERO_STRIP = CHARACTERS.filter((c) =>
  ['Shutter-Bird', 'Ije', 'Zazuu', 'Udo', 'Dragon'].includes(c.name),
);

export const UNIVERSE_STORIES = [
  {
    title: 'Whispers in the Wind',
    description: 'The origin arc — how AfriCity first heard the call of heroes rising from silence.',
    phase: 'Phase 1',
  },
  {
    title: 'Echoes in the Deep',
    description: 'A crossover event where Shutter-Bird and Ije confront a threat beneath the city.',
    phase: 'Phase 1',
  },
  {
    title: 'Cradle in the Sky',
    description: 'The next chapter — alliances form as the universe expands beyond AfriCity.',
    phase: 'Phase 2',
  },
];

export type MovieFilterId = 'all' | 'phase1' | 'phase2' | 'trailers' | 'shorts';

export const MOVIE_FILTERS: { id: MovieFilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'phase1', label: 'Phase 1 - Shutter-Bird' },
  { id: 'phase2', label: 'Phase 2 - Universe Crossovers' },
  { id: 'trailers', label: 'Trailers' },
  { id: 'shorts', label: 'Shorts' },
];

export const MOVIES = [
  {
    id: 'shutter-bird-origin',
    title: 'Shutter-Bird: The Origin',
    type: 'Short Film',
    status: 'In Production',
    phase: 'Phase 1',
    duration: '22 min',
    description:
      "Africa's greatest hero origin story. A young photojournalist discovers a power that will change everything.",
    poster: '/assets/heroes/shutter-bird.png',
    categories: ['phase1', 'short', 'trailer'] as const,
    trailerYoutubeId: null as string | null,
  },
  {
    id: 'ije-shadows',
    title: 'Ije: Shadows of Home',
    type: 'Animation',
    status: 'Upcoming',
    phase: 'Phase 1',
    duration: '18 min',
    description:
      'A warrior returns home to find her city on the brink. Between tradition and change, a hero is forged.',
    poster: '/assets/heroes/hero-2.png',
    categories: ['phase1', 'short', 'trailer'] as const,
    trailerYoutubeId: null,
  },
  {
    id: 'universe-crossover',
    title: 'Afriwood Universe: Crossover',
    type: 'Feature Film',
    status: 'Development',
    phase: 'Phase 2',
    duration: 'TBD',
    description: "All heroes. One threat. The Afriwood Universe's first major crossover event.",
    poster: '/assets/backgrounds/bg-3.png',
    categories: ['phase2', 'trailer'] as const,
    trailerYoutubeId: null,
  },
];

export const ABOUT_TEAM = [
  { name: 'Shary Azmat', role: 'Founder & Creative Director', image: '/assets/heroes/hero-9.png' },
  { name: 'Habib Farooq', role: 'Lead Developer', image: '/assets/heroes/hero-8.png' },
  { name: 'Haris Mehmood', role: 'Design Lead', image: '/assets/heroes/hero-10.png' },
  { name: 'Umair Ashfaq', role: 'Art Director', image: '/assets/heroes/hero-1.png' },
];

export const PODCAST_NAME = "Hero's Lens";
export const PODCAST_DESCRIPTION =
  'Weekly episodes: interviews, behind-the-scenes, and motivational talks from the Afriwood universe.';

