const skills = [
  "Python", "R", "SQL", "Tableau", "Power BI",
  "Machine Learning", "Statistical Modeling", "Data Visualization",
  "Pandas", "NumPy", "Scikit-learn", "Excel"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Skills</h2>
      <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
        {skills.map(skill => (
          <span key={skill} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}