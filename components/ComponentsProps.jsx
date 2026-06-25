import { fullCode } from "../lib/componentsProps";
import Card from "./Card";
import CodeBlock from "./CodeBlock";
import LessonNotes from "./LessonNotes";

const learner = {
  name: "React Learner",
  role: "Frontend Student",
  isOnline: true,
};

const skills = ["Components", "Props", "Reusable UI"];

function ProfileCard({ name, role, isOnline }) {
  return (
    <div className="rounded-[4px] border border-gray-200">
      <div className="border-b border-gray-200 px-4 py-2">
        <p className="text-base font-bold leading-5 text-[#111111]">{name}</p>
        <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">{role}</p>
      </div>

      <div className="px-4 py-2">
        <p className="text-base font-bold leading-5 text-[#111111]">
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}

function SkillBadge({ label }) {
  return (
    <span className="rounded-[4px] border border-gray-300 bg-gray-50 px-3 py-2 text-xs font-bold leading-4 text-[#111111]">
      {label}
    </span>
  );
}

export default function ComponentsProps() {
  return (
    <div className="flex justify-center">
      <Card>
        <div className="bg-[#f5f6f7] px-6 py-3">
          <p className="text-xs font-bold leading-4 text-[#3f5f9f]">Step 4</p>
          <h1 className="mt-1 text-base font-bold leading-5 text-[#111111]">
            Components & props
          </h1>
          <p className="mt-2 text-sm leading-[18px] text-[#8a8d91]">
            Components are reusable UI pieces. Props are data you pass into them.
          </p>
        </div>

        <LessonNotes
          notes={[
            {
              title: "What props do",
              body: "Props pass data from a parent component into a child component.",
            },
            {
              title: "Why it matters",
              body: "You can reuse the same component with different names, roles, or labels.",
            },
            {
              title: "Watch this",
              body: "ProfileCard and SkillBadge are small components powered by the values they receive.",
            },
          ]}
        />

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">ProfileCard component</p>
          <ProfileCard
            isOnline={learner.isOnline}
            name={learner.name}
            role={learner.role}
          />
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">SkillBadge components</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </div>

        <div className="px-6 py-3">
          <p className="text-base font-bold leading-5 text-[#111111]">What just happened</p>
          <p className="mt-1 text-sm leading-[18px] text-[#8a8d91]">
            ProfileCard gets name, role, and isOnline props. SkillBadge gets a label prop.
          </p>
        </div>

        <div className="px-6 py-3">
          <p className="mb-3 text-base font-bold leading-5 text-[#111111]">Code preview</p>
          <CodeBlock code={fullCode} />
        </div>
      </Card>
    </div>
  );
}
