import Link from "next/link";
import Team from './Team'
export default function Teams() {
    const placeholder = "https://via.placeholder.com/150?text=No+Image";
  const teams = [
    {
      
      name: "Rahim H.",
      role: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Lina S.",
      role: "Head of Operations",
      img: "https://images.unsplash.com/photo-1545996124-1f3d1c7f6f7e?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Marcus D.",
      role: "Lead Guide",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Amira K.",
      role: "Customer Success",
      img: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop",
    },
  ];
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold mb-6 text-indigo-400">
          Meet the Team
        </h3>
        <Link
          href="/teams"
          className="text-sm text-white-600 hover:underline"
          aria-label="View all team members"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teams.map((p,index) => (
          <Team key={index} p={p}/>
        ))}
      </div>
    </section>
  );
}
