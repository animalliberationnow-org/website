import { useState } from "react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { HiUser, HiEnvelope, HiPhone, HiMapPin, HiAcademicCap, HiBriefcase, HiCheckCircle } from "react-icons/hi2";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const SKILLS_OPTIONS = [
  "Social media management",
  "Content writing",
  "Graphic design",
  "Video editing",
  "Photography",
  "Outreach & on-ground activism",
  "Event coordination",
  "Fundraising",
  "Community management",
  "Legal/Policy research",
  "Translation",
  "Other"
];

const SupportPage = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    status: "",
    college: "",
    course: "",
    company: "",
    role: "",
    industry: "",
    skills: [] as string[],
    consent: "yes",
    motivation: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => {
      const skills = prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills };
    });
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.mobile.trim()) {
        newErrors.mobile = "Mobile number is required";
      } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.mobile.trim())) {
        newErrors.mobile = "Invalid mobile number";
      }
      if (!formData.city.trim()) newErrors.city = "City/Town is required";
      if (!formData.status) newErrors.status = "Please select your current status";
    } else if (step === 2) {
      if (formData.status === "Student") {
        if (!formData.college.trim()) newErrors.college = "College/University name is required";
        if (!formData.course.trim()) newErrors.course = "Course details are required";
      } else if (formData.status === "Working Professional") {
        if (!formData.company.trim()) newErrors.company = "Company name is required";
        if (!formData.role.trim()) newErrors.role = "Designation/Role is required";
      }
    } else if (step === 3) {
      if (formData.skills.length === 0) newErrors.skills = "Please select at least one skill";
      if (!formData.motivation.trim()) newErrors.motivation = "Please tell us why you want to volunteer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      // Dynamic skipping of step 2 for status types that don't need academic/job details
      if (step === 1 && formData.status !== "Student" && formData.status !== "Working Professional") {
        setStep(3);
      } else {
        setStep(prev => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (step === 3 && formData.status !== "Student" && formData.status !== "Working Professional") {
      setStep(1);
    } else {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      // Mock saving application
      localStorage.setItem("aln_volunteer_application", JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString()
      }));
      setSubmitted(true);
    }
  };

  const totalSteps = formData.status === "Student" || formData.status === "Working Professional" ? 3 : 2;
  const currentProgressStep = step === 3 && totalSteps === 2 ? 2 : step;

  return (
    <>
      <Hero
        title="Join the activism!"
        subtitle="Whether you want to volunteer, support, or simply learn more about animal liberation, we have a place for you in our movement."
        backgroundImage="/images/heroes/support-articles-hero.jpg"
      />

      {/* Volunteer Form Section */}
      <Section id="volunteer-form">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#ffffff]/5 dark:bg-[#000000]/30 backdrop-blur-md border border-glass-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-black uppercase tracking-tighter text-text-main mb-2">
                    Volunteer Application
                  </h2>
                  <p className="text-text-muted text-sm">
                    Fill out the form below to apply. Our node coordinators will reach out shortly.
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mb-10">
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-text-muted mb-3">
                    <span>Step {currentProgressStep} of {totalSteps}</span>
                    <span>{Math.round((currentProgressStep / totalSteps) * 100)}% Complete</span>
                  </div>
                  <div className="w-full h-1.5 bg-text-main/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all duration-500 ease-out"
                      style={{ width: `${(currentProgressStep / totalSteps) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Step 1: Personal Details */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">Full Name</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-muted pointer-events-none">
                            <HiUser className="h-5 w-5" />
                          </span>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder=""
                            className={`form-input ${errors.name ? "border-accent ring-1 ring-accent/30" : ""}`}
                            style={{ paddingLeft: "3rem" }}
                          />
                        </div>
                        {errors.name && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="form-label">Email Address</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-muted pointer-events-none">
                            <HiEnvelope className="h-5 w-5" />
                          </span>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder=""
                            className={`form-input ${errors.email ? "border-accent ring-1 ring-accent/30" : ""}`}
                            style={{ paddingLeft: "3rem" }}
                          />
                        </div>
                        {errors.email && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">Mobile / WhatsApp Number</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-muted pointer-events-none">
                            <HiPhone className="h-5 w-5" />
                          </span>
                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder=""
                            className={`form-input ${errors.mobile ? "border-accent ring-1 ring-accent/30" : ""}`}
                            style={{ paddingLeft: "3rem" }}
                          />
                        </div>
                        {errors.mobile && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.mobile}</p>}
                      </div>

                      <div>
                        <label className="form-label">City / Town</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-muted pointer-events-none">
                            <HiMapPin className="h-5 w-5" />
                          </span>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder=""
                            className={`form-input ${errors.city ? "border-accent ring-1 ring-accent/30" : ""}`}
                            style={{ paddingLeft: "3rem" }}
                          />
                        </div>
                        {errors.city && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.city}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Current Status</label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className={`form-input ${errors.status ? "border-accent" : ""}`}
                      >
                        <option value="" disabled className="bg-primary text-text-main">Select Current Status</option>
                        <option value="Student" className="bg-primary text-text-main">Student</option>
                        <option value="Working Professional" className="bg-primary text-text-main">Working Professional</option>
                        <option value="Freelancer/Self-employed" className="bg-primary text-text-main">Freelancer / Self-employed</option>
                        <option value="Homemaker" className="bg-primary text-text-main">Homemaker</option>
                        <option value="Not working" className="bg-primary text-text-main">Not working</option>
                        <option value="Other" className="bg-primary text-text-main">Other</option>
                      </select>
                      {errors.status && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.status}</p>}
                    </div>
                  </div>
                )}

                {/* Step 2: Contextual Details (Students / Professionals) */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    {formData.status === "Student" ? (
                      <>
                        <div>
                          <label className="form-label">College / University Name</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-muted pointer-events-none">
                              <HiAcademicCap className="h-5 w-5" />
                            </span>
                            <input
                              type="text"
                              name="college"
                              value={formData.college}
                              onChange={handleInputChange}
                              placeholder=""
                              className={`form-input ${errors.college ? "border-accent" : ""}`}
                              style={{ paddingLeft: "3rem" }}
                            />
                          </div>
                          {errors.college && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.college}</p>}
                        </div>
                        <div>
                          <label className="form-label">Course & Specialization</label>
                          <input
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            placeholder=""
                            className={`form-input ${errors.course ? "border-accent" : ""}`}
                          />
                          {errors.course && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.course}</p>}
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="form-label">Company Name</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-muted pointer-events-none">
                              <HiBriefcase className="h-5 w-5" />
                            </span>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder=""
                              className={`form-input ${errors.company ? "border-accent" : ""}`}
                              style={{ paddingLeft: "3rem" }}
                            />
                          </div>
                          {errors.company && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.company}</p>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="form-label">Role / Designation</label>
                            <input
                              type="text"
                              name="role"
                              value={formData.role}
                              onChange={handleInputChange}
                              placeholder=""
                              className={`form-input ${errors.role ? "border-accent" : ""}`}
                            />
                            {errors.role && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.role}</p>}
                          </div>
                          <div>
                            <label className="form-label">Industry / Field</label>
                            <input
                              type="text"
                              name="industry"
                              value={formData.industry}
                              onChange={handleInputChange}
                              placeholder=""
                              className="form-input"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Step 3: Skills and Motivation */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <label className="form-label mb-3">Skills you can contribute</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {SKILLS_OPTIONS.map(skill => (
                          <div
                            key={skill}
                            onClick={() => handleSkillToggle(skill)}
                            className={`form-checkbox-label ${
                              formData.skills.includes(skill) ? "form-checkbox-checked" : ""
                            }`}
                          >
                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                              formData.skills.includes(skill)
                                ? "bg-accent border-accent text-white"
                                : "border-text-muted bg-transparent"
                            }`}>
                              {formData.skills.includes(skill) && <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>}
                            </div>
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                      {errors.skills && <p className="text-accent text-xs mt-2 font-bold uppercase tracking-wider">{errors.skills}</p>}
                    </div>

                    <div>
                      <label className="form-label">Why do you want to volunteer for Animal Liberation Now!?</label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder=""
                        className={`form-input resize-none py-3 normal-case font-normal ${errors.motivation ? "border-accent" : ""}`}
                      />
                      {errors.motivation && <p className="text-accent text-xs mt-1.5 font-bold uppercase tracking-wider">{errors.motivation}</p>}
                    </div>

                    <div>
                      <label className="form-label mb-2">WhatsApp & Email Updates Consent</label>
                      <div className="flex space-x-6 mt-1">
                        <label className="flex items-center space-x-2 cursor-pointer font-bold text-sm uppercase tracking-wider text-text-main select-none">
                          <input
                            type="radio"
                            name="consent"
                            value="yes"
                            checked={formData.consent === "yes"}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-accent"
                          />
                          <span>Yes, I consent</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer font-bold text-sm uppercase tracking-wider text-text-main select-none">
                          <input
                            type="radio"
                            name="consent"
                            value="no"
                            checked={formData.consent === "no"}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-accent"
                          />
                          <span>No, do not send</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-glass-border">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 rounded-2xl border border-glass-border hover:border-text-muted text-xs font-black uppercase tracking-[0.2em] text-text-main transition-all duration-300"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < 3 && (formData.status === "Student" || formData.status === "Working Professional" || step === 1) ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn btn-primary text-xs px-8 py-3.5 uppercase tracking-[0.2em]"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary text-xs px-8 py-3.5 uppercase tracking-[0.2em] shadow-glow"
                    >
                      Submit Application
                    </button>
                  )}
                </div>
              </form>
            ) : (
              // Success Screen
              <div className="relative z-10 text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <HiCheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-text-main mb-4">
                  Application Received!
                </h2>
                <p className="text-text-muted max-w-lg mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="text-text-main font-bold">{formData.name}</span>, for raising your voice for animal emancipation. Our node coordinators will review your details and contact you via WhatsApp or Email within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setFormData({
                      name: "",
                      email: "",
                      mobile: "",
                      city: "",
                      status: "",
                      college: "",
                      course: "",
                      company: "",
                      role: "",
                      industry: "",
                      skills: [],
                      consent: "yes",
                      motivation: "",
                    });
                    setStep(1);
                    setSubmitted(false);
                  }}
                  className="px-6 py-3 rounded-2xl border border-glass-border hover:border-accent hover:text-accent text-xs font-black uppercase tracking-[0.2em] text-text-main transition-all duration-300"
                >
                  Submit Another Form
                </button>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Social Sharing */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Spread the Word</h2>
          <p className="text-lg mb-8">
            Help amplify our message by sharing our content and mission with
            your network.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.facebook.com/animalliberationnowofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300"
            >
              <SiFacebook size={20} />
            </a>
            <a
              href="https://x.com/alnofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300"
            >
              <SiX size={20} />
            </a>
            <a
              href="https://www.instagram.com/animalliberationnow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300"
            >
              <SiInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300"
            >
              <SiYoutube size={20} />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SupportPage;
