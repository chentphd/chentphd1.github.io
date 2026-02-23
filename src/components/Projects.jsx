const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Built a logistic regression model to predict customer churn with 87% accuracy using Python and scikit-learn.",
    tags: ["Python", "Machine Learning", "Pandas"],
    link: "#"
  },
  {
    title: "COVID-19 Statistical Analysis",
    description: "Analyzed spread patterns and vaccination impact using R. Created interactive visualizations with ggplot2.",
    tags: ["R", "Statistics", "Data Viz"],
    link: "#"
  },
  {
    title: "Sales Dashboard",
    description: "Designed an interactive Tableau dashboard tracking KPIs for a retail dataset of 500K+ records.",
    tags: ["Tableau", "SQL", "Excel"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg text-gray-800 mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(tag => (
                <span key={tag} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <a href={p.link} className="text-blue-600 text-sm font-medium hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}