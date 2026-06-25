export const fullCode = `

function ProfileCard({ name, role, isOnline }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

function SkillBadge({ label }) {
  return <span>{label}</span>;
}

export default function ComponentsProps() {
  const learner = {
    name: "React Learner",
    role: "Frontend Student",
    isOnline: true,
  };

  const skills = ["Components", "Props", "Reusable UI"];

  return (
    <div>
      <ProfileCard
        name={learner.name}
        role={learner.role}
        isOnline={learner.isOnline}
      />

      {skills.map((skill) => (
        <SkillBadge key={skill} label={skill} />
      ))}
    </div>
  );
}

`;
