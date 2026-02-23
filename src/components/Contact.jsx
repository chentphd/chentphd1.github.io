export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white text-center px-8">
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-blue-100 mb-8 text-lg">Open to data analytics roles and collaboration opportunities.</p>
      <div className="flex justify-center gap-6 text-lg">
        <a href="mailto:your@email.com" className="hover:underline">📧 Email</a>
        <a href="https://linkedin.com/in/yourprofile" className="hover:underline">💼 LinkedIn</a>
        <a href="https://github.com/yourusername" className="hover:underline">🐙 GitHub</a>
      </div>
    </section>
  );
}