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
    title: 'Why Taste Is Not an Excuse: Unpacking the Ethics of Eating Animals',
    excerpt: 'This article explores the common justification of taste in consuming animal products and explains why the pleasure of taste cannot morally outweigh the suffering and death of animals.',
    content: `
    "But I love the taste!" is a common argument used to justify eating animal-derived products. Yet this reasoning fails under even basic ethical scrutiny. Choosing taste over life reflects a deep moral inconsistency that deserves examination.
    
    <h3>The Problem with Taste-Based Justifications</h3>
    
    <p>Imagine justifying any act of violence simply because it brings pleasure. We’d never accept it in the case of harming humans—so why do we permit it when it comes to animals? Pleasure, comfort, or tradition does not morally justify killing sentient beings.</p>
    
    <ul>
      <li><strong>Suffering is real:</strong> Animals used for food suffer immensely—emotionally, physically, and mentally.</li>
      <li><strong>Unnecessary harm:</strong> In modern society, most people have access to plant-based options, making animal suffering unnecessary.</li>
      <li><strong>Discrimination by species:</strong> Loving some animals while exploiting others based on taste is speciesism.</li>
    </ul>
    
    <h3>What About Culture and Upbringing?</h3>
    
    <p>Culture shapes our habits, but it doesn’t make them morally right. Slavery, child labor, and other atrocities were once culturally accepted too. Progress involves questioning the norms and moving toward a more compassionate society.</p>
    
    <h3>Isn’t It Natural?</h3>
    
    <p>Nature isn’t always a moral guide. Lions kill—but lions also don’t build hospitals or have moral codes. Humans have the capacity for ethics and empathy; we should use it to reduce suffering, not justify it.</p>
    
    <h3>Living with Integrity</h3>
    
    <p>If we can live healthy lives without hurting animals, why wouldn’t we choose that? It’s not about perfection—it’s about aligning our actions with our values of compassion and fairness.</p>
    
    <p>This isn’t about a diet. It’s about choosing kindness over cruelty, and challenging a system that treats lives as commodities. Taste should never come at the cost of suffering. Life is greater than flavor.</p>
    
    `,
    image: 'https://images.pexels.com/photos/1426713/pexels-photo-1426713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    author: 'Prithvi S',
    date: '2025-04-24',
    category: 'ethics',
    tags: ['ethics', 'animal rights', 'taste vs morality', 'speciesism'],
    relatedArticles: ['2', '3']
    },
    {
      id: "2",
      title: "But Lions Eat Meat: Why Nature Is Not a Moral Guide",
      excerpt: "Many justify eating animals by pointing to carnivores like lions. But using wild animal behavior to excuse human cruelty is a flawed argument that ignores our moral agency and capacity for compassion.",
      content: `
        <p>"Lions eat meat" is often thrown into conversations about animal rights—as if this one fact about nature justifies the systematic, large-scale exploitation and slaughter of animals by humans. But the reality is: just because something happens in nature doesn't make it ethical for humans to do.</p>
    
        <h3>Appeal to Nature: A Logical Fallacy</h3>
        <p>Just because something exists in the natural world doesn't mean it's morally acceptable. Lions also kill the weak, forcefully mate, and eat their own cubs under certain conditions. Should we mimic all of that? Obviously not. The "appeal to nature" is a fallacy—it assumes that what is natural is automatically good or just.</p>
    
        <h3>We Are Not Lions</h3>
        <ul>
          <li><strong>Lions are obligate carnivores:</strong> They must eat meat to survive. Humans are not.</li>
          <li><strong>Lions lack moral agency:</strong> They do not have the ability to make ethical choices or evaluate the morality of their actions. We do.</li>
          <li><strong>Humans have alternatives:</strong> We can thrive on plant-based diets and make informed, compassionate decisions. Lions cannot.</li>
        </ul>
    
        <p>Comparing ourselves to lions is convenient only when it suits our desires—but we don’t copy lions in any other part of life. We don’t walk on all fours, we don’t live without clothing, and we don’t kill with our bare hands and teeth. So why cherry-pick their eating habits as justification?</p>
    
        <h3>Moral Responsibility Comes with Power</h3>
        <p>What makes us human is our ability to choose. If we truly value life, compassion, and justice, we must act accordingly. Using nature as an excuse only reflects our unwillingness to confront our own role in the suffering of others.</p>
    
        <h3>Creating a Humane Culture</h3>
        <p>Ethical progress requires us to move beyond survival instincts and primal comparisons. We are capable of compassion, logic, and foresight. That’s what separates us from wild predators—and it’s time we lived like it.</p>
    
        <p>So no, the fact that a lion eats meat does not justify human violence against animals. We are not lions. We are humans with moral responsibility—and it’s time we started acting like it.</p>
      `,
      image: "https://images.pexels.com/photos/257577/pexels-photo-257577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      author: "Prithvi S",
      date: "2025-04-25",
      category: "ethics",
      tags: ["appeal to nature", "animal ethics", "moral reasoning", "carnivores"],
      relatedArticles: ["1", "3"]
    },    
    {
      id: "3",
      title: "The Cost of Comfort: Why Convenience Is Not an Excuse to Harm Animals",
      excerpt: "Many argue that it’s simply easier to buy and consume animal products than to change. But convenience should never justify cruelty. This article unpacks the hidden costs of our daily habits and offers a more conscious path forward.",
      content: `
      “It’s too difficult,” “It’s not practical,” or “I don’t have time”—these are the common refrains when people are asked why they continue supporting industries that exploit animals. The truth? Convenience has become a moral shield we hide behind.
      <h3>Comfort vs. Conscience</h3>
      <p>Most people don’t support cruelty when it’s laid bare. Yet when it's hidden behind packaging and traditions, we turn a blind eye—because change feels inconvenient. But discomfort is a poor excuse when weighed against the life of a sentient being.</p>
      
      <ul>
        <li><strong>Convenience is not neutrality:</strong> Buying what’s easily available sustains systems of exploitation.</li>
        <li><strong>We make inconvenient choices every day:</strong> From recycling to locking our doors—yet when it comes to food, suddenly change is “too hard.”</li>
        <li><strong>Alternatives exist:</strong> There are now more affordable and accessible plant-based options than ever before.</li>
      </ul>
      
      <h3>But Isn’t Life About Enjoyment?</h3>
      <p>Absolutely—but not at the cost of another’s suffering. Joy should not be sourced from someone else’s pain. Convenience is about *you*. Animal agriculture is about *them*. The balance is unfair by design.</p>
      
      <h3>Change Is a Process, Not a Perfection</h3>
      <p>No one is asking for perfect purity. But every step toward a more compassionate life matters. Swapping cow milk for oat milk, skipping meat once a week—it all adds up. It all counts.</p>
      
      <p>And if we can make ethical choices with minimal effort, why wouldn’t we? Injustice often survives not because of cruelty, but because of indifference masked as inconvenience.</p>
      
      <h3>We Can Do Better</h3>
      <p>Comfort should never come at the cost of conscience. If we claim to care, we must be willing to act—even if it means stepping out of our comfort zones.</p>
      
      <p>After all, true progress begins where excuses end.</p>
      `,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      author: "Prithvi S",
      date: "2025-04-25",
      category: "ethics",
      tags: ["convenience", "comfort", "animal rights", "ethical living"],
      relatedArticles: ["1", "2"]
      },
      {
        id: "4",
        title: "Why Eating Animals Is Not Just a Personal Choice",
        excerpt: "People often defend their consumption of animal products as a personal choice. But when that choice causes direct harm to others, it ceases to be personal. This article unpacks why eating animals is a moral issue, not a private one.",
        content: `
          <p>"It’s my personal choice"—this is a line often used to shut down conversations about animal rights. But here’s the problem: choices that harm others aren’t personal. They’re moral decisions with victims, consequences, and accountability.</p>
      
          <h3>Understanding the Scope of Harm</h3>
          <p>Animal agriculture is not a private act. It’s a global industry that kills billions of animals each year, devastates ecosystems, and exploits workers. When someone buys meat, dairy, or eggs, they’re financially supporting all of that. It’s not about what happens in someone’s kitchen—it’s about what happens to someone else because of it.</p>
      
          <ul>
            <li><strong>Animals are sentient:</strong> They feel pain, fear, and joy. They are not ingredients—they are individuals.</li>
            <li><strong>There is a victim:</strong> A "personal choice" that involves violence and death is not benign. It has consequences—especially for those who cannot consent.</li>
            <li><strong>Freedom has limits:</strong> Your right to swing your fist ends where another’s nose begins. The same goes for food choices that harm others.</li>
          </ul>
      
          <h3>The Misuse of 'Freedom'</h3>
          <p>Claiming "personal choice" in the context of animal exploitation is like claiming "freedom" to pollute rivers or cut down forests. We all live in an interconnected world, and our actions ripple outward. True freedom respects the rights of others—including nonhuman animals.</p>
      
          <h3>What If Someone Told You Their 'Choice' Was to Kick a Dog?</h3>
          <p>Most people would be horrified. Why? Because that choice harms an innocent being. Now ask: why does a cow, chicken, or pig deserve less protection? Why is their suffering dismissed as someone else’s business?</p>
      
          <h3>Compassion Is a Collective Responsibility</h3>
          <p>We have the power—and the responsibility—to shape a kinder world. That starts with recognizing that the most common excuse for cruelty, "it’s my choice," is not a justification. It’s a distraction from the real issue: suffering.</p>
      
          <p>If our choices harm others, we should re-evaluate them. Because in the end, the lives of others are never just our business.</p>
        `,
        image: "https://images.pexels.com/photos/1162619/pexels-photo-1162619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        author: "Prithvi S",
        date: "2025-04-25",
        category: "ethics",
        tags: ["personal choice", "animal rights", "moral responsibility", "freedom and harm"],
        relatedArticles: ["1", "3", "5"]
      },
      {
        id: "5",
        title: "“Even Plants Feel!”: Debunking the False Equivalence Between Plants and Animals",
        excerpt: "Many argue that since plants may respond to stimuli, eating them is just as cruel as eating animals. But this claim misrepresents the science and serves as a deflection from genuine moral responsibility.",
        content: `
        “Plants feel pain too” is a popular comeback used to downplay the ethics of eating animals. It’s usually brought up not out of concern for plants—but to try and trap vegans in a moral contradiction. Let’s be clear: the argument is both scientifically flawed and morally misleading.
        <h3>Plants Do Not Feel Pain</h3>
        <ul>
          <li><strong>No nervous system:</strong> Pain, as we understand it, requires a brain and a central nervous system. Plants have none.</li>
          <li><strong>Responses vs. experiences:</strong> Plants can respond to stimuli (e.g., sunlight, touch), but this is not the same as *experiencing* pain.</li>
          <li><strong>Anthropomorphism:</strong> Assigning human-like traits to plants is not science—it’s a projection.</li>
        </ul>
        
        <h3>The Hypocrisy in the Argument</h3>
        <p>If one truly cared about minimizing plant harm, they would stop eating animals—because animal agriculture kills far more plants than plant-based diets do. For example, it takes up to 16 pounds of plants to produce 1 pound of beef.</p>
        
        <h3>Redirection, Not Reasoning</h3>
        <p>This argument doesn’t defend meat—it’s just a distraction from confronting animal suffering. Saying “plants feel too” doesn’t justify cutting a pig’s throat or stealing milk from a mother cow.</p>
        
        <h3>Focus on Sentience</h3>
        <p>Sentient beings—those who can suffer—deserve moral consideration. Until plants show conscious experience, comparing them to animals dilutes real conversations about ethics and suffering.</p>
        
        <p>In short: If you’re using plants to avoid accountability for animal cruelty, you’re not defending plants. You’re defending your appetite.</p>
        `,
        image: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        author: "Prithvi S",
        date: "2025-04-25",
        category: "myths",
        tags: ["plant sentience", "vegan myths", "animal vs plant ethics"],
        relatedArticles: ["1", "2", "3"]
        },
        {
          id: "6",
          title: "Animal Rights Is Not a Trend and Not Against Any Religion: Why This Is Not ‘Just about Caste’",
          excerpt: "Animal rights is not a caste issue or a modern fad—it’s a moral stance against cruelty. This article clarifies that advocating for animals is not anti-religion or anti-tradition, but simply pro-compassion.",
          content: `
            <p>Animal rights activism is often misunderstood or misrepresented as a trend, a caste-based agenda, or even an attack on religious freedom. But at its core, the movement is not against any religion, caste, or community. It is against one thing only: cruelty.</p>
        
            <h3>It’s Not About Caste—It’s About Compassion</h3>
            <p>Animal cruelty exists across all castes, regions, and communities. Standing up for animals is a universal moral issue—not a political or caste-driven one. Saying no to cruelty is not a privilege—it’s a responsibility.</p>
        
            <h3>Religious Freedom Does Not Mean Freedom to Harm</h3>
            <ul>
              <li><strong>Respect all beliefs:</strong> You are free to follow every part of your tradition—prayers, clothing, festivals, community rituals—without harming animals.</li>
              <li><strong>Reject only the cruelty:</strong> The call is not to abandon your religion, but to leave behind the violent parts that involve killing sentient beings.</li>
              <li><strong>True spirituality uplifts:</strong> Compassion is at the heart of most religious teachings. Mercy, kindness, and non-violence are not foreign concepts—they are foundational values.</li>
            </ul>
        
            <h3>Animal Rights Is Not a Trend</h3>
            <p>This is not some new-age lifestyle choice or internet fad. People have spoken up for animals for centuries. Ancient sages, philosophers, and saints across cultures have recognized the moral duty to protect animals from harm.</p>
        
            <h3>Support Ethical Reform, Not Cultural Erasure</h3>
            <p>It’s possible to evolve without disrespecting tradition. Culture is not static. We no longer practice child marriage or animal sacrifices in many places—why? Because morality evolved. Similarly, ending animal slaughter isn’t an attack on culture; it’s progress.</p>
        
            <h3>Choose the Best of Tradition</h3>
            <p>Embrace your values, your heritage, your rituals—but do so without killing. Keep your fasts, your sacred threads, your language, your festivals. Just remove the violence. That is the only ask.</p>
        
            <p>This is not about turning people into something they’re not. It’s about helping them become the best version of who they already are—compassionate, thoughtful, and fair.</p>
        
            <p>So no, animal rights is not a caste agenda. It is not anti-religion. It is simply pro-kindness. And if we want to be proud of our cultures, let’s ensure cruelty is not part of that pride.</p>
          `,
          image: "https://images.pexels.com/photos/18793807/pexels-photo-18793807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          author: "Prithvi S",
          date: "2025-04-25",
          category: "culture",
          tags: ["animal rights", "religion", "compassion", "caste", "tradition"],
          relatedArticles: ["1", "3", "4"]
        }        
];