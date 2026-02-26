export default function MechanicalEngineerPortfolio() {
  const projects = [
    {
      title: "FSAE Pneumatic Shifter System",
      category: "Automotive Engineering / Mechanical Design",
      summary:
        "Designed, modeled, assembled, and tested a complete FSAE-compliant pneumatic shifter system for reliable gear engagement using high-pressure air and MAC valves.",
      tools: ["SolidWorks", "Pneumatics", "MAC Valves", "Mechanical Assembly", "Testing"],
      result:
        "Achieved consistent shifting with low air consumption, multiple shifts per tank, and strong on-car performance validated through testing and calibration.",
      image: "https://placehold.co/800x500?text=FSAE+Pneumatic+Shifter",
      gallery: [
        "https://placehold.co/400x250?text=Shifter+CAD",
        "https://placehold.co/400x250?text=Assembly",
        "https://placehold.co/400x250?text=Testing"
      ],
      videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
      caseStudyUrl: "#",
      filesUrl: "#",
    },
    {
      title: "UR10 Welding Cobot Path Planning",
      category: "Robotics / Automation / Welding",
      summary:
        "Developed a weld path planning concept for a UR10 collaborative robot using sensor-assisted seam localization ideas and repeatable path generation for welding applications.",
      tools: ["UR10", "ROS2", "Python", "Sensors", "Welding Automation"],
      result:
        "Improved path repeatability and reduced setup guesswork for weld alignment while building a foundation for future real-time sensing upgrades.",
      image: "https://placehold.co/800x500?text=UR10+Welding+Cobot",
      gallery: [
        "https://placehold.co/400x250?text=UR10+Setup",
        "https://placehold.co/400x250?text=Weld+Path",
        "https://placehold.co/400x250?text=Cell+Layout"
      ],
      videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
      caseStudyUrl: "#",
      filesUrl: "#",
    },
    {
      title: "Impact Strength of Commercial PLA by Percent Infill",
      category: "Materials / Experimental Testing",
      summary:
        "Supervised a team of 4 students in the design of 7 specimens and Izod impact testing of 3D-printed PLA parts under ASTM D256-style procedures to evaluate infill effects on impact resistance.",
      tools: ["ASTM D256", "Izod Testing", "3D Printing", "PLA", "Data Analysis"],
      result:
        "Using a gyroid infill pattern, testing showed 60% infill delivered the best impact strength while 50% infill produced the weakest performance.",
      image: "https://placehold.co/800x500?text=PLA+Impact+Testing",
      gallery: [
        "https://placehold.co/400x250?text=Specimens",
        "https://placehold.co/400x250?text=Izod+Test",
        "https://placehold.co/400x250?text=Results+Chart"
      ],
      videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
      caseStudyUrl: "#",
      filesUrl: "#",
    },
  ];

  const skills = [
    "CAD (SolidWorks / Fusion 360 / FreeCAD)",
    "FEA (ANSYS / Simulation)",
    "MATLAB",
    "Python",
    "ROS2",
    "Manufacturing Processes",
    "Welding / Fabrication",
    "Technical Documentation",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-semibold tracking-tight">Your Name | Mechanical Engineer</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#projects" className="hover:text-slate-600">Projects</a>
            <a href="#skills" className="hover:text-slate-600">Skills</a>
            <a href="#resume" className="hover:text-slate-600">Resume</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="mb-3 inline-block rounded-full border border-slate-300 px-3 py-1 text-xs font-medium">
            Mechanical Engineering Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Designing practical systems with analysis, fabrication, and automation
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            I’m <span className="font-semibold">Your Name</span>, a mechanical engineer focused on design,
            robotics, manufacturing, and problem-solving. This portfolio highlights my projects in CAD,
            thermal analysis, structural design, and automation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-100"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <img
            src="https://placehold.co/700x700?text=Your+Headshot+or+CAD+Render"
            alt="Portfolio visual"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Replace this paragraph with your story: what kind of mechanical engineer you are, what industries interest
            you (manufacturing, energy, robotics, automotive, aerospace, construction, etc.), and what you enjoy
            building. Mention internships, school projects, certifications, and hands-on experience.
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            Tip: keep this practical and results-focused. Employers want to see how you solve problems, work with tools,
            and communicate your engineering decisions.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-slate-600">Add your best projects first (school, personal, internship, research).</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{project.category}</p>
                <h3 className="mt-2 text-lg font-semibold leading-6">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-slate-700">
                  <span className="font-medium">Result:</span> {project.result}
                </p>

                <div className="mt-4">
                  {project.gallery?.length ? (
                    <div className="grid grid-cols-3 gap-2">
                      {project.gallery.map((img, idx) => (
                        <img
                          key={`${project.title}-gallery-${idx}`}
                          src={img}
                          alt={`${project.title} gallery ${idx + 1}`}
                          className="h-16 w-full rounded-lg object-cover border border-slate-200"
                        />
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a href={project.caseStudyUrl || "#"} className="font-medium text-slate-900 underline underline-offset-4">Case Study</a>
                  <a href={project.filesUrl || "#"} className="font-medium text-slate-900 underline underline-offset-4">Files / Repo</a>
                  {project.videoUrl ? (
                    <a href={project.videoUrl} target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline underline-offset-4">
                      Watch Video Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Skills & Tools</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex md:items-center md:justify-between md:p-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Resume</h2>
            <p className="mt-2 text-slate-600">
              Upload your PDF resume and replace the button link below with your file path.
            </p>
          </div>
          <a
            href="/resume.pdf"
            className="mt-4 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:opacity-90 md:mt-0"
          >
            Download Resume (PDF)
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-8 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 text-slate-700">
            Replace with your real info. Keep this professional and easy to reach.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <a href="mailto:youremail@example.com" className="rounded-2xl border border-slate-200 p-4 hover:bg-slate-50">
              <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
              <p className="mt-1 font-medium">youremail@example.com</p>
            </a>
            <a href="https://www.linkedin.com/" className="rounded-2xl border border-slate-200 p-4 hover:bg-slate-50">
              <p className="text-xs uppercase tracking-wide text-slate-500">LinkedIn</p>
              <p className="mt-1 font-medium">linkedin.com/in/yourname</p>
            </a>
            <a href="https://github.com/" className="rounded-2xl border border-slate-200 p-4 hover:bg-slate-50">
              <p className="text-xs uppercase tracking-wide text-slate-500">GitHub</p>
              <p className="mt-1 font-medium">github.com/yourusername</p>
            </a>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Location</p>
              <p className="mt-1 font-medium">City, State (optional)</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Built for a mechanical engineering portfolio.</p>
        </div>
      </footer>
    </div>
  );
}
