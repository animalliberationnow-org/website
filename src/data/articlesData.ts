export interface ArticleType {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: 'ethics' | 'myths' | 'culture' | 'research';
  tags: string[];
  relatedArticles?: string[];
}

export const articles: ArticleType[] = [
  {
    id: '1',
    title: 'How does this relate to human rape, molestation, and sexual violence?',
    excerpt: 'Calling this by a different name does not change the structure of the act.',
    content: `
    <p>Sexual violence is defined by the absence of consent and the treatment of another’s body as an object for use.</p>
      <p>Animals used for reproductive control are forcibly restrained, penetrated, impregnated, and
      subjected to invasive procedures. They cannot consent as they are moral patients. Resistance is
      physically overridden. This satisfies the same moral criteria that define sexual violence in humans.</p>
      <p>Calling this by a different name does not change the structure of the act.</p>

    `,
    image: '/images/articles/article-1.jpg',
    author: 'Prithvi S',
    date: '2025-04-24',
    category: 'ethics',
    tags: ['rape', 'molestation', 'sexual violence', 'animal-rights'],
    relatedArticles: ['2', '3']
  },
  {
    id: "2",
    title: "How does this relate to murder and killing?",
    excerpt: "Murder is the unjustified killing of a sentient individual who has an interest in continued existence.",
    content: `
        <p>Murder is the unjustified killing of a sentient individual who has an interest in continued existence.</p
        <p>Animals demonstrably value their lives. They flee danger, struggle when restrained, vocalise
        distress, and exhibit stress responses when facing death. Killing them for preference, convenience,
        or tradition overrides their most basic interest.</p
        <p>Species membership does not negate that interest.</p>
      `,
    image: "/images/articles/article-2.jpg",
    author: "Prithvi S",
    date: "2025-04-25",
    category: "ethics",
    tags: ["murder", "killing", "animal-rights"],
    relatedArticles: ["1", "3"]
  },
  {
    id: "3",
    title: "How does this relate to infanticide and family separation?",
    excerpt: "The moral structure of the act is identical. Only the victims differ.",
    content: `
      <p>Infanticide and forced separation are condemned in humans because they violate fundamental
      interests of both parent and child.</p>
      <p>Nonhuman animals form bonds, recognise their offspring, protect them, and experience measurable
      distress when separated. Removing young animals causes panic responses, depression-like
      behaviours, and long-term trauma.</p>
      <p>The moral structure of the act is identical. Only the victims differ.</p>
      `,
    image: "/images/articles/article-3.jpg",
    author: "Prithvi S",
    date: "2025-04-25",
    category: "ethics",
    tags: ["infanticide", "family-separation", "animal-rights", "ethical living"],
    relatedArticles: ["1", "2"]
  },
  {
    id: "4",
    title: "How does this relate to slavery?",
    excerpt: "Animals are bred, confined, traded, controlled, and killed as property. Their reproduction,movement, and survival are dictated by owners. Their bodies are commodities.",
    content: `
          <p>Slavery is the legal ownership of sentient beings and the systematic extraction of value from their
          bodies and labour.</p>
          <p>Animals are bred, confined, traded, controlled, and killed as property. Their reproduction,
          movement, and survival are dictated by owners. Their bodies are commodities.</p>
          <p>This is slavery by definition. Changing the species of the enslaved does not change the moral
          reality.</p>
        `,
    image: "/images/articles/article-4.jpg",
    author: "Prithvi S",
    date: "2025-04-25",
    category: "ethics",
    tags: ["slavery", "animal-rights", "confinement", "trade"],
    relatedArticles: ["1", "3", "5"]
  }
];
