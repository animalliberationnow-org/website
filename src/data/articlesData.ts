export interface ArticleType {
  id: string;
  title: string;
  excerpt: string;
  content: string;
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
    date: '2025-04-24',
    category: 'ethics',
    tags: ['rape', 'molestation', 'sexual violence', 'animal-rights'],
    relatedArticles: ['11', '12']
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
    date: "2025-04-25",
    category: "ethics",
    tags: ["murder", "killing", "animal-rights"],
    relatedArticles: ["13", "16"]
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
    date: "2025-04-25",
    category: "ethics",
    tags: ["infanticide", "family-separation", "animal-rights", "ethical living"],
    relatedArticles: ["13", "14"]
   },

   {
     id: "4",
     title: "How does this relate to slavery?",
     excerpt: "Animals are bred, confined, traded, controlled, and killed as property.",
     content: `
           <p>Slavery is the legal ownership of sentient beings and the systematic extraction of value from their
           bodies and labour.</p>
           <p>Animals are bred, confined, traded, controlled, and killed as property. Their reproduction,
           movement, and survival are dictated by owners. Their bodies are commodities.</p>
           <p>This is slavery by definition. Changing the species of the enslaved does not change the moral
           reality.</p>
         `,
     date: "2025-04-25",
     category: "ethics",
     tags: ["slavery", "animal-rights", "confinement", "trade"],
     relatedArticles: ["19", "21"]
   },
   {
     id: "5",
     title: "What are animal rights?",
     excerpt: "Animal rights refer to the recognition that nonhuman animals possess moral standing and must not be treated as property.",
     content: `
       <p>Animal rights refer to the recognition that nonhuman animals possess moral standing and therefore
       must not be treated as property or as means to human ends.</p>
       <p>Human rights themselves are not a fixed or natural category. They are historically contingent legal
       and moral protections extended to beings recognised as having morally relevant interests. Over
       time, societies have expanded the circle of rights holders as they understood exclusion to be
       unjustified.</p>
       <p>Animal rights are not separate from human rights. They are an extension of the same ethical
       framework applied consistently once morally relevant traits are acknowledged.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["animal-rights", "human-rights", "moral-standing", "justice"],
     relatedArticles: ["6", "8"]
   },
   {
     id: "6",
     title: "On what basis do humans have rights in the first place?",
     excerpt: "Human rights are grounded in sentience, vulnerability, and the possession of interests, not intelligence.",
     content: `
       <p>Human rights are not grounded in intelligence, language, productivity, or moral reasoning. Those
       criteria fail immediately because infants, cognitively disabled individuals, and unconscious patients
       would lose protection.</p>
       <p>In practice, human rights are grounded in sentience, vulnerability, and the possession of interests.
       Humans are protected because they can suffer, because harm matters to them, and because denying
       protection leads to systematic exploitation.</p>
       <p>This grounding does not stop at species boundaries.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["human-rights", "sentience", "vulnerability", "moral-philosophy"],
     relatedArticles: ["5", "30"]
   },
   {
     id: "7",
     title: "What is sentience, scientifically defined?",
     excerpt: "Sentience is the capacity to have subjective experiences, including pain, distress, and pleasure.",
     content: `
       <p>Sentience is the capacity to have subjective experiences. This includes the ability to feel pain,
       distress, fear, pleasure, comfort, and to have an experiential point of view.</p>
       <p>Neuroscience and behavioural science establish sentience through:</p>
       <ul>
         <li>Functional nociception and pain processing</li>
         <li>Centralised nervous systems or analogous structures</li>
         <li>Avoidance learning and threat response</li>
         <li>Stress physiology, including cortisol responses</li>
         <li>Protective and social behaviours</li>
         <li>Goal-directed action to preserve life and bodily integrity</li>
       </ul>
       <p>All vertebrates and many invertebrates meet these criteria.</p>
       <p>Sentience is the minimum condition for moral relevance. Without it, harm has no subject. With it,
       harm becomes ethically meaningful.</p>
     `,
     date: "2025-04-26",
     category: "research",
     tags: ["sentience", "neuroscience", "biology", "pain"],
     relatedArticles: ["28", "29"]
   },
   {
     id: "8",
     title: "Why does sentience generate moral rights?",
     excerpt: "Because sentience creates interests. A sentient being has an interest in not being harmed.",
     content: `
       <p>Because sentience creates interests.</p>
       <p>A sentient being has an interest in not being harmed, not being violated, not being killed, and not
       being separated from their offspring. These interests exist independently of human recognition.</p>
       <p>Rights are society’s mechanism for protecting interests when power asymmetries make exploitation
       likely. Animals are maximally vulnerable within human-controlled systems. Without rights, their
       interests are systematically overridden.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["sentience", "moral-rights", "interests", "protection"],
     relatedArticles: ["7", "5"]
   },
   {
     id: "9",
     title: "Animals kill other animals. Why should humans not do the same?",
     excerpt: "This argument confuses descriptive facts with moral reasoning. Justice exists because natural behaviour is not a moral guide.",
     content: `
       <p>This argument confuses descriptive facts with moral reasoning.</p>
       <p>Nonhuman animals act without moral agency and without social institutions capable of ethical
       restraint. A majority of humans do possess moral agency, alternatives, and systems of
       accountability.</p>
       <p>Justice exists precisely because natural behaviour is not a moral guide. The presence of violence in
       nature does not justify organised, intentional violence where alternatives exist.</p>
     `,
     date: "2025-04-26",
     category: "myths",
     tags: ["nature-fallacy", "moral-agency", "ethics", "predation"],
     relatedArticles: ["2", "5"]
   },
   {
     id: "10",
     title: "What does Animal Liberation Now! advocate for?",
     excerpt: "We advocate for the complete abolition of animal exploitation, not its regulation.",
     content: `
       <p>We advocate for the complete abolition of animal exploitation, not its regulation.</p>
       <p>This means rejecting the use of sentient beings as resources. It means recognising animals as
       individuals with morally significant interests. It means extending the same ethical principles that
       underpin human rights to all sentient beings, without arbitrary exclusions.</p>
       <p>Justice should not be species-specific.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["abolition", "animal-liberation", "justice", "activism"],
     relatedArticles: ["5", "19"]
   },
   {
     id: "11",
     title: "Why is the dairy industry fundamentally based on rape?",
     excerpt: "Milk production requires pregnancy. Pregnancy is produced through rape.",
     content: `
       <p>Milk production requires pregnancy. Pregnancy is produced through rape.</p>
       <p>Female cows and buffaloes are forcibly impregnated through artificial insemination. They are
       restrained, penetrated, and made pregnant without consent. Resistance is physically overridden.</p>
       <p>This is rape by definition.</p>
       <p>In humans, forced penetration to cause pregnancy is recognised as sexual violence regardless of the
       method used. The victim’s species does not change the moral structure of the act.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["dairy", "rape", "sexual-violence", "insemination"],
     relatedArticles: ["1", "12"]
   },
   {
     id: "12",
     title: "How are male animals sexually violated in the dairy industry?",
     excerpt: "Male bulls are subjected to electroejaculation, a process in which they are restrained and forced to ejaculate.",
     content: `
       <p>Male bulls are subjected to electroejaculation, a process in which they are restrained and forced to
       ejaculate so their semen can be extracted for breeding.</p>
       <p>This is sexual assault. The animal does not consent. Their sexual function is commandeered for
       profit.</p>
       <p>If a human were restrained and forced to ejaculate for another’s use, it would be called rape or
       sexual assault. Calling it “semen collection” does not alter what is being done to the victim.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["dairy", "sexual-assault", "electroejaculation", "bulls"],
     relatedArticles: ["1", "11"]
   },
   {
     id: "13",
     title: "Why are calf separation and killing acts of direct exploitation, not byproducts?",
     excerpt: "After rape and forced pregnancy, calves are removed so the milk can be sold. This causes acute distress.",
     content: `
       <p>After rape and forced pregnancy, calves are removed from their mothers so the milk can be sold.
       This causes acute distress to both mother and child, documented through behavioural and
       physiological stress responses.</p>
       <p>Male calves are killed, abandoned, or sold because they are economically useless. This is
       infanticide followed by murder, embedded into the system.</p>
       <p>In human ethics, forced family separation and the killing of children are recognised as grave crimes.
       The same moral reasoning applies here.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["dairy", "separation", "infanticide", "family"],
     relatedArticles: ["3", "11"]
   },
   {
     id: "14",
     title: "What is khal bachcha, and why is it a particularly severe form of infanticide?",
     excerpt: "Khal bachcha involves killing a newborn calf, stuffing their skin, and using it to deceive the grieving mother.",
     content: `
       <p>Khal bachcha is a practice in parts of the Indian dairy industry where a newborn calf is killed, their
       skin is removed and stuffed with hay or other material, and the stuffed body is then placed near
       the mother.</p>
       <p>The mother, grieving and searching for her child, is tricked into believing her baby is still alive.
       This deception induces lactation so her milk can be extracted.</p>
       <p>This involves:</p>
       <ul>
         <li>Infanticide, because the calf is deliberately killed</li>
         <li>Psychological violence, because the mother is deceived by the body of her dead child</li>
         <li>Sexual exploitation, because her reproductive system is manipulated for profit following rape and forced pregnancy</li>
       </ul>
       <p>In human terms, killing an infant, preserving their body, and using it to extract bodily resources
       from a grieving mother would be recognised as extreme abuse. The moral structure does not change
       because the victims are nonhuman.</p>
     `,
     date: "2025-04-26",
     category: "culture",
     tags: ["khal-bachcha", "dairy", "infanticide", "psychological-abuse"],
     relatedArticles: ["3", "13"]
   },
   {
     id: "15",
     title: "How is the egg industry connected to rape and sexual exploitation?",
     excerpt: "The egg industry is reproductive exploitation. Hens’ reproductive systems are manipulated for production.",
     content: `
       <p>The egg industry is reproductive exploitation, even when no forced impregnation occurs on-site.</p>
       <p>Hens’ reproductive systems are manipulated through selective breeding, confinement, and control of
       their bodies to extract eggs at industrial rates. Their reproductive labour is not voluntary. Their
       bodies are used as production units.</p>
       <p>Sexual exploitation is not only about forced sex. It is also about forced reproductive function and
       bodily use for someone else’s gain.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["eggs", "reproductive-exploitation", "layer-hens", "farming"],
     relatedArticles: ["16", "17"]
   },
   {
     id: "16",
     title: "What happens to male chicks, and why is that murder and infanticide?",
     excerpt: "Male chicks cannot lay eggs. They are killed shortly after hatching as a routine part of the model.",
     content: `
       <p>Male chicks cannot lay eggs. They are killed shortly after hatching as a routine part of the model.</p>
       <p>This is infanticide because the victims are newborns. It is also murder in the moral sense because
       the killing is intentional, unnecessary for survival, and done for economic efficiency.</p>
       <p>If this were done to human infants because they were “unprofitable,” the moral category would be
       obvious. Male chicks are either ground up alive in giant macerators, suffocated to death in bags,
       drowned alive, or ripped apart.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["chick-culling", "infanticide", "maceration", "eggs"],
     relatedArticles: ["2", "3"]
   },
   {
     id: "17",
     title: "What happens to female chicks in the egg industry?",
     excerpt: "Within days of hatching, many female chicks are subjected to debeaking, which is the partial amputation of the beak.",
     content: `
       <p>Female chicks are kept alive only because their bodies can be used for egg production.</p>
       <p>Within days of hatching, many female chicks are subjected to debeaking, which is the partial
       amputation of the beak. A beak is not a nail or an inert structure. It is a living, highly innervated
       organ with pain receptors, nerves, and blood supply. Cutting it causes acute pain and can lead to
       chronic pain, nerve damage, and long-term sensitivity.</p>
       <p>Debeaking is done because the birds are confined in crowded, stressful conditions where frustration
       and distress lead to pecking. Instead of removing the cause of suffering, the industry mutilates the
       victims to make confinement workable.</p>
       <p>In moral terms, this is assault and mutilation. Non-consensual removal of a sensitive body part to
       facilitate control and exploitation would be recognised as severe violence if done to humans.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["debeaking", "mutilation", "eggs", "confinement"],
     relatedArticles: ["15", "16"]
   },
   {
     id: "18",
     title: "How is the honey industry exploitation, and when does it involve killing?",
     excerpt: "The honey industry treats insect societies as extractive machines. Queens are manipulated and colonies controlled.",
     content: `
       <p>The honey industry treats insect societies as extractive machines.</p>
       <p>Queens are manipulated, colonies are controlled, and hives are culled when inconvenient or no
       longer profitable. Food is taken and replaced with substitutes to keep production going. Even if one
       debates degrees of sentience, the structure is still clear: taking what belongs to another for profit,
       while controlling their lives.</p>
       <p>Abolitionist ethics rejects ownership and extraction from vulnerable beings.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["honey", "insects", "exploitation", "extraction"],
     relatedArticles: ["4", "7"]
   },
   {
     id: "19",
     title: "Why call all of this slavery?",
     excerpt: "Slavery is ownership plus control, backed by law and violence. Animals are legally property.",
     content: `
       <p>Slavery is ownership plus control, backed by law and violence.</p>
       <p>Animals in these industries are legally property. Their movement is constrained. Their reproduction
       is controlled through rape and forced pregnancy. Their labour and bodily outputs are extracted.
       Their lives end when productivity drops.</p>
       <p>That is slavery in structure and function. “Livestock” is just a socially acceptable label for enslaved
       individuals.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["slavery", "property", "ownership", "livestock"],
     relatedArticles: ["4", "10"]
   },
   {
     id: "20",
     title: "Isn’t it offensive to compare animal rape and murder to human rape and murder?",
     excerpt: "The goal is not to rank victims but to classify actions accurately based on violation of autonomy.",
     content: `
       <p>The goal is not to rank victims. The goal is to classify actions accurately.</p>
       <p>Rape is wrong because it violates bodily autonomy and consent. Murder is wrong because it
       destroys a sentient life that values its own existence. Slavery is wrong because it turns individuals
       into property.</p>
       <p>When those same violations are done to animals, the moral categories do not change. The
       discomfort people feel is often not about the comparison being inaccurate. It is about recognising
       that what is normalised is, in fact, atrocity.</p>
     `,
     date: "2025-04-26",
     category: "myths",
     tags: ["comparison", "moral-consistency", "speciesism", "definitions"],
     relatedArticles: ["1", "2"]
   },
   {
     id: "21",
     title: "What is wrong with zoos?",
     excerpt: "Zoos are systems of slavery and lifelong imprisonment where lives are reduced to exhibit value.",
     content: `
       <p>Zoos are systems of slavery and lifelong imprisonment.</p>
       <p>Animals are captured or bred into confinement, removed from their natural social structures, and
       displayed for human entertainment. Their movement, reproduction, and daily activity are entirely
       controlled. They cannot leave. They cannot refuse. Their lives are reduced to exhibit value.</p>
       <p>In human terms, forcibly confining sentient individuals, restricting their movement, and displaying
       them for public viewing would be recognised as slavery and incarceration without crime. The
       ethical category does not change because the prisoners are nonhuman.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["zoos", "captivity", "entertainment", "confinement"],
     relatedArticles: ["22", "25"]
   },
   {
     id: "22",
     title: "What is wrong with places like SeaWorld and marine parks?",
     excerpt: "Marine parks are a form of extreme captivity where animals are held in spaces fractions of their natural range.",
     content: `
       <p>Marine parks are a form of extreme captivity and coercive confinement.</p>
       <p>Marine animals are held in spaces that are orders of magnitude smaller than their natural ranges.
       They are forced to perform behaviours for food, subjected to reproductive control, and separated
       from family groups. Psychological distress, abnormal behaviour, and early death are well
       documented.</p>
       <p>Holding sentient beings in artificial tanks, forcing performance under deprivation, and controlling
       reproduction for profit meets the moral definition of slavery. Entertainment does not neutralise
       coercion.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["marine-parks", "seaworld", "captivity", "entertainment"],
     relatedArticles: ["21", "25"]
   },
   {
     id: "23",
     title: "What is wrong with animal rides, such as elephants, horses, or camels?",
     excerpt: "Animal rides rely on physical domination and learned helplessness. Animals are broken through fear.",
     content: `
       <p>Animal rides rely on physical domination and learned helplessness.</p>
       <p>Animals are broken through pain, fear, and restraint so they submit to carrying humans. Tools and
       methods are used to suppress resistance and enforce compliance. The animal’s body is treated as
       transport equipment.</p>
       <p>In human terms, forcing individuals to carry others under threat or pain would be recognised as
       enslavement and forced labour. The animal’s inability to consent makes the act inherently
       exploitative.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["animal-rides", "tourism", "exploitation", "domination"],
     relatedArticles: ["24", "25"]
   },
   {
     id: "24",
     title: "What is wrong with using animals as beasts of burden?",
     excerpt: "Beasts of burden are subjected to forced labour under ownership. Productivity overrides welfare.",
     content: `
       <p>Beasts of burden are subjected to forced labour under ownership.</p>
       <p>Animals are made to carry loads, pull vehicles, or perform exhausting work without choice, fair
       rest, or autonomy. Injury, overwork, and premature death are common because productivity
       overrides welfare.</p>
       <p>This is slavery in structure. Ownership, compulsory labour, disposability, and lack of consent define
       the system. Calling it work does not change the fact that it is coerced.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["working-animals", "forced-labour", "slavery", "exploitation"],
     relatedArticles: ["23", "19"]
   },
   {
     id: "25",
     title: "What is wrong with circuses that use animals?",
     excerpt: "Circuses rely on coercion, confinement, and psychological control. Compliance is enforced, not chosen.",
     content: `
       <p>Circuses rely on coercion, confinement, and psychological control.</p>
       <p>Animals are trained through deprivation and punishment to perform unnatural behaviours. They are
       transported constantly, kept in cramped enclosures, and denied stable social environments.
       Compliance is enforced, not chosen.</p>
       <p>Forcing sentient beings to perform under threat, while confining them and profiting from their
       display, is exploitation by definition. In human contexts, this would be recognised as abuse and
       enslavement.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["circus", "entertainment", "abuse", "training"],
     relatedArticles: ["21", "22"]
   },
   {
     id: "26",
     title: "What is wrong with breeding animals for pets?",
     excerpt: "Pet breeding involves reproductive exploitation and commodification. Mothers and babies are treated as inventory.",
     content: `
       <p>Pet breeding involves reproductive exploitation and commodification.</p>
       <p>Animals are selectively bred, forcibly mated, or otherwise manipulated to produce offspring for
       sale. Their reproductive systems are controlled for profit. Mothers and babies are treated as
       inventory. Many are discarded when demand drops or when defects appear.</p>
       <p>Non-consensual control of reproduction for commercial gain is sexual exploitation. Turning sentient
       beings into products begins with treating their bodies as tools, not as their own.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["pets", "breeding", "commodification", "adoption"],
     relatedArticles: ["4", "19"]
   },
   {
     id: "27",
     title: "Wouldn’t “farmed animals” go extinct if they were not bred into existence?",
     excerpt: "If animals are not bred into existence, none of them can be exploited. Non-existence has no victim.",
     content: `
       <p>If animals are not bred into existence, none of them can be exploited.</p>
       <p>Exploitation requires a subject. Exploitation, rape, confinement, forced labour, and killing harm
       existing sentient individuals who have interests, experiences, and a will to live. Non-existence has
       no subject and therefore no victim. No individual is deprived or wronged by never being created.</p>
       <p>So-called “farmed animals” are not natural populations facing accidental disappearance. They are
       intentionally produced through controlled breeding to be used, confined, sexually violated, and
       killed. Ending that breeding does not harm animals. It prevents animals from being created into
       guaranteed systems of violence.</p>
       <p>Extinction is not inherently immoral. It is a normal part of biological history. What is morally
       relevant is whether sentient individuals are being deliberately brought into existence for the purpose
       of having their bodies used and their interests overridden.</p>
     `,
     date: "2025-04-26",
     category: "myths",
     tags: ["extinction", "breeding", "ethics", "population-control"],
     relatedArticles: ["10", "19"]
   },
   {
     id: "28",
     title: "What about killing plants or other life forms? Isn’t killing still killing?",
     excerpt: "Killing only has moral significance when there is a subject to harm. Plants lack sentience.",
     content: `
       <p>No. Killing only has moral significance when there is someone who can be exploited or
       intentionally harmed.</p>
       <p>Ethics is concerned with being unjust to subjects. A subject exists only if there is sentience,
       meaning the capacity to have subjective experience such as pain, fear, or distress. Without
       sentience, there is no suffering, no interest in continued existence, and therefore no victim.</p>
       <p>There is no credible scientific evidence that plants or other non-animal life forms are sentient.
       All kingdoms of life have defense mechanisms, but defense does not equal sentience.</p>
       <p>What is missing in plants, fungi, bacteria, and protists is a structure capable of generating subjective experience.
       They do not have brains, neurons, synapses, or a central nervous system. They do not possess nociception.
       Animals are different. The animal kingdom is the only kingdom for which there is strong empirical evidence of sentience.</p>
       <p>Animal liberation is therefore not about life in the abstract. It is about sentient life.</p>
     `,
     date: "2025-04-26",
     category: "research",
     tags: ["plants", "sentience", "biology", "pain-receptors"],
     relatedArticles: ["7", "29"]
   },
   {
     id: "29",
     title: "Isn’t the capacity to feel pain a spectrum? If some animals feel less pain, can we use them?",
     excerpt: "Pain varies, but rights are not scaled by suffering. Sentience is the threshold, not the degree of pain.",
     content: `
       <p>Yes, pain and suffering are very likely spectra. But this does not weaken the case for animal rights.
       It makes the logic clearer.</p>
       <p>Pain varies widely even within the same species. Humans differ in pain tolerance. None of this changes whether an act of
       violence is wrong. Ethics does not scale rights based on how much pain someone feels or how well they cope. If it did,
       the most resilient individuals would deserve fewer protections.</p>
       <p>This is why sentience, not degree of suffering, is the relevant threshold. Sentience establishes the
       capacity to be harmed at all. Once that capacity exists, the individual has morally significant
       interests that must not be overridden.</p>
       <p>The ethical question should not be how much a being suffers. The ethical question must be whether
       the being has the potential to be victimised.</p>
     `,
     date: "2025-04-26",
     category: "ethics",
     tags: ["pain-spectrum", "sentience", "moral-threshold", "rights"],
     relatedArticles: ["7", "28"]
   },
   {
     id: "30",
     title: "What about intelligence? Aren’t animals less intelligent than humans?",
     excerpt: "Intelligence is not a valid criterion for moral worth. Rights protect the vulnerable, not just the clever.",
     content: `
       <p>No. Using intelligence as a criterion for moral worth is both logically incoherent and ethically
       dangerous.</p>
       <p>First, intelligence is not a single, objective property. But even if it could be measured precisely, it would still fail as a moral criterion.
       Human infants and cognitively disabled individuals have less cognitive ability than many adults, yet we do not exploit them.</p>
       <p>If intelligence determined moral worth, rights would scale with cognitive performance, leading to ableism.
       Moral status does not come from being smart enough. It comes from sentience.</p>
       <p>A being does not need to solve equations to be wronged. They need only to be capable of experiencing the wrong.</p>
     `,
     date: "2025-04-26",
     category: "myths",
     tags: ["intelligence", "ableism", "moral-worth", "cognition"],
     relatedArticles: ["6", "7"]
   }
];