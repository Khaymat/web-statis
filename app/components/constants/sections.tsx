import { Badge } from "../ui/badge"

export const sections = [
  {
    id: "hero",
    subtitle: (
      <Badge variant="outline" className="text-pink-600 border-pink-300 bg-pink-50">
        bumikaumwanita
      </Badge>
    ),
    title: "Your Journey to Success",
    description: "Guidance, counseling, and motivation for your thesis adventure",
    showButton: true,
    buttonText: "Explore Resources",
  },
  {
    id: "about",
    title: "About This Space",
    content:
      "A warm, supportive community dedicated to helping you navigate your thesis journey with confidence, clarity, and compassion.",
  },
  {
    id: "articles",
    title: "Articles & Resources",
    content: "Discover insightful articles about thesis guidance, counseling techniques, and academic wellness.",
    showButton: true,
    buttonText: "Read Articles",
  },
  {
    id: "quotes",
    title: "From Ur X",
    content: "Motivational quotes and encouragement to inspire Chai through every step of the thesis journey.",
  },
  {
    id: "join",
    title: "Start Your Journey",
    content: "Ready to embrace your thesis journey? Let's grow together with guidance and support.",
    showButton: true,
    buttonText: "Get Started",
  },
]
