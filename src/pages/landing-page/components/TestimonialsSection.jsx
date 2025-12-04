import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/ui/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState('coaches');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const coachTestimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Life Coach",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb6cf439-1763299224286.png",
    imageAlt: "Professional woman with brown hair in white blouse smiling warmly at camera in bright office setting",
    quote: "Finally, a platform that respects my expertise without taking half my earnings. The 12% commission is revolutionary compared to the 35% I was paying elsewhere.",
    rating: 5,
    metric: "300% income increase"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Business Coach",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b63cf058-1763294966331.png",
    imageAlt: "African American man in navy blue suit with confident smile standing in modern office with glass windows",
    quote: "Equibudx treats me as a partner, not a product. The equal support system means I can focus on my clients instead of fighting the platform.",
    rating: 5,
    metric: "50+ active clients"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Career Coach",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_126946a46-1763294962859.png",
    imageAlt: "Hispanic woman with long dark hair in professional gray blazer smiling confidently in corporate office environment",
    quote: "The transparency here is unmatched. I know exactly what I'm paying for, and the value I receive justifies every penny. My clients feel the same way.",
    rating: 5,
    metric: "4.9/5 client rating"
  }];


  const clientTestimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "Entrepreneur",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fafcb5e1-1763294038476.png",
    imageAlt: "Asian man in casual blue shirt with glasses smiling warmly in bright modern workspace with plants",
    quote: "I\'ve tried three coaching platforms before Equibudx. This is the first time I felt like the platform cared about my growth as much as my coach did.",
    rating: 5,
    transformation: "From idea to $100K revenue in 6 months",
    icon: "TrendingUp"
  },
  {
    id: 2,
    name: "Amanda Foster",
    role: "Marketing Manager",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f8f896f2-1763299689286.png",
    imageAlt: "Young woman with blonde hair in professional white shirt smiling brightly in contemporary office with natural lighting",
    quote: "The affordable pricing meant I could commit to longer-term coaching. That consistency transformed my career trajectory completely.",
    rating: 5,
    transformation: "Promoted twice in one year",
    icon: "Award"
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1623491278146-20646a93d849",
    imageAlt: "Caucasian man in black athletic wear with determined expression in modern gym with equipment in background",
    quote: "My coach and I built a genuine partnership. The platform\'s equal treatment philosophy created trust that accelerated my transformation.",
    rating: 5,
    transformation: "Lost 45 lbs, gained confidence",
    icon: "Heart"
  }];


  const activeTestimonials = activeTab === 'coaches' ? coachTestimonials : clientTestimonials;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeTestimonials?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTestimonials?.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + activeTestimonials?.length) % activeTestimonials?.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeTestimonials?.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Icon name="MessageSquare" size={20} color="var(--color-secondary)" />
            <span className="font-body text-sm font-semibold text-secondary">Real Stories</span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Growth Stories From Our
            <span className="block text-primary mt-2">Balanced Community</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from coaches who found fair treatment and clients who discovered authentic transformation
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setActiveTab('coaches');
              setCurrentIndex(0);
            }}
            className={`px-6 py-3 rounded-full font-body font-semibold transition-all duration-200 ${
            activeTab === 'coaches' ? 'bg-primary text-primary-foreground shadow-cta' : 'bg-card text-muted-foreground hover:bg-muted'}`
            }>

            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span>Coach Stories</span>
            </div>
          </button>
          <button
            onClick={() => {
              setActiveTab('clients');
              setCurrentIndex(0);
            }}
            className={`px-6 py-3 rounded-full font-body font-semibold transition-all duration-200 ${
            activeTab === 'clients' ? 'bg-secondary text-secondary-foreground shadow-cta' : 'bg-card text-muted-foreground hover:bg-muted'}`
            }>

            <div className="flex items-center gap-2">
              <Icon name="User" size={20} />
              <span>Client Stories</span>
            </div>
          </button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className={`bg-card rounded-2xl p-8 lg:p-12 shadow-card transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20"></div>
                  <Image
                    src={activeTestimonials?.[currentIndex]?.image}
                    alt={activeTestimonials?.[currentIndex]?.imageAlt}
                    className="relative w-full h-full rounded-full object-cover border-4 border-card shadow-cta" />

                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-cta">
                    <Icon name="Flower2" size={24} color="var(--color-accent-foreground)" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(activeTestimonials?.[currentIndex]?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={20} color="var(--color-accent)" className="fill-current" />
                  )}
                </div>

                <blockquote className="font-body text-lg text-foreground mb-6 leading-relaxed">
                  "{activeTestimonials?.[currentIndex]?.quote}"
                </blockquote>

                <div className="mb-4">
                  <p className="font-headline font-bold text-xl text-foreground">
                    {activeTestimonials?.[currentIndex]?.name}
                  </p>
                  <p className="font-body text-muted-foreground">
                    {activeTestimonials?.[currentIndex]?.role}
                  </p>
                </div>

                {activeTab === 'coaches' ?
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full">
                    <Icon name="TrendingUp" size={16} color="var(--color-success)" />
                    <span className="font-body text-sm font-semibold text-success">
                      {activeTestimonials?.[currentIndex]?.metric}
                    </span>
                  </div> :

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                    <Icon name={activeTestimonials?.[currentIndex]?.icon} size={16} color="var(--color-accent)" />
                    <span className="font-body text-sm font-semibold text-accent-foreground">
                      {activeTestimonials?.[currentIndex]?.transformation}
                    </span>
                  </div>
                }
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-card hover:bg-muted transition-colors duration-200 flex items-center justify-center shadow-card"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeft" size={24} color="var(--color-foreground)" />
            </button>

            <div className="flex gap-2">
              {activeTestimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-card hover:bg-muted transition-colors duration-200 flex items-center justify-center shadow-card"
              aria-label="Next testimonial">

              <Icon name="ChevronRight" size={24} color="var(--color-foreground)" />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;