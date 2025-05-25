export interface Technology {
  name: string;
  color: string;
  homePageUrl?: string;
  iconUrl?: string;
}

export const technologies: Record<string, Technology>
  = {
  React: {
    name: "React",
    color: "#61DBFB",
    homePageUrl: "https://reactjs.org/",
    iconUrl: "/react.svg"
  },
  Serverless: {
    name: "Serverless",
    color: "#FD5750",
    homePageUrl: "https://www.serverless.com/",
    iconUrl: "/serverless.svg"
  },
  Nextjs: {
    name: "Next.js",
    color: "#000000",
    homePageUrl: "https://nextjs.org/",
    iconUrl: "/nextjs.svg"
  },
  AWS: {
    name: "AWS",
    color: "#FF9900",
    homePageUrl: "https://aws.amazon.com/",
    iconUrl: "/amazonaws.svg"
  },
  MongoDB: {
    name: "MongoDB",
    color: "#47A248",
    homePageUrl: "https://www.mongodb.com/",
    iconUrl: "/mongodb.svg"
  },
  MySQL: {
    name: "MySQL",
    color: "#00718B",
    homePageUrl: "https://www.mysql.com/",
    iconUrl: "/mysql.svg"
  },
  PostgreSQL: {
    name: "PostgreSQL",
    color: "#336791",
    homePageUrl: "https://www.postgresql.org/",
    iconUrl: "/postgres.svg"
  },
  FullStack: { name: "Full Stack", color: "#FF6F61" },
  Authentication: {
    name: "Authentication",
    color: "#3A3A3A",
  },
  OAuth: {
    name: "OAuth",
    color: "#3C4A9F",
    homePageUrl: "https://oauth.net/2/",
  },
  Microservices: {
    name: "Microservices",
    color: "#2E83C6",
  },
  Angular: {
    name: "Angular",
    color: "#DD0031",
    homePageUrl: "https://angular.io/",
    iconUrl: "/angular.svg"
  },
  dotnet: {
    name: ".NET",
    color: "#512BD4",
    homePageUrl: "https://dotnet.microsoft.com/",
    iconUrl: "/dotnet.svg"
  },
  ResponsiveDesign: {
    name: "Responsive Design",
    color: "#2C3E50",
  },
  TypeScript: {
    name: "TypeScript",
    color: "#3178C6",
    homePageUrl: "https://www.typescriptlang.org/",
    iconUrl: "/typescript.svg"
  },  TailwindCSS: {
    name: "Tailwind CSS",
    color: "#38B2AC",
    homePageUrl: "https://tailwindcss.com/",
    iconUrl: "/tailwind.svg"
  },
  ShadcnUI: {
    name: "Shadcn/UI",
    color: "#000000",
    homePageUrl: "https://ui.shadcn.com/",
  },
  AI: { name: "AI", color: "#FF6F00" },
  ChatGPT: {
    name: "ChatGPT",
    color: "#5A67D8",
    homePageUrl: "https://openai.com/",
    iconUrl: "/openai.svg"
  },
  Replicate: {
    name: "Replicate",
    color: "#2D3748",
    homePageUrl: "https://replicate.com/",
  },
  Nodejs: {
    name: "Node.js",
    color: "#8CC84B",
    homePageUrl: "https://nodejs.org/",
    iconUrl: "/nodejs.svg"
  },
  Bulma: { name: "Bulma", color: "#00D1B2", homePageUrl: "https://bulma.io/" },
  EFCore: {
    name: "EF Core",
    color: "#8E2BA9",
    homePageUrl: "https://github.com/dotnet/efcore",
  },
  Prisma: {
    name: "Prisma",
    color: "#0C344B",
    homePageUrl: "https://www.prisma.io/",
  },
  PublicAPI: {
    name: "Public API",
    color: "#2ECC71",
  },
  ServerStateManagement: {
    name: "Server State Management",
    color: "#2cd343",
  },
  ContentUpload: {
    name: "Content Upload",
    color: "#31a1ce",
  },
  DarkMode: {
    name: "Dark Mode",
    color: "#2c2c2c",
  },
  Stripe: {
    name: "Stripe Payment Gateway",
    color: "#6772E5",
    homePageUrl: "https://stripe.com/",
    iconUrl: "/stripe.svg"
  },
  LangChain: {
    name: "LangChain",
    color: "#2ECC40",
    homePageUrl: "https://www.langchain.com/",
  },
  Unity: {
    name: "Unity",
    color: "#000000",
    homePageUrl: "https://unity.com/",
    iconUrl: "/unity.svg"
  },
  Deno: {
    name: "Deno",
    color: "#000000",
    homePageUrl: "https://deno.land/",
    iconUrl: "/deno.svg"
  },
  Bunjs: {
    name: "Bun.js",
    color: "#FBF0DF",
    homePageUrl: "https://bun.sh/",
    iconUrl: "/bun.svg"
  },
  Analytics: {
    name: "Analytics",
    color: "#4285F4",
  },
  GenerativeAI: {
    name: "Generative AI",
    color: "#9B30FF",
  },
  StableDiffusion: {
    name: "Stable Diffusion",
    color: "#EC4899",
    homePageUrl: "https://stability.ai/",
    iconUrl: "/stable-diffusion.svg"
  },
  Python: {
    name: "Python",
    color: "#3776AB",
    homePageUrl: "https://www.python.org/",
    iconUrl: "/python.svg"
  },
  Go: {
    name: "Go",
    color: "#00ADD8",
    homePageUrl: "https://go.dev/",
    iconUrl: "/go.svg"
  },
  WebGPU: {
    name: "WebGPU",
    color: "#7B3FE4",
    homePageUrl: "https://www.w3.org/TR/webgpu/",
  },
  Multiplayer: {
    name: "Multiplayer",
    color: "#4C51BF",  // Deep indigo color representing connectivity
  },
  Docker: {
    name: "Docker",
    color: "#2496ED",
    homePageUrl: "https://www.docker.com/",
    iconUrl: "/docker.svg"
  },
  DockerCompose: {
    name: "Docker Compose",
    color: "#1D76BC",
    homePageUrl: "https://docs.docker.com/compose/",
    iconUrl: "/docker-compose.svg"
  },
  WebSockets: {
    name: "WebSockets",
    color: "#4F46E5", // Deep indigo representing real-time connectivity
    homePageUrl: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
  },
};

// Removed TechIcon type and techIcons array as they are now merged into the technologies object
