import type { Course, FAQItem, NavLink, PricingPlan, Service, Testimonial, BlogPost } from "@/types";

export const SITE_CONFIG = {
  name: "Vishal Nama",
  title: "Programming Tutor in Jaipur",
  tagline: "Learn. Build. Grow.",
  email: "vishalnama207@gmail.com",
  whatsapp: "918302159850",
  whatsappMessage: "Hi Vishal, I want to learn programming!",
  location: "Jaipur, Rajasthan, India",
  availability: "Flexible hours — reach out to schedule",
  experience: "3.5",
  technologies: "10",
  teachingSince: "2019",
  siteUrl: "https://codewithvishal.vercel.app",
  github: "https://github.com/v1-coder-max",
  linkedin: "https://www.linkedin.com/in/vishal-kumar-nama-62ab601a3/",
  youtube: "",
  twitter: "",
  ogImage: "/Photo.png",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    icon: "Code2",
    title: "Programming Languages",
    description: "Master Python, C, C++, Java, and JavaScript from the ground up with hands-on exercises.",
    topics: ["Python", "C", "C++", "Java", "JavaScript"],
  },
  {
    icon: "Globe",
    title: "Web Development",
    description: "From HTML/CSS basics to full-stack apps with React, Next.js, and Node.js.",
    topics: ["HTML/CSS", "React", "Next.js", "Node.js", "REST APIs"],
  },
  {
    icon: "BrainCircuit",
    title: "DSA & Problem Solving",
    description: "Arrays, Trees, Graphs, Dynamic Programming — build the skills to ace technical interviews.",
    topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "DP"],
  },
  {
    icon: "Briefcase",
    title: "Interview Preparation",
    description: "Mock interviews, resume review, and LeetCode strategy tailored for top companies.",
    topics: ["Mock Interviews", "LeetCode", "Resume Review", "System Design"],
  },
  {
    icon: "Rocket",
    title: "Project Mentoring",
    description: "Build real-world projects for your portfolio that stand out to recruiters.",
    topics: ["Portfolio Projects", "Code Reviews", "Best Practices", "Deployment"],
  },
  {
    icon: "MapPin",
    title: "Offline Classes (Jaipur)",
    description: "In-person one-on-one sessions available across Jaipur for a focused learning experience.",
    topics: ["In-person", "Flexible Timing", "Jaipur", "All Topics"],
  },
];

export const COURSES: Course[] = [
  {
    icon: "Terminal",
    title: "Python Programming",
    level: "Beginner",
    description: "Learn Python from scratch — syntax, OOP, file handling, and real-world projects.",
    topics: ["Variables & Data Types", "Functions & OOP", "File Handling", "Libraries", "Mini Projects"],
    color: "#3B82F6",
  },
  {
    icon: "Cpu",
    title: "C & C++ Fundamentals",
    level: "Beginner",
    description: "Build a strong foundation in C and C++ — perfect for competitive programming.",
    topics: ["Pointers", "Memory Management", "STL", "OOP in C++", "Competitive Coding"],
    color: "#8B5CF6",
  },
  {
    icon: "Coffee",
    title: "Java Programming",
    level: "Intermediate",
    description: "Master Java OOP, collections, multithreading, and Spring Boot basics.",
    topics: ["OOP", "Collections", "Multithreading", "Exception Handling", "Spring Boot"],
    color: "#F59E0B",
  },
  {
    icon: "Zap",
    title: "JavaScript & TypeScript",
    level: "Intermediate",
    description: "From DOM manipulation to modern ES6+, async patterns and TypeScript fundamentals.",
    topics: ["ES6+", "Async/Await", "DOM", "TypeScript", "Node.js Basics"],
    color: "#EAB308",
  },
  {
    icon: "Globe",
    title: "Full-Stack Web Development",
    level: "Advanced",
    description: "End-to-end web development with React, Next.js, and Node.js/Express.",
    topics: ["React Hooks", "Next.js App Router", "REST & GraphQL", "Databases", "Deployment"],
    color: "#4F46E5",
  },
  {
    icon: "BrainCircuit",
    title: "Data Structures & Algorithms",
    level: "Intermediate",
    description: "Systematic DSA prep for placements and competitive programming with 200+ problems.",
    topics: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "Greedy", "Backtracking"],
    color: "#EF4444",
  },
  {
    icon: "Briefcase",
    title: "Interview Preparation",
    level: "Advanced",
    description: "Structured prep plan to land your dream job at top tech companies.",
    topics: ["Mock Interviews", "Resume Review", "System Design", "Behavioral Rounds", "LeetCode Strategy"],
    color: "#10B981",
  },
  {
    icon: "Layers",
    title: "Web Dev Fundamentals",
    level: "Beginner",
    description: "Start your web journey with HTML5, CSS3, Flexbox, Grid, and responsive design.",
    topics: ["HTML5", "CSS3", "Flexbox/Grid", "Bootstrap", "Responsive Design"],
    color: "#F97316",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arjun Sharma",
    topic: "Full-Stack Web Development",
    rating: 5,
    text: "Vishal sir has an incredible way of explaining complex concepts. I went from knowing nothing about React to building full-stack apps in just 3 months. Landed my first dev job right after!",
    location: "Jaipur",
  },
  {
    name: "Priya Agarwal",
    topic: "Python & DSA",
    rating: 5,
    text: "The DSA sessions with Vishal sir were a game-changer for my placement prep. His problem-solving approach is very structured and he provides excellent study material. Highly recommend!",
    location: "Delhi (Online)",
  },
  {
    name: "Rohan Mehta",
    topic: "Interview Prep",
    rating: 5,
    text: "I cracked interviews at 2 MNCs after just 2 months of mock interviews with Vishal sir. His feedback is very detailed and he knows exactly what interviewers look for.",
    location: "Pune (Online)",
  },
  {
    name: "Sneha Verma",
    topic: "JavaScript & React",
    rating: 5,
    text: "Best programming tutor in Jaipur, hands down. Very patient, explains concepts multiple times if needed, and always available on WhatsApp for doubt clarification. 10/10!",
    location: "Jaipur",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Trial Lesson",
    price: "Free",
    period: "1 session",
    description: "Try before you commit — a free session to see if we're a good fit.",
    features: [
      "1-on-1 session with Vishal",
      "Skill & goal assessment",
      "Personalised learning roadmap",
      "No commitment required",
    ],
    popular: false,
    cta: "Book Free Trial",
  },
  {
    name: "Per Hour",
    price: "₹200",
    period: "per hour",
    description: "Pay as you go — book whenever you need help, no strings attached.",
    features: [
      "60-minute 1-on-1 session",
      "Any topic of your choice",
      "Session notes & code files",
      "WhatsApp doubt support",
      "Session recording available",
      "Flexible scheduling",
    ],
    popular: false,
    cta: "Book a Session",
  },
  {
    name: "Pro — 1 Month",
    price: "₹3,000",
    period: "per month",
    description: "20 sessions a month — structured learning at the best value.",
    features: [
      "20 sessions (60 min each)",
      "Save ₹1,000 vs per-hour rate",
      "Structured learning plan",
      "Unlimited WhatsApp support",
      "Session notes & resources",
      "Project mentoring included",
    ],
    popular: true,
    cta: "Get Started",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you teach online?",
    answer: "Yes! I offer online sessions via Google Meet or Zoom for students across India and globally. All you need is a laptop/PC and stable internet.",
  },
  {
    question: "Are you available for in-person classes in Jaipur?",
    answer: "Absolutely! I offer offline 1-on-1 classes at a convenient location in Jaipur. Contact me on WhatsApp to schedule.",
  },
  {
    question: "What age groups do you teach?",
    answer: "I teach students from Class 9 onwards — school students, college students, working professionals, and career switchers are all welcome.",
  },
  {
    question: "Do you provide study material and notes?",
    answer: "Yes, I provide handcrafted notes, code snippets, reference sheets, and curated problem sets for every topic we cover.",
  },
  {
    question: "Can I record the sessions?",
    answer: "Yes, with prior consent you can record the sessions for revision. I also share session summaries and code files after every class.",
  },
  {
    question: "How long does it take to learn web development?",
    answer: "With consistent effort and 1-on-1 guidance, most students can become job-ready in 4–6 months. For specific technologies like React, 6–8 weeks is typical.",
  },
  {
    question: "Do you help with college project assignments?",
    answer: "Yes! I help with understanding concepts behind college projects, guiding you to build them yourself — this builds real skills rather than just submitting work.",
  },
  {
    question: "What is the payment method?",
    answer: "I accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash for offline sessions. Advance payment is required to confirm sessions.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "top-10-dsa-patterns",
    title: "Top 10 DSA Patterns Every Programmer Must Know",
    excerpt: "Crack 80% of LeetCode problems by mastering these 10 recurring patterns. From sliding window to dynamic programming — learn to spot patterns instantly.",
    date: "2025-01-15",
    tags: ["DSA", "Algorithms", "Interview Prep"],
    readTime: "8 min read",
    content: `
# Top 10 DSA Patterns Every Programmer Must Know

Learning Data Structures and Algorithms doesn't have to be overwhelming. After solving hundreds of problems and studying what top companies actually test, I've identified 10 patterns that cover the majority of problems you'll encounter.

## 1. Sliding Window
Perfect for problems involving contiguous subarrays or substrings...

## 2. Two Pointers
Reduces O(n²) solutions to O(n) for sorted arrays...

## 3. Fast & Slow Pointers (Floyd's Cycle)
Detect cycles in linked lists efficiently...

## 4. Merge Intervals
Handle overlapping intervals in scheduling problems...

## 5. Cyclic Sort
Sort arrays containing numbers in a given range in O(n)...

## 6. In-place Reversal of Linked List
Reverse parts of a linked list without extra space...

## 7. Tree BFS & DFS
Breadth and depth first traversals — the backbone of tree problems...

## 8. Two Heaps
Balance two halves of a dataset dynamically...

## 9. Subsets (Backtracking)
Generate all permutations and combinations...

## 10. Dynamic Programming
Break problems into overlapping subproblems...

Master these patterns and you'll notice solutions to new problems much faster. Happy coding!
    `.trim(),
  },
  {
    slug: "how-i-learned-react-in-30-days",
    title: "How I Learned React in 30 Days (And How You Can Too)",
    excerpt: "A step-by-step roadmap I followed to go from JavaScript beginner to building full-stack React apps in just one month.",
    date: "2025-02-10",
    tags: ["React", "Web Development", "Learning"],
    readTime: "6 min read",
    content: `
# How I Learned React in 30 Days (And How You Can Too)

When I learned React as a working developer, I noticed most beginners make the same mistakes...

## Week 1: JavaScript Fundamentals First
Don't jump into React without solid JS foundations...

## Week 2: React Basics
- JSX and components
- Props and State
- Event handling
- Conditional rendering

## Week 3: Hooks Deep Dive
- useState and useEffect
- useContext for state management
- Custom hooks

## Week 4: Build Something Real
Theory without practice is useless. In the final week, build a complete project...

The key is consistency — even 2 hours a day beats marathon weekend sessions.
    `.trim(),
  },
  {
    slug: "python-for-beginners-jaipur",
    title: "Python for Beginners: Your First Step into Programming",
    excerpt: "Why Python is the perfect first language, especially for students in Jaipur and across India looking to start their programming journey.",
    date: "2025-03-05",
    tags: ["Python", "Beginners", "Programming"],
    readTime: "5 min read",
    content: `
# Python for Beginners: Your First Step into Programming

Python has become the go-to first programming language for a reason...

## Why Python?
- Readable syntax that reads like English
- Huge community and resources
- Versatile: web dev, AI/ML, automation, data science

## Setting Up Your Environment
Step-by-step setup for Windows, Mac, and Linux...

## Your First Python Program
\`\`\`python
print("Hello, Jaipur! 🚀")
name = input("What's your name? ")
print(f"Welcome to programming, {name}!")
\`\`\`

## What's Next?
After basics, explore libraries like NumPy, Pandas, and Flask...
    `.trim(),
  },
];
