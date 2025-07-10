import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["HTML", "React", "Next.js", "TailwindCSS", "Zustand" ,"Ethers.JS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "WebSocket", "Pub/Sub", "gRPC" ,"tRpc"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "Amazon Web Services (AWS)", "GCP", "Cloudflare" ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "Redis", "MySQL"],
  },
  {
    category: "Others",
    skills: ["Git", "GitHub", "Turborepo", "Linux" ,"HLD System Design"],
  },
  {
    category: "Web3",
    skills: ["Clarity", "Stacks Blockchain" ,"Solidity" ,"Ethereum Blockahin"],
  }
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
