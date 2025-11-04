import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI in Medical Field",
      subtitle: "Revolutionizing Healthcare Through Artificial Intelligence",
      content: [],
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Medical Imaging & Diagnostics",
      subtitle: "Enhanced Detection and Analysis",
      content: [
        "AI algorithms analyze X-rays, CT scans, and MRIs with 95%+ accuracy",
        "Early detection of cancer, tumors, and abnormalities",
        "Reduces radiologist workload by 30-40%",
        "Google's DeepMind detects 50+ eye diseases from retinal scans",
        "PathAI improves pathology diagnoses by analyzing tissue samples"
      ],
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Drug Discovery & Development",
      subtitle: "Accelerating Pharmaceutical Innovation",
      content: [
        "AI reduces drug development time from 10+ years to 2-3 years",
        "Identifies potential drug candidates from millions of compounds",
        "Predicts drug efficacy and side effects before clinical trials",
        "DeepMind's AlphaFold solved protein folding problem",
        "Cost reduction: $2.6B to $500M per new drug"
      ],
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Personalized Medicine",
      subtitle: "Tailored Treatment Plans",
      content: [
        "Analyzes genetic data to customize treatment protocols",
        "Predicts patient response to specific medications",
        "IBM Watson Oncology provides evidence-based treatment options",
        "Reduces adverse drug reactions by 30%",
        "Improves treatment success rates by 25-35%"
      ],
      background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Virtual Health Assistants",
      subtitle: "24/7 Patient Support",
      content: [
        "Chatbots provide instant medical information and triage",
        "Babylon Health's AI assesses symptoms with 80%+ accuracy",
        "Reduces unnecessary ER visits by 20%",
        "Mental health support through AI counseling apps",
        "Medication reminders and adherence monitoring"
      ],
      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Predictive Analytics",
      subtitle: "Preventing Disease Before It Strikes",
      content: [
        "Predicts patient deterioration 48 hours in advance",
        "Identifies high-risk patients for preventive care",
        "Reduces hospital readmissions by 25%",
        "Early warning systems for sepsis and heart attacks",
        "Population health management and epidemic forecasting"
      ],
      background: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "Robotic Surgery",
      subtitle: "Precision and Minimally Invasive Procedures",
      content: [
        "AI-assisted robots perform complex surgeries with sub-millimeter precision",
        "Da Vinci Surgical System used in 10M+ procedures",
        "Reduces surgical complications by 40%",
        "Faster recovery times and smaller incisions",
        "Remote surgery capabilities for underserved areas"
      ],
      background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "Clinical Decision Support",
      subtitle: "Evidence-Based Medical Guidance",
      content: [
        "Real-time clinical recommendations during patient care",
        "Reduces diagnostic errors by 85%",
        "Analyzes medical literature and patient data simultaneously",
        "Identifies drug interactions and contraindications",
        "Improves clinical workflow efficiency by 50%"
      ],
      background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "Challenges & Ethical Considerations",
      subtitle: "Addressing the Complexities",
      content: [
        "Data privacy and security concerns (HIPAA compliance)",
        "Algorithm bias and fairness in healthcare decisions",
        "Regulatory approval and clinical validation requirements",
        "Integration with existing healthcare infrastructure",
        "Physician training and acceptance of AI tools"
      ],
      background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      title: "The Future of AI in Medicine",
      subtitle: "What Lies Ahead",
      content: [
        "Global AI healthcare market: $188B by 2030",
        "Quantum computing for drug discovery and genomics",
        "AI-powered nanobots for targeted drug delivery",
        "Complete digital twins for personalized health simulation",
        "Universal healthcare access through AI-driven telemedicine"
      ],
      background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
      title: "Thank You",
      subtitle: "AI is transforming medicine—saving lives, reducing costs, and improving patient outcomes",
      content: [],
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = slides[currentSlide];

  return (
    <>
      <Head>
        <title>AI in Medical Field - Slideshow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{
        width: '100vw',
        height: '100vh',
        background: slide.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
        boxSizing: 'border-box',
        position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: 'white',
        transition: 'background 0.5s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-in'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            lineHeight: '1.2'
          }}>
            {slide.title}
          </h1>

          <h2 style={{
            fontSize: '2rem',
            fontWeight: '300',
            marginBottom: '50px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            opacity: 0.9
          }}>
            {slide.subtitle}
          </h2>

          {slide.content.length > 0 && (
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 auto',
              maxWidth: '900px',
              textAlign: 'left'
            }}>
              {slide.content.map((item, index) => (
                <li key={index} style={{
                  fontSize: '1.5rem',
                  marginBottom: '25px',
                  padding: '15px 30px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                }}>
                  • {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px',
          alignItems: 'center'
        }}>
          <button
            onClick={prevSlide}
            style={{
              padding: '15px 30px',
              fontSize: '1.2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid white',
              borderRadius: '50px',
              color: 'white',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            ← Previous
          </button>

          <div style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            padding: '10px 25px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50px',
            backdropFilter: 'blur(10px)'
          }}>
            {currentSlide + 1} / {slides.length}
          </div>

          <button
            onClick={nextSlide}
            style={{
              padding: '15px 30px',
              fontSize: '1.2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid white',
              borderRadius: '50px',
              color: 'white',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            Next →
          </button>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.9rem',
          opacity: 0.7
        }}>
          Use arrow keys or spacebar to navigate
        </div>

        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            overflow: hidden;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}
